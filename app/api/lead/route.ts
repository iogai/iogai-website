import { NextResponse } from "next/server";
import { appendFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { z } from "zod";

export const runtime = "nodejs";

// Default destination is Igor's phone via the Verizon email-to-SMS gateway
// (owner confirmed 3 Sept 2026: (424) 421-7771, Verizon) — no SMS API/cost,
// just an email sent to a carrier address that arrives as a text.
const LEAD_EMAIL = process.env.LEAD_EMAIL || "4244217771@vtext.com";
const SMS_GATEWAY_DOMAINS = [
  "vtext.com", // Verizon
  "txt.att.net", // AT&T
  "tmomail.net", // T-Mobile
];
const isSmsGateway = SMS_GATEWAY_DOMAINS.some((d) => LEAD_EMAIL.toLowerCase().endsWith(`@${d}`));
const MAX_PHOTO = 8 * 1024 * 1024; // 8MB

const Lead = z.object({
  service: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  phone: z.string().min(5).max(40),
  email: z.string().email().max(200),
  address: z.string().max(200).optional(),
  company: z.string().optional(), // honeypot
});

export async function POST(req: Request) {
  const form = await req.formData().catch(() => null);
  if (!form) return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 });

  const parsed = Lead.safeParse({
    service: form.get("service") ?? undefined,
    message: form.get("message") ?? undefined,
    firstName: form.get("firstName") ?? "",
    lastName: form.get("lastName") ?? "",
    phone: form.get("phone") ?? "",
    email: form.get("email") ?? "",
    address: form.get("address") ?? undefined,
    company: form.get("company") ?? undefined,
  });
  if (!parsed.success) return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  const lead = parsed.data;

  // Honeypot → silently accept, drop the bot.
  if (lead.company) return NextResponse.json({ ok: true });

  // Optional photo
  let photoName: string | null = null;
  let photoBuf: Buffer | null = null;
  const photo = form.get("photo");
  if (photo && typeof photo === "object" && "arrayBuffer" in photo) {
    const file = photo as File;
    if (file.size > 0 && file.size <= MAX_PHOTO && file.type.startsWith("image/")) {
      photoBuf = Buffer.from(await file.arrayBuffer());
      const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
      photoName = `${Date.now()}-${safe}`;
      try {
        const dir = path.join(process.cwd(), "uploads");
        await mkdir(dir, { recursive: true });
        await writeFile(path.join(dir, photoName), photoBuf);
      } catch (e) {
        console.error("photo save failed", e);
      }
    }
  }

  const record = { ...lead, photo: photoName, at: new Date().toISOString() };

  // Persist (v1: JSONL — swap for a DB when volume warrants)
  try {
    await appendFile(path.join(process.cwd(), "leads.jsonl"), JSON.stringify(record) + "\n", "utf8");
  } catch (e) {
    console.error("lead persist failed", e);
  }

  // Carrier SMS gateways drop long messages and attachments silently — keep
  // it to the essentials when texting, full detail when it's a real inbox.
  const summary = isSmsGateway
    ? `IOGAI lead: ${lead.firstName} ${lead.lastName}, ${lead.phone}, ${lead.service ?? "service"}${lead.address ? `, ${lead.address}` : ""}`
    : `New IOGAI booking\nService: ${lead.service ?? "-"}\n${lead.firstName} ${lead.lastName}\n${lead.phone} · ${lead.email}\n${lead.address ? `Address: ${lead.address}\n` : ""}${lead.message ?? ""}`;

  // Email the lead to the business inbox / SMS gateway (nodemailer) — needs
  // GMAIL creds, else skip.
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (GMAIL_USER && GMAIL_APP_PASSWORD) {
    try {
      const { default: nodemailer } = await import("nodemailer");
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      });
      await transport.sendMail({
        from: `IOGAI Website <${GMAIL_USER}>`,
        to: LEAD_EMAIL,
        replyTo: lead.email,
        subject: isSmsGateway ? "" : `New booking — ${lead.firstName} ${lead.lastName} (${lead.service ?? "service"})`,
        text: summary,
        attachments: !isSmsGateway && photoBuf && photoName ? [{ filename: photoName, content: photoBuf }] : [],
      });
    } catch (e) {
      console.error("email send failed", e);
    }
  }

  if (!GMAIL_USER) {
    console.info("lead received (notification disabled — set GMAIL_USER + GMAIL_APP_PASSWORD):", record);
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

// Leads go to the team inbox (dispatcher works them) with full detail + photo,
// and a short copy goes to Igor's phone via the Verizon email-to-SMS gateway
// (owner confirmed 3 Sept 2026: (424) 421-7771, Verizon) — no SMS API/cost.
// A lead counts as delivered if either destination accepts it.
const TEAM_LEAD_EMAIL = process.env.TEAM_LEAD_EMAIL || "support@iogai.com";
const LEAD_EMAIL = process.env.LEAD_EMAIL || "4244217771@vtext.com";
const SMS_GATEWAY_DOMAINS = [
  "vtext.com", // Verizon
  "txt.att.net", // AT&T
  "tmomail.net", // T-Mobile
];
const isSmsAddress = (addr: string) =>
  SMS_GATEWAY_DOMAINS.some((d) => addr.toLowerCase().endsWith(`@${d}`));
const RECIPIENTS = Array.from(
  new Set([TEAM_LEAD_EMAIL, LEAD_EMAIL].map((a) => a.trim()).filter(Boolean)),
);
const MAX_PHOTO = 4 * 1024 * 1024; // Leave room for multipart fields below the platform request limit.

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
    if (file.size > MAX_PHOTO || (file.size > 0 && !file.type.startsWith("image/"))) {
      return NextResponse.json({ ok: false, error: "invalid photo" }, { status: 422 });
    }
    if (file.size > 0) {
      photoBuf = Buffer.from(await file.arrayBuffer());
      const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
      photoName = `${Date.now()}-${safe}`;

    }
  }

  // Carrier SMS gateways drop long messages and attachments silently — keep
  // it to the essentials when texting, full detail when it's a real inbox.
  const smsText = `IOGAI lead: ${lead.firstName} ${lead.lastName}, ${lead.phone}, ${lead.service ?? "service"}${lead.address ? `, ${lead.address}` : ""}`;
  const fullText = `New IOGAI booking\nService: ${lead.service ?? "-"}\n${lead.firstName} ${lead.lastName}\n${lead.phone} · ${lead.email}\n${lead.address ? `Address: ${lead.address}\n` : ""}${lead.message ?? ""}`;

  // Email the lead to each destination (nodemailer) — needs GMAIL creds, else skip.
  const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
  if (GMAIL_USER && GMAIL_APP_PASSWORD) {
    try {
      const { default: nodemailer } = await import("nodemailer");
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
      });
      const results = await Promise.allSettled(
        RECIPIENTS.map((to) => {
          const sms = isSmsAddress(to);
          return transport.sendMail({
            from: `IOGAI Website <${GMAIL_USER}>`,
            to,
            replyTo: lead.email,
            subject: sms ? "" : `New booking — ${lead.firstName} ${lead.lastName} (${lead.service ?? "service"})`,
            text: sms ? smsText : fullText,
            attachments: !sms && photoBuf && photoName ? [{ filename: photoName, content: photoBuf }] : [],
          });
        }),
      );
      results.forEach((r) => {
        if (r.status === "rejected") console.error("Lead notification failed for one destination");
      });
      if (results.some((r) => r.status === "fulfilled" && r.value.accepted.length > 0)) {
        return NextResponse.json({ ok: true });
      }
    } catch {
      console.error("Lead notification failed");
    }
  }

  // Never claim receipt when no delivery service accepted the request.
  return NextResponse.json({ ok: false, error: "delivery unavailable" }, { status: 503 });
}

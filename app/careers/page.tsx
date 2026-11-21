import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Careers — Refrigeration & Appliance Technicians | IOGAI",
  description:
    "IOGAI is hiring refrigeration and appliance repair technicians in Long Beach and Orange County. W-2, Mon–Fri, hourly pay plus commission on every job.",
  alternates: { canonical: "https://iogai.com/careers" },
  robots: { index: true, follow: true },
};

const levels = [
  { name: "Junior", req: "0–1 year, ready to learn", pay: "$25/hr + 12%" },
  { name: "Technician", req: "EPA 608 certified", pay: "$30/hr + 17%" },
  { name: "Senior", req: "EPA Universal, sealed systems", pay: "$36/hr + 20%" },
];

const smsHref = "sms:+14244217771?body=" + encodeURIComponent("Hi, I want to apply for the technician job. My level and experience: ");

export default function CareersPage() {
  return (
    <LegalShell title="We're hiring technicians" updated="November 21, 2026">
      <p>
        IOGAI repairs refrigerators, freezers and commercial refrigeration across Long Beach and
        Orange County. The owner is a technician with 13 years in the field. We bring the jobs; you do
        great work and get paid for it.
      </p>

      <h2>Pay</h2>
      <p>Hourly pay plus a percentage of every job you complete.</p>
      <ul>
        {levels.map((l) => (
          <li key={l.name}>
            <strong>{l.name}</strong> ({l.req}): <strong>{l.pay}</strong>
          </li>
        ))}
      </ul>
      <p>Strong technicians earn $70,000–$125,000+ per year.</p>

      <h2>What you get</h2>
      <ul>
        <li>W-2 employment, Monday–Friday, no weekend shifts</li>
        <li>Steady dispatched calls — no chasing customers</li>
        <li>A clear path from Junior to Senior: learn faster, earn more</li>
        <li>English or Russian spoken on the team</li>
      </ul>

      <h2>What we need</h2>
      <ul>
        <li>Valid California driver&rsquo;s license</li>
        <li>Honest work, clean diagnostics, respect for the customer&rsquo;s home or kitchen</li>
        <li>EPA 608 certification for Technician and Senior levels</li>
      </ul>

      <h2>Apply</h2>
      <p>
        Text <a href={smsHref}>{site.phoneDisplay}</a> with your level and experience, or email{" "}
        <a href={site.emailHref}>{site.email}</a> with &ldquo;Technician&rdquo; in the subject.
      </p>
      <p>IOGAI is an equal opportunity employer. All qualified applicants are welcome.</p>
    </LegalShell>
  );
}

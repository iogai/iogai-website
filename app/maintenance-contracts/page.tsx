import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, maintenance } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Restaurant Refrigeration Maintenance Contracts | IOGAI",
  description:
    "Quarterly refrigeration maintenance contracts for restaurant chains and independent restaurants in Orange County and LA. Scheduled service, no surprise downtime.",
  alternates: { canonical: "/maintenance-contracts" },
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Restaurant Refrigeration Maintenance Contract",
  description:
    "Quarterly refrigeration and freezer maintenance, twice-yearly ice maker service, annual filter replacement, condenser coil cleaning, drain system service, and electrical diagnostics for restaurant chains and independent restaurants.",
  provider: { "@id": "https://iogai.com/#business" },
  areaServed: ["Huntington Beach", "Orange County", "Los Angeles"],
  audience: { "@type": "BusinessAudience", audienceType: "Restaurants and restaurant chains" },
};

export default function MaintenanceContractsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link href="/">
            <Logo />
          </Link>
          <a href={site.phoneHref} className="text-sm font-medium text-ink transition-colors hover:text-accent">
            {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Eyebrow>{maintenance.label}</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">{maintenance.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">{maintenance.intro}</p>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">The schedule</h2>
          <ul className="mt-5 space-y-5">
            {maintenance.schedule.map((s) => (
              <li key={s.k} className="rounded-xl border border-hairline p-5">
                <div className="font-semibold text-ink">{s.k}</div>
                <div className="mt-1 text-sm text-ink-2">{s.v}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">Every visit includes</h2>
          <ul className="mt-5 space-y-3">
            {maintenance.includes.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <CTA href={site.phoneHref} variant="solid">
            Call {site.phoneDisplay}
          </CTA>
          <CTA href="/#contact" variant="ghost">
            {maintenance.cta}
          </CTA>
        </div>

        <div className="mt-10">
          <Link href="/service-areas" className="text-sm text-ink-2 transition-colors hover:text-accent">
            ← All service areas
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

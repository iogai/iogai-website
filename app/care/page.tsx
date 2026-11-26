import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, rating } from "@/lib/copy";

// IOGAI Care membership. Prices approved by the owner on Nov 26, 2026.
export const metadata: Metadata = {
  title: "IOGAI Care — Refrigerator & Restaurant Refrigeration Membership | IOGAI",
  description:
    "IOGAI Care: $189/year for Sub-Zero and built-in refrigerators at home, from $149/month per location for restaurants. Scheduled cleaning, priority service, 15% off repairs. Orange County & LA.",
  alternates: { canonical: "/care" },
};

const plans = [
  {
    name: "IOGAI Care Home",
    price: "$189",
    per: "per year",
    for: "Sub-Zero, Thermador, Viking, Miele, Monogram and other built-in refrigerators, freezers and wine storage.",
    items: [
      "Two visits a year: condenser cleaning and a full performance check",
      "Door seals, fans, ice maker and temperatures checked every visit",
      "Priority scheduling — members are booked first",
      "15% off repairs",
      "Written report after every visit",
    ],
    cta: "Join IOGAI Care Home",
    sms: "Hi, I want IOGAI Care Home ($189/year). My refrigerator brand and city: ",
  },
  {
    name: "IOGAI Care Restaurant",
    price: "from $149",
    per: "per month, per location",
    for: "Ice machines, walk-in coolers and freezers, reach-ins, prep tables and bar coolers.",
    items: [
      "Full refrigeration service visit every 3 months",
      "Ice machine cleaning and sanitizing every 6 months",
      "Condenser coil cleaning, drain lines and electrical checks",
      "Priority emergency dispatch for members",
      "15% off repairs",
      "Service log for every unit — ready for your health inspection",
    ],
    cta: "Get a Restaurant quote",
    sms: "Hi, I want IOGAI Care Restaurant. Restaurant name, city and equipment: ",
  },
];

const faq = [
  {
    q: "Why a membership instead of calling when it breaks?",
    a: "Most refrigeration failures start with dirty coils, worn seals and clogged drains. Regular service catches them early, so the equipment lasts longer and breaks down less — and when something does fail, members go first.",
  },
  {
    q: "What does 'from $149 per month' depend on?",
    a: "The number and type of units at your location. We look at your equipment, confirm the monthly price in writing and you approve it before we start.",
  },
  {
    q: "Can I cancel?",
    a: "Yes. The terms are written in your agreement before you sign. No hidden fees.",
  },
];

export default function CarePage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IOGAI Care membership",
    provider: { "@id": "https://iogai.com/#business" },
    areaServed: ["Orange County", "Los Angeles County"],
    offers: [
      { "@type": "Offer", name: "IOGAI Care Home", price: "189", priceCurrency: "USD" },
      { "@type": "Offer", name: "IOGAI Care Restaurant", price: "149", priceCurrency: "USD" },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link href="/">
            <Logo />
          </Link>
          <a href={site.phoneHref} className="text-sm font-medium text-ink transition-colors hover:text-accent">
            {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <Eyebrow>Clear confidence in tomorrow</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">IOGAI Care</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
          Your refrigeration, looked after before it fails. Scheduled service by refrigeration specialists,
          priority when you need us, and 15% off every repair. Rated {rating.value} stars across{" "}
          {rating.count} Google reviews.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <section key={p.name} className="flex flex-col rounded-2xl border border-hairline p-7">
              <h2 className="font-display text-xl font-semibold text-ink">{p.name}</h2>
              <p className="mt-2 text-sm text-ink-2">{p.for}</p>
              <p className="mt-6">
                <span className="display text-4xl text-ink">{p.price}</span>{" "}
                <span className="text-sm text-ink-2">{p.per}</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <CTA href={`sms:+14244217771?body=${encodeURIComponent(p.sms)}`} variant="solid">
                  {p.cta}
                </CTA>
                <CTA href={site.phoneHref} variant="ghost">
                  Call {site.phoneDisplay}
                </CTA>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-ink">The IOGAI Promise</h2>
          <p className="mt-4 leading-relaxed text-ink-2">
            You approve the price before any work. If a repair we made fails within the warranty (30 days
            labor, 90 days parts), we come back and make it right at no labor cost. One standard: perfect.
          </p>
        </section>

        <section className="mt-12 max-w-3xl">
          <h2 className="font-display text-xl font-semibold text-ink">Questions</h2>
          <dl className="mt-6 space-y-6">
            {faq.map((f) => (
              <div key={f.q}>
                <dt className="font-medium text-ink">{f.q}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-12 flex flex-wrap gap-6 text-sm">
          <Link href="/maintenance-contracts" className="text-ink-2 hover:text-accent">
            Restaurant maintenance schedule →
          </Link>
          <Link href="/repair" className="text-ink-2 hover:text-accent">
            Repair problems we fix →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

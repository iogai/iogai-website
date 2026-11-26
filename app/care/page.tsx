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
    "IOGAI Care for homes ($119 per maintenance visit), property managers (no sign-up fee) and restaurants (from $149/month per location). Scheduled cleaning, priority service, 15% off repairs. Orange County & LA.",
  alternates: { canonical: "/care" },
};

const plans = [
  {
    name: "IOGAI Care Home",
    price: "$119",
    per: "per maintenance visit",
    for: "For homeowners with Sub-Zero, Thermador, Viking, Miele, Monogram and other built-in refrigerators, freezers and wine storage.",
    items: [
      "Condenser cleaning and a full performance check",
      "Door seals, fans, ice maker and temperatures checked",
      "We remind you twice a year — you book when it suits you",
      "Priority scheduling for repairs",
      "15% off repairs",
      "No annual fee, no prepayment",
    ],
    cta: "Book a maintenance visit",
    sms: "Hi, I want an IOGAI Care Home maintenance visit ($119). My refrigerator brand and city: ",
    note: "Pay per visit. Repairs are quoted in writing and approved before any work.",
  },
  {
    name: "IOGAI Care Property",
    price: "$100 / $135",
    per: "service call per home / per business unit",
    for: "For property managers, HOAs, landlords and vacation-rental owners across Orange County and Long Beach.",
    items: [
      "Priority dispatch for your tenants' calls",
      "We schedule directly with the tenant and keep you informed",
      "Photo report and written estimate to the manager before any repair",
      "One monthly invoice for all your properties",
      "Turnover appliance check: $119 per unit",
      "15% off repairs, no sign-up fee",
    ],
    cta: "Set up my properties",
    sms: "Hi, I manage properties and want IOGAI Care Property. Company, number of units and cities: ",
    note: "No contract term. You approve every repair price before work.",
  },
  {
    name: "IOGAI Care Restaurant",
    price: "from $149",
    per: "per month, per location",
    for: "For restaurants, bars, cafés and markets: ice machines, walk-in coolers and freezers, reach-ins, prep tables and bar coolers.",
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
    note: "Month to month. Cancel with 30 days' written notice, no cancellation fee.",
  },
];

const faq = [
  {
    q: "Who is IOGAI Care for?",
    a: "Homeowners with built-in and high-end refrigeration, property managers, HOAs, landlords and vacation-rental owners, and restaurants, bars, cafés and markets. One standard for all: price approved before any work.",
  },
  {
    q: "What is IOGAI Care?",
    a: "A maintenance membership: scheduled service by refrigeration specialists, priority when something fails, and 15% off repairs. It keeps equipment cleaner, running longer and failing less.",
  },
  {
    q: "How much does it cost?",
    a: "IOGAI Care Home: $119 per maintenance visit, no annual fee. IOGAI Care Property: no sign-up fee — $100 service call per home, $135 per business unit, turnover checks $119 per unit. IOGAI Care Restaurant: from $149 per month per location. Every repair is quoted in writing and approved before work.",
  },
  {
    q: "What decides the restaurant price?",
    a: "The number and type of units at your location. We look at your equipment, send the monthly price and the visit schedule in writing, and you approve them before anything starts.",
  },
  {
    q: "Is this insurance or a warranty?",
    a: "No. IOGAI Care covers scheduled maintenance, priority scheduling and 15% off repairs. Repairs are diagnosed and quoted in writing, and you approve the price before any work. Every repair carries our written warranty: 30 days labor, 90 days parts.",
  },
  {
    q: "What does priority mean?",
    a: "Members are scheduled ahead of non-members when a slot opens, and restaurant members get priority emergency dispatch. We always confirm the actual arrival window by phone or text.",
  },
  {
    q: "Does it renew automatically? How do I cancel?",
    a: "Home and Property programs have no contract term and nothing renews — you pay per visit. Restaurant plans run month to month: cancel any time with 30 days' written notice by text, email or phone, with no cancellation fee, and we confirm in writing.",
  },
  {
    q: "Will I get records for the health inspector?",
    a: "Yes. Restaurant members get a service log for every unit after each visit, ready to show an inspector.",
  },
  {
    q: "Which equipment and brands?",
    a: "Built-in and high-end refrigerators, freezers and wine storage (Sub-Zero, Thermador, Viking, Miele, Monogram), and commercial ice machines, walk-ins, reach-ins, prep tables and bar coolers (Hoshizaki, Manitowoc, Scotsman, True, Traulsen and more). IOGAI is independent and not affiliated with any manufacturer.",
  },
  {
    q: "Where do you serve?",
    a: "Orange County, Long Beach and the South Bay.",
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
      { "@type": "Offer", name: "IOGAI Care Home maintenance visit", price: "119", priceCurrency: "USD" },
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

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
              <p className="mt-6 text-xs leading-relaxed text-ink-3">{p.note}</p>
              <div className="mt-4 flex flex-wrap gap-3">
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

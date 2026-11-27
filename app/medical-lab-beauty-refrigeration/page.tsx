import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, rating } from "@/lib/copy";

// Plug-in equipment only (BHGS registration scope). No X-ray / radiation
// equipment (needs CDPH registration). No walk-in cold rooms until C-38.

export const metadata: Metadata = {
  title: "Medical, Lab & Beauty Clinic Refrigeration Repair | IOGAI",
  description:
    "Repair and maintenance of pharmacy, vaccine, lab, ultra-low, blood bank and mortuary refrigerators, and cooling systems in aesthetic clinic devices. Orange County and LA.",
  alternates: { canonical: "/medical-lab-beauty-refrigeration" },
};

const groups = [
  {
    k: "Medical & pharmacy",
    v: "Pharmacy and vaccine refrigerators and freezers, medication refrigerators, blood bank and specimen refrigerators.",
  },
  {
    k: "Laboratory",
    v: "Lab refrigerators and freezers, ultra-low −80\u00a0°C freezers, chromatography and reagent refrigerators.",
  },
  {
    k: "Mortuary",
    v: "Plug-in mortuary and body refrigerators for funeral homes, coroners and hospitals.",
  },
  {
    k: "Beauty & aesthetic clinics",
    v: "Chillers and cooling systems in laser and skin-care devices, and clinic refrigerators for products and medications.",
  },
];

const how = [
  "Diagnosis on site, with the price approved in writing before any repair.",
  "Temperature checked after the repair and recorded on your invoice for your logs.",
  "Photos of the work and a written warranty: 30 days labor, 90 days parts.",
  "Equipment still under a manufacturer's warranty: we tell you first, so you keep it.",
];

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Medical, Lab & Beauty Clinic Refrigeration Repair",
  serviceType: "Medical and laboratory refrigeration repair",
  provider: { "@id": "https://iogai.com/#business" },
  areaServed: ["Huntington Beach", "Orange County", "Los Angeles County"],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Clinics, pharmacies, laboratories, funeral homes and aesthetic clinics",
  },
};

export default function MedicalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
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
        <Eyebrow>Medical · Lab · Beauty</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">
          When the cold protects medicine, it cannot fail.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">
          Vaccines, samples and products are only as safe as the refrigerator holding them. IOGAI repairs and
          maintains plug-in medical, laboratory and clinic refrigeration of any complexity across Orange County
          and Los Angeles. Rated {rating.value} across {rating.count} Google reviews.
        </p>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">What we service</h2>
          <ul className="mt-5 space-y-5">
            {groups.map((g) => (
              <li key={g.k} className="rounded-xl border border-hairline p-5">
                <div className="font-semibold text-ink">{g.k}</div>
                <div className="mt-1 text-sm text-ink-2">{g.v}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">How we work</h2>
          <ul className="mt-5 space-y-3">
            {how.map((i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-3">
            Plug-in equipment only. We do not service X-ray or other radiation-emitting equipment. Service call: $135
            for businesses, applied toward the approved repair. Regular service available through{" "}
            <Link href="/care" className="underline underline-offset-4 hover:text-accent">
              IOGAI Care
            </Link>
            .
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <CTA href={site.phoneHref} variant="solid">
            Call {site.phoneDisplay}
          </CTA>
          <CTA href="/#contact" variant="ghost">
            Request service
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

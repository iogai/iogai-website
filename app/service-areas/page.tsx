import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { site, services } from "@/lib/copy";
import { locations, type Region } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Service Areas | IOGAI Refrigeration & HVAC Repair",
  description:
    "IOGAI serves Orange County and the South Bay / SE Los Angeles County area for refrigeration, HVAC, and specialty repair. Find your city.",
  alternates: { canonical: "/service-areas" },
};

const REGIONS = Array.from(new Set(locations.map((l) => l.region))) as Region[];

export default function ServiceAreasPage() {
  return (
    <>
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

      <main id="main" className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <h1 className="display text-[clamp(2rem,5vw,3.25rem)] text-ink">Service Areas</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-2">
          IOGAI is based in Huntington Beach and repairs refrigeration, HVAC, and specialty
          equipment across Orange County and the South Bay / SE Los Angeles County area. Pick a
          service, then your city.
        </p>

        {REGIONS.map((region) => (
          <section key={region} className="mt-14">
            <h2 className="font-display text-xl font-semibold text-ink">{region}</h2>
            {services.items.map((svc) => (
              <div key={svc.slug} className="mt-5">
                <h3 className="text-sm font-medium uppercase tracking-wide text-ink-3">{svc.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2.5">
                  {locations
                    .filter((l) => l.region === region)
                    .map((l) => (
                      <li key={l.slug}>
                        <Link
                          href={`/service-areas/${svc.slug}/${l.slug}`}
                          className="inline-flex items-center rounded-md border border-hairline px-3.5 py-1.5 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                        >
                          {l.city}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}

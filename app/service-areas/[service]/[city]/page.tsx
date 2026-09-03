import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, services, faq, rating } from "@/lib/copy";
import { locations, findLocation, type Region } from "@/lib/locations";

const REGION_BLURB: Record<Region, string> = {
  "Coastal Orange County": "the beach cities along the Pacific Coast Highway corridor",
  "North Orange County": "north Orange County, along the 91/57 corridor",
  "Central Orange County": "central Orange County, near the 5/22 interchange",
  "South Orange County": "south Orange County, along the 5/241 corridor",
  "South Bay / SE Los Angeles County":
    "the South Bay and southeast Los Angeles County, along the 405/605 corridor",
};

function serviceParams() {
  return services.items.map((s) => ({ service: s.slug }));
}

export function generateStaticParams() {
  return serviceParams().flatMap((s) =>
    locations.map((l) => ({ service: s.service, city: l.slug }))
  );
}

function getData(service: string, city: string) {
  const svc = services.items.find((s) => s.slug === service);
  const loc = findLocation(city);
  if (!svc || !loc) return null;
  return { svc, loc };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}): Promise<Metadata> {
  const { service, city } = await params;
  const data = getData(service, city);
  if (!data) return {};
  const { svc, loc } = data;
  const title = `${svc.name} in ${loc.city}, CA | IOGAI`;
  const description = `${svc.body} Serving ${loc.city} and ${REGION_BLURB[loc.region]}. Same-day dispatch, 5.0 stars on Google. Call ${site.phoneDisplay}.`;
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${svc.slug}/${loc.slug}` },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ service: string; city: string }>;
}) {
  const { service, city } = await params;
  const data = getData(service, city);
  if (!data) notFound();
  const { svc, loc } = data;

  const otherServices = services.items.filter((s) => s.slug !== svc.slug);
  const nearbyCities = locations
    .filter((l) => l.region === loc.region && l.slug !== loc.slug)
    .slice(0, 8);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${svc.name} in ${loc.city}, CA`,
    description: svc.body,
    provider: { "@id": "https://iogai.com/#business" },
    areaServed: { "@type": "City", name: loc.city, containedInPlace: "Orange County / Los Angeles County, CA" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
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

      <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Eyebrow>{loc.region}</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">
          {svc.name} in {loc.city}, CA
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">{svc.body}</p>
        <p className="mt-4 leading-relaxed text-ink-2">
          IOGAI is based at {site.address} and serves {loc.city} as part of {REGION_BLURB[loc.region]}.
          Same-day dispatch where available, {site.hours.toLowerCase()}, with a {rating.value}-star
          average across {rating.count} Google reviews.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <CTA href={site.phoneHref} variant="solid">
            Call {site.phoneDisplay}
          </CTA>
          <CTA href="/#contact" variant="ghost">
            Book online
          </CTA>
        </div>

        <div className="mt-16 border-t border-hairline pt-10">
          <h2 className="font-display text-xl font-semibold text-ink">FAQ</h2>
          <dl className="mt-6 space-y-6">
            {faq.items.map((f) => (
              <div key={f.q}>
                <dt className="font-medium text-ink">{f.q}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 border-t border-hairline pt-10">
          <h2 className="font-display text-xl font-semibold text-ink">
            Other services in {loc.city}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/service-areas/${s.slug}/${loc.slug}`}
                  className="inline-flex items-center rounded-md border border-hairline px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {nearbyCities.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">
              {svc.name} near {loc.city}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {nearbyCities.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/service-areas/${svc.slug}/${l.slug}`}
                    className="inline-flex items-center rounded-md border border-hairline px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

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

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, rating } from "@/lib/copy";
import { brands, findBrand } from "@/lib/brands";

export function generateStaticParams() {
  return brands.map((b) => ({ brand: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand: slug } = await params;
  const brand = findBrand(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} Commercial Refrigeration Repair | IOGAI`,
    description: `IOGAI repairs ${brand.name} ${brand.blurb} Same-day dispatch across Orange County and LA. Call ${site.phoneDisplay}.`,
    alternates: { canonical: `/brands/${brand.slug}` },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand: slug } = await params;
  const brand = findBrand(slug);
  if (!brand) notFound();

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.name} Commercial Refrigeration Repair`,
    description: `Repair for ${brand.name} ${brand.blurb}`,
    provider: { "@id": "https://iogai.com/#business" },
    areaServed: ["Huntington Beach", "Orange County", "Los Angeles"],
  };

  const otherBrands = brands.filter((b) => b.slug !== brand.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <header className="border-b border-hairline bg-paper">
        <div className="mx-auto flex h-20 max-w-3xl items-center justify-between px-5 sm:px-8">
          <Link href="/">
            <Logo />
          </Link>
          <a href={site.phoneHref} className="text-sm font-medium text-ink transition-colors hover:text-accent">
            {site.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <Eyebrow>Brand Repair</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">
          {brand.name} Commercial Refrigeration Repair
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">
          IOGAI repairs {brand.name} {brand.blurb} Serving restaurants, commercial kitchens, and
          businesses across Orange County and LA with same-day dispatch where available and a{" "}
          {rating.value}-star average across {rating.count} Google reviews.
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
          <h2 className="font-display text-xl font-semibold text-ink">Other brands we service</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {otherBrands.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/brands/${b.slug}`}
                  className="inline-flex items-center rounded-md border border-hairline px-4 py-2 text-sm text-ink-2 transition-colors hover:border-accent hover:text-ink"
                >
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
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

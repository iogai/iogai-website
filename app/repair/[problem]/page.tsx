import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site, rating, services } from "@/lib/copy";
import { brands } from "@/lib/brands";
import { focusLocations } from "@/lib/locations";
import { problems, findProblem } from "@/lib/problems";

export function generateStaticParams() {
  return problems.map((p) => ({ problem: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ problem: string }>;
}): Promise<Metadata> {
  const { problem: slug } = await params;
  const p = findProblem(slug);
  if (!p) return {};
  return {
    title: `${p.title}? Repair in Orange County & LA | IOGAI`,
    description: `${p.summary} ${p.kind === "commercial" ? "$135" : "$100"} service call, price approved before work. Call ${site.phoneDisplay}.`,
    alternates: { canonical: `/repair/${p.slug}` },
  };
}

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ problem: string }>;
}) {
  const { problem: slug } = await params;
  const p = findProblem(slug);
  if (!p) notFound();

  const svc = services.items.find((s) => s.slug === p.service);
  const related = brands.filter((b) => p.brands.includes(b.slug));
  const otherProblems = problems
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.kind === p.kind) - Number(a.kind === p.kind))
    .slice(0, 6);
  const cities = focusLocations.slice(0, 12);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${p.title} — repair`,
      description: p.summary,
      provider: { "@id": "https://iogai.com/#business" },
      areaServed: ["Orange County", "Los Angeles County"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What causes this problem: ${p.title.toLowerCase()}?`,
          acceptedAnswer: { "@type": "Answer", text: `Common causes: ${p.causes.join("; ")}.` },
        },
        {
          "@type": "Question",
          name: "What can I check before calling?",
          acceptedAnswer: { "@type": "Answer", text: p.checks.join(" ") },
        },
        {
          "@type": "Question",
          name: "How much does the visit cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The service call is ${p.kind === "commercial" ? "$135 for businesses" : "$100 for homes"} and is applied toward the approved repair. The repair price is agreed in writing before any work begins.`,
          },
        },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
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
        <Eyebrow>{p.kind === "commercial" ? "Commercial Repair" : "Home Appliance Repair"}</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">{p.title}?</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">{p.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href={site.phoneHref} variant="solid">
            Call {site.phoneDisplay}
          </CTA>
          <CTA href="/#contact" variant="ghost">
            Book online
          </CTA>
        </div>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold text-ink">Most common causes</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-ink-2">
            {p.causes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">What you can safely check first</h2>
          <ul className="mt-5 list-disc space-y-2 pl-5 leading-relaxed text-ink-2">
            {p.checks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mt-5 rounded-md border border-hairline p-4 leading-relaxed text-ink">{p.urgent}</p>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">How IOGAI fixes it</h2>
          <p className="mt-4 leading-relaxed text-ink-2">
            A refrigeration specialist diagnoses the root cause on site, explains it in plain words and
            gives you the repair price before any work. {p.kind === "commercial" ? "$135" : "$100"} service call, applied to the approved repair.
            30-day labor / 90-day parts warranty. Rated {rating.value} stars across {rating.count} Google
            reviews.
          </p>
          {svc && (
            <p className="mt-4 leading-relaxed text-ink-2">
              Part of our{" "}
              <Link href="/service-areas" className="underline underline-offset-4 hover:text-accent">
                {svc.name}
              </Link>{" "}
              service.
            </p>
          )}
        </section>

        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display text-xl font-semibold text-ink">Brands we repair for this problem</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {related.map((b) => (
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
            <p className="mt-4 text-xs leading-relaxed text-ink-3">
              Brand names are trademarks of their owners. IOGAI is an independent repair service and is not
              affiliated with or authorized by any manufacturer.
            </p>
          </section>
        )}

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold text-ink">Cities we serve</h2>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-2">
            {cities.map((l) => (
              <li key={l.slug}>
                <Link href={`/service-areas/${p.service}/${l.slug}`} className="hover:text-accent">
                  {l.city}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-hairline pt-10">
          <h2 className="font-display text-xl font-semibold text-ink">Other repair problems</h2>
          <ul className="mt-5 space-y-2">
            {otherProblems.map((x) => (
              <li key={x.slug}>
                <Link href={`/repair/${x.slug}`} className="text-ink-2 transition-colors hover:text-accent">
                  {x.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/repair" className="text-sm text-ink-2 transition-colors hover:text-accent">
              ← All repair problems
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

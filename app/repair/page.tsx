import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/ui/CTA";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/lib/copy";
import { problems } from "@/lib/problems";

export const metadata: Metadata = {
  title: "Refrigeration & Appliance Problems We Fix | IOGAI",
  description: `Ice machine not making ice, walk-in not cooling, refrigerator warm or leaking, oven not heating — causes, safe checks and fast repair across Orange County and LA. Call ${site.phoneDisplay}.`,
  alternates: { canonical: "/repair" },
};

export default function RepairIndex() {
  const groups = [
    { title: "Restaurants & businesses", items: problems.filter((p) => p.kind === "commercial") },
    { title: "Homes & luxury kitchens", items: problems.filter((p) => p.kind === "residential") },
  ];
  return (
    <>
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
        <Eyebrow>Repair Problems</Eyebrow>
        <h1 className="display mt-5 text-[clamp(2rem,5vw,3.25rem)] text-ink">What is wrong with your equipment?</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-2">
          Pick the problem to see the usual causes, what you can safely check yourself, and how we fix it.
          Service call $100 for homes, $135 for businesses, price approved before any work.
        </p>
        {groups.map((g) => (
          <section key={g.title} className="mt-12">
            <h2 className="font-display text-xl font-semibold text-ink">{g.title}</h2>
            <ul className="mt-5 space-y-3">
              {g.items.map((p) => (
                <li key={p.slug}>
                  <Link href={`/repair/${p.slug}`} className="font-medium text-ink transition-colors hover:text-accent">
                    {p.title}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-ink-2">{p.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
        <div className="mt-12 flex flex-wrap gap-3">
          <CTA href={site.phoneHref} variant="solid">
            Call {site.phoneDisplay}
          </CTA>
          <CTA href="/#contact" variant="ghost">
            Book online
          </CTA>
        </div>
      </main>
      <Footer />
    </>
  );
}

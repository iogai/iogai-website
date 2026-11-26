import Link from "next/link";
import { problems } from "@/lib/problems";

// Homepage links into the /repair symptom pages: gives customers a fast path
// to their exact problem and gives Google a referring page for each one.
export function CommonProblems() {
  return (
    <section aria-labelledby="problems-h" className="border-t border-hairline bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 id="problems-h" className="display text-[clamp(1.75rem,4vw,2.5rem)] text-ink">
          What is wrong with your equipment?
        </h2>
        <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <li key={p.slug}>
              <Link href={`/repair/${p.slug}`} className="text-ink-2 transition-colors hover:text-accent">
                {p.title} →
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/repair" className="mt-8 inline-block text-sm font-medium text-ink hover:text-accent">
          All repair problems
        </Link>
      </div>
    </section>
  );
}

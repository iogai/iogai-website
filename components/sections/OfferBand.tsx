import Link from "next/link";
import { offer, site } from "@/lib/copy";

// High-conversion offer strip directly under the hero.
export function OfferBand() {
  return (
    <div className="bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-x-6 gap-y-3 px-5 py-3.5 text-center sm:flex-row sm:px-8">
        <span className="inline-flex flex-wrap items-center justify-center gap-2.5 text-sm">
          <span className="rounded-sm bg-accent px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-ink">
            {offer.badge}
          </span>
          <span className="font-medium text-white/85">{offer.text}</span>
        </span>
        <Link
          href={site.phoneHref}
          className="inline-flex h-9 shrink-0 items-center gap-1 rounded-md bg-accent px-5 text-sm font-semibold text-ink transition-transform duration-200 ease-xdr hover:-translate-y-0.5 hover:bg-accent-strong hover:text-paper active:scale-[0.97] motion-reduce:transform-none"
        >
          {offer.cta}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

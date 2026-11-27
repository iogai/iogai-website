import Image from "next/image";
import { site, rating } from "@/lib/copy";

// Real presence: the real owner, the real map listing, the state registration
// anyone can verify, and the live Google rating. Nothing staged.
const MAPS = "https://maps.google.com/maps?cid=4798157204614235950";

export function Presence() {
  const facts = [
    { k: `${rating.value} ★`, v: `${rating.count} Google reviews`, href: MAPS },
    { k: "No. 50829", v: "State registered · verify it", href: site.licenseHref },
    { k: "Mon–Fri", v: "8 AM – 6 PM, closed on public holidays" },
    { k: site.phoneDisplay, v: "One number. Igor's company answers.", href: site.phoneHref },
  ];
  return (
    <section id="presence" aria-labelledby="presence-h" className="bg-mist py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">A real company, near you</p>
          <h2 id="presence-h" className="display mt-4 text-[clamp(1.75rem,4vw,2.75rem)] text-ink">
            Owner-led. Registered. On the map.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-2">
            IOGAI is Igor Ogai&apos;s company: 13 years in refrigeration, one standard on every job. Based in Huntington
            Beach, serving Orange County, Long Beach and the South Bay.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            {facts.map((f) => {
              const inner = (
                <>
                  <dt className="font-display text-lg font-semibold text-ink">{f.k}</dt>
                  <dd className="mt-1 text-sm text-ink-2">{f.v}</dd>
                </>
              );
              return f.href ? (
                <a
                  key={f.k}
                  href={f.href}
                  target={f.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="rounded-xl border border-hairline bg-paper p-4 transition-colors hover:border-accent"
                >
                  {inner}
                </a>
              ) : (
                <div key={f.k} className="rounded-xl border border-hairline bg-paper p-4">
                  {inner}
                </div>
              );
            })}
          </dl>
        </div>
        <div className="grid gap-4 sm:grid-cols-[200px_1fr] lg:grid-cols-1 xl:grid-cols-[200px_1fr]">
          <Image
            src="/media/real/igor-ogai-founder.jpg"
            alt="Igor Ogai, founder of IOGAI, next to a repaired refrigeration unit"
            width={400}
            height={400}
            className="aspect-square w-full rounded-xl object-cover"
          />
          <iframe
            title="IOGAI on Google Maps"
            src="https://maps.google.com/maps?cid=4798157204614235950&output=embed"
            className="h-64 w-full rounded-xl border-0 sm:h-full sm:min-h-[200px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

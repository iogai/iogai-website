import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { testimonials } from "@/lib/copy";

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-night text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <Reveal>
            <span className="label [&::before]:bg-accent-soft !text-white/60">
              {testimonials.label}
            </span>
            <h2 className="display mt-5 text-[clamp(2.25rem,5vw,4rem)] text-paper">
              {testimonials.title}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-md text-base leading-relaxed text-white/60 md:justify-self-end">
              {testimonials.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.quote} delay={i * 0.08}>
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Parallax strength={10}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-xdr group-hover:scale-[1.03]"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <blockquote className="text-[15px] leading-relaxed text-white">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-1.5 text-accent-soft" aria-hidden>
                    {"★★★★★".split("").map((s, k) => (
                      <span key={k} className="text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/20 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-soft">Igor Ogai · IOGAI</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Your home. Your business. Our care.</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75">
            Get to know us through customer reviews and our profiles. When you are ready, tell us what needs fixing.
          </p>
          <nav aria-label="IOGAI reviews and business profiles" className="mt-6 flex flex-wrap gap-3">
            <a href="https://maps.google.com/maps?cid=4798157204614235950" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Google Maps &amp; reviews ↗</a>
            <a href="https://www.yelp.com/biz/iogai-refrigeration-huntington-beach" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Our Yelp profile ↗</a>
            <a href="https://www.thumbtack.com/ca/huntington-beach/appliance-repair/iogai-appliance-refrigeration-repair-service/service/499058102966788108" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Our Thumbtack profile ↗</a>
          </nav>
          <a href="/#contact" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-accent-soft px-6 py-3 text-sm font-semibold text-night hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Request service</a>
          <p className="mt-3 text-sm text-white/65">Choose online booking or call our team. Service visits are confirmed before dispatch.</p>
        </div>
      </div>
    </section>
  );
}

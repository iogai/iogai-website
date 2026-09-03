import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
      </div>
    </section>
  );
}

import Image from "next/image";
import { CTA } from "@/components/ui/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { Parallax } from "@/components/ui/Parallax";
import { closing } from "@/lib/copy";

export function ClosingBand() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative flex min-h-[440px] flex-col justify-center overflow-hidden rounded-3xl px-6 py-16 sm:px-14 sm:py-24">
          <Parallax strength={12}>
            <Image
              src="/media/real/svc-commercial.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="relative max-w-xl">
            <Reveal>
              <span className="label !text-white/80 [&::before]:bg-accent-soft">
                {closing.eyebrow}
              </span>
              <h2 className="display mt-5 text-[clamp(2.5rem,6vw,4.5rem)] text-white">
                {closing.title[0]}
                <br />
                {closing.title[1]}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                {closing.sub}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CTA href="#contact" variant="solid" className="h-14 px-8 text-base">
                  {closing.ctaPrimary}
                </CTA>
                <CTA href="#contact" variant="light" className="h-14 px-8 text-base">
                  {closing.ctaSecondary}
                </CTA>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

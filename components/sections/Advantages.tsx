import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CountUp } from "@/components/ui/CountUp";
import { advantages } from "@/lib/copy";

export function Advantages() {
  return (
    <section id="advantages" className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        {/* Header row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>{advantages.label}</Eyebrow>
          </Reveal>
          <Reveal className="max-w-xl" delay={0.05}>
            <h2 className="display flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
              {advantages.title}
              <span className="ml-1 inline-flex items-center gap-3">
                <Image
                  src="/media/real/igor-ogai-founder.jpg"
                  alt="Igor Ogai, founder of IOGAI"
                  width={48}
                  height={48}
                  className="h-11 w-11 rounded-full border-2 border-mist object-cover"
                />
                <span className="text-sm font-medium text-ink-2">Igor Ogai, Founder</span>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Big stat rows */}
        <div className="mt-16 border-t border-hairline">
          {advantages.stats.map((s, i) => (
            <Reveal
              key={s.caption}
              delay={i * 0.06}
              className="grid grid-cols-1 items-center gap-4 border-b border-hairline py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
            >
              <div className="font-display text-[clamp(3.5rem,10vw,7rem)] font-bold leading-none tracking-tight text-accent">
                <CountUp value={s.value} unit={s.unit} />
              </div>
              <p className="max-w-sm text-base text-ink-2 md:justify-self-end md:text-right">
                {s.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

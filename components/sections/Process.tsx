"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { process } from "@/lib/copy";

export function Process() {
  const [active, setActive] = useState(1);

  return (
    <section id="process" className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-lg">
            <Eyebrow>{process.label}</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.75rem)] text-ink">
              {process.title}
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="max-w-md">
            <p className="text-base leading-relaxed text-ink-2">{process.intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={step.no}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-current={isActive}
                className={`flex min-h-[300px] flex-col justify-between rounded-2xl border p-6 text-left transition-all duration-500 ease-xdr lg:min-h-[380px] ${
                  isActive
                    ? "border-accent bg-accent text-paper"
                    : "border-hairline bg-paper text-ink hover:border-ink-3"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-medium tracking-wider ${
                      isActive ? "text-white/70" : "text-ink-3"
                    }`}
                  >
                    {step.no}
                  </span>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-sm ${
                      isActive ? "bg-white/20 text-paper" : "bg-mist text-ink-3"
                    }`}
                    aria-hidden
                  >
                    {isActive ? "→" : ""}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{step.name}</h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      isActive ? "text-white/85" : "text-ink-2"
                    }`}
                  >
                    {step.body}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

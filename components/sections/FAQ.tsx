"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/lib/copy";
import { easeXdr } from "@/lib/motion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-night text-paper">
      <div className="mx-auto max-w-7xl px-5 pb-28 sm:px-8 sm:pb-36">
        <div className="rule !bg-white/10" />
        <div className="grid grid-cols-1 gap-10 pt-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
          <Reveal>
            <span className="label [&::before]:bg-accent-soft !text-white/60">{faq.label}</span>
            <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.75rem)] text-paper">
              {faq.title}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-white/60">{faq.intro}</p>
          </Reveal>

          <div>
            {faq.items.map((item, i) => {
              const isOpen = i === open;
              return (
                <div key={item.q} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span className="w-8 shrink-0 text-sm text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-lg font-semibold text-paper sm:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-lg transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-accent bg-accent" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: easeXdr }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-7 pl-14 text-[15px] leading-relaxed text-white/65">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

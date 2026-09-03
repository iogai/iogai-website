"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { services } from "@/lib/copy";
import { easeXdr } from "@/lib/motion";

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16">
        {/* Left: sticky image that swaps with the active service */}
        <div className="order-2 lg:order-1">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeXdr }}
                  className="absolute inset-0"
                >
                  <Image
                    src={services.items[active].image}
                    alt={services.items[active].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right: heading + capability list */}
        <div className="order-1 flex flex-col lg:order-2">
          <Reveal>
            <Eyebrow>{services.label}</Eyebrow>
            <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.75rem)] text-ink">
              {services.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-2">
              {services.intro}
            </p>
          </Reveal>

          <ul className="mt-12">
            {services.items.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.no}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    className={`group w-full border-t border-hairline py-6 text-left transition-colors ${
                      isActive ? "border-l-2 border-l-accent pl-5" : "pl-0"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex items-baseline gap-3">
                        <span className="text-xs font-medium text-ink-3">{item.no}</span>
                        <span
                          className={`font-display text-xl font-semibold sm:text-2xl ${
                            isActive ? "text-ink" : "text-ink-2 group-hover:text-ink"
                          }`}
                        >
                          {item.name}
                        </span>
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isActive ? "bg-accent text-paper" : "border border-hairline text-ink-3"
                        }`}
                        aria-hidden
                      >
                        →
                      </span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: easeXdr }}
                          className="overflow-hidden text-base text-ink-2"
                        >
                          <span className="block pt-3 pr-12">{item.body}</span>
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              );
            })}
            <li className="border-t border-hairline" />
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { guarantees, brands } from "@/lib/copy";

// One distinct icon per guarantee - the four used to share a single
// checkmark, which made them illegible at a glance. Order matches
// guarantees.items in lib/copy.ts: swift response, certified team,
// warranty, emergency service.
const ICONS = [
  // Clock - swift response
  <path key="clock" d="M12 7v5l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  // Badge/certificate - certified team
  <path key="badge" d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM8.5 13.5 7 21l5-2 5 2-1.5-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  // Shield - service warranty
  <path key="shield" d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  // Alert triangle - emergency service
  <path key="alert" d="M12 9v4m0 4h.01M10.3 4.3 2.6 18a1.8 1.8 0 0 0 1.6 2.7h15.6a1.8 1.8 0 0 0 1.6-2.7L13.7 4.3a1.8 1.8 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
];

export function Guarantees() {
  return (
    <section id="promise" className="bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>{guarantees.label}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.25rem)] text-ink">
            {guarantees.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-2">{guarantees.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.items.map((g, i) => (
            <Reveal key={g.k} delay={i * 0.06}>
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-accent">
                  {ICONS[i]}
                </svg>
              </motion.div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{g.k}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{g.v}</p>
            </Reveal>
          ))}
        </div>

        {/* Brands strip */}
        <Reveal className="mt-20 border-t border-hairline pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-ink-3">{brands.label}</div>
              <p className="mt-2 max-w-sm text-sm text-ink-2">{brands.note}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {brands.names.map((n) => (
                <span key={n} className="font-display text-lg font-semibold text-ink-3">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

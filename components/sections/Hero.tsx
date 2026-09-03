"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { CTA } from "@/components/ui/CTA";
import { Magnetic } from "@/components/ui/Magnetic";
import { hero, rating } from "@/lib/copy";
import { easeXdr, useScrollProgress } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Move a soft light with the cursor — set CSS vars, no re-render.
  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--gy", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  // Real scroll-linked parallax: as the hero scrolls out of view, the photo
  // drifts up slower than the page (classic parallax depth) and the text
  // fades/sinks — both driven directly by scroll progress, not a timed animation.
  const scrollYProgress = useScrollProgress(ref, "exit");
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="group relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Real IOGAI refrigeration photo, parallaxed against scroll */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[130%] w-full">
        <Image
          src="/media/real/svc-refrigerator.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 mix-blend-screen transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden"
        style={{
          background:
            "radial-gradient(360px circle at var(--gx,50%) var(--gy,40%), rgba(120,180,255,0.22), transparent 60%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeXdr, delay: 0.1 }}
          className="label !text-white/80 [&::before]:bg-accent-soft"
        >
          {hero.eyebrow}
        </motion.p>

        {/* Masked line-by-line reveal */}
        <h1 className="display mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] text-white">
          {hero.title.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-[0.05em]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: easeXdr, delay: 0.18 + i * 0.09 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeXdr, delay: 0.36 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeXdr, delay: 0.44 }}
          className="mt-6 flex items-center gap-2.5"
        >
          <span aria-hidden className="text-[#f5b301] tracking-[0.1em]">★★★★★</span>
          <span className="text-sm text-white/80">
            <span className="font-semibold text-white">{rating.value}</span>/5 · {rating.count} reviews ·{" "}
            {rating.source}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeXdr, delay: 0.54 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <CTA href="#contact" variant="solid" className="h-14 px-8 text-base">
              {hero.ctaPrimary}
            </CTA>
          </Magnetic>
          <Magnetic>
            <CTA href="#services" variant="light" className="h-14 px-8 text-base">
              {hero.ctaSecondary}
            </CTA>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll cue - reinforces "scroll to see more" on a page that now visibly reacts to scroll */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-9 w-5 rounded-full border border-white/40 p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}

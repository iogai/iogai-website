"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { walkthrough } from "@/lib/walkthrough";
import { useScrollProgress } from "@/lib/motion";

const COUNT = walkthrough.stages.length;

// One stage - image + text - fades in/out over its own slice of the track's
// scroll progress. A dedicated component per stage keeps each useTransform
// call at a stable position in React's hook order (safe under the rules of
// hooks), rather than calling hooks inside the parent's .map().
function Stage({
  stage,
  index,
  progress,
}: {
  stage: (typeof walkthrough.stages)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const step = 1 / COUNT;
  const start = index * step;
  const end = start + step;
  // Wide crossfade - two images visibly dissolving into each other over a
  // real chunk of scroll distance, not a snap-cut at the edge.
  const overlap = step * 0.6;

  const opacity = useTransform(
    progress,
    [Math.max(0, start - overlap), start + overlap * 0.15, end - overlap * 0.15, Math.min(1, end + overlap)],
    [0, 1, 1, 0]
  );
  // Continuous Ken Burns zoom across the ENTIRE stage, not just its edges -
  // this is what reads as "alive" while scrolling instead of a hard switch
  // held static in the middle. One slow, steady drift from 1.0 to 1.14.
  const scale = useTransform(
    progress,
    [Math.max(0, start - overlap), Math.min(1, end + overlap)],
    [1, 1.14]
  );
  const textY = useTransform(progress, [start, start + overlap], [24, 0]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src={stage.image}
          alt={stage.title}
          fill
          sizes="100vw"
          priority={index === 0}
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
      <motion.div
        style={{ y: textY }}
        className="absolute inset-x-0 bottom-0 mx-auto max-w-3xl px-5 pb-20 text-center sm:px-8 sm:pb-28"
      >
        {stage.eyebrow ? (
          <span className="label !text-white/70 justify-center [&::before]:bg-accent-soft">
            {stage.eyebrow}
          </span>
        ) : null}
        <h3 className="display mt-4 text-[clamp(1.5rem,4.5vw,3rem)] text-white">{stage.title}</h3>
        {stage.body ? (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
            {stage.body}
          </p>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

// Progress dots on the right edge - a quiet "you are here" for a section
// with no scrollbar feedback of its own on mobile. One Dot component per
// item so each useTransform call stays at a stable hook position.
function Dot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const step = 1 / COUNT;
  const opacity = useTransform(progress, (p) => (p >= index * step && p < (index + 1) * step ? 1 : 0.35));
  return <motion.span style={{ opacity }} className="h-1.5 w-1.5 rounded-full bg-white" />;
}

function Dots({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2.5 sm:right-6 sm:flex">
      {walkthrough.stages.map((_, i) => (
        <Dot key={i} index={i} progress={progress} />
      ))}
    </div>
  );
}

export function ScrollWalk() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress(ref);

  return (
    // Track height = one viewport per stage. Scrolling through this whole
    // block is what drives the crossfade below - real scroll, not a timer.
    <div ref={ref} id={walkthrough.id} className="relative" style={{ height: `${COUNT * 100}svh` }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-night">
        {walkthrough.stages.map((stage, i) => (
          <Stage key={stage.image} stage={stage} index={i} progress={scrollYProgress} />
        ))}
        <Dots progress={scrollYProgress} />
      </div>
    </div>
  );
}

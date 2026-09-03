"use client";

import { useRef, type ReactNode } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "@/lib/motion";

// Wraps a background image (or any absolutely-positioned fill element) and
// drifts it against the page's own scroll — real parallax depth, not a
// scroll-triggered one-shot animation. `strength` is how far it travels in %.
export function Parallax({ children, strength = 18 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useScrollProgress(ref, "visibility");
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute -inset-y-[20%] inset-x-0">
        {children}
      </motion.div>
    </div>
  );
}

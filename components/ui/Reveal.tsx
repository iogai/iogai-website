"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal, viewportOnce } from "@/lib/motion";

// Scroll-reveal wrapper. Transform + opacity only; respects reduced-motion
// automatically via framer-motion's MotionConfig-less default (the browser's
// prefers-reduced-motion is honored by framer when useReducedMotion is set).
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

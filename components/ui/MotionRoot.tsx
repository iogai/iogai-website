"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { easeXdr } from "@/lib/motion";

// reducedMotion="user" makes framer-motion drop transform/layout animations
// for visitors who ask for it, while keeping gentle opacity. One place, whole app.
export function MotionRoot({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: easeXdr }}>
      {children}
    </MotionConfig>
  );
}

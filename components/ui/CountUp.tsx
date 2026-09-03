"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

// Counts up a formatted number (handles commas + decimals) when scrolled into
// view. Reduced-motion / SSR → renders the final value immediately.
export function CountUp({ value, unit }: { value: string; unit?: string }) {
  const target = parseFloat(value.replace(/,/g, ""));
  const decimals = value.includes(".") ? value.split(".")[1].length : 0;
  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduce ? fmt(target) : fmt(0)));

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(fmt(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, target]);

  return (
    <span ref={ref}>
      {display}
      {unit ? <span className="text-ink-3">{unit}</span> : null}
    </span>
  );
}

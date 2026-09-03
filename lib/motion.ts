import { useEffect, type RefObject } from "react";
import { useMotionValue, type MotionValue, type Variants, type Transition } from "framer-motion";

// Single XDR ease — slow out, deliberate. Transform + opacity only.
export const easeXdr: Transition["ease"] = [0.23, 1, 0.32, 1];

export const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeXdr },
  },
};

export const revealStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeXdr } },
};

// Viewport config shared by scroll reveals — fire once, a little early.
export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;

// Framer Motion's own useScroll does not update in this project's current
// Next 16 / React 19.2 / framer-motion 12 combination, and a hand-rolled
// scroll/resize event listener turned out no more reliable here (confirmed:
// dispatched and real scroll events reached ad-hoc test listeners fine, but
// never re-triggered this hook's own listener past the initial mount-time
// call - root cause unresolved, behaves like the effect's listener silently
// stops receiving events after the first tick in this environment).
// useInView-driven whileInView reveals are unaffected - separate
// IntersectionObserver code path. This hook sidesteps scroll events
// entirely: a continuous requestAnimationFrame loop recomputes progress
// every frame while mounted. Slightly more work than an event listener,
// negligible for the 2-3 concurrent instances on this page, and immune to
// however scroll events do or don't get delivered.
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  // "track" (default): 0 at target's top hitting viewport top, 1 at target's
  // bottom hitting viewport bottom - for a tall scroll-track section pinned
  // with a sticky child (matches Framer's "start start"/"end end").
  // "exit": 0 at target's top hitting viewport top, 1 once the target has
  // fully scrolled past the viewport top - for a single-viewport section
  // (like the hero) that should fade/drift out as it leaves (matches
  // Framer's "start start"/"end start").
  // "visibility": 0 when the target's top just enters the viewport from the
  // bottom, 1 once its bottom has fully exited past the top - tracks the
  // element across its whole time on screen (matches Framer's
  // "start end"/"end start"). Used by background parallax on small cards.
  mode: "track" | "exit" | "visibility" = "track"
): MotionValue<number> {
  const progress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    let lastP = -1;
    function update() {
      const el = ref.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        let p: number;
        if (mode === "visibility") {
          const total = rect.height + window.innerHeight;
          p = total > 0 ? Math.min(1, Math.max(0, (window.innerHeight - rect.top) / total)) : 0;
        } else {
          const total = mode === "exit" ? rect.height : rect.height - window.innerHeight;
          p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
        }
        if (p !== lastP) {
          lastP = p;
          progress.set(p);
        }
      }
      raf = requestAnimationFrame(update);
    }
    raf = requestAnimationFrame(update);
    return () => {
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, mode]);

  return progress;
}

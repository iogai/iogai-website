"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "@/lib/motion";
import { services } from "@/lib/copy";

// Four beats matching the video's own 0-3s / 3-6s / 6-9s / 9-12s structure.
// The video is process/macro footage (tool, interior, compressor, resolved),
// not shot per-service - so the real service list rides on top of it here
// instead of living in a separate section, one name+line per beat.
const BEATS = services.items.map((s, i) => ({ at: i * 0.25, title: s.name, body: s.body }));

const DURATION = 12;

function BeatText({ index, progress }: { index: number; progress: ReturnType<typeof useScrollProgress> }) {
  const start = BEATS[index].at;
  const end = index < BEATS.length - 1 ? BEATS[index + 1].at : 1;
  const fade = 0.06;
  const opacity = useTransform(
    progress,
    [Math.max(0, start), Math.min(1, start + fade), Math.max(0, end - fade), end],
    [0, 1, 1, 0]
  );
  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-x-0 bottom-16 mx-auto max-w-2xl px-5 text-center sm:px-8"
    >
      <span className="label !text-white/70 justify-center [&::before]:bg-accent-soft">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="display mt-3 text-[clamp(1.5rem,4.5vw,2.75rem)] font-semibold text-white">
        {BEATS[index].title}
      </h3>
      <p className="mx-auto mt-3 max-w-lg text-sm text-white/75 sm:text-base">{BEATS[index].body}</p>
    </motion.div>
  );
}

export function ScrollVideo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const progress = useScrollProgress(trackRef);

  // A <video> that only ever has its currentTime set, and is never played,
  // paints nothing in several real browsers (Safari in particular) - a seek
  // alone doesn't force the first frame to decode and composite. Kick it
  // with a real play() -> immediate pause() once metadata is ready, THEN
  // start scrubbing currentTime from scroll progress every frame.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    let cancelled = false;
    async function prime() {
      try {
        await v!.play();
        v!.pause();
      } catch {
        // Autoplay can be blocked before any user gesture - harmless here,
        // the browser still decodes the frame at the seeked currentTime.
      }
      if (!cancelled) setReady(true);
    }
    if (v.readyState >= 1) prime();
    else v.addEventListener("loadedmetadata", prime, { once: true });
    return () => {
      cancelled = true;
      v.removeEventListener("loadedmetadata", prime);
    };
  }, []);

  // Scrub the video's currentTime directly from scroll progress instead of
  // letting it play on its own - the scroll position IS the timeline.
  useEffect(() => {
    let raf = 0;
    function tick() {
      const v = videoRef.current;
      if (v && v.readyState >= 1) {
        const t = progress.get() * DURATION;
        // Avoid fighting the decoder with sub-frame seeks every tick.
        if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={trackRef} id="top" className="relative bg-night" style={{ height: "400svh" }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/media/real/video/walkthrough.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {!ready && <div className="absolute inset-0 bg-night" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {BEATS.map((b, i) => (
          <BeatText key={b.title} index={i} progress={progress} />
        ))}
      </div>
    </div>
  );
}

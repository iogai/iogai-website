"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/copy";

// Hero slides: every service in lib/copy.ts.
const slides = services.items;

// Three encodes of the same 12 s flight (H.264, faststart, keyframe every 1 s)
// so it starts within a second on any device and network:
//   360p ≈ 0.5 MB — Save-Data, 2G/3G   · 720p ≈ 2.4 MB — phones/tablets
//   1080p ≈ 4.1 MB — wide screens on fast connections
const VIDEO = {
  sm: "/media/real/video/hero-360.mp4",
  md: "/media/real/video/hero-720.mp4",
  lg: "/media/real/video/hero-1080.mp4",
};
const POSTER = "/media/real/video/hero-poster.jpg";

// Slow or data-saving connections: swap to the 360p file before much loads.
function isSlowNetwork() {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  return !!connection?.saveData ||
    ["slow-2g", "2g", "3g"].includes(connection?.effectiveType ?? "");
}

export function ScrollVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wantsPlayback = useRef(false);
  const visible = useRef(true);
  const [playing, setPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [active, setActive] = useState(0);

  function play() {
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => {
      setPlaying(false);
      setShowVideo(false);
    });
  }

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    // The <video> is server-rendered with autoPlay and <source media> picks,
    // so the browser starts downloading during HTML parse, before any JS runs.
    wantsPlayback.current = !reduced.matches;
    if (!wantsPlayback.current) video.pause();
    else if (isSlowNetwork() && !video.currentSrc.includes("hero-360")) {
      video.src = VIDEO.sm;
      video.load();
    }
    if (wantsPlayback.current) play();
    if (!video.paused && video.readyState >= 2) { setPlaying(true); setShowVideo(true); }
    const sync = () => {
      if (wantsPlayback.current && visible.current && !document.hidden) play();
      else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
      sync();
    }, { threshold: 0.15 });
    observer.observe(section);
    const onReduced = () => {
      if (reduced.matches) {
        wantsPlayback.current = false;
        video.pause();
        setShowVideo(false);
      }
    };
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", onReduced);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", onReduced);
      video.pause();
    };
  }, []);

  return (
    <div ref={sectionRef} id="top" className="relative h-[100svh] min-h-[560px] overflow-hidden bg-night">
      {/* Always show the lightweight poster while loading or if playback fails. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={POSTER} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      <video
        ref={videoRef}
        poster={POSTER}
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        aria-label="IOGAI refrigeration repair walkthrough"
        onPlaying={() => { setPlaying(true); setShowVideo(true); }}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setShowVideo(false); }}
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (Number.isFinite(video.duration) && video.duration > 0) {
            setActive(Math.min(slides.length - 1, Math.floor(video.currentTime / video.duration * slides.length)));
          }
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${showVideo ? "opacity-100" : "opacity-0"}`}
      >
        <source src={VIDEO.lg} type="video/mp4" media="(min-width: 1440px)" />
        <source src={VIDEO.md} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
      <div className="absolute inset-x-0 bottom-24 mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="mb-4 flex justify-center gap-2" aria-label="Services">
          {slides.map((service, index) => (
            <button key={service.slug} type="button" aria-label={service.name} aria-pressed={active === index}
              onClick={() => { wantsPlayback.current = false; videoRef.current?.pause(); setActive(index); }}
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm ${active === index ? "border-accent bg-accent text-ink" : "border-white/40 bg-black/30 text-white"}`}>
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
        <h3 className="display text-[clamp(1.5rem,4.5vw,2.75rem)] font-semibold text-white">{slides[active].name}</h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/90 sm:text-base">{slides[active].body}</p>
      </div>
      <button type="button" onClick={() => {
        wantsPlayback.current = !playing;
        if (playing) videoRef.current?.pause(); else play();
      }} className="absolute bottom-6 left-5 inline-flex min-h-11 items-center rounded-full border border-white/40 bg-black/50 px-5 text-sm text-white sm:left-8">
        {playing ? "Pause video" : "Play video"}
      </button>
    </div>
  );
}

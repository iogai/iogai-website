"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/copy";

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

function pickSource() {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string; downlink?: number };
  }).connection;
  const type = connection?.effectiveType ?? "4g";
  if (connection?.saveData || ["slow-2g", "2g", "3g"].includes(type)) return VIDEO.sm;
  const wide = window.innerWidth * (window.devicePixelRatio || 1) >= 2200;
  const fast = (connection?.downlink ?? 10) >= 5;
  return wide && fast ? VIDEO.lg : VIDEO.md;
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
    if (!video.getAttribute("src")) video.src = pickSource();
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
    // Play for everyone except reduced-motion; slow networks get the 360p file.
    wantsPlayback.current = !reduced.matches;
    // Start fetching right away (the flight is the first thing people see).
    if (wantsPlayback.current) play();
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
        preload="auto"
        aria-label="IOGAI refrigeration repair walkthrough"
        onPlaying={() => { setPlaying(true); setShowVideo(true); }}
        onPause={() => setPlaying(false)}
        onError={() => { setPlaying(false); setShowVideo(false); }}
        onTimeUpdate={(e) => {
          const video = e.currentTarget;
          if (Number.isFinite(video.duration) && video.duration > 0) {
            setActive(Math.min(services.items.length - 1, Math.floor(video.currentTime / video.duration * services.items.length)));
          }
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${showVideo ? "opacity-100" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40" />
      <div className="absolute inset-x-0 bottom-24 mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="mb-4 flex justify-center gap-2" aria-label="Services">
          {services.items.map((service, index) => (
            <button key={service.slug} type="button" aria-label={service.name} aria-pressed={active === index}
              onClick={() => { wantsPlayback.current = false; videoRef.current?.pause(); setActive(index); }}
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm ${active === index ? "border-accent bg-accent text-ink" : "border-white/40 bg-black/30 text-white"}`}>
              {String(index + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
        <h3 className="display text-[clamp(1.5rem,4.5vw,2.75rem)] font-semibold text-white">{services.items[active].name}</h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/90 sm:text-base">{services.items[active].body}</p>
      </div>
      <button type="button" onClick={() => {
        wantsPlayback.current = !playing;
        if (playing) videoRef.current?.pause(); else play();
      }} className="absolute bottom-6 right-5 inline-flex min-h-11 items-center rounded-full border border-white/40 bg-black/50 px-5 text-sm text-white sm:right-8">
        {playing ? "Pause video" : "Play video"}
      </button>
    </div>
  );
}

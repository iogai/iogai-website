"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/copy";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the hero video → white text; once scrolled → solid white bar, dark text.
  const overHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-xdr ${
        overHero ? "bg-transparent" : "bg-paper/85 backdrop-blur-md border-b border-hairline"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        {/* Left: menu + language */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
              overHero
                ? "border-white/25 text-paper hover:bg-white/10"
                : "border-hairline text-ink hover:bg-mist"
            }`}
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[1.5px] w-4 bg-current" />
              <span className="block h-[1.5px] w-4 bg-current" />
            </span>
          </button>
          {/* Logo — left on mobile, centered on desktop */}
          <Link href="#top" className="ml-1 md:hidden">
            <Logo tone={overHero ? "paper" : "ink"} />
          </Link>
        </div>

        {/* Center: logo (desktop) */}
        <Link href="#top" className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <Logo tone={overHero ? "paper" : "ink"} />
        </Link>

        {/* Right: phone + CTA */}
        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={`hidden items-center gap-2 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors md:inline-flex ${
              overHero ? "border-white/25 text-paper hover:bg-white/10" : "border-hairline text-ink hover:bg-mist"
            }`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.4.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.55 3.4 1 1 0 01-.24 1l-2.2 2.2z"
                fill="currentColor"
              />
            </svg>
            {site.phoneDisplay}
          </a>
          <Link
            href="#contact"
            className="pulse-cta hidden h-11 items-center rounded-md bg-accent px-5 text-sm font-medium text-ink transition-colors hover:bg-accent-strong hover:text-paper min-[420px]:inline-flex"
          >
            {nav.cta}
          </Link>
        </div>
      </nav>

      {/* Mobile / expanded menu */}
      {open && (
        <div className="border-t border-hairline bg-paper px-5 pb-8 pt-4 sm:px-8">
          <ul className="flex flex-col divide-y divide-hairline">
            {nav.links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-ink"
                >
                  {l.label}
                  <span className="text-ink-3" aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink-2"
          >
            {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}

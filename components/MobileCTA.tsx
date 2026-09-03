"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/copy";
import { trackContact } from "@/lib/track";

// Fixed bottom call/book bar on mobile — appears once the hero is scrolled past.
// Tap-to-call is the highest-intent action on a service site; keep it one thumb away.
export function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 0.75rem)" }}
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-hairline bg-paper/90 px-4 pt-3 backdrop-blur-md transition-transform duration-500 ease-xdr md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={site.phoneHref}
        onClick={() => trackContact("phone")}
        className="flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-hairline text-sm font-medium text-ink"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.4.55 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.55 3.4 1 1 0 01-.24 1l-2.2 2.2z" />
        </svg>
        Call
      </a>
      <Link
        href="#contact"
        onClick={() => trackContact("book_click")}
        className="flex h-12 flex-[1.4] items-center justify-center rounded-md bg-accent text-sm font-semibold text-ink"
      >
        Book a Repair
      </Link>
    </div>
  );
}

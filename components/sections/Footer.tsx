"use client";

import { useState } from "react";
import Link from "next/link";
import { footer, site } from "@/lib/copy";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-night text-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-widest text-white/40">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition-colors hover:text-paper"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter (v1: local confirmation, not wired to a backend) */}
          <div className="col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              {footer.newsletter.label}
            </h3>
            <p className="mt-5 text-sm text-white/75">{footer.tagline}</p>
            {subscribed ? (
              <p className="mt-4 text-sm text-accent-soft">Thanks — you&rsquo;re on the list.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="mt-4 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  aria-label="Email"
                  placeholder={footer.newsletter.placeholderEmail}
                  className="flex-1 border-b border-white/20 bg-transparent py-2 text-sm text-paper placeholder:text-white/40 focus:border-accent focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
                >
                  {footer.newsletter.cta}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="font-display text-[clamp(2.25rem,11vw,6rem)] font-bold leading-none tracking-tight text-paper">
              {site.brand}
              <span className="text-accent">{site.suffix}</span>
            </div>
            <div className="text-right text-sm text-white/60">
              <a href={site.phoneHref} className="block transition-colors hover:text-paper">
                {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="block transition-colors hover:text-paper">
                {site.email}
              </a>
              <span className="block text-white/40">{site.domain}</span>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <span>{footer.legal}</span>
            <div className="flex gap-6">
              {footer.legalLinks.map((l) => (
                <Link key={l.label} href={l.href} className="transition-colors hover:text-white/80">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

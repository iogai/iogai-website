"use client";

import Link from "next/link";
import Image from "next/image";
import { footer, site } from "@/lib/copy";
import { track, trackContact } from "@/lib/track";

export function Footer() {
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

          <div className="col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-white/40">
              REQUEST SERVICE
            </h3>
            <p className="mt-5 text-sm text-white/75">
              Tell us what needs repair. We will confirm availability and your arrival window.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                onClick={() => track("service_options_click", { placement: "footer" })}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
              >
                Request service online
              </Link>
              <a
                href={site.phoneHref}
                onClick={() => trackContact("phone")}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-white/60"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Image src="/media/real/logo-full.jpg" alt="IOGAI Appliance Repair Services logo" width={200} height={200} className="rounded-xl" />
            <div className="text-right text-sm text-white/60">
              <a href={site.phoneHref} className="block transition-colors hover:text-paper">
                {site.phoneDisplay}
              </a>
              <a href={site.emailHref} className="block transition-colors hover:text-paper">
                {site.email}
              </a>
              <span className="block text-white/40">{site.domain}</span>
              <a
                href={site.licenseHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/40 transition-colors hover:text-paper"
              >
                {site.license} · verify
              </a>
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

"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contact, site } from "@/lib/copy";
import { track, trackContact } from "@/lib/track";

const bookingUrl =
  "https://book.housecallpro.com/book/IOGAI---Refrigeration--Appliance-Repair-Service/a006141343ab4873908d442064b2ebc8?v2=true";

export function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div id="book" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: heading + direct contact */}
        <Reveal>
          <Eyebrow>{contact.label}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">{contact.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-2">Book online to request a visit. If you need urgent commercial refrigeration service, call us so we can check availability.</p>
          <div className="mt-10 space-y-5">
            <div className="text-xs uppercase tracking-widest text-ink-3">{contact.directLabel}</div>
            <a
              href={site.phoneHref}
              onClick={() => trackContact("phone")}
              className="pulse-cta inline-block rounded-md font-display text-3xl font-semibold text-ink transition-colors hover:text-accent"
            >
              {site.phoneDisplay}
            </a>
            <a href={site.emailHref} className="block text-base text-ink-2 transition-colors hover:text-accent">
              {site.email}
            </a>
            <div className="pt-1">
              <div className="text-xs uppercase tracking-widest text-ink-3">{contact.textUs.label}</div>
              <a
                href={`sms:${site.phoneHref.replace("tel:", "")}?body=${encodeURIComponent(contact.textUs.prefill)}`}
                onClick={() => trackContact("sms")}
                className="mt-2 inline-flex h-11 items-center gap-2 rounded-md border border-hairline px-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 3C6.5 3 2 6.7 2 11.2c0 2.5 1.4 4.8 3.6 6.3-.1.9-.5 2.2-1.3 3.4 1.5-.2 3-.8 4.2-1.6 1.1.4 2.3.6 3.5.6 5.5 0 10-3.7 10-8.2S17.5 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                {contact.textUs.cta}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-2xl border border-hairline bg-mist/40 p-6 sm:p-8">
            <h3 className="display text-2xl text-ink">Book online</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink-2">
              Tell us what needs repair and choose an available time. Your arrival window depends on the technician’s schedule. We’ll do our best to accommodate your preferred time.
            </p>
            <a
              href={bookingUrl}
              onClick={() => track("booking_link_click")}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
            >
              Continue to booking
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

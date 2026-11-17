"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contact, site } from "@/lib/copy";
import { track, trackContact } from "@/lib/track";

const bookingUrl =
  "https://book.housecallpro.com/book/IOGAI---Refrigeration--Appliance-Repair-Service/a006141343ab4873908d442064b2ebc8?v2=true";
const callbackUrl =
  "https://book.housecallpro.com/lead-form/IOGAI---Refrigeration--Appliance-Repair-Service/c25a85484c894f1b88311995c8bcdc10";
const smsUrl = site.phoneHref.replace("tel:", "sms:");

export function Contact() {
  return (
    <section id="contact" className="bg-paper">
      <div id="book" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: heading + direct contact */}
        <Reveal>
          <Eyebrow>{contact.label}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">{contact.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-2">Request service online 24/7. For urgent commercial refrigeration problems, call us to check the soonest available technician. We confirm the arrival window before your visit.</p>
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
                href={`${smsUrl}?body=${encodeURIComponent(contact.textUs.prefill)}`}
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
            <h3 className="display text-2xl text-ink">How would you like to book?</h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-ink-2">
              Text us your ZIP code and what needs repair, or leave your number for a callback.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={smsUrl}
                onClick={() => track("Contact", { method: "sms", placement: "booking_help" })}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-ink transition-colors hover:bg-accent-strong hover:text-paper"
              >
                Text our team
              </a>
              <a
                href={callbackUrl}
                onClick={() => track("callback_link_click", { placement: "contact" })}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/30 px-6 text-sm font-medium text-ink transition-colors hover:border-accent"
              >
                Request a callback
              </a>
            </div>
            <div className="mt-5 border-t border-hairline pt-5">
              <a
                href={bookingUrl}
                onClick={() => track("booking_link_click")}
                className="inline-flex min-h-11 items-center text-sm font-medium text-ink underline underline-offset-4 hover:text-accent"
              >
                See available appointment times
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

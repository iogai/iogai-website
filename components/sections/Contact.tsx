"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { contact, site } from "@/lib/copy";
import { trackContact } from "@/lib/track";
import { easeXdr } from "@/lib/motion";
import { trackLead } from "@/lib/track";

type Status = "idle" | "sending" | "ok" | "error";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const field =
  "w-full border-0 border-b border-hairline bg-transparent py-3 text-ink placeholder:text-ink-3 focus:border-accent focus:outline-none";

export function Contact() {
  const [step, setStep] = useState(0);
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  const contactValid =
    first.trim() && last.trim() && phone.replace(/\D/g, "").length >= 7 && emailRe.test(email);

  function pickService(id: string) {
    setService(id);
    setStep(1);
  }

  function onPhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    if (preview) URL.revokeObjectURL(preview);
    setPhoto(f);
    setPreview(f ? URL.createObjectURL(f) : null);
  }

  async function submit() {
    setStatus("sending");
    try {
      const fd = new FormData();
      fd.append("service", service);
      fd.append("message", message);
      fd.append("firstName", first);
      fd.append("lastName", last);
      fd.append("phone", phone);
      fd.append("email", email);
      fd.append("address", address);
      fd.append("company", ""); // honeypot
      if (photo) fd.append("photo", photo);
      const res = await fetch("/api/lead", { method: "POST", body: fd });
      if (!res.ok) throw new Error();
      trackLead(service); // conversion event for Meta/Google Ads
      setStatus("ok");

      // Same pattern as rimrepairjoes.com: the API call above is a silent
      // backup, but the real notification is the customer's own phone -
      // redirect to sms: with the details pre-filled so they text IOGAI
      // directly (and can attach the photo right in Messages, which a web
      // form can't forward into a text). No SMS API, no cost, no delay.
      const serviceLabel =
        contact.serviceStep.options.find((o) => o.id === service)?.label ?? "repair";
      const smsBody = `Hi IOGAI, I need a ${serviceLabel.toLowerCase()} quote.\n\nName: ${first} ${last}\nPhone: ${phone}\nAddress: ${address}\n${message ? `Issue: ${message}\n` : ""}\n(Attaching a photo below)`;
      const sep = /android/i.test(navigator.userAgent) ? "?" : "&";
      const smsHref = `sms:${site.phoneHref.replace("tel:", "")}${sep}body=${encodeURIComponent(smsBody)}`;
      window.location.href = smsHref;
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left: heading + direct contact */}
        <Reveal>
          <Eyebrow>{contact.label}</Eyebrow>
          <h2 className="display mt-5 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">{contact.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-2">{contact.intro}</p>
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

        {/* Right: booking wizard */}
        <Reveal delay={0.06}>
          <div className="rounded-2xl border border-hairline bg-mist/40 p-6 sm:p-8">
            {status === "ok" ? (
              <div className="flex min-h-[340px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-paper">
                  ✓
                </div>
                <p className="mt-6 max-w-xs text-lg text-ink">{contact.success}</p>
              </div>
            ) : (
              <>
                {/* Progress */}
                <ol className="mb-8 flex items-center gap-2" aria-label="Booking steps">
                  {contact.steps.map((label, i) => (
                    <li key={label} className="flex flex-1 items-center gap-2">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                          i < step
                            ? "bg-accent text-paper"
                            : i === step
                              ? "border-2 border-accent text-accent"
                              : "border border-hairline text-ink-3"
                        }`}
                      >
                        {i < step ? "✓" : i + 1}
                      </span>
                      <span
                        className={`hidden text-xs font-medium sm:block ${
                          i === step ? "text-ink" : "text-ink-3"
                        }`}
                      >
                        {label}
                      </span>
                      {i < contact.steps.length - 1 && (
                        <span className="ml-1 hidden h-px flex-1 bg-hairline sm:block" />
                      )}
                    </li>
                  ))}
                </ol>

                <AnimatePresence mode="wait">
                  {/* STEP 1 — service */}
                  {step === 0 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.35, ease: easeXdr }}
                    >
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {contact.serviceStep.heading}
                      </h3>
                      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {contact.serviceStep.options.map((o) => (
                          <button
                            key={o.id}
                            type="button"
                            onClick={() => pickService(o.id)}
                            className={`rounded-xl border p-4 text-left transition-colors ${
                              service === o.id
                                ? "border-accent bg-paper"
                                : "border-hairline bg-paper hover:border-accent"
                            }`}
                          >
                            <span className="block font-semibold text-ink">{o.label}</span>
                            <span className="mt-1 block text-sm text-ink-2">{o.note}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — details + photo */}
                  {step === 1 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.35, ease: easeXdr }}
                    >
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {contact.detailStep.heading}
                      </h3>
                      <label className="mt-5 block">
                        <span className="text-xs uppercase tracking-widest text-ink-3">
                          {contact.detailStep.messageLabel}
                        </span>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                          className={`${field} resize-none`}
                          placeholder={contact.detailStep.messagePlaceholder}
                        />
                      </label>

                      <div className="mt-6">
                        <span className="text-xs uppercase tracking-widest text-ink-3">
                          {contact.detailStep.photoLabel}
                        </span>
                        <input
                          ref={fileRef}
                          type="file"
                          accept="image/*"
                          onChange={onPhoto}
                          className="hidden"
                        />
                        {preview ? (
                          <div className="mt-3 flex items-center gap-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={preview}
                              alt="Selected"
                              className="h-20 w-20 rounded-lg object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setPhoto(null);
                                if (preview) URL.revokeObjectURL(preview);
                                setPreview(null);
                                if (fileRef.current) fileRef.current.value = "";
                              }}
                              className="text-sm text-ink-2 underline hover:text-accent"
                            >
                              Remove
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => fileRef.current?.click()}
                            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-hairline py-6 text-sm text-ink-2 transition-colors hover:border-accent hover:text-accent"
                          >
                            <span aria-hidden>＋</span> {contact.detailStep.photoCta}
                          </button>
                        )}
                        <p className="mt-2 text-xs text-ink-3">{contact.detailStep.photoHint}</p>
                      </div>

                      <div className="mt-8 flex items-center justify-between">
                        <button type="button" onClick={() => setStep(0)} className="text-sm text-ink-2 hover:text-ink">
                          ← {contact.back}
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
                        >
                          {contact.next}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — contact info */}
                  {step === 2 && (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.35, ease: easeXdr }}
                    >
                      <h3 className="font-display text-xl font-semibold text-ink">
                        {contact.contactStep.heading}
                      </h3>
                      {/* Honeypot */}
                      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-xs uppercase tracking-widest text-ink-3">
                            {contact.contactStep.firstName}
                          </span>
                          <input value={first} onChange={(e) => setFirst(e.target.value)} required className={field} placeholder="Jane" />
                        </label>
                        <label className="block">
                          <span className="text-xs uppercase tracking-widest text-ink-3">
                            {contact.contactStep.lastName}
                          </span>
                          <input value={last} onChange={(e) => setLast(e.target.value)} required className={field} placeholder="Doe" />
                        </label>
                        <label className="block">
                          <span className="text-xs uppercase tracking-widest text-ink-3">
                            {contact.contactStep.phone}
                          </span>
                          <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" required className={field} placeholder="(424) 000-0000" />
                        </label>
                        <label className="block">
                          <span className="text-xs uppercase tracking-widest text-ink-3">
                            {contact.contactStep.email}
                          </span>
                          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className={field} placeholder="you@email.com" />
                        </label>
                        <label className="block sm:col-span-2">
                          <span className="text-xs uppercase tracking-widest text-ink-3">
                            {contact.contactStep.address}
                          </span>
                          <input value={address} onChange={(e) => setAddress(e.target.value)} className={field} placeholder="Street, city, ZIP" />
                        </label>
                      </div>
                      <p className="mt-4 text-xs text-ink-3">{contact.contactStep.consent}</p>

                      <div className="mt-8 flex items-center justify-between gap-4">
                        <button type="button" onClick={() => setStep(1)} className="text-sm text-ink-2 hover:text-ink">
                          ← {contact.back}
                        </button>
                        <div className="flex items-center gap-4">
                          {status === "error" && (
                            <span className="text-sm text-accent-strong">{contact.error}</span>
                          )}
                          <button
                            type="button"
                            onClick={submit}
                            disabled={!contactValid || status === "sending"}
                            className="inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-medium text-paper transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {status === "sending" ? contact.submitting : contact.submit}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

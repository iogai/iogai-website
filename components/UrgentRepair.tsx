"use client";

import { useState } from "react";

// Urgent repair request for /care. Most visitors need a repair right now,
// so this comes before the membership plans. Free for us and the customer:
// it opens the customer's own Messages app with a ready text to our number.
const PHONE = "+14244217771";
const problems = ["Not cooling", "Leaking water", "Ice machine", "Noisy", "Other"];

export function UrgentRepair() {
  const [problem, setProblem] = useState("");
  const [place, setPlace] = useState<"Home" | "Business">("Home");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");

  const digits = phone.replace(/\D/g, "");
  const okPhone = digits.length === 10 || (digits.length === 11 && digits.startsWith("1"));
  const okZip = /^\d{5}$/.test(zip.trim());

  const body = `Repair request — IOGAI\nProblem: ${problem || "Not sure"}\nPlace: ${place}\nName: ${name.trim()}\nPhone: ${phone.trim()}\nZIP: ${zip.trim()}`;

  function send(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!name.trim() || !okPhone || !okZip) {
      e.preventDefault();
      setError(
        !name.trim()
          ? "Please add your name."
          : !okPhone
            ? "Please check your phone number (10 digits)."
            : "Please add your 5-digit ZIP code.",
      );
      return;
    }
    setError("");
  }

  const field =
    "h-12 w-full rounded-md border border-hairline bg-paper px-4 text-base text-ink outline-none focus:border-accent";

  return (
    <section id="repair" aria-labelledby="repair-h" className="rounded-2xl bg-night p-6 text-paper sm:p-8">
      <h2 id="repair-h" className="font-display text-2xl font-semibold">
        Something not working? Get it fixed.
      </h2>
      <p className="mt-2 text-sm text-paper/75">
        Tell us in 20 seconds. We answer fast and confirm your arrival window by text.
      </p>

      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="What is wrong?">
        {problems.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setProblem(p)}
            aria-pressed={problem === p}
            className={`h-11 rounded-full border px-4 text-sm transition-colors ${
              problem === p ? "border-gold bg-gold text-ink" : "border-paper/30 text-paper hover:border-gold"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div className="mt-4 flex gap-2" role="group" aria-label="Where?">
        {(["Home", "Business"] as const).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPlace(p)}
            aria-pressed={place === p}
            className={`h-11 flex-1 rounded-md border text-sm transition-colors sm:flex-none sm:px-6 ${
              place === p ? "border-gold bg-gold text-ink" : "border-paper/30 text-paper hover:border-gold"
            }`}
          >
            {p === "Home" ? "Home" : "Restaurant / business"}
          </button>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <input className={field} placeholder="Your name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={field} placeholder="Phone" type="tel" inputMode="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input className={field} placeholder="ZIP code" inputMode="numeric" autoComplete="postal-code" maxLength={5} value={zip} onChange={(e) => setZip(e.target.value)} />
      </div>

      {error && (
        <p role="alert" className="mt-3 text-sm text-gold">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={`sms:${PHONE}?&body=${encodeURIComponent(body)}`}
          onClick={send}
          className="inline-flex h-12 items-center justify-center rounded-md bg-gold px-7 text-sm font-semibold text-ink transition-colors hover:bg-paper"
        >
          Send repair request
        </a>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex h-12 items-center justify-center rounded-md border border-paper/40 px-7 text-sm font-medium text-paper hover:border-gold"
        >
          Call now (424) 421-7771
        </a>
      </div>
      <p className="mt-3 text-xs text-paper/60">
        Service call: $100 homes, $135 businesses, applied to your approved repair. Price approved before any work.
      </p>
    </section>
  );
}

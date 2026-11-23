import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Igor Ogai — Founder & Strategist, IOGAI",
  description:
    "Igor Ogai is the founder of IOGAI (Iogai Refrigeration Inc), an appliance and commercial refrigeration repair company in Huntington Beach, California, with 13 years of hands-on field experience.",
  alternates: { canonical: "https://iogai.com/igor-ogai" },
  openGraph: {
    title: "Igor Ogai — Founder of IOGAI",
    description: "Refrigeration technician and founder of IOGAI, Orange County & Los Angeles.",
    url: "https://iogai.com/igor-ogai",
    type: "profile",
    images: ["https://iogai.com/media/real/igor-ogai-founder.jpg"],
  },
  robots: { index: true, follow: true },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://iogai.com/igor-ogai#person",
  name: "Igor Ogai",
  alternateName: ["Igor Ogai IOGAI", "Игорь Огай"],
  jobTitle: "Founder & Owner, Refrigeration Technician",
  url: "https://iogai.com/igor-ogai",
  image: "https://iogai.com/media/real/igor-ogai-founder.jpg",
  worksFor: { "@id": "https://iogai.com/#business" },
  founder: { "@id": "https://iogai.com/#business" },
  knowsAbout: [
    "Commercial refrigeration",
    "Walk-in coolers and freezers",
    "Refrigerator repair",
    "Sealed system repair",
    "EPA 608 refrigerant handling",
  ],
  homeLocation: { "@type": "Place", name: "Long Beach, California" },
  sameAs: [
    "https://www.facebook.com/iogai.services",
    "https://www.instagram.com/iogai.services",
    "https://www.youtube.com/@iogai.services",
    "https://www.tiktok.com/@iogai.services",
    "https://www.thumbtack.com/ca/huntington-beach/appliance-repair/iogai-appliance-refrigeration-repair-service/service/499058102966788108",
  ],
};

const stats = [
  { v: "13", l: "years in the field" },
  { v: "3", l: "countries, one standard" },
  { v: "5.0", l: "Google rating in California" },
  { v: "136", l: "Google reviews" },
];

const principles = [
  { t: "Care is strength", d: "Every decision starts with the person in front of us: the restaurant owner losing product, the family with a warm fridge, the technician building a career." },
  { t: "Decide, then execute", d: "Test before touching. Find the real cause. Fix it right the first time. No guessing, no shortcuts." },
  { t: "Systems over chaos", d: "Clear levels, clear pay, clear standards. A company that runs on discipline, not luck." },
  { t: "Long game", d: "Reputation is built one job at a time and protected every day. Every promise kept is an investment." },
  { t: "When it stops, he stays", d: "Storms, outages, emergencies. No panic, no excuses. He stays until it runs again. Quietly, and to the end." },
  { t: "Few words, kept", d: "No big promises. A clear price, a clear time, and the work done exactly as agreed." },
];

const path = [
  { y: "West Kazakhstan", d: "Kept a region's commercial coolers running. Breakdowns closed the same day, often within two hours." },
  { y: "From zero", d: "Started with no clients and no name. Hundreds of client reviews, earned with his own hands. Built two crews, served restaurants in the heart of the city." },
  { y: "California", d: "Orange County & Los Angeles: restaurants, businesses, estates and high-end homes." },
  { y: "IOGAI", d: "Founded Iogai Refrigeration Inc — a quiet, disciplined service company that does the work once, and does it right." },
];

const privateClients = [
  { t: "Estates & private homes", d: "Built-in and high-end refrigeration, wine storage, ice makers. Discreet, on time, clean." },
  { t: "Restaurant groups", d: "Scheduled maintenance for walk-ins, reach-ins and ice machines — before Friday night, not after." },
  { t: "Property portfolios", d: "One accountable partner for every unit. Clear reports, fixed standards, a direct line to the founder." },
];

export default function IgorOgaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <header className="bg-night">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/"><Logo /></Link>
          <a href={site.phoneHref} className="text-sm text-white/70 hover:text-accent-soft">{site.phoneDisplay}</a>
        </div>
      </header>
      <main id="main">
        <section className="bg-night text-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-12 sm:px-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">Founder of IOGAI · Craftsman · Strategist</p>
              <h1 className="display mt-5 text-[clamp(3rem,8vw,6rem)] leading-[0.95]">Igor Ogai</h1>
              <p className="mt-6 text-xl italic text-accent-soft">Done right. Done for good.</p>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                Thirteen years in refrigeration across three countries. Calm under pressure, exact in
                the work, steady in every promise. Founder of IOGAI, built on care for every client and
                every person on the team.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#meet" className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper hover:bg-accent-strong">Meet Igor</a>
                <Link href="/" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">Visit IOGAI</Link>
              </div>
            </div>
            <Image src="/media/real/igor-ogai-founder.jpg" alt="Igor Ogai, founder of IOGAI" width={640} height={640} priority className="w-full rounded-3xl border border-accent/40 object-cover" />
          </div>
        </section>

        <section className="border-b border-hairline bg-paper">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 sm:px-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-5xl font-bold text-accent">{s.v}</div>
                <div className="mt-2 text-sm text-ink-2">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="display text-[clamp(2rem,4.5vw,3rem)] text-ink">Principles</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {principles.map((p) => (
                <div key={p.t} className="rounded-2xl border border-hairline p-7">
                  <h3 className="text-xl font-semibold text-ink">{p.t}</h3>
                  <p className="mt-3 text-ink-2">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="display text-[clamp(2rem,4.5vw,3rem)] text-ink">The path</h2>
            <ol className="mt-10 space-y-8 border-l-2 border-accent pl-8">
              {path.map((p) => (
                <li key={p.y}>
                  <div className="text-sm uppercase tracking-widest text-accent">{p.y}</div>
                  <p className="mt-1 text-lg text-ink">{p.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
            <h2 className="display text-[clamp(2rem,4.5vw,3rem)] text-ink">Private clients</h2>
            <p className="mt-4 max-w-2xl text-ink-2">A limited number of long-term clients, served personally by Igor&rsquo;s team. Quietly, on schedule, without reminders.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {privateClients.map((c) => (
                <div key={c.t} className="rounded-2xl border border-hairline p-7">
                  <h3 className="text-xl font-semibold text-ink">{c.t}</h3>
                  <p className="mt-3 text-ink-2">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="meet" className="bg-night text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
            <h2 className="display text-[clamp(2rem,4.5vw,3rem)]">Meet Igor in person</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/70">
              Estates, restaurant groups, property portfolios and partners: tell Igor a little about
              your property or project, and he will reply personally to arrange a meeting.
            </p>
            <a
              href={`${site.emailHref}?subject=${encodeURIComponent("Meeting with Igor Ogai")}`}
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-paper hover:bg-accent-strong"
            >
              Request a meeting
            </a>
            <p className="mt-6 text-lg">
              <a href={site.phoneHref} className="text-accent-soft hover:underline">{site.phoneDisplay}</a>
              {" · "}
              <a href={site.emailHref} className="text-accent-soft hover:underline">{site.email}</a>
            </p>
            <p className="mt-6 text-sm text-white/50">
              <Link href="/careers" className="hover:text-white">Join the team</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

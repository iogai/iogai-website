import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/copy";

// Igor Ogai's personal page (igorogai.com points here). Black and gold to
// match the IOGAI emblem. Story text is Igor's own, from the /igor drafts he
// wrote; figures are only ones an American visitor can verify.

export const metadata: Metadata = {
  title: "Igor Ogai — Done with heart. Done right. Done for good.",
  description:
    "Igor Ogai, refrigeration craftsman and founder of IOGAI (Iogai Refrigeration Inc) in California. Thirteen years in the field across three countries. Meet Igor in person.",
  alternates: { canonical: "https://iogai.com/igor-ogai" },
  openGraph: {
    title: "Igor Ogai — Done with heart. Done right. Done for good.",
    description: "Refrigeration craftsman and founder of IOGAI, California.",
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

const GOLD = "text-[#e3c268]";
const MEET_HREF = `${site.emailHref}?subject=${encodeURIComponent("Meeting with Igor Ogai")}`;

const stats = [
  { v: "13", l: "years in the field" },
  { v: "3", l: "countries, one standard" },
  { v: "5.0", l: "Google rating in California" },
  { v: "136", l: "Google reviews" },
];

const chapters = [
  {
    id: "roots",
    place: "Aksay, West Kazakhstan",
    title: "Roots",
    body: [
      "Born in Aksay. A boy who didn't quite understand how the human world works. Honestly, he still doesn't. So he learned to fix what he could: things that are cold, broken and waiting for someone who cares.",
      "I grew up next to Karachaganak, one of the world's great energy projects, built with American partners. America felt familiar long before I arrived.",
      "Life kept moving our family: Almaty, then Uralsk, School No. 3. Every place I landed, I built as if I'd stay forever. Bachelor's degree in finance. My hands chose refrigeration.",
    ],
  },
  {
    id: "trust",
    place: "West Kazakhstan",
    title: "Trust",
    body: [
      "Four-plus years keeping Tassay's drink coolers running across the region. Breakdowns closed within two hours or the same day. Even the light inside the glass mattered, because a bright, cold cooler sells.",
    ],
  },
  {
    id: "from-zero",
    place: "A new city",
    title: "From zero",
    body: [
      "No clients, no name. Hundreds of client reviews, earned with my own hands. Then two crews. Restaurants in the heart of the city waited for me, and fridges other techs called dead came back to life.",
      "In my native language, Ogai sounds like pomogai — “help.” That word became my calling.",
    ],
  },
  {
    id: "california",
    place: "California",
    title: "Home",
    body: [
      "The place I believe is closest to paradise. Here I founded IOGAI: honest service, strong technicians, work done right.",
      "When something important stops, I stay until it runs again. Quietly, and to the end.",
      "Off the clock: Jackrabbit Boxing Academy, Long Beach. Show up, stay humble, finish what you start.",
    ],
  },
];

const principles = [
  { t: "Care is strength", d: "Every decision starts with the person in front of me: the restaurant owner losing product, the family with a warm fridge, the technician building a career." },
  { t: "Decide, then execute", d: "Test before touching. Find the real cause. Fix it right the first time. No guessing, no shortcuts." },
  { t: "Few words, kept", d: "No big promises. A clear price, a clear time, and the work done exactly as agreed." },
  { t: "Long game", d: "Reputation is built one job at a time and protected every day. Every promise kept is an investment." },
];

const bigJobs = [
  { t: "Supermarkets", d: "During the pandemic, when everyone stayed home, my crew kept a hypermarket's refrigeration running." },
  { t: "Blast freezers & medical cold rooms", d: "We built blast-freezer rooms, morgue refrigeration and freezers for medical equipment." },
  { t: "Transport", d: "Truck refrigeration: compressor replacement, pressure testing, leak repair." },
];

const circles = [
  { t: "Estates & private homes", d: "Built-in and high-end refrigeration, wine storage, ice makers. Discreet, on time, clean." },
  { t: "Restaurant groups", d: "Scheduled maintenance for walk-ins, reach-ins and ice machines, before Friday night, not after." },
  { t: "Property portfolios", d: "One accountable partner for every unit. Clear reports, fixed standards, a direct line to the founder." },
];

const ahead = [
  { t: "Medical cold chain", d: "Service for medical refrigeration across California, where cold is not comfort but safety." },
  { t: "The port of Long Beach", d: "Reefer trucks and port refrigeration: the cold that feeds a coast." },
  { t: "The Igor Ogai Method", d: "A school for technicians: diagnose fast, fix for good, and bring joy to every call." },
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className={`text-xs uppercase tracking-[0.3em] ${GOLD}`}>{children}</p>;
}

export default function IgorOgaiPage() {
  return (
    <div className="bg-[#0b0b0c] text-[#f4efe4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />

      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className={`font-display text-lg tracking-[0.3em] ${GOLD}`}>IGOR OGAI</a>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <a href="#story" className="hidden hover:text-[#e3c268] sm:inline">Story</a>
          <a href="#ahead" className="hidden hover:text-[#e3c268] sm:inline">Ahead</a>
          <a href="#meet" className="rounded-full border border-[#b8912f]/60 px-4 py-2 text-[#e3c268] hover:border-[#e3c268]">Meet Igor</a>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-8 sm:px-8 md:grid-cols-[1.15fr_1fr]">
          <div>
            <Label>Founder of IOGAI · Refrigeration craftsman</Label>
            <h1 className="display mt-6 text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.92]">Igor<br />Ogai</h1>
            <p className={`mt-6 text-xl italic ${GOLD}`}>Done with heart. Done right. Done for good.</p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              Thirteen years keeping what matters cold, across three countries. Calm under pressure,
              exact in the work, steady in every promise.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#meet" className="inline-flex min-h-12 items-center rounded-full bg-[#b8912f] px-7 py-3 text-sm font-semibold text-black hover:bg-[#e3c268]">Meet Igor</a>
              <a href="#story" className="inline-flex min-h-12 items-center rounded-full border border-[#b8912f]/60 px-7 py-3 text-sm font-medium text-[#e3c268] hover:border-[#e3c268]">Read the story</a>
            </div>
          </div>
          <figure className="relative">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#b8912f]/30" />
            <Image src="/media/real/igor-ogai-founder.jpg" alt="Igor Ogai next to a repaired refrigeration system" width={640} height={640} priority className="relative w-full rounded-3xl object-cover" />
            <figcaption className="relative mt-3 text-center text-sm text-white/45">Frost on the lines. Fixed and running.</figcaption>
          </figure>
        </section>

        {/* The kitchen: the warm memory */}
        <section className="border-y border-[#b8912f]/20 bg-[#15130f]">
          <div className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
            <Label>The quiet things</Label>
            <p className="display mt-8 text-[clamp(1.8rem,4vw,2.75rem)] leading-snug">
              Somewhere in your childhood there is a kitchen.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              The soft hum at night. Milk your mother poured before school. Something sweet, saved on the
              top shelf for Sunday. Nobody ever thought about the cold that kept it all safe.
            </p>
            <p className={`mx-auto mt-6 max-w-2xl text-lg leading-relaxed ${GOLD}`}>
              I do. That is my work: to keep the quiet things that families and businesses are built around.
            </p>
          </div>
        </section>

        {/* Figures */}
        <section className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-16 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="border-l border-[#b8912f]/40 pl-5">
              <div className={`font-display text-5xl font-bold ${GOLD}`}>{s.v}</div>
              <div className="mt-2 text-sm text-white/55">{s.l}</div>
            </div>
          ))}
        </section>

        {/* Story */}
        <div id="story">
          {chapters.map((c, i) => (
            <section key={c.id} id={c.id} className={i % 2 ? "bg-[#15130f]" : ""}>
              <div className="mx-auto grid max-w-5xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-[220px_1fr]">
                <div>
                  <div className="font-display text-6xl text-[#b8912f]/40">{String(i + 1).padStart(2, "0")}</div>
                  <div className={`mt-3 text-xs uppercase tracking-[0.3em] ${GOLD}`}>{c.place}</div>
                  <h2 className="display mt-2 text-4xl">{c.title}</h2>
                </div>
                <div className="space-y-5 text-lg leading-relaxed text-white/75">
                  {c.body.map((p) => (<p key={p.slice(0, 24)}>{p}</p>))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* The way */}
        <section className="border-y border-[#b8912f]/20">
          <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
            <Label>The way I work</Label>
            <blockquote className="display mt-8 text-[clamp(1.8rem,4.5vw,3rem)] leading-tight">
              &ldquo;When I touch a piece of equipment, it becomes mine until it runs and makes me proud. Then I hand it back.&rdquo;
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/65">
              Precise diagnosis. Clean repair. A leak fixed once is fixed for good. Not a routine, a life&rsquo;s meaning.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Label>Principles</Label>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.t} className="rounded-2xl border border-white/10 p-7">
                <h3 className={`text-xl font-semibold ${GOLD}`}>{p.t}</h3>
                <p className="mt-3 text-white/70">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#15130f]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <Label>Hard jobs</Label>
            <h2 className="display mt-3 text-4xl">We take the hard ones. And we finish them.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {bigJobs.map((j) => (
                <div key={j.t} className="rounded-2xl border border-white/10 p-6">
                  <div className={`text-lg font-semibold ${GOLD}`}>{j.t}</div>
                  <p className="mt-2 text-white/70">{j.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Label>Private clients</Label>
          <h2 className="display mt-3 text-4xl">A small circle, served personally.</h2>
          <p className="mt-5 max-w-2xl text-lg text-white/65">A limited number of long-term clients, looked after by Igor&rsquo;s own team. Quietly, on schedule, without reminders.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {circles.map((c) => (
              <div key={c.t} className="rounded-2xl border border-[#b8912f]/25 p-7">
                <h3 className={`text-xl font-semibold ${GOLD}`}>{c.t}</h3>
                <p className="mt-3 text-white/70">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ahead" className="border-t border-[#b8912f]/20 bg-[#15130f]">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <Label>The road ahead</Label>
            <h2 className="display mt-3 text-4xl">Built to last for decades.</h2>
            <p className="mt-5 max-w-2xl text-lg text-white/65">
              IOGAI is growing beyond the kitchen. I welcome partners, patrons and investors who want to
              build something lasting, honest and useful to people.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {ahead.map((a) => (
                <div key={a.t} className="rounded-2xl border border-white/10 p-6">
                  <div className={`text-lg font-semibold ${GOLD}`}>{a.t}</div>
                  <p className="mt-2 text-white/70">{a.d}</p>
                </div>
              ))}
            </div>
            <a href={`${site.emailHref}?subject=${encodeURIComponent("Partnership with Igor Ogai")}`} className="mt-10 inline-flex min-h-12 items-center rounded-full border border-[#b8912f]/60 px-7 py-3 text-sm font-medium text-[#e3c268] hover:border-[#e3c268]">Discuss a partnership</a>
          </div>
        </section>

        {/* Meet */}
        <section id="meet" className="border-t border-[#b8912f]/20">
          <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
            <h2 className="display text-[clamp(2.2rem,5vw,3.5rem)]">Meet Igor in person</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Estates, restaurant groups, property portfolios and partners: tell Igor a little about your
              property or project, and he will reply personally to arrange a meeting.
            </p>
            <a href={MEET_HREF} className="mt-9 inline-flex min-h-12 items-center rounded-full bg-[#b8912f] px-8 py-3 text-sm font-semibold text-black hover:bg-[#e3c268]">Request a meeting</a>
            <p className="mt-8 text-lg">
              <a href={site.phoneHref} className={`${GOLD} hover:underline`}>{site.phoneDisplay}</a>
              <span className="mx-3 text-white/30">·</span>
              <a href={site.emailHref} className={`${GOLD} hover:underline`}>{site.email}</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Igor Ogai · Long Beach, California</span>
          <div className="flex flex-wrap gap-6">
            <a href="https://iogai.com" className="hover:text-white">IOGAI</a>
            <a href="https://iogai.com/careers" className="hover:text-white">Join the team</a>
            <a href="https://iogai.com/privacy" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

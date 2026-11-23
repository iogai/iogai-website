import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/copy";

// PREVIEW of the future igorogai.com — not indexed until Igor approves.
export const metadata: Metadata = {
  title: "Igor Ogai — Done with heart. Done right. Done for good.",
  description: "Igor Ogai: born in Aksay, West Kazakhstan. Refrigeration craftsman, founder of IOGAI in California.",
  robots: { index: false, follow: false },
};

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
      "In my native language, Ogai sounds like pomogai \u2014 \u201chelp.\u201d That word became my calling.",
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

const bigJobs = [
  { t: "Supermarkets", d: "During the pandemic, when everyone stayed home, my crew kept a hypermarket's refrigeration running." },
  { t: "Blast freezers & morgues", d: "We built blast-freezer rooms, morgue refrigeration and freezers for medical equipment." },
  { t: "Transport", d: "Truck refrigeration: compressor replacement, pressure testing, leak repair." },
  { t: "Next", d: "Medical equipment service across California. Reefer trucks and port equipment of Long Beach." },
];

export default function IgorPreview() {
  return (
    <div className="bg-night text-paper">
      <header className="mx-auto flex h-20 max-w-5xl items-center justify-between px-5 sm:px-8">
        <span className="font-display text-xl tracking-[0.25em] text-accent-soft">IGOR OGAI</span>
        <nav className="hidden gap-6 text-sm text-white/60 sm:flex">
          <a href="#roots" className="hover:text-accent-soft">Story</a>
          <a href="#way" className="hover:text-accent-soft">My way</a>
          <a href="#together" className="hover:text-accent-soft">Work with me</a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-5xl items-center gap-12 px-5 pb-28 pt-10 sm:px-8 md:grid-cols-[1.15fr_1fr]">
        <div>
          <h1 className="display text-[clamp(3.25rem,9vw,6.5rem)] leading-[0.92]">Igor<br />Ogai</h1>
          <p className="mt-6 text-xl italic text-accent-soft">Done with heart. Done right. Done for good.</p>
          <p className="mt-6 max-w-md text-lg text-white/70">
            The surgeon of refrigeration. I keep what matters running: your food, your business, your peace of mind.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#roots" className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 text-sm font-medium hover:bg-accent-strong">Follow my journey</a>
            <a href="#together" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">Work with me</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-accent/30" />
          <Image src="/media/real/igor-ogai-founder.jpg" alt="Igor Ogai next to a repaired refrigeration system" width={640} height={640} priority className="relative w-full rounded-3xl object-cover" />
          <p className="relative mt-3 text-center text-sm text-white/50">Frost on the lines. Fixed and running.</p>
        </div>
      </section>

      <section id="american-story" className="border-y border-accent/20">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">A new American story</p>
          <p className="display mt-6 text-[clamp(1.6rem,3.6vw,2.4rem)] leading-snug">
            Maybe it was your grandfather. Maybe your mother. Someone arrived with skilled hands, a clear word, and nothing to fall back on.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            They worked before sunrise. They kept every promise. They built a life one honest job at a time, and the country grew stronger because they came. That is the oldest American story. It is mine too.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            I am kind to every customer and every person on my team. And I am serious about the work: I don&rsquo;t cut corners, I don&rsquo;t back down from a hard job, and I don&rsquo;t leave until it&rsquo;s cold.
          </p>
        </div>
      </section>

      {chapters.map((c, i) => (
        <section key={c.id} id={c.id} className={i % 2 ? "bg-[#020f2e]" : ""}>
          <div className="mx-auto grid max-w-5xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-[220px_1fr]">
            <div>
              <div className="font-display text-6xl text-accent/40">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-3 text-xs uppercase tracking-[0.3em] text-accent-soft">{c.place}</div>
              <h2 className="display mt-2 text-4xl">{c.title}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-white/75">
              {c.body.map((p) => (<p key={p.slice(0, 24)}>{p}</p>))}
              <p className="pt-2 text-sm italic text-accent-soft">Need help? I&rsquo;m here.</p>
            </div>
          </div>
        </section>
      ))}

      <section id="big-jobs" className="bg-[#020f2e]">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">Big jobs</p>
          <h2 className="display mt-3 text-4xl">We take the hard ones. And we finish them.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {bigJobs.map((j) => (
              <div key={j.t} className="rounded-2xl border border-white/10 p-6">
                <div className="text-lg font-semibold text-accent-soft">{j.t}</div>
                <p className="mt-2 text-white/70">{j.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="way" className="border-y border-accent/20">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">The surgeon of refrigeration</p>
          <blockquote className="display mt-6 text-[clamp(1.8rem,4.5vw,3rem)] leading-tight">
            &ldquo;When I touch a piece of equipment, it becomes mine until it runs and makes me proud. Then I hand it back.&rdquo;
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            Precise diagnosis. Clean repair. A leak fixed once is fixed for good. Not a routine — a life&rsquo;s meaning.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 py-24 sm:px-8 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">The man in the suit</p>
          <h2 className="display mt-3 text-4xl">A craftsman dresses for the work he respects.</h2>
        </div>
        <div className="space-y-5 text-lg text-white/70">
          <p>Discipline shows before a word is said. In the field it&rsquo;s clean tools and a tested meter. Everywhere else, it&rsquo;s a well-cut suit.</p>
        </div>
      </section>

      <section className="bg-[#020f2e]">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">My word</p>
          <h2 className="display mt-3 text-4xl">One promise, kept on every call.</h2>
          <blockquote className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-lg italic text-white/75">&ldquo;I fix it as if it were my own. When it meets my standard, it will serve you for years.&rdquo;<span className="mt-2 block text-sm not-italic text-white/40">My promise to every client</span></blockquote>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">Coming soon</p>
        <h2 className="display mt-3 text-4xl">The Igor Ogai Method</h2>
        <p className="mt-5 max-w-2xl text-lg text-white/70">A training course for technicians: diagnose fast, fix for good, and bring joy to every call.</p>
        <a href={`${site.emailHref}?subject=Igor%20Ogai%20Method%20waitlist`} className="mt-8 inline-flex min-h-11 items-center rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent-soft hover:bg-accent hover:text-paper">Join the waitlist</a>
      </section>

      <section id="together" className="border-t border-accent/20">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <h2 className="display text-[clamp(2.2rem,5vw,3.5rem)]">Let&rsquo;s work together</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">Fast, clean, cold — and a team that leaves you smiling. Customers, technicians, partners: if you share these values, I want to hear from you.</p>
          <p className="mt-8 text-xl">
            <a href={site.phoneHref} className="text-accent-soft hover:underline">{site.phoneDisplay}</a>
            <span className="mx-3 text-white/30">·</span>
            <a href={site.emailHref} className="text-accent-soft hover:underline">{site.email}</a>
          </p>
          <p className="mt-10 text-sm text-white/40">Founder of <Link href="/" className="underline hover:text-white">IOGAI</Link> · Long Beach, California</p>
        </div>
      </section>
    </div>
  );
}

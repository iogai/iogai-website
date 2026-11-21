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
      "I was born in Aksay, West Kazakhstan. A boy who, for a long time, didn't quite understand how the human world works. Honestly, he still doesn't. So he learned to fix what he could understand: things that are cold, broken and waiting for someone who cares.",
      "Life kept moving our family. New cities, new schools, Almaty, then Uralsk, where I graduated from School No. 3. Every move taught me how people think in a new place. I came to love it. Every place I landed, I built as if I'd stay forever.",
      "I studied finance for four and a half years and earned my bachelor's degree. It taught me numbers and discipline. My hands chose something else.",
      "I've spent my life diagnosing things the way a refrigeration tech does: find the real cause, not the symptom. One day I turned that search on myself. It led me to roots deeper than I knew.",
    ],
  },
  {
    id: "trust",
    place: "West Kazakhstan",
    title: "Trust",
    body: [
      "For more than four years I took care of the drink coolers for Tassay across West Kazakhstan, along with brands like Maxi Chai and Holiday: one-door, two-door, three-door and big glass-door units.",
      "When a supervisor called about a breakdown, I closed it within two hours or the same day. I cared about every detail, even the light inside the glass, because a bright, cold cooler sells. A whole region learned it could count on me.",
    ],
  },
  {
    id: "moscow",
    place: "Moscow",
    title: "From zero",
    body: [
      "I came to Moscow with no clients and no name. I started on Profi.ru and earned more than 280 reviews with my own hands. Soon there were two crews.",
      "Restaurants in the heart of the city waited for me. I carried every part I might need, so a fridge other techs called dead often came back to life in minutes.",
      "I named the company after my family name. Ogai sounds like pomogai, Russian for “help.” That word became my calling.",
    ],
  },
  {
    id: "california",
    place: "California",
    title: "Home",
    body: [
      "Life moved me once more, to the place I believe is closest to paradise. The people here are kind, inside and out. It inspires me every day.",
      "Here I founded IOGAI. I'm not here to take. I'm here to build: honest service, strong technicians, and a community that does the work right.",
      "Off the clock, you'll find me at Jackrabbit Boxing Academy in Long Beach. My home away from home. The ring teaches the same thing the job does: show up, stay humble, finish what you start.",
    ],
  },
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
            I help people keep what matters running: their food, their business, their peace of mind.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#roots" className="inline-flex min-h-11 items-center rounded-full bg-accent px-6 py-3 text-sm font-medium hover:bg-accent-strong">Follow my journey</a>
            <a href="#together" className="inline-flex min-h-11 items-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium hover:border-white/60">Work with me</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-accent/30" />
          <Image src="/media/real/igor-ogai-founder.jpg" alt="Igor Ogai" width={640} height={640} priority className="relative w-full rounded-3xl object-cover grayscale-[15%]" />
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

      <section id="way" className="border-y border-accent/20">
        <div className="mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">My way of working</p>
          <blockquote className="display mt-6 text-[clamp(1.8rem,4.5vw,3rem)] leading-tight">
            &ldquo;When I touch a piece of equipment, it becomes mine until it runs and makes me proud. Then I hand it back.&rdquo;
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70">
            A leak fixed once is fixed for good. I started with household refrigerators and have repaired them in the tens of thousands.
            Early mornings, late nights, no days off. It was never routine. It&rsquo;s a craft and a life&rsquo;s meaning.
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
          <p className="text-sm text-white/40">[Photo in a suit — coming soon]</p>
        </div>
      </section>

      <section className="bg-[#020f2e]">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-accent-soft">Voices</p>
          <h2 className="display mt-3 text-4xl">They said it better than I could.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Video review — Moscow", "Video review — Moscow", "Video review — California"].map((t, i) => (
              <div key={i} className="flex aspect-[9/16] items-center justify-center rounded-2xl border border-white/10 text-sm text-white/40">{t}</div>
            ))}
          </div>
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
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">Customers, technicians, partners: if you share these values, I want to hear from you.</p>
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

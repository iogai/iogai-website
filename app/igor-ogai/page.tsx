import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LegalShell } from "@/components/LegalShell";
import { site } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Igor Ogai — Founder of IOGAI, Refrigeration Technician",
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
    "https://www.thumbtack.com/ca/huntington-beach/appliance-repair/iogai-appliance-refrigeration-repair-service/service/499058102966788108",
  ],
};

export default function IgorOgaiPage() {
  return (
    <LegalShell title="Igor Ogai" updated="November 21, 2026">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <Image
        src="/media/real/igor-ogai-founder.jpg"
        alt="Igor Ogai, founder of IOGAI"
        width={640}
        height={640}
        className="rounded-2xl"
        priority
      />
      <p>
        <strong>Igor Ogai</strong> is a refrigeration technician and the founder of{" "}
        <Link href="/">IOGAI</Link> (Iogai Refrigeration Inc), an appliance and commercial
        refrigeration repair company based in Huntington Beach, California.
      </p>

      <h2>13 years in the field</h2>
      <p>
        Igor has worked in refrigeration his entire career, across three countries: West Kazakhstan,
        Moscow, and now Southern California. He started on the tools and still diagnoses jobs himself:
        walk-in coolers, restaurant refrigeration, ice machines, and high-end residential refrigerators.
      </p>

      <h2>IOGAI</h2>
      <p>
        IOGAI serves restaurants, businesses and homeowners across Orange County and Los Angeles County.
        The standard is simple: test before touching, find the real cause, fix it right the first time.
      </p>
      <ul>
        <li>Commercial refrigeration — walk-ins, reach-ins, prep tables, ice machines</li>
        <li>Residential refrigerators and freezers, including built-in brands</li>
        <li>Maintenance contracts for restaurants and businesses</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Call or text <a href={site.phoneHref}>{site.phoneDisplay}</a> · <a href={site.emailHref}>{site.email}</a>
        <br />
        Book online at <Link href="/">iogai.com</Link> · Careers: <Link href="/careers">iogai.com/careers</Link>
      </p>
    </LegalShell>
  );
}

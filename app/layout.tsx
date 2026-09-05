import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { MotionRoot } from "@/components/ui/MotionRoot";
import { Analytics } from "@/components/Analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { faq, services } from "@/lib/copy";

// LocalBusiness structured data — trust + Google rich results (rating stars, etc.)
// and a clean, factual entity for AI answer engines to cite.
const businessLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://iogai.com/#business",
  name: "IOGAI - Appliance & Refrigeration Repair Service",
  description: "Refrigeration and HVAC repair for homes and businesses across Huntington Beach, Orange County and LA.",
  telephone: "+14244217771",
  email: "support@iogai.com",
  url: "https://iogai.com",
  image: "https://iogai.com/media/real/svc-refrigerator.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "517 Frankfort Ave",
    addressLocality: "Huntington Beach",
    addressRegion: "CA",
    postalCode: "92648",
    addressCountry: "US",
  },
  areaServed: ["Huntington Beach", "Orange County", "Los Angeles"],
  serviceType: [...services.items.map((s) => s.name), "General Appliance Repair"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "118" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

// FAQ structured data — Google FAQ rich results + high-value for AI answer engines.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
};

// One Service entity per real offering, linked back to the business - lets
// an answer engine cite "IOGAI does X" for a specific service rather than
// only the business as a whole.
const servicesLd = [
  ...services.items.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.body,
    provider: { "@id": "https://iogai.com/#business" },
    areaServed: ["Huntington Beach", "Orange County", "Los Angeles"],
  })),
  // General appliance repair - the primary category on IOGAI's Google
  // Business Profile alongside refrigeration (checked 5 Sept 2026), not
  // one of the four "specialist" services the rest of the site is built
  // around, but a real offering that belongs in the machine-readable facts.
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "General Appliance Repair",
    description: "Washer, dryer, oven, and dishwasher repair for homes and businesses.",
    provider: { "@id": "https://iogai.com/#business" },
    areaServed: ["Huntington Beach", "Orange County", "Los Angeles"],
  },
];

// The scroll walkthrough video, described for video search / AI crawlers -
// uploadDate is the date this cut was produced, not a real-world event date.
const videoLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "IOGAI refrigeration repair walkthrough",
  description: "A look inside a commercial refrigeration repair: diagnostics, the compressor, and a completed repair.",
  thumbnailUrl: "https://iogai.com/media/real/video/walkthrough-poster.jpg",
  uploadDate: "2026-09-03",
  contentUrl: "https://iogai.com/media/real/video/walkthrough.mp4",
  publisher: { "@id": "https://iogai.com/#business" },
};

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IOGAI — Refrigeration & HVAC Repair | Orange County & LA",
  description:
    "Refrigerator, freezer, walk-in cooler, ice maker, marine, and HVAC repair across Orange County and LA. Same-day dispatch, 5.0 stars on Google. Book online.",
  metadataBase: new URL("https://iogai.com"),
  // Google Search Console site ownership verification (added 5 Sept 2026,
  // via HTML tag method - the property was otherwise unverified).
  verification: { google: "Zaqug4w0xnCIJGjh2PJnH3daafBuzwxMMcwgD4tUXkc" },
  keywords: [
    "refrigerator repair Huntington Beach",
    "HVAC repair Orange County",
    "commercial refrigeration repair",
    "walk-in cooler repair",
    "ice maker repair",
    "appliance repair Huntington Beach",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "IOGAI — Refrigeration & HVAC Repair | Orange County & LA",
    description:
      "Refrigeration and HVAC repair for homes and businesses. Certified technicians, same-day dispatch, 5.0 stars on Google.",
    url: "https://iogai.com",
    siteName: "IOGAI",
    type: "website",
    images: [{ url: "/media/real/svc-refrigerator.jpg", width: 1920, height: 1080, alt: "IOGAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IOGAI — Refrigeration & HVAC Repair | Orange County & LA",
    description: "Refrigeration and HVAC repair. Certified technicians, same-day dispatch.",
    images: ["/media/real/svc-refrigerator.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <MotionRoot>{children}</MotionRoot>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

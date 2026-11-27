import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { OfferBand } from "@/components/sections/OfferBand";
import { Advantages } from "@/components/sections/Advantages";
import { ScrollVideo } from "@/components/sections/ScrollVideo";
import { Guarantees } from "@/components/sections/Guarantees";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CommonProblems } from "@/components/sections/CommonProblems";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Presence } from "@/components/sections/Presence";
import { MobileCTA } from "@/components/MobileCTA";
import { faq } from "@/lib/copy";

// FAQ and video structured data live on the homepage only - the page that
// actually shows the FAQ and the walkthrough video. Emitting them sitewide
// (privacy, terms, careers...) marks up content those pages don't have.
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }}
      />
      <Nav />
      <main id="main">
        <ScrollVideo />
        <Hero />
        <OfferBand />
        <Contact />
        <Advantages />
        <Guarantees />
        <Process />
        <Testimonials />
        <CommonProblems />
        <FAQ />
        <Presence />
        <ClosingBand />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { OfferBand } from "@/components/sections/OfferBand";
import { TrustBar } from "@/components/sections/TrustBar";
import { Advantages } from "@/components/sections/Advantages";
import { ScrollVideo } from "@/components/sections/ScrollVideo";
import { Guarantees } from "@/components/sections/Guarantees";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MobileCTA } from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <ScrollVideo />
        <Hero />
        <OfferBand />
        <Contact />
        <TrustBar />
        <Advantages />
        <Guarantees />
        <Process />
        <Testimonials />
        <FAQ />
        <ClosingBand />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}

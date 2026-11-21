import { About, Numbers } from "@/components/about";
import { Contact } from "@/components/contact";
import { BehindTheScenes, FeaturedEvents, Signature } from "@/components/events";
import { Footer } from "@/components/footer";
import { Gallery, Instagram, Testimonials } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Journey, Services, Why } from "@/components/services";
import { Ticker } from "@/components/ticker";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Numbers />
      <Ticker />
      <Services />
      <Journey />
      <Why />
      <FeaturedEvents />
      <BehindTheScenes />
      <Signature />
      <Gallery />
      <Testimonials />
      <Instagram />
      <Contact />
      <Footer />
    </main>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Brands from "@/components/Brands";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header overHero />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Brands />
        <Process />
        <Testimonials />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

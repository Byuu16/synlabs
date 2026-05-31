import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Marquee from "@/components/Marquee";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Showreel from "@/components/Showreel";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white selection:text-black md:cursor-none">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <MusicPlayer />
      <Hero />
      <Showreel />
      <Marquee />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
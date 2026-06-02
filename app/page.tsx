import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import Showreel from "@/components/Showreel";

// Lazy load below-the-fold and non-critical components to optimize TTI & LCP
const Services = dynamic(() => import("@/components/Services"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"));
const FPSCounter = dynamic(() => import("@/components/FPSCounter"));
const Terminal = dynamic(() => import("@/components/Terminal"));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black md:cursor-none">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <MusicPlayer />
      <FPSCounter />
      <Terminal />
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
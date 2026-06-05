import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import TheThesis from "@/components/TheThesis";

// Lazy load below-the-fold and non-critical components to optimize TTI & LCP
const Capabilities = dynamic(() => import("@/components/Capabilities"));
const EngineeringLog = dynamic(() => import("@/components/EngineeringLog"));
const Studio = dynamic(() => import("@/components/Studio"));
const TerminalCTA = dynamic(() => import("@/components/TerminalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const MusicPlayer = dynamic(() => import("@/components/MusicPlayer"));
const FPSCounter = dynamic(() => import("@/components/FPSCounter"));

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-white selection:text-black md:cursor-none">
      <Preloader />
      <CustomCursor />
      <Navbar />
      {/* <MusicPlayer /> - Kept available if desired, but might conflict with raw engineering vibe */}
      
      <Hero />
      <TheThesis />
      <Capabilities />
      <EngineeringLog />
      <Studio />
      <TerminalCTA />
      
      <Footer />
    </main>
  );
}
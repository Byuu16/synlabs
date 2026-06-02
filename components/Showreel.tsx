"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Showreel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section 
        ref={containerRef} 
        className="relative w-full bg-black py-32 px-4 sm:px-8 md:px-12 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <motion.div 
          style={{ scale }}
          className="relative z-10 w-full max-w-7xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer group border border-white/10 shadow-2xl"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Muted auto-playing background video placeholder */}
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 group-hover:scale-105"
          >
            {/* Replace this src with your actual compressed .mp4 file placed in /public */}
            <source src="/Intro.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.8)_100%)] transition-opacity duration-700 group-hover:opacity-50" />

          {/* Large text behind button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase text-white/10 whitespace-nowrap tracking-tighter mix-blend-overlay">
              Watch Showreel
            </h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Magnetic strength={0.4}>
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-95 transition-transform duration-500 ease-out shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                <Play className="w-8 h-8 md:w-12 md:h-12 text-black fill-black ml-2" />
              </div>
            </Magnetic>
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-12">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white hover:scale-110 transition-all z-50"
          >
            <X className="w-10 h-10 md:w-12 md:h-12" />
          </button>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-7xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 flex items-center justify-center"
          >
            <video 
              autoPlay 
              controls 
              className="w-full h-full object-contain"
            >
              {/* Replace with your high quality showreel video */}
              <source src="/Intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      )}
    </>
  );
}

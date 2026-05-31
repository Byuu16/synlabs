"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";

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
        className="relative w-full bg-[#050505] py-32 px-4 sm:px-8 md:px-12 flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <motion.div 
          style={{ scale }}
          className="relative z-10 w-full max-w-7xl aspect-video bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer group border border-white/10"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Abstract Placeholder Video Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.8)_100%)]" />

          {/* Large text behind button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase text-white/5 whitespace-nowrap tracking-tighter">
              Watch Showreel
            </h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-90 transition-transform duration-500 ease-out">
              <Play className="w-8 h-8 md:w-12 md:h-12 text-black fill-black ml-2" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-8 right-8 text-white hover:scale-110 transition-transform"
          >
            <X className="w-12 h-12" />
          </button>
          <div className="w-full max-w-6xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 flex items-center justify-center">
             <p className="text-zinc-500 font-mono text-xl">Video Integration Goes Here</p>
          </div>
        </div>
      )}
    </>
  );
}

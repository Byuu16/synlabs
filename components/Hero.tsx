"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center pb-20 px-4 sm:px-8 md:px-12 pt-27"
    >
      {/* Precision Grid Background - keeping the industrial feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-start text-left md:items-center md:text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-start md:items-center text-xs sm:text-sm font-mono uppercase tracking-[0.2em] gap-2"
        >
          <span className="text-zinc-500">// INITIALIZING_SYSTEM_ARCHITECTURE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-5xl sm:text-7xl md:text-[6.5rem] font-medium tracking-tighter leading-[1.05] text-white mb-8"
        >
          Engineering <br className="hidden sm:block" /> Intelligent Systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl md:mx-auto mb-12"
        >
          We forge the link between physical infrastructure, digital architecture, and artificial intelligence. SYNLABS is an engineering studio building unified ecosystems for the modern industrial age.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="flex flex-col sm:flex-row items-start md:items-center justify-start md:justify-center gap-4 w-full"
        >
          <button className="w-full sm:w-auto group relative overflow-hidden rounded-sm bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all hover:bg-zinc-200">
            <span className="flex items-center justify-center gap-2">
              Explore Capabilities
              <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          <button className="w-full sm:w-auto group rounded-sm border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold tracking-wide text-white transition-all hover:bg-white/5 font-mono">
            View Engineering Log
          </button>
        </motion.div>

      </motion.div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-12 left-4 sm:left-8 md:left-12 flex flex-col gap-2 z-30 hidden md:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-[0.25em]"
        >
          <span>SYNLABS_CORE_V2.0</span>
          <div className="w-8 h-[1px] bg-white/10" />
          <span>STATUS: ONLINE</span>
        </motion.div>
      </div>

    </section>
  );
}
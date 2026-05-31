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

  // Removed the y1 parallax transform to prevent overlap and relative movement
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-end pb-40 px-4 sm:px-8 md:px-12 pt-32"
    >
      {/* Precision Grid Background - Anti-mainstream aesthetic */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-12">

        {/* Huge Slogan Typography */}
        <div className="flex flex-col uppercase font-black leading-[0.85] tracking-tighter text-[16vw] lg:text-[11vw] mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 120, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.1 }}
            className="text-white hover:text-[#4E85BF] transition-colors duration-500 cursor-default"
          >
            Build.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
            className="text-white hover:text-[#89AACC] transition-colors duration-500 cursor-default"
          >
            Test.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.3 }}
            className="text-white hover:text-[#4E85BF] transition-colors duration-500 cursor-default"
          >
            Grow.
          </motion.div>
        </div>

        {/* Right side context */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 2.6 }}
          className="lg:max-w-md flex flex-col gap-8 pb-4"
        >
          <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
            We engineer unfair advantages for ambitious startups. No fluff, just scalable architecture and ruthless execution to <span className="text-white font-medium">grow your business</span>.
          </p>

          <div className="flex items-center gap-4">
            <button className="group relative overflow-hidden rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:scale-105">
              <span className="relative z-10 flex items-center gap-3 transition-transform duration-500 ease-out group-hover:-translate-y-12">
                Start Project
                <MoveRight className="h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-[#4E85BF] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="absolute inset-0 z-10 flex items-center justify-center gap-3 -translate-y-full text-white transition-transform duration-500 ease-out group-hover:translate-y-0">
                Let's Go
                <MoveRight className="h-5 w-5" />
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Aesthetic Accents */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 3.0 }}
        className="absolute right-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block origin-top"
      />
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 md:left-12 flex flex-col gap-2 z-30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="flex items-center gap-4 text-[10px] font-mono text-white uppercase tracking-[0.25em] px-3"
        >
          <span>EST. 2026</span>
          <div className="w-6 h-[1px] bg-white/50" />
          <span>SYNTECH AGENCY</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="flex items-center gap-2 mt-2 px-3"
        >
          <span className="text-[10px] uppercase tracking-widest text-white">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[1px] h-6 bg-gradient-to-b from-white to-transparent"
          />
        </motion.div>
      </div>

      {/* Decorative large circle to break the grid slightly */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 2.5 }}
        className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#4E85BF]/10 to-transparent blur-3xl pointer-events-none"
      />
    </section>
  );
}
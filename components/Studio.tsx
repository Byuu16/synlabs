"use client";

import { motion } from "framer-motion";

export default function Studio() {
  return (
    <section className="relative w-full bg-black py-32 px-4 sm:px-8 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="md:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 font-mono text-xs text-zinc-500 uppercase tracking-widest"
          >
            // ORIGIN_AND_FUTURE
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]"
          >
            Founded by engineers. Built for complexity.
          </motion.h2>
        </div>

        <div className="md:w-2/3 flex flex-col gap-8 justify-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg text-zinc-400 font-light leading-relaxed"
          >
            SYNLABS was forged by computer engineers who saw a gap between hardware manufacturing and modern software deployment. We understood that bolting a flashy web interface onto legacy hardware wasn't enough. The entire system needs to be architected together.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg text-zinc-400 font-light leading-relaxed"
          >
            Today, we are a studio of systems engineers and AI researchers. Tomorrow, we integrate a dedicated creative department to ensure our industrial solutions are as intuitive as they are powerful. We don't just build systems; we build experiences that operators and stakeholders trust.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-4"
          >
             {["HARDWARE LAB", "SOFTWARE ARCHITECTURE", "AI RESEARCH", "FUTURE: CREATIVE DIR"].map((tag, i) => (
                <span key={i} className="text-[10px] font-mono text-zinc-500 border border-white/10 px-3 py-1.5 rounded-sm bg-white/[0.02]">
                  {tag}
                </span>
             ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
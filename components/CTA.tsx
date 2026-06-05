"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full min-h-[60vh] bg-black flex items-center justify-center overflow-hidden px-4 py-32 border-b border-white/10">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto"
      >
        <motion.h2 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-tight text-white mb-8"
        >
          Let's engineer <br /> something exceptional.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Partner with our engineering team to build scalable, intelligent systems for your next major milestone.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded bg-white px-8 py-4 text-sm font-semibold tracking-wide text-black transition-all hover:bg-zinc-200"
        >
          <span className="flex items-center justify-center gap-2">
            Start a Project
            <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
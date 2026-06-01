"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative w-full min-h-[80vh] bg-black flex items-center justify-center overflow-hidden px-4 py-32">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto mix-blend-difference"
      >
        <motion.h2 
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] text-white mb-12"
        >
          Ready to <br /> Dominate?
        </motion.h2>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-none bg-white px-12 py-6 text-sm font-black uppercase tracking-widest text-black transition-all hover:scale-105"
        >
          <span className="relative z-10 flex items-center gap-4 transition-transform duration-500 ease-out group-hover:-translate-y-12">
            Initiate Project
            <MoveRight className="h-6 w-6" />
          </span>
          <div className="absolute inset-0 bg-zinc-300 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <span className="absolute inset-0 z-10 flex items-center justify-center gap-4 -translate-y-full text-black transition-transform duration-500 ease-out group-hover:translate-y-0">
            Let's Go
            <MoveRight className="h-6 w-6" />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
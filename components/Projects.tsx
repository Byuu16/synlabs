"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  { id: 1, title: "NEXUS", category: "FINTECH SYSTEM", year: "2026" },
  { id: 2, title: "OBLIVION", category: "E-COMMERCE", year: "2025" },
  { id: 3, title: "AURA", category: "AI INFRASTRUCTURE", year: "2025" },
  { id: 4, title: "VERTEX", category: "BRAND IDENTITY", year: "2024" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-black py-32 px-4 sm:px-8 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Selected <span className="text-zinc-600">Work.</span>
          </h2>
          <button className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity">
            View Archive
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col border-t border-white/10"
        >
          {projects.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onViewportEnter={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) setHovered(index);
              }}
              onViewportLeave={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768 && hovered === index) setHovered(null);
              }}
              viewport={{ margin: "-35% 0px -35% 0px", amount: "some" }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-white/10 cursor-pointer transition-all duration-500 ${
                hovered === index ? "px-4 md:px-8" : ""
              }`}
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-zinc-500 mb-2 block">0{item.id}</span>
                <h3 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter transition-all duration-300 ${
                  hovered === index 
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500" 
                    : "text-white"
                }`}>
                  {item.title}
                </h3>
              </div>
              
              <div className="mt-8 md:mt-0 flex items-center gap-8 md:gap-16">
                <div className="flex flex-col gap-1 text-left md:text-right">
                  <span className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{item.category}</span>
                  <span className="text-xs font-mono text-zinc-600">{item.year}</span>
                </div>
                <div className={`h-16 w-16 rounded-full border border-white/20 flex items-center justify-center transition-colors duration-300 md:flex ${
                  hovered === index ? "bg-white text-black" : "text-white"
                }`}>
                   <ArrowUpRight className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Products Launched" },
  { value: "<100ms", label: "Average Latency" },
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "$0", label: "Wasted Budget" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    scale: 1, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-black border-b border-white/10 py-32 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        
        <div className="lg:w-1/2 lg:sticky lg:top-32">
          <motion.h2 
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 leading-[0.9]"
          >
            The Unfair <br /> Advantage.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-zinc-400 font-light leading-relaxed max-w-md border-l-2 border-white/20 pl-6"
          >
            We don't build generic templates. We construct high performance digital infrastructure for brands that refuse to blend in.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 w-full"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={statVariants}
              className="bg-black p-10 flex flex-col justify-center items-center text-center group hover:bg-zinc-900 transition-colors"
            >
              <span className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
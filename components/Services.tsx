"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, ShoppingCart, Rocket, MoveRight } from "lucide-react";

const services = [
  {
    title: "ENGINEERING",
    description: "Scalable, high performance web applications built with ruthless precision.",
    icon: Code2,
  },
  {
    title: "INTERFACE",
    description: "Anti mainstream, conversion optimized design that demands attention.",
    icon: PenTool,
  },
  {
    title: "COMMERCE",
    description: "High volume transactional systems engineered for zero downtime.",
    icon: ShoppingCart,
  },
  {
    title: "VENTURE",
    description: "Rapid MVP deployment to validate and dominate your market.",
    icon: Rocket,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function Services() {
  return (
    <section className="relative w-full bg-[#050505] border-b border-white/10 pt-32 pb-24 px-4 sm:px-8 md:px-12">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            Core <span className="text-zinc-600">Capabilities.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10"
        >
          {services.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-[#050505] p-12 hover:bg-white transition-colors duration-500 overflow-hidden cursor-default"
            >
              <div className="flex flex-col h-full justify-between">
                <div className="mb-12 inline-flex">
                  <item.icon className="h-10 w-10 text-white group-hover:text-black transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-white group-hover:text-black uppercase tracking-tight mb-4 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-600 font-medium text-lg max-w-sm transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-12 right-12 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                 <MoveRight className="h-10 w-10 text-black" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

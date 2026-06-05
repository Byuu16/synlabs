"use client";

import { motion } from "framer-motion";

const processSteps = [
  { id: "01", title: "Build", description: "Transform ideas into working systems." },
  { id: "02", title: "Test", description: "Validate performance, usability, and reliability." },
  { id: "03", title: "Grow", description: "Grow products and operations through technology." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-black border-b border-white/10 py-32 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
        
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <motion.h2 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6"
          >
            Engineering <br /> Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-zinc-400 font-light leading-relaxed max-w-sm"
          >
            A systematic approach to developing intelligent systems. We prioritize architecture, testing, and scalability from day one.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:w-2/3 flex flex-col gap-12 w-full"
        >
          {processSteps.map((step, i) => (
            <motion.div 
              key={i}
              variants={stepVariants}
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-12 border-b border-white/10 pb-12 last:border-0 last:pb-0 group"
            >
              <span className="text-sm font-mono text-zinc-600 mt-2 shrink-0">
                {step.id}
              </span>
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 transition-colors group-hover:text-zinc-300">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-lg font-light leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
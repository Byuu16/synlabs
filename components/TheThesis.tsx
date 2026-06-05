"use client";

import { motion } from "framer-motion";

const dataPoints = [
  { id: "01.", label: "Hardware Engineer" },
  { id: "02.", label: "Software Engineer" },
  { id: "03.", label: "AI Integration" },
  { id: "04.", label: "Secure Connectivity" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function TheThesis() {
  return (
    <section id="process" className="relative w-full bg-black border-b border-white/10 py-32 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 font-mono text-xs text-zinc-500 uppercase tracking-widest"
        >
          // THE_SYNLABS_THESIS
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
              We do not build software in a vacuum.
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
              True innovation requires mastering the entire stack. We are a collective of hardware engineers, software architects, and AI specialists. We reject fragmented solutions.
            </p>
            <p className="text-lg text-zinc-400 font-light leading-relaxed">
              We design, prototype, and deploy integrated systems where atoms and bytes communicate seamlessly.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {dataPoints.map((point) => (
                <motion.div 
                  key={point.id}
                  variants={itemVariants}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="font-mono text-zinc-600 text-sm">{point.id}</span>
                  <span className="font-medium text-white tracking-wide">{point.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
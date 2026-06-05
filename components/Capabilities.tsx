"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Fingerprint, Network } from "lucide-react";
import { useState } from "react";

const capabilities = [
  {
    title: "Embedded Systems & Hardware",
    description: "Precision electronics, PCB design, and firmware developed for extreme environments and edge computing.",
    icon: Cpu,
  },
  {
    title: "Enterprise Software Architecture",
    description: "Resilient, scalable backends and high performance interfaces designed to process massive telemetry and operational data.",
    icon: Server,
  },
  {
    title: "Artificial Intelligence Integration",
    description: "Beyond generic LLMs. We deploy localized machine learning models, computer vision, and predictive algorithms directly onto edge devices and core infrastructure.",
    icon: Fingerprint,
  },
  {
    title: "Industrial IoT & Connectivity",
    description: "Secure, low latency communication protocols bridging physical sensors with cloud-native control centers.",
    icon: Network,
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

export default function Capabilities() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="capabilities" className="relative w-full bg-black border-b border-white/10 pt-32 pb-24 px-4 sm:px-8 md:px-12">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 font-mono text-xs text-zinc-500 uppercase tracking-widest"
        >
          // CAPABILITIES_OVERVIEW
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Full Spectrum Engineering.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-white/10"
        >
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onViewportEnter={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768) setHovered(index);
              }}
              onViewportLeave={() => {
                if (typeof window !== "undefined" && window.innerWidth < 768 && hovered === index) setHovered(null);
              }}
              viewport={{ margin: "-30% 0px -30% 0px", amount: "some" }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`relative p-10 md:p-12 transition-colors duration-500 overflow-hidden cursor-default border-r border-b border-white/10 ${
                hovered === index ? "bg-white/5" : "bg-black"
              }`}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="mb-12 inline-flex">
                  <item.icon className={`h-8 w-8 transition-colors duration-500 ${hovered === index ? "text-white" : "text-zinc-600"}`} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="font-light text-sm md:text-base max-w-md text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
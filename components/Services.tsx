"use client";

import { motion } from "framer-motion";
import { Cpu, Bot, Globe, Box, MoveRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const capabilities = [
  {
    title: "EMBEDDED & IOT",
    description: "Designing connected devices and intelligent hardware systems.",
    icon: Cpu,
  },
  {
    title: "AI AUTOMATION",
    description: "Building intelligent workflows, AI agents, and business automation systems.",
    icon: Bot,
  },
  {
    title: "WEB PLATFORMS",
    description: "Developing scalable applications and modern digital products.",
    icon: Globe,
  },
  {
    title: "PRODUCT DEVELOPMENT",
    description: "End to end engineering from concept to production ready scalable systems.",
    icon: Box,
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
  const [hovered, setHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section className="relative w-full bg-black border-b border-white/10 pt-32 pb-24 px-4 sm:px-8 md:px-12">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg font-light">
            We engineer intelligent solutions that connect hardware, software, and AI.
          </p>
        </motion.div>

        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="group grid grid-cols-1 md:grid-cols-2 gap-4"
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
              className="spotlight-card relative rounded-2xl bg-white/5 overflow-hidden p-[1px] cursor-default"
            >
              {/* Spotlight Glowing Border effect */}
              <div 
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%)`
                }}
              />
              
              {/* Inner Card (covers the middle, leaving only the 1px border glowing) */}
              <div className="relative h-full w-full rounded-[15px] bg-[#0a0a0a] p-10 md:p-12 overflow-hidden">
                {/* Inner Glow when hovering */}
                <div 
                  className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.03), transparent 40%)`
                  }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="mb-12 inline-flex">
                    <item.icon className={`h-8 w-8 transition-colors duration-500 ${hovered === index ? "text-white" : "text-white/60"}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-white">
                      {item.title}
                    </h3>
                    <p className="font-light text-base max-w-sm text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute top-12 right-12 z-10 transition-all duration-500 ${
                  hovered === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}>
                  <MoveRight className="h-6 w-6 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
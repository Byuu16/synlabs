"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  { 
    id: "ALPHA-01", 
    title: "Autonomous Sensor Grid Alpha", 
    category: "EMBEDDED AI", 
    problem: "Legacy environmental monitoring systems were reactive, requiring manual data polling and exhibiting high latency in critical zones.",
    solution: "Architected a self sustaining mesh network of environmental sensors powered by edge AI to predict equipment failure in real time.",
    tech: ["Rust", "Embedded Linux", "TensorFlow Lite", "LoRaWAN"],
    outcome: "Achieved 99.9% uptime with predictive maintenance alerting, reducing catastrophic failures by 85%."
  },
  { 
    id: "BETA-02", 
    title: "Project Nexus Backend", 
    category: "SYSTEM ARCHITECTURE", 
    problem: "Existing monolithic infrastructure could not scale to handle real time telemetry from thousands of deployed industrial IoT units.",
    solution: "Engineered a distributed, event driven microservices architecture optimized for high-throughput, low latency telemetry processing.",
    tech: ["Go", "Apache Kafka", "PostgreSQL", "Docker/Kubernetes"],
    outcome: "Processed 500K events/second with sub-10ms latency, enabling real-time global fleet monitoring."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
  },
};

export default function EngineeringLog() {
  return (
    <section className="relative w-full bg-black py-32 px-4 sm:px-8 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 font-mono text-xs text-zinc-500 uppercase tracking-widest"
        >
          // DEPLOYED_SYSTEMS
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Systems in the wild.
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-xl">
              Engineering case studies detailing our approach to complex technical challenges.
            </p>
          </div>
          <button className="text-sm font-semibold text-white tracking-wide flex items-center gap-2 hover:text-zinc-300 transition-colors font-mono uppercase">
            View All Documentation
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-sm overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-4 gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-zinc-500">ID: {item.id}</span>
                  <span className="text-[10px] font-mono text-zinc-300 border border-white/20 bg-white/5 py-1 px-2 rounded-sm tracking-widest">
                    {item.category}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                   {item.tech.map((techItem, tIndex) => (
                    <span key={tIndex} className="text-[10px] font-mono text-zinc-400 py-1 px-2 rounded-sm bg-black border border-white/5">
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-10 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <h3 className="text-2xl font-semibold tracking-tight text-white mb-4">
                    {item.title}
                  </h3>
                  <button className="mt-4 text-xs font-mono font-medium text-white flex items-center gap-2 hover:text-zinc-400 transition-colors group">
                    Read Technical Log
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wide">Problem Scope</h4>
                    <p className="text-zinc-300 text-sm font-light leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wide">Deployed Solution</h4>
                    <p className="text-zinc-300 text-sm font-light leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
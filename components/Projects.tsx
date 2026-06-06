"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  { 
    id: "01", 
    title: "Nexus Infrastructure", 
    category: "SYSTEM ARCHITECTURE", 
    problem: "Legacy financial infrastructure failing under high transaction volume.",
    solution: "Engineered a distributed microservices architecture with real-time processing.",
    tech: ["Go", "Kafka", "PostgreSQL", "React"],
    outcome: "Zero downtime during peak load, 400% increase in transaction throughput."
  },
  { 
    id: "02", 
    title: "Aura Intelligence", 
    category: "AI AUTOMATION", 
    problem: "Manual customer support operations causing severe bottlenecks.",
    solution: "Developed an autonomous LLM-powered agent system integrated with CRM.",
    tech: ["Python", "LangChain", "FastAPI", "Next.js"],
    outcome: "Reduced response time by 98% and automated 75% of level 1 tickets."
  },
  { 
    id: "03", 
    title: "Vertex Hardware", 
    category: "EMBEDDED SYSTEMS", 
    problem: "Inefficient supply chain tracking leading to lost inventory.",
    solution: "Built custom IoT sensor firmware and a centralized dashboard for real-time monitoring.",
    tech: ["C++", "Rust", "Node.js", "AWS IoT"],
    outcome: "Recovered $2M in lost inventory within the first 6 months of deployment."
  },
];

function TiltCard({ item, index }: { item: typeof caseStudies[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // Only apply tilt on larger screens where hovering is natural
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col lg:flex-row border border-white/10 bg-white/[0.02] p-8 md:p-12 hover:bg-white/[0.04] transition-colors rounded-sm group perspective-[1000px]"
    >
      {/* Subtle hover gloss effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none rounded-sm transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.02) 25%, transparent 30%)",
        }}
      />

      {/* Content wrapper translated slightly on Z-axis to enhance 3D feel */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full" style={{ transform: "translateZ(20px)" }}>
        {/* Left Column - Title & Category */}
        <div className="lg:w-1/3 mb-12 lg:mb-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0">
          <span className="text-xs font-mono text-zinc-500 mb-4 block">CASE STUDY {item.id}</span>
          <h3 className="text-3xl font-semibold tracking-tight text-white mb-4 transition-colors group-hover:text-zinc-200">
            {item.title}
          </h3>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest bg-white/5 py-1 px-3 rounded inline-block">
            {item.category}
          </span>
        </div>
        
        {/* Right Column - Details */}
        <div className="lg:w-2/3 lg:pl-12 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">Problem</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{item.problem}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">Solution</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">{item.solution}</p>
            </div>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 mb-3 uppercase tracking-wide">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((techItem, tIndex) => (
                  <span key={tIndex} className="text-xs font-mono text-zinc-400 border border-white/10 py-1 px-2 rounded-sm bg-black">
                    {techItem}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wide">Outcome</h4>
              <p className="text-white text-sm font-medium leading-relaxed">{item.outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
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
          <div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
              Featured Systems
            </h2>
            <p className="text-zinc-400 text-lg font-light max-w-xl">
              Engineering case studies detailing our approach to complex technical challenges.
            </p>
          </div>
          <button className="text-sm font-semibold text-white tracking-wide flex items-center gap-2 hover:text-zinc-300 transition-colors">
            View All Documentation
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </motion.div>

        <div className="flex flex-col gap-16 perspective-[1200px]">
          {caseStudies.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
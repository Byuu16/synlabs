"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Magnetic from "./Magnetic";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }) + " WIB"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer 
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white pt-32 pb-8 px-6 md:px-12 overflow-hidden flex flex-col justify-between rounded-t-[3rem] mt-[-3rem] z-20 border-t border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
    >
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/noise.png")', backgroundRepeat: 'repeat' }}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      {/* Top Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
        
        {/* Left: Brand / Moto */}
        <div className="flex flex-col gap-8 max-w-md">
          <div className="flex items-center gap-4">
            <img src="/logosynlabs.png" alt="SynLabs Logo" className="w-12 h-12 object-contain filter invert" />
            <span className="font-bold text-3xl tracking-tighter uppercase">SynLabs.</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
            Let's build the <br />
            <span className="text-zinc-500 italic">future together.</span>
          </h3>
          <p className="text-zinc-400 font-light text-lg">
            Engineering intelligent systems for the modern web. From hardware to AI-driven software.
          </p>
          <div className="mt-4">
            <Magnetic strength={0.2}>
              <a href="mailto:hello@synlabs.com" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors">
                Start a Project
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex gap-16 md:gap-24 pt-4">
          {/* Navigation */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Navigation</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium uppercase tracking-wider">
              {['Home', 'Capabilities', 'Engineering', 'Studio'].map((item) => (
                <li key={item}>
                  <Magnetic strength={0.2}>
                    <a href={`#${item.toLowerCase()}`} className="text-zinc-300 hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                      {item}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Socials</h4>
            <ul className="flex flex-col gap-5 text-sm font-medium uppercase tracking-wider">
              {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((item) => (
                <li key={item}>
                  <Magnetic strength={0.2}>
                    <a href="#" className="text-zinc-300 hover:text-white transition-colors inline-block relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                      {item}
                    </a>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Massive Parallax Typography */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full flex justify-center items-end mt-auto pointer-events-none select-none overflow-hidden"
      >
        <h1 className="text-[17vw] leading-[0.72] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.05)' }}>
          SYNLABS
        </h1>
      </motion.div>

      {/* Bottom Copyright Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-16 pt-8 border-t border-white/10 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-500 text-xs font-mono tracking-widest uppercase">
          <span>© {currentYear} SYNLABS</span>
          <span className="hidden md:inline-block w-1 h-1 bg-zinc-700 rounded-full" />
          <span>ALL RIGHTS RESERVED.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-zinc-500 text-xs font-mono tracking-widest uppercase">
            LOCAL TIME: {time || "00:00 WIB"}
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
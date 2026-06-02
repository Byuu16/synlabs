"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FPSCounter() {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const updateFPS = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      animationFrameId = requestAnimationFrame(updateFPS);
    };

    animationFrameId = requestAnimationFrame(updateFPS);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5 }}
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-1 pointer-events-none mix-blend-difference hidden md:flex"
    >
      <div className="flex items-center gap-2 text-[10px] font-mono text-white uppercase tracking-widest">
        <div className={`w-1.5 h-1.5 rounded-full ${fps >= 30 ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
        <span>SYSPERF</span>
      </div>
      <div className="text-white font-mono text-xs">
        {fps} FPS <span className="text-zinc-500">| OPTIMIZED</span>
      </div>
    </motion.div>
  );
}

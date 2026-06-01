"use client";

import { motion } from "framer-motion";

const text = "NO FLUFF • JUST RESULTS • SCALABLE ARCHITECTURE • RUTHLESS EXECUTION • ";

export default function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/10 bg-black py-4 sm:py-6 z-20">
      <motion.div
        className="whitespace-nowrap flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        <span className="mx-4 text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">{text}</span>
        <span className="mx-4 text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">{text}</span>
        <span className="mx-4 text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">{text}</span>
        <span className="mx-4 text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">{text}</span>
      </motion.div>
    </div>
  );
}

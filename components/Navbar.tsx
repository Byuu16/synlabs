"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 px-4 sm:px-8 md:px-12 py-6 flex items-center justify-between mix-blend-difference pointer-events-none"
    >
      <div className="text-white font-black text-xl tracking-tighter uppercase pointer-events-auto cursor-pointer">
        Syntech<span className="text-zinc-500">.</span>
      </div>
      <button className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity pointer-events-auto">
        <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Menu</span>
        <Menu className="h-6 w-6" />
      </button>
    </motion.nav>
  );
}
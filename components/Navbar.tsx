"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { title: "Home", href: "#" },
  { title: "Work", href: "#" },
  { title: "Services", href: "#" },
  { title: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 px-4 sm:px-8 md:px-12 py-6 flex items-center justify-between mix-blend-difference pointer-events-none"
      >
        <div className="flex items-center gap-1.5 pointer-events-auto cursor-pointer">
          <img src="/logo2.png" alt="Syntech Logo" className="w-10 h-10 object-contain" />
          <div className="text-white font-black text-2xl leading-none tracking-tighter uppercase mt-1">
            Syntech<span className="text-zinc-500">.</span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity pointer-events-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Menu</span>
          <Menu className="h-6 w-6" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col px-4 sm:px-8 md:px-12 py-6 overflow-y-auto"
            data-lenis-prevent="true"
          >
            {/* Header inside menu */}
            <div className="flex items-center justify-between w-full shrink-0">
              <div className="flex items-center gap-1.5 cursor-pointer">
                <img src="/logo2.png" alt="Syntech Logo" className="w-10 h-10 object-contain" />
                <div className="font-black text-2xl leading-none tracking-tighter uppercase mt-1">
                  Syntech<span className="text-zinc-500">.</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center gap-4 md:gap-8 mt-12 py-12 min-h-min">
              {navLinks.map((link, i) => (
                <div key={i} className="overflow-hidden shrink-0">
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-5xl md:text-8xl font-black uppercase tracking-tighter hover:text-zinc-500 transition-colors"
                  >
                    {link.title}
                  </motion.a>
                </div>
              ))}
            </div>

            {/* Footer inside menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 gap-8 shrink-0 mt-auto"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Get in touch</span>
                <a href="mailto:hello@syntech.agency" className="text-lg md:text-xl font-medium hover:text-zinc-400 transition-colors">hello@syntech.agency</a>
              </div>
              <div className="flex flex-wrap gap-8">
                <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">Twitter</a>
                <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors">Instagram</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
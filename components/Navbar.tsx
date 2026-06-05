"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { title: "HOME", href: "#hero", id: "hero" },
  { title: "CAPABILITIES", href: "#capabilities", id: "capabilities" },
  { title: "PROCESS", href: "#process", id: "process" },
  { title: "CONTACT", href: "#contact", id: "contact" },
];

const disciplines = [
  "Embedded Systems",
  "IoT Infrastructure",
  "Software Engineering",
  "AI Integration"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Manage body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Track active section for navigation highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } // Triggers when section crosses the middle of the viewport
    );

    // Give the DOM a moment to render sections before observing
    setTimeout(() => {
      navLinks.forEach((link) => {
        const el = document.getElementById(link.id);
        if (el) observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Wait for menu close animation before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 400);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 w-full z-50 px-4 sm:px-8 md:px-12 py-6 flex items-center justify-between mix-blend-difference pointer-events-none"
      >
        <div 
          className="flex items-center gap-0 pointer-events-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          onClick={(e) => handleNavClick(e as any, 'hero')}
          tabIndex={0}
          role="button"
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick(e as any, 'hero')}
        >
          <img src="/logosynlabs.png" alt="SynLabs Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain" />
          <div className="text-white font-black text-2xl leading-none tracking-tighter uppercase font-sans">
            SynLabs<span className="text-zinc-500">.</span>
          </div>
        </div>
        <button 
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
          aria-expanded={isOpen}
          className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity pointer-events-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
        >
          <span className="text-xs font-mono font-medium uppercase tracking-widest hidden sm:block">Menu</span>
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
            role="dialog"
            aria-modal="true"
            data-lenis-prevent="true"
          >
            {/* Header inside menu */}
            <div className="flex items-center justify-between w-full shrink-0">
              <div 
                className="flex items-center gap-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                onClick={(e) => handleNavClick(e as any, 'hero')}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => e.key === 'Enter' && handleNavClick(e as any, 'hero')}
              >
                <img src="/logosynlabs.png" alt="SynLabs Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain" />
                <div className="font-black text-2xl leading-none tracking-tighter uppercase font-sans">
                  SynLabs<span className="text-zinc-500">.</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                aria-label="Close Menu"
                className="flex items-center gap-2 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
              >
                <span className="text-xs font-mono font-medium uppercase tracking-widest hidden sm:block">Close</span>
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col lg:flex-row mt-16 md:mt-24 gap-16 lg:gap-24 min-h-min">
              
              {/* Left Side: Navigation Links */}
              <div className="lg:w-1/2 flex flex-col justify-center gap-6 md:gap-8">
                {navLinks.map((link, i) => (
                  <div key={i} className="overflow-hidden shrink-0 relative flex items-center">
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium uppercase tracking-tighter transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm group flex items-center gap-6 ${activeSection === link.id ? 'text-white' : 'text-zinc-600 hover:text-white'}`}
                    >
                      <span className="relative z-10">{link.title}</span>
                      {activeSection === link.id && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="h-2 w-2 md:h-3 md:w-3 bg-white rounded-full hidden md:block mt-2"
                        />
                      )}
                    </motion.a>
                  </div>
                ))}
              </div>

              {/* Right Side: Information */}
              <div className="lg:w-1/2 flex flex-col justify-center gap-16">
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                    // DISCIPLINES
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {disciplines.map((item, idx) => (
                      <li key={idx} className="text-lg md:text-xl font-light text-zinc-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6">
                    // ABOUT SYNLABS
                  </h3>
                  <p className="text-lg md:text-xl font-light text-zinc-300 leading-relaxed max-w-sm">
                    Engineering intelligent systems through hardware, software, connectivity, and artificial intelligence.
                  </p>
                </motion.div>

              </div>
            </div>

            {/* Footer inside menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 pt-12 gap-12 shrink-0 border-t border-white/10 mt-12"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">// GET IN TOUCH</span>
                <a href="mailto:hello@synlabs.com" className="text-xl md:text-2xl font-light hover:text-zinc-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm">
                  hello@synlabs.com
                </a>
              </div>
              <div className="flex flex-wrap gap-8 md:gap-12">
                {["LinkedIn", "GitHub", "Instagram"].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-sm font-mono text-zinc-400 uppercase tracking-widest hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black rounded-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
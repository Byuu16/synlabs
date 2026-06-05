"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([
    { type: 'output', text: 'SynLabs OS v1.0.0 initializing...' },
    { type: 'output', text: 'Type "help" for a list of available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on backtick (`) or Ctrl+K
      if ((e.ctrlKey && e.key === 'k') || e.key === '`') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input' as const, text: `guest@synlabs:~$ ${cmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'output', text: 'Available commands: about, services, stack, clear, exit' });
        break;
      case 'about':
        newHistory.push({ type: 'output', text: 'SynLabs. We engineer unfair advantages for ambitious startups.' });
        break;
      case 'services':
        newHistory.push({ type: 'output', text: '1. Engineering\n2. Interface\n3. Commerce\n4. Venture' });
        break;
      case 'stack':
        newHistory.push({ type: 'output', text: 'Next.js, React, TailwindCSS, Framer Motion, WebGL (incoming...)' });
        break;
      case 'clear':
        setHistory([]);
        setInput("");
        return;
      case 'exit':
        setIsOpen(false);
        setInput("");
        return;
      default:
        newHistory.push({ type: 'output', text: `Command not found: ${cmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-4 md:inset-20 z-[300] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden flex flex-col font-mono text-sm shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <span className="ml-2 text-zinc-500 text-xs">root@synlabs:~</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 p-6 overflow-y-auto text-green-500/90 selection:bg-green-500/30 custom-scrollbar">
            {history.map((line, i) => (
              <div key={i} className={`mb-2 ${line.type === 'input' ? 'text-zinc-400' : 'whitespace-pre-wrap'}`}>
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-green-500">guest@synlabs:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-green-500 placeholder-green-900 caret-green-500 w-full"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalCTA() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ type: 'input' | 'output', text: string }[]>([
    { type: 'output', text: '> SYNLABS INTAKE PROTOCOL v2.0' },
    { type: 'output', text: '> Secure connection established.' },
    { type: 'output', text: '> Type "initiate" to begin project scoping, or "contact" for direct communication.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: 'input' as const, text: `operator@synlabs:~$ ${cmd}` }];

    switch (cmd) {
      case 'initiate':
        newHistory.push({ type: 'output', text: '> Loading intake form...' });
        newHistory.push({ type: 'output', text: '> [SYSTEM: Redirecting to secure intake portal]' });
        // Add actual redirect logic here later
        setTimeout(() => window.location.href = "mailto:hello@synlabs.com?subject=Project%20Initiation", 1000);
        break;
      case 'contact':
        newHistory.push({ type: 'output', text: '> Direct line open: hello@synlabs.com' });
        break;
      case 'help':
        newHistory.push({ type: 'output', text: '> Available commands: initiate, contact, clear' });
        break;
      case 'clear':
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({ type: 'output', text: `> Command not recognized: ${cmd}` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <section id="contact" className="relative w-full bg-black py-32 px-4 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 font-mono text-xs text-zinc-500 uppercase tracking-widest text-center"
        >
          // INITIATE_PROTOCOL
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6 text-center"
        >
          Ready to build?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="text-zinc-400 text-lg font-light text-center mb-12 max-w-xl"
        >
          We partner with organizations tackling complex physical and digital challenges. Initialize the terminal below to begin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden flex flex-col font-mono text-sm shadow-2xl h-[400px]"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="ml-4 text-zinc-500 text-xs">root@synlabs-core:~</span>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 p-6 overflow-y-auto text-zinc-300 selection:bg-white/20 custom-scrollbar">
            {history.map((line, i) => (
              <div key={i} className={`mb-2 ${line.type === 'input' ? 'text-zinc-500' : 'text-zinc-300'}`}>
                {line.text}
              </div>
            ))}
            <div ref={bottomRef} />
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
              <span className="text-zinc-500">operator@synlabs:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none border-none text-white placeholder-zinc-700 caret-white w-full"
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProjectIntake() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ type: "", budget: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };
    const handleClose = () => {
      setIsOpen(false);
      document.body.style.overflow = "";
      setTimeout(() => setStep(1), 500);
    };

    window.addEventListener("open-contact-modal", handleOpen);
    window.addEventListener("close-contact-modal", handleClose);

    return () => {
      window.removeEventListener("open-contact-modal", handleOpen);
      window.removeEventListener("close-contact-modal", handleClose);
    };
  }, []);

  const handleNext = () => setStep((s) => s + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xl" 
            onClick={() => window.dispatchEvent(new Event("close-contact-modal"))}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 p-8 md:p-12 shadow-2xl flex flex-col"
          >
            <button 
              onClick={() => window.dispatchEvent(new Event("close-contact-modal"))}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Progress Bar */}
            {step < 4 && (
              <div className="w-full h-1 bg-white/5 mb-12 overflow-hidden">
                <motion.div 
                  className="h-full bg-white"
                  initial={{ width: `${((step - 1) / 3) * 100}%` }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            )}

            <div className="flex-1">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full"
                  >
                    <span className="text-zinc-500 font-mono text-sm mb-4">01 // INITIATION</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">What are we building?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {["Web App", "Mobile App", "E-Commerce", "Branding / UIUX"].map((type) => (
                        <button
                          key={type}
                          onClick={() => { setFormData({ ...formData, type }); handleNext(); }}
                          className="p-6 text-left border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all group relative overflow-hidden"
                        >
                          <span className="relative z-10 font-bold uppercase tracking-widest text-sm">{type}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full"
                  >
                    <span className="text-zinc-500 font-mono text-sm mb-4">02 // SCOPE</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">What is the realistic budget?</h2>
                    <div className="flex flex-col gap-4">
                      {["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"].map((budget) => (
                        <button
                          key={budget}
                          onClick={() => { setFormData({ ...formData, budget }); handleNext(); }}
                          className="p-6 text-left border border-white/10 hover:border-white/40 hover:bg-white/5 transition-all font-bold uppercase tracking-widest text-sm"
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col h-full"
                  >
                    <span className="text-zinc-500 font-mono text-sm mb-4">03 // CONNECTION</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">Where should we send the proposal?</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                      <input 
                        type="email" 
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-transparent border-b border-white/20 p-4 text-xl md:text-2xl outline-none focus:border-white transition-colors placeholder:text-zinc-700"
                      />
                      <button 
                        disabled={isSubmitting}
                        type="submit"
                        className="self-start mt-4 bg-white text-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform disabled:opacity-50 flex items-center gap-4"
                      >
                        {isSubmitting ? "Processing..." : "Submit Inquiry"}
                        {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 h-full"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Transmission Received</h2>
                    <p className="text-zinc-400 max-w-md mx-auto mb-12">
                      Our system has recorded your inquiry. A senior engineer will review your request and contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => window.dispatchEvent(new Event("close-contact-modal"))}
                      className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400 transition-colors border-b border-white/20 pb-1"
                    >
                      Return to Matrix
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
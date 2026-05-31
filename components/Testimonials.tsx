"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just build a product; they engineered an unfair advantage for our startup. The speed and quality are unmatched.",
    author: "Sarah Jenkins",
    role: "CEO, TechNova",
  },
  {
    quote: "A rare breed of agency that truly understands both high-level business strategy and deep technical execution. Phenomenal work.",
    author: "Michael Chen",
    role: "Founder, ScaleUp",
  },
  {
    quote: "The interface they designed isn't just beautiful—it drastically increased our conversion rates. Worth every penny.",
    author: "Elena Rodriguez",
    role: "VP of Product, FinFlow",
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-white text-black py-32 px-4 sm:px-8 md:px-12 overflow-hidden selection:bg-black selection:text-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
            Client <span className="text-zinc-400">Impact.</span>
          </h2>
          <p className="text-xl font-medium max-w-sm">
            Don't just take our word for it. Hear from the founders and leaders who trust us to deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-100 p-8 md:p-12 flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>
                <Quote className="w-10 h-10 mb-8 text-zinc-300 group-hover:text-zinc-700 transition-colors duration-500" />
                <p className="text-2xl md:text-3xl font-medium leading-tight tracking-tight mb-12">
                  "{item.quote}"
                </p>
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-sm">{item.author}</p>
                <p className="text-zinc-500 text-sm mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

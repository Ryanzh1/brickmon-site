"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Brickmon identified £35k in annual waste we didn't know existed. The audit was non-intrusive and the recommendations were spot-on.",
    author: "Sarah Chen",
    role: "Head of Security",
    company: "TechCorp UK",
    savings: "£35k/year",
  },
  {
    quote:
      "We reduced our Sentinel costs by 38% in the first month. The team understood our infrastructure immediately and worked via DCRs—zero downtime.",
    author: "James Mitchell",
    role: "Security Engineer",
    company: "SecureSys",
    savings: "38% reduction",
  },
  {
    quote:
      "Best investment we made this year. The cleanup paid for itself in 6 weeks, and our alert quality improved dramatically.",
    author: "Emma Thompson",
    role: "CISO",
    company: "DataShield",
    savings: "ROI in 6 weeks",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real results from security teams who've optimized their Sentinel costs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl border border-white/10 p-8 relative hover:border-[#45A29E]/50 transition-colors"
            >
              <Quote className="h-8 w-8 text-[#45A29E] mb-4 opacity-50" />
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-slate-400">
                  {testimonial.role}, {testimonial.company}
                </div>
                <div className="mt-2 text-sm font-mono text-[#45A29E]">
                  {testimonial.savings}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

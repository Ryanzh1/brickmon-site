"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Do you need write access?",
    answer:
      "Only for the cleanup phase. The audit is completely read-only—we scan your usage patterns and query logs without making any changes. For the cleanup, we work via Data Collection Rules (DCRs), which require write access to your Sentinel workspace.",
  },
  {
    question: "Will I lose data?",
    answer:
      "Only data you haven't queried in 90+ days. We analyze your query patterns and only recommend removing columns and tables that show zero usage over a 90-day window. Critical security data is never touched.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "Typically 48 hours from start to report delivery. We analyze 90 days of query logs and ingestion patterns, then compile a detailed recommendations report.",
  },
  {
    question: "What if we need the data later?",
    answer:
      "All changes are reversible. Since we work via DCRs, you can restore any removed columns or tables within minutes. We also provide a complete audit trail of all changes.",
  },
  {
    question: "Do you guarantee cost savings?",
    answer:
      "Yes. Our cleanup service includes a cost reduction guarantee. If we don't achieve at least 20% savings, we'll refund the cleanup fee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            FAQ
          </h2>
          <p className="text-xl text-slate-400">
            Common questions about our process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-md rounded-xl border border-slate-800 overflow-hidden hover:border-red-500/30 transition-colors"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900/50 transition-colors"
              >
                <span className="text-lg font-semibold text-white font-mono">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

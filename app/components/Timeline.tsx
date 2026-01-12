"use client";

import { motion } from "framer-motion";
import { FileSearch, FileText, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Read-Only Audit",
    description: "We scan your usage patterns, query logs, and ingestion metrics. Zero access required.",
    icon: FileSearch,
    color: "text-[#45A29E]",
  },
  {
    number: "02",
    title: "The Proposal",
    description: "You receive a detailed blueprint showing exactly what's waste and projected savings.",
    icon: FileText,
    color: "text-[#EF4444]",
  },
  {
    number: "03",
    title: "The Cleanup",
    description: "We apply the filters via DCRs. Your data stream becomes lean, your alerts become relevant.",
    icon: Wrench,
    color: "text-[#45A29E]",
  },
];

export default function Timeline() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Three simple steps from audit to optimization.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#45A29E] via-[#EF4444] to-[#45A29E] transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="glass rounded-full p-4 border border-white/10">
                      <Icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`flex-1 glass rounded-xl p-8 border border-white/10 ${
                      isEven ? "md:ml-auto md:w-5/12" : "md:mr-auto md:w-5/12"
                    }`}
                  >
                    <div className={`text-4xl font-bold font-mono ${step.color} mb-2`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold font-mono text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

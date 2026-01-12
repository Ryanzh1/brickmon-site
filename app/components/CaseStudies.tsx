"use client";

import { motion } from "framer-motion";
import { TrendingDown, Database, AlertCircle } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingDown,
    metric: "42%",
    label: "Cost Reduction",
    description: "Average savings across all clients in the first quarter",
    color: "text-[#45A29E]",
  },
  {
    icon: Database,
    metric: "847",
    label: "Unused Columns Removed",
    description: "Average number of columns pruned per enterprise client",
    color: "text-[#EF4444]",
  },
  {
    icon: AlertCircle,
    metric: "73%",
    label: "False Positive Reduction",
    description: "Average decrease in noisy alerts after tuning",
    color: "text-[#45A29E]",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#EF4444]/5 via-transparent to-transparent opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            Proven Results
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real metrics from enterprise Azure Sentinel optimizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl border border-white/10 p-8 text-center hover:border-[#45A29E]/50 transition-colors group"
              >
                <div className={`${study.color} mb-4 flex justify-center`}>
                  <Icon className="h-12 w-12 group-hover:scale-110 transition-transform" />
                </div>
                <div className={`text-5xl font-bold font-mono ${study.color} mb-2`}>
                  {study.metric}
                </div>
                <div className="text-xl font-semibold text-white mb-2 font-mono">
                  {study.label}
                </div>
                <p className="text-slate-400 text-sm">{study.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

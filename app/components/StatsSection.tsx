"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "£40k",
    label: "Average Client Savings",
    sublabel: "per year",
    color: "text-green-400",
  },
  {
    value: "100%",
    label: "Non-Intrusive Audit",
    sublabel: "zero downtime",
    color: "text-blue-400",
  },
  {
    value: "20-40%",
    label: "Cost Reduction",
    sublabel: "typical savings",
    color: "text-red-400",
  },
  {
    value: "48hrs",
    label: "Audit Delivery",
    sublabel: "from start to report",
    color: "text-yellow-400",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
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
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real savings for real companies. No fluff, just measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-green-500/50 transition-colors"
            >
              <div className={`text-5xl font-bold font-mono ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-slate-400 text-sm">{stat.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

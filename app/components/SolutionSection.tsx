"use client";

import { motion } from "framer-motion";
import { Scissors, Bell, BarChart3, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Ingestion Pruning",
    description:
      "We identify and remove unused columns and tables from your ingestion pipeline, reducing data volume without losing visibility.",
  },
  {
    icon: Bell,
    title: "Alert Tuning",
    description:
      "Eliminate false positives by fine-tuning alert rules based on actual data patterns and threat intelligence.",
  },
  {
    icon: BarChart3,
    title: "Executive Dashboards",
    description:
      "Visualize your security posture and cost savings with clear, actionable dashboards that demonstrate value.",
  },
];

export default function SolutionSection() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            The Solution
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A systematic audit and cleanup process that reduces costs while
            improving security visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-colors"
              >
                <div className="text-green-400 mb-4">
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 border border-slate-700 rounded-xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold font-mono text-white mb-8 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description:
                  "We analyze your ingestion patterns, query logs, and alert history to identify waste.",
              },
              {
                step: "02",
                title: "Recommend",
                description:
                  "You receive a detailed report with specific columns and tables to remove, plus cost projections.",
              },
              {
                step: "03",
                title: "Cleanup",
                description:
                  "We help implement the changes and monitor results, ensuring no security gaps are created.",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold font-mono text-red-500 mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold font-mono text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { DollarSign, AlertTriangle, EyeOff } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Bloated Costs",
    description:
      "You're ingesting terabytes of data you never query. Every column and table costs money, and most of it goes unused.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Alert Fatigue",
    description:
      "Noisy alerts from irrelevant data sources drown out real threats. Your team spends more time filtering than investigating.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: EyeOff,
    title: "Blind Spots",
    description:
      "Critical security events get lost in the noise. You can't see what matters when everything is logged indiscriminately.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
];

export default function ProblemSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            The Problem
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Azure Sentinel costs spiral out of control when you log everything
            and analyze nothing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${problem.bgColor} ${problem.borderColor} border rounded-xl p-8 hover:scale-105 transition-transform`}
              >
                <div className={`${problem.color} mb-4`}>
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

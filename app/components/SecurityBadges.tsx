"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "All audits conducted in compliance with UK GDPR regulations",
  },
  {
    icon: Lock,
    title: "Read-Only Access",
    description: "Initial audits require zero write permissions to your infrastructure",
  },
  {
    icon: CheckCircle2,
    title: "Certified Engineers",
    description: "Azure-certified security professionals with enterprise experience",
  },
];

export default function SecurityBadges() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="text-red-500 flex-shrink-0">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white font-mono mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{badge.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

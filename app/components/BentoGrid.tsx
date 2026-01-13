"use client";

import { motion } from "framer-motion";
import { Scissors, BellOff, BarChart3, Code } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Ingestion Pruning",
    description: "We identify columns you haven't queried in 90 days.",
    icon: Scissors,
    size: "large",
  },
  {
    id: 2,
    title: "Alert Tuning",
    description: "Silence false positives and alert fatigue.",
    icon: BellOff,
    size: "small",
  },
  {
    id: 3,
    title: "Dashboarding",
    description: "C-Suite ready visualizations.",
    icon: BarChart3,
    size: "small",
  },
  {
    id: 4,
    title: "The Tech",
    description: "We use DCRs (Data Collection Rules) to filter at the source.",
    icon: Code,
    size: "medium",
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            How We Optimize
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Four core capabilities that transform your Sentinel spend into
            strategic value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colSpan =
              feature.size === "large"
                ? "md:col-span-2"
                : feature.size === "medium"
                ? "md:col-span-2"
                : "";
            const rowSpan =
              feature.size === "large" ? "md:row-span-2" : "";

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-900/50 backdrop-blur-md rounded-xl p-8 border border-slate-800 hover:border-red-500/50 transition-all ${colSpan} ${rowSpan} relative overflow-hidden group h-full shadow-xl`}
                style={{
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="relative z-10">
                  <div className="text-red-500 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Visual element for large card */}
                  {feature.size === "large" && (
                    <div className="mt-6 flex items-end gap-2 h-24">
                      {[100, 85, 70, 55, 40].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 100 }}
                          whileInView={{ height }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex-1 bg-gradient-to-t from-red-500 to-red-600 rounded-t"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

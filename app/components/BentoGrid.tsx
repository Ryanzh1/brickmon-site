"use client";

import { motion } from "framer-motion";
import { Scissors, BellOff, BarChart3, Shield } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Ingestion Pruning",
    description: "Remove unused columns and tables. Visualize your data shrinking from bloated to lean.",
    icon: Scissors,
    size: "large",
    gradient: "from-red-500/20 to-transparent",
  },
  {
    id: 2,
    title: "Alert Tuning",
    description: "Eliminate false positives by muting noisy alerts that don't signal real threats.",
    icon: BellOff,
    size: "small",
    gradient: "from-yellow-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Dashboards",
    description: "Real-time visualization of your security posture and cost savings metrics.",
    icon: BarChart3,
    size: "small",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    id: 4,
    title: "Zero Downtime",
    description: "We work via Data Collection Rules (DCRs), not deletion. Your operations never stop.",
    icon: Shield,
    size: "medium",
    gradient: "from-teal-500/20 to-transparent",
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle glow behind section */}
      <div className="absolute inset-0 bg-gradient-radial from-[#45A29E]/5 via-transparent to-transparent opacity-50" />
      
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
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
                className={`glass rounded-xl p-8 border border-white/10 hover:border-[#45A29E]/50 transition-all ${colSpan} ${rowSpan} relative overflow-hidden group h-full`}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <div className="text-[#45A29E] mb-4">
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
                          className="flex-1 bg-gradient-to-t from-[#EF4444] to-[#45A29E] rounded-t"
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

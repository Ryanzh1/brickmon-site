"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [cost, setCost] = useState(8000);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (cost > 4800) {
        setCost((prev) => Math.max(4800, prev - 40));
      } else if (!filtered) {
        setFiltered(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [cost, filtered]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#EF4444]/10 via-transparent to-transparent opacity-50" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(69, 162, 158, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(69, 162, 158, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Headline and CTA */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-white mb-6 leading-tight"
            >
              Your Azure Sentinel Bill is{" "}
              <br className="hidden md:block" />
              <span className="text-[#EF4444]">40% Noise</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed"
            >
              We audit your ingestion pipelines, remove unused columns, and tune
              noisy alerts. <span className="text-[#45A29E] font-semibold">Pure signal, zero waste</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors glow-red"
              >
                Book Audit
                <ArrowRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Animated Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-xl border border-white/10 p-6 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-slate-400 text-sm font-mono">Azure Sentinel Terminal</span>
            </div>
            <div className="bg-[#0B0C10] rounded-lg p-4 font-mono text-sm">
              <div className="text-slate-400 mb-2">
                <span className="text-[#45A29E]">£</span> Analyzing ingestion patterns...
              </div>
              <div className="text-slate-400 mb-2">
                <span className="text-[#45A29E]">£</span> Found 847 unused columns
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-slate-400 mb-2"
              >
                <span className="text-[#45A29E]">£</span> Filtering noise...
              </motion.div>
              {filtered && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[#45A29E] mb-4"
                >
                  <span className="text-[#45A29E]">£</span> ✓ Cleanup complete
                </motion.div>
              )}
              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Monthly Cost:</span>
                  <motion.span
                    key={cost}
                    initial={{ scale: 1.2, color: "#EF4444" }}
                    animate={{ scale: 1, color: "#45A29E" }}
                    className="text-2xl font-bold font-mono"
                  >
                    £{cost.toLocaleString()}
                  </motion.span>
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Savings: £{(8000 - cost).toLocaleString()}/mo
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

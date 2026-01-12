"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import CostCalculator from "./CostCalculator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#EF4444]/10 via-transparent to-transparent opacity-50" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-mono text-white mb-6 leading-tight"
            >
              Stop Paying for Sentinel Logs{" "}
              <span className="text-[#EF4444]">You Never Read</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed"
            >
              We audit your Azure Sentinel ingestion, remove noisy columns, and tune alerts.{" "}
              <span className="text-[#14B8A6] font-semibold">Reduce your bill by 20-40%</span>{" "}
              without losing visibility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#EF4444] hover:bg-[#dc2626] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors glow-red"
              >
                Book Your Audit
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Shield className="h-4 w-4 text-[#14B8A6]" />
                <span>Non-intrusive read-only assessment</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Calculator */}
          <CostCalculator />
        </div>
      </div>
    </section>
  );
}

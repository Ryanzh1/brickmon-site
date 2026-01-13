"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import CostCalculator from "./CostCalculator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Subtle animated glowing grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>
      
      {/* Radial gradient glow at top center */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold font-mono text-white mb-6 leading-tight"
            >
              Stop paying for Azure Sentinel logs{" "}
              <span className="text-red-500">you never read</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-slate-300 mb-8 leading-relaxed"
            >
              We filter the noise.{" "}
              <span className="text-red-500 font-semibold">You save 30%</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 flex flex-col items-center lg:items-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-red-500/50"
              >
                Book Your Audit
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Shield className="h-4 w-4 text-red-500" />
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

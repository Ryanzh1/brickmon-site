"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import CostCalculator from "./CostCalculator";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Subtle animated glowing grid pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>
      
      {/* Radial gradient glow at top center */}
      <div className="absolute inset-0 bg-gradient-radial from-red-500/3 via-transparent to-transparent opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy - Vertically Centered */}
          <div className="flex flex-col justify-center px-4 lg:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold font-sans text-white mb-6 leading-tight tracking-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Stop paying for Azure Sentinel logs{" "}
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-purple-600 bg-clip-text text-transparent">
                you never read
              </span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed font-sans"
            >
              We filter the noise.{" "}
              <span className="text-slate-300 font-medium">You save 30%</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-red-500/30 font-sans"
              >
                Book Your Audit
                <ArrowRight className="h-4 w-4" />
              </motion.a>
              
              <div className="flex items-center gap-2 text-slate-500 text-sm font-sans">
                <Shield className="h-4 w-4 text-red-500" />
                <span>Non-intrusive read-only assessment</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Calculator - Centered as Product Shot */}
          <div className="flex items-center justify-center px-4 lg:px-0">
            <CostCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}

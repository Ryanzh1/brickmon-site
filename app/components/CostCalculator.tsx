"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Info } from "lucide-react";

export default function CostCalculator() {
  const [gbPerDay, setGbPerDay] = useState(10);
  const COST_PER_GB = 4.5; // £4.50 per GB
  const WASTE_FACTOR = 0.3; // 30%

  const annualCost = gbPerDay * COST_PER_GB * 365;
  const potentialSavings = annualCost * WASTE_FACTOR;
  
  // Format GB display with decimals for smaller values
  const formatGB = (gb: number) => {
    if (gb < 10) return gb.toFixed(1);
    return Math.round(gb).toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-xl border border-white/10 p-8 shadow-2xl"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold font-mono text-white mb-2">
          Calculate Your Waste
        </h3>
        <p className="text-slate-400 text-sm">
          See how much you're losing on unused Sentinel data
        </p>
      </div>

      {/* Slider */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-300 mb-4">
          Data Ingestion: <span className="text-[#14B8A6] font-mono font-bold">{formatGB(gbPerDay)} GB/day</span>
        </label>
        <input
          type="range"
          min="1"
          max="50"
          step="0.5"
          value={gbPerDay}
          onChange={(e) => setGbPerDay(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#14B8A6]"
          style={{
            background: `linear-gradient(to right, #14B8A6 0%, #14B8A6 ${((gbPerDay - 1) / (50 - 1)) * 100}%, #334155 ${((gbPerDay - 1) / (50 - 1)) * 100}%, #334155 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2">
          <span>1 GB</span>
          <span>50 GB</span>
        </div>
        <div className="text-xs text-slate-500 mt-1 text-center">
          Typical range: 5-30 GB/day for most enterprises
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
          <div className="flex items-center justify-between mb-1">
            <span className="text-slate-400 text-sm">Estimated Annual Spend</span>
            <div className="relative group">
              <Info className="h-4 w-4 text-slate-500 cursor-help" />
              <div className="absolute right-0 bottom-full mb-2 w-48 p-2 bg-slate-900 border border-white/10 rounded text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                Based on avg. pay-as-you-go rates
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold font-mono text-white">
            £{annualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>

        <motion.div
          key={potentialSavings}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-[#14B8A6]/20 to-[#14B8A6]/10 rounded-lg p-6 border border-[#14B8A6]/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-[#14B8A6]/20 via-transparent to-transparent opacity-50" />
          <div className="relative z-10">
            <div className="text-sm text-[#14B8A6] mb-2 font-medium">
              Potential Annual Savings
            </div>
            <div className="text-4xl font-bold font-mono text-[#14B8A6] glow-teal">
              £{potentialSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              {Math.round(WASTE_FACTOR * 100)}% waste reduction
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 block w-full bg-[#EF4444] hover:bg-[#dc2626] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors glow-red"
      >
        Book Your Audit
      </motion.a>
    </motion.div>
  );
}

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
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-xl bg-slate-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-8 shadow-2xl"
      style={{
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 30px rgba(185, 28, 28, 0.2)",
      }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold font-sans text-white mb-1.5">
          Calculate Your Waste
        </h3>
        <p className="text-slate-400 text-sm font-sans">
          See how much you're losing on unused Sentinel data
        </p>
      </div>

      {/* Slider */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-300 mb-3 font-sans">
          Data Ingestion: <span className="text-red-500 font-semibold">{formatGB(gbPerDay)} GB/day</span>
        </label>
        <input
          type="range"
          min="1"
          max="50"
          step="0.5"
          value={gbPerDay}
          onChange={(e) => setGbPerDay(Number(e.target.value))}
          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #EF4444 0%, #EF4444 ${((gbPerDay - 1) / (50 - 1)) * 100}%, #334155 ${((gbPerDay - 1) / (50 - 1)) * 100}%, #334155 100%)`,
          }}
        />
        <div className="flex justify-between text-xs text-slate-500 mt-2 font-sans">
          <span>1 GB</span>
          <span>50 GB</span>
        </div>
        <div className="text-xs text-slate-500 mt-1 text-center font-sans">
          Typical range: 5-30 GB/day for most enterprises
        </div>
      </div>

      {/* Results - Side by Side Layout for Dashboard Feel */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-slate-900/60 rounded-lg p-4 border border-slate-800/50">
          <div className="flex items-center justify-between mb-1">
            <span className="text-slate-400 text-xs font-sans">Annual Spend</span>
            <div className="relative group">
              <Info className="h-3 w-3 text-slate-500 cursor-help" />
              <div className="absolute right-0 bottom-full mb-2 w-40 p-2 bg-slate-900 border border-slate-800 rounded text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-sans">
                Based on avg. pay-as-you-go rates
              </div>
            </div>
          </div>
          <div className="text-xl font-bold font-sans text-white">
            £{annualCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </div>
        </div>

        <motion.div
          key={potentialSavings}
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.01, 1] }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-green-500/15 to-green-600/10 rounded-lg p-4 border border-green-500/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-transparent opacity-20" />
          <div className="relative z-10">
            <div className="text-slate-400 text-xs mb-1 font-sans">Potential Savings</div>
            <div className="text-xl font-bold font-sans text-green-400" style={{
              textShadow: "0 0 10px rgba(34, 197, 94, 0.3)",
            }}>
              £{potentialSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="block w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all shadow-lg shadow-red-500/30 font-sans text-sm"
      >
        Book Your Audit
      </motion.a>
    </motion.div>
  );
}

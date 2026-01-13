"use client";

import { motion } from "framer-motion";
import { Shield, TrendingDown, Code } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    text: "Built by security engineers",
    highlight: "who've optimized Sentinel",
  },
  {
    icon: TrendingDown,
    text: "Proven track record",
    highlight: "saving costs at scale",
  },
  {
    icon: Code,
    text: "Deep technical expertise",
    highlight: "in Azure infrastructure",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-slate-300 text-lg mb-2">
            Built by security engineers with real-world experience
          </p>
          <p className="text-slate-400 text-sm">
            We've optimized Azure Sentinel costs at enterprise companies—now we're bringing that expertise to you.
          </p>
        </motion.div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-8">
          {credentials.map((cred, index) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-slate-300"
              >
                <Icon className="h-5 w-5 text-red-500" />
                <div className="text-sm">
                  <span>{cred.text} </span>
                  <span className="text-red-500 font-semibold">
                    {cred.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

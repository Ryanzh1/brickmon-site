"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "The Deep Dive Audit",
    subtitle: "One-time comprehensive analysis",
    price: "£495",
    description: "Money-back guarantee if we don't find savings",
    features: [
      "Full ingestion pattern analysis",
      "Query log review (90-day window)",
      "Alert rule evaluation",
      "Cost savings projection",
      "Detailed recommendations report",
      "48-hour delivery",
    ],
    cta: "Book Audit",
    popular: false,
  },
  {
    name: "The Fix",
    subtitle: "Typically 20% of your first year's savings",
    price: "Custom Quote",
    description: "Full implementation with safe deployment",
    features: [
      "Full implementation",
      "Safe deployment (Validation Phase)",
      "Ingestion pipeline optimization",
      "Column and table removal via DCRs",
      "Alert rule tuning",
      "30-day monitoring",
    ],
    cta: "Request Quote",
    popular: true,
  },
  {
    name: "6-Month Checkup",
    subtitle: "Prevent ingestion drift",
    price: "£995",
    priceSuffix: "/ checkup",
    description: "Bi-annual health check to keep costs optimized",
    features: [
      "Ingestion pattern review",
      "Cost drift analysis",
      "Alert rule optimization",
      "New data source evaluation",
      "Executive summary report",
      "Recommendations for next phase",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-950">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-slate-900 via-slate-950 to-slate-950 opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            Pricing
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Start with an audit, then decide if you want us to handle the
            cleanup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-xl p-8 ${
                plan.popular
                  ? "md:scale-105 md:-mt-6 md:mb-6 bg-slate-900/80 border-2"
                  : "bg-slate-900/60 border border-slate-800"
              } ${
                plan.popular
                  ? "border-transparent bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900"
                  : ""
              } shadow-2xl backdrop-blur-sm`}
              style={
                plan.popular
                  ? {
                      borderImage: "linear-gradient(135deg, rgba(239, 68, 68, 0.5), rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.5)) 1",
                      boxShadow: "0 0 40px rgba(239, 68, 68, 0.2), 0 20px 60px rgba(0, 0, 0, 0.5)",
                    }
                  : {
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.2)",
                    }
              }
            >
              {/* Gradient border effect for popular card */}
              {plan.popular && (
                <>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 opacity-50 -z-10 blur-xl" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EF4444] to-[#dc2626] text-white px-6 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider shadow-lg shadow-red-500/50">
                    RECOMMENDED
                  </div>
                </>
              )}

              <div className="text-center mb-8">
                <div className="text-xs text-slate-400 font-mono mb-3 uppercase tracking-wider">
                  {plan.subtitle}
                </div>
                <h3 className="text-2xl font-bold font-mono text-white mb-6">
                  {plan.name}
                </h3>
                
                {/* Price Display */}
                <div className="mb-4">
                  {plan.price === "Custom Quote" ? (
                    <div className="text-6xl font-extrabold font-mono text-white mb-2 leading-none">
                      {plan.price.split(" ").map((word, i) => (
                        <div key={i} className="bg-gradient-to-r from-white via-slate-100 to-white bg-clip-text text-transparent">
                          {word}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-6xl font-extrabold font-mono text-white mb-2 leading-none">
                      {plan.price}
                      {plan.priceSuffix && (
                        <span className="text-2xl text-slate-500 font-normal ml-2">
                          {plan.priceSuffix}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 min-h-[280px]">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#EF4444] to-[#dc2626] flex items-center justify-center shadow-lg shadow-red-500/50">
                        <Check className="h-3 w-3 text-white stroke-[3]" />
                      </div>
                    </div>
                    <span className="text-slate-300 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center py-4 px-6 rounded-lg font-bold font-mono text-sm uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#EF4444] to-[#dc2626] hover:from-[#dc2626] hover:to-[#b91c1c] text-white shadow-lg shadow-red-500/50"
                    : "bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600"
                }`}
                aria-label={`${plan.cta} for ${plan.name}`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Audit",
    subtitle: "The Report",
    price: "£995",
    description: "One-time, Read-only comprehensive analysis",
    features: [
      "Full ingestion pattern analysis",
      "Query log review (90-day window)",
      "Alert rule evaluation",
      "Cost savings projection",
      "Detailed recommendations report",
      "48-hour delivery",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Cleanup",
    subtitle: "The Fix",
    price: "£4,800",
    description: "Implementation + 30-day warranty",
    features: [
      "Ingestion pipeline optimization",
      "Column and table removal via DCRs",
      "Alert rule tuning",
      "Executive dashboard setup",
      "30-day monitoring",
      "Guaranteed cost reduction",
    ],
    cta: "Book Now",
    popular: true,
  },
  {
    name: "Watchtower",
    subtitle: "The Retainer",
    price: "£1,500/mo",
    description: "Monthly tuning & monitoring",
    features: [
      "Monthly cost reviews",
      "Continuous alert tuning",
      "New ingestion pattern analysis",
      "Priority support",
      "Quarterly optimization reports",
      "Cost reduction guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#EF4444]/5 via-transparent to-transparent opacity-30" />
      
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
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Start with an audit, then decide if you want us to handle the
            cleanup.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative glass rounded-xl p-8 border ${
                plan.popular
                  ? "border-[#14B8A6]/50 glow-teal md:-mt-4 md:mb-4"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#14B8A6] text-white px-4 py-1 rounded-full text-sm font-semibold font-mono">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <div className="text-sm text-[#14B8A6] font-mono mb-2">
                  {plan.subtitle}
                </div>
                <h3 className="text-3xl font-bold font-mono text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold font-mono text-white mb-2">
                  {plan.price}
                </div>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-[#14B8A6] hover:bg-[#0d9488] text-white"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
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

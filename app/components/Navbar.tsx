"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#" className="text-2xl font-bold font-mono text-white tracking-wider" aria-label="Brickmon Home">
              BRICKMON
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-slate-300 hover:text-white transition-colors font-medium"
              aria-label="Navigate to Services section"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-slate-300 hover:text-white transition-colors font-medium"
              aria-label="Navigate to Pricing section"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-slate-300 hover:text-white transition-colors font-medium"
              aria-label="Navigate to FAQ section"
            >
              FAQ
            </a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#EF4444] hover:bg-[#dc2626] text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Book Audit
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <a
              href="#services"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#process"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#pricing"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="#pricing"
              className="block bg-[#EF4444] hover:bg-[#dc2626] text-white px-6 py-2 rounded-lg font-semibold text-center transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Audit
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

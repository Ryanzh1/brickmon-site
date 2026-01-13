"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 max-w-7xl mx-auto">
      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#" className="text-2xl font-bold font-mono text-white tracking-widest" aria-label="Brickmon Home">
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
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-red-500/50"
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
            className="md:hidden py-4 space-y-4 border-t border-slate-800 mt-4"
          >
            <a
              href="#services"
              className="block text-slate-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
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
              href="#contact"
              className="block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-full font-semibold text-center transition-all"
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

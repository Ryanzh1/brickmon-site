"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-mono text-white mb-4 tracking-wider">
              BRICKMON
            </h3>
            <p className="text-slate-400 text-sm">
              Optimizing Azure Sentinel costs through intelligent data
              management.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-mono">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@brickmon.com"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                hello@brickmon.com
              </a>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Brickmon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

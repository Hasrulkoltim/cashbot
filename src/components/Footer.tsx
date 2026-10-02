"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-cb-border bg-cb-card/40 backdrop-blur-md text-cb-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-cb-text tracking-tight flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span>CashBot</span>
              </span>
            </div>
            <p className="text-sm text-cb-text-muted max-w-sm leading-relaxed">
              AI Side Hustle Finder — Temukan peluang cuan online yang dipersonalisasi khusus berdasarkan skill, waktu luang, dan modal Anda.
            </p>
          </div>

          {/* Col 2: Produk Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cb-text mb-4">
              Produk
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-cb-primary transition-colors inline-block"
                >
                  Cara Kerja
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-cb-primary transition-colors inline-block"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-cb-primary transition-colors inline-block"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cb-primary transition-colors inline-block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kontak Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cb-text mb-4">
              Kontak
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:hello@cashbot.id"
                  className="hover:text-cb-primary transition-colors flex items-center gap-2"
                >
                  <span>✉️</span>
                  <span>hello@cashbot.id</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/cashbot_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cb-primary transition-colors flex items-center gap-2"
                >
                  <span>🐦</span>
                  <span>@cashbot_id</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/cashbot_id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cb-primary transition-colors flex items-center gap-2"
                >
                  <span>📸</span>
                  <span>@cashbot.id</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cb-border/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cb-text-muted">
          <p>© 2026 CashBot. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cb-text transition-colors">
              Privacy Policy
            </a>
            <span className="text-cb-border">|</span>
            <a href="#" className="hover:text-cb-text transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

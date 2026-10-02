"use client";

import { useState, useEffect } from "react";

interface NavbarProps {
  onJoinWaitlist: () => void;
}

export default function Navbar({ onJoinWaitlist }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Masalah", href: "#problem" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-cb-border/60 shadow-lg shadow-black/20"
          : "bg-cb-bg/70 backdrop-blur-md border-b border-cb-border/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold tracking-tight group"
          >
            <span className="text-2xl transition-transform group-hover:scale-110 duration-200">
              🤖
            </span>
            <span className="gradient-text-green font-bold tracking-tight">
              CashBot
            </span>
          </a>

          {/* Nav links (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cb-text-muted hover:text-cb-text transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cb-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA button on right */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onJoinWaitlist}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-cb-primary text-cb-bg hover:bg-cb-primary-dark transition-smooth glow-green-sm hover:scale-105 active:scale-95 cursor-pointer shadow-md"
            >
              Mulai Gratis →
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-cb-text-muted hover:text-cb-text hover:bg-cb-card focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-cb-border animate-fade-in-up px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-cb-text-muted hover:text-cb-text hover:bg-cb-card/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onJoinWaitlist();
              }}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-base font-semibold bg-cb-primary text-cb-bg hover:bg-cb-primary-dark transition-smooth glow-green-sm active:scale-95 cursor-pointer shadow-md"
            >
              Mulai Gratis →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

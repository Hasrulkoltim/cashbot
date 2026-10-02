"use client";

import React from "react";

interface CTAProps {
  onJoinWaitlist: () => void;
}

export default function CTA({ onJoinWaitlist }: CTAProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background container with dark green tint and glow */}
      <div className="relative rounded-3xl border border-cb-primary/30 bg-gradient-to-br from-[#0c1a14] via-cb-card to-[#0d1b2a] p-8 sm:p-14 md:p-20 text-center overflow-hidden shadow-2xl">
        {/* Ambient background glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-cb-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cb-secondary/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cb-primary/30 bg-cb-primary/10 text-cb-primary text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cb-primary animate-pulse" />
            <span>Mulai Langkah Pertama Anda Hari Ini</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            <span className="gradient-text">Berhenti Cari, Mulai Hasilkan.</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-xl text-cb-text-muted max-w-2xl mb-10 leading-relaxed">
            Bergabung dengan 10,000+ orang yang sudah menemukan cara menghasilkan uang yang cocok untuk mereka.
          </p>

          {/* Big CTA Button */}
          <button
            onClick={onJoinWaitlist}
            className="group relative inline-flex items-center justify-center gap-3 bg-cb-primary hover:bg-cb-primary-dark text-cb-bg font-black text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-xl shadow-cb-primary/25 hover:shadow-cb-primary/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          >
            <span>Mulai Quiz Gratis Sekarang</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          {/* Guarantee / trust indicators */}
          <div className="mt-6 flex items-center justify-center text-xs sm:text-sm text-cb-text-muted font-medium">
            <span>✨ Gratis selamanya • Tanpa kartu kredit • Setup 5 menit</span>
          </div>
        </div>
      </div>
    </section>
  );
}

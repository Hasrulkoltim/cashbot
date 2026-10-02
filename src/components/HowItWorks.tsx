"use client";

import React from "react";

interface StepItem {
  number: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    icon: "📝",
    title: "Jawab Quiz 5 Menit",
    description:
      "Ceritakan skill Anda, waktu luang, modal yang tersedia, dan target penghasilan. Tidak perlu pengalaman apapun.",
    highlight: "Tanpa ribet & super cepat",
  },
  {
    number: "02",
    icon: "🤖",
    title: "AI Analisis & Matching",
    description:
      "Algoritma kami mencocokkan profil Anda dengan 200+ peluang penghasilan yang sudah terverifikasi dan menghasilkan.",
    highlight: "200+ database terkurasi",
  },
  {
    number: "03",
    icon: "🗺️",
    title: "Dapat Action Plan",
    description:
      "Terima roadmap step-by-step: apa yang harus dilakukan hari 1, minggu 1, bulan 1 — sampai uang pertama masuk.",
    highlight: "Roadmap eksekusi harian",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cb-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-cb-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cb-primary/10 border border-cb-primary/20 text-cb-primary text-xs sm:text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-cb-primary animate-pulse" />
            Simple & Terstruktur
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cb-text tracking-tight mb-4">
            🎯 Cara Kerja <span className="gradient-text-green">CashBot</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cb-text-muted leading-relaxed">
            3 langkah simpel. 5 menit. Action plan personalized.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop connecting dashed line behind cards */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-12 h-0.5 border-t-2 border-dashed border-cb-border z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="group relative flex flex-col justify-between bg-cb-card border border-cb-border hover:border-cb-primary/50 rounded-2xl p-7 sm:p-8 card-hover transition-smooth shadow-lg hover:shadow-cb-primary/5 backdrop-blur-sm"
              >
                {/* Connecting arrow badge between steps on desktop */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-cb-card border border-cb-border text-cb-primary items-center justify-center shadow-md group-hover:border-cb-primary/60 transition-smooth"
                  >
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                )}

                {/* Card Top: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Big Step Number */}
                    <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-cb-primary">
                      {step.number}
                    </span>

                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-cb-card-hover border border-cb-border flex items-center justify-center text-3xl shadow-inner group-hover:border-cb-primary/40 group-hover:scale-105 transition-smooth">
                      <span>{step.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-cb-text mb-3 group-hover:text-cb-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cb-text-muted text-sm sm:text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Card Footer Badge */}
                <div className="pt-4 border-t border-cb-border/60 flex items-center justify-between text-xs font-medium text-cb-primary">
                  <span className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {step.highlight}
                  </span>
                  <span className="text-cb-text-muted/60 font-mono text-[11px]">
                    Step {step.number} of 03
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom micro-banner */}
        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-cb-text-muted bg-cb-card/70 border border-cb-border/80 px-4 py-2 rounded-full">
            <span>💡</span>
            <span>
              Semua rekomendasi disesuaikan 100% dengan kondisi nyata Anda.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

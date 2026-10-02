"use client";

import React from "react";

interface PricingProps {
  onJoinWaitlist: () => void;
}

export default function Pricing({ onJoinWaitlist }: PricingProps) {
  const starterFeatures = [
    "Quiz assessment dasar",
    "1 action plan personalized",
    "Akses 50+ ide hustle",
    "Email tips mingguan",
  ];

  const proFeatures = [
    "Semua fitur Starter",
    "Unlimited action plans",
    "AI opportunity alerts real-time",
    "Income tracker dashboard",
    "Komunitas eksklusif",
    "Priority support",
    "Akses 200+ ide hustle premium",
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cb-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cb-primary/30 bg-cb-primary/10 text-cb-primary text-xs font-semibold uppercase tracking-wider mb-4">
          <span>💎 Paket Fleksibel</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-cb-text tracking-tight mb-4">
          💰 Harga yang Masuk Akal
        </h2>
        <p className="text-lg text-cb-text-muted">
          Mulai gratis. Upgrade kapan saja.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Starter Plan */}
        <div className="bg-cb-card border border-cb-border rounded-2xl p-8 flex flex-col justify-between card-hover transition-smooth relative">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-cb-text">Starter</h3>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cb-border text-cb-text-muted">
                Cocok untuk Pemula
              </span>
            </div>
            
            <p className="text-cb-text-muted text-sm mb-6">
              Mulai jelajahi potensi side hustle tanpa biaya sepeser pun.
            </p>

            <div className="mb-8 pb-6 border-b border-cb-border/60">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-cb-text">Gratis</span>
              </div>
              <p className="text-cb-text-muted text-sm mt-1">Selamanya</p>
            </div>

            {/* Features */}
            <div className="space-y-3.5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-cb-text-muted">
                Fitur yang disertakan:
              </p>
              {starterFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-cb-text">
                  <svg
                    className="w-5 h-5 text-cb-primary shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={onJoinWaitlist}
              className="w-full py-3.5 px-6 rounded-xl border border-cb-border hover:border-cb-primary hover:bg-cb-card-hover text-cb-text font-semibold transition-smooth text-center"
            >
              Mulai Gratis
            </button>
            <p className="text-center text-xs text-cb-text-muted mt-3">
              Tidak butuh kartu kredit
            </p>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-cb-card border-2 border-cb-primary rounded-2xl p-8 flex flex-col justify-between card-hover glow-green transition-smooth relative">
          {/* Badge */}
          <div className="absolute -top-3.5 right-6 bg-cb-primary text-cb-bg font-extrabold text-xs uppercase px-3.5 py-1 rounded-full shadow-lg tracking-wider">
            PALING POPULER
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-cb-text flex items-center gap-2">
                Pro
                <span className="text-base text-cb-accent">⚡</span>
              </h3>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cb-primary/10 text-cb-primary border border-cb-primary/20">
                Paling Lengkap
              </span>
            </div>

            <p className="text-cb-text-muted text-sm mb-6">
              Akselerasi pendapatan Anda dengan otomasi dan insight AI tanpa batas.
            </p>

            <div className="mb-8 pb-6 border-b border-cb-border/60">
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold text-cb-text">$12</span>
                <span className="text-cb-text-muted text-sm font-medium">/bulan</span>
              </div>
              <p className="text-cb-primary text-sm font-medium mt-1">
                atau Rp 180K/bulan
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3.5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-cb-text-muted">
                Semua keunggulan Pro:
              </p>
              {proFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-cb-text">
                  <div className="rounded-full bg-cb-primary/10 p-0.5 shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-cb-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className={idx === 0 ? "font-semibold text-cb-primary" : ""}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <button
              onClick={onJoinWaitlist}
              className="w-full py-3.5 px-6 rounded-xl bg-cb-primary hover:bg-cb-primary-dark text-cb-bg font-bold transition-smooth shadow-lg shadow-cb-primary/20 text-center"
            >
              Mulai 7 Hari Gratis →
            </button>
            <div className="flex items-center justify-center gap-1.5 text-center text-xs text-cb-text-muted mt-3">
              <svg className="w-4 h-4 text-cb-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>30 hari garansi uang kembali</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

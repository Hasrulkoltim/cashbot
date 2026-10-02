"use client";

interface HeroProps {
  onJoinWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative floating blur circles */}
      <div
        aria-hidden="true"
        className="absolute top-12 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-cb-primary/15 rounded-full blur-3xl pointer-events-none float"
      />
      <div
        aria-hidden="true"
        className="absolute top-28 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cb-secondary/15 rounded-full blur-3xl pointer-events-none float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-cb-accent/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating abstract decorative badge - Left (desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-cb-border/60 absolute left-8 xl:left-16 top-1/3 float shadow-xl pointer-events-none z-10"
      >
        <div className="w-9 h-9 rounded-xl bg-cb-primary/20 flex items-center justify-center text-lg shadow-inner">
          💡
        </div>
        <div>
          <p className="text-xs font-semibold text-cb-text">AI Micro-Agency</p>
          <p className="text-[11px] font-medium text-cb-primary">98% Match Rate</p>
        </div>
      </div>

      {/* Floating abstract decorative badge - Right (desktop) */}
      <div
        aria-hidden="true"
        className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl glass border border-cb-border/60 absolute right-8 xl:left-auto xl:right-16 top-1/2 float shadow-xl pointer-events-none z-10"
        style={{ animationDelay: "-2.5s" }}
      >
        <div className="w-9 h-9 rounded-xl bg-cb-secondary/20 flex items-center justify-center text-lg shadow-inner">
          ⚡
        </div>
        <div>
          <p className="text-xs font-semibold text-cb-text">Action Plan Siap</p>
          <p className="text-[11px] font-medium text-cb-text-muted">Hasil dalam 5 Menit</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Early Access Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cb-primary/30 text-xs sm:text-sm font-medium text-cb-text mb-8 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cb-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cb-primary" />
          </span>
          <span>🚀 Early Access — Gratis untuk 500 pendaftar pertama</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-cb-text max-w-4xl leading-[1.15] sm:leading-[1.1]">
          Temukan Cara{" "}
          <span className="gradient-text">Menghasilkan Uang</span>{" "}
          yang Cocok untuk Anda
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-xl text-cb-text-muted max-w-2xl mx-auto leading-relaxed">
          Jawab 5 pertanyaan sederhana. AI kami akan menganalisis skill, waktu, dan modal Anda — lalu memberikan action plan personalized untuk mulai menghasilkan.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinWaitlist}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base sm:text-lg font-semibold bg-cb-primary text-cb-bg hover:bg-cb-primary-dark transition-smooth glow-green hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-cb-primary/25"
          >
            Mulai Quiz Gratis →
          </button>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base sm:text-lg font-medium text-cb-text border border-cb-border hover:border-cb-primary/60 hover:bg-cb-card transition-smooth cursor-pointer"
          >
            Lihat Cara Kerja ↓
          </a>
        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-cb-border/40 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
          <div className="flex flex-col items-center justify-center p-4 rounded-2xl glass card-hover border border-cb-border/40">
            <span className="text-2xl sm:text-3xl font-extrabold gradient-text-green">
              10K+
            </span>
            <span className="text-xs sm:text-sm font-medium text-cb-text-muted mt-1">
              Action Plans
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-2xl glass card-hover border border-cb-border/40">
            <span className="text-2xl sm:text-3xl font-extrabold gradient-text-green">
              50+
            </span>
            <span className="text-xs sm:text-sm font-medium text-cb-text-muted mt-1">
              Kategori Hustle
            </span>
          </div>

          <div className="flex flex-col items-center justify-center p-4 rounded-2xl glass card-hover border border-cb-border/40">
            <span className="text-2xl sm:text-3xl font-extrabold gradient-text">
              4.9★
            </span>
            <span className="text-xs sm:text-sm font-medium text-cb-text-muted mt-1">
              Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

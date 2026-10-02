"use client";

import React, { useState } from "react";

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Apa keahlian utama Anda?",
    subtitle: "Pilih bidang yang paling Anda kuasai atau minati",
    options: [
      "Menulis / Konten",
      "Desain / Visual",
      "Marketing / Jualan",
      "Coding / Tech",
      "Mengajar / Melatih",
      "Belum punya keahlian khusus",
    ],
  },
  {
    id: 2,
    question: "Berapa jam per minggu yang bisa Anda dedikasikan?",
    subtitle: "Waktu luang yang realistis untuk Anda jalankan konsisten",
    options: [
      "1-5 jam",
      "5-10 jam",
      "10-20 jam",
      "20+ jam (full time)",
    ],
  },
  {
    id: 3,
    question: "Berapa modal yang bisa Anda investasikan?",
    subtitle: "Modal awal untuk tools, domain, atau persiapan operasional",
    options: [
      "Rp 0 (tanpa modal)",
      "Rp 100K - 500K",
      "Rp 500K - 2 Juta",
      "Rp 2 Juta+",
    ],
  },
];

interface QuizPreviewProps {
  onOpenWaitlist?: () => void;
}

export default function QuizPreview({ onOpenWaitlist }: QuizPreviewProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleSelectOption = (option: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentStep] = option;
    setSelectedAnswers(updatedAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Finished all 3 questions -> brief AI matching animation
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setIsCompleted(true);
      }, 750);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsAnalyzing(false);
    setIsCompleted(false);
  };

  const handleCtaClick = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist();
      return;
    }

    // Fallback: Dispatch custom event or smooth scroll to waitlist/cta/pricing
    window.dispatchEvent(new CustomEvent("open-waitlist"));
    const target =
      document.getElementById("cta") ||
      document.getElementById("pricing") ||
      document.getElementById("waitlist");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentQuestion = questions[currentStep];
  const progressPercent = Math.round(
    isCompleted ? 100 : ((currentStep + 1) / questions.length) * 100
  );

  return (
    <section
      id="quiz-preview"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-cb-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cb-secondary/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cb-accent/10 border border-cb-accent/20 text-cb-accent text-xs sm:text-sm font-semibold mb-4">
            <span>⚡</span>
            <span>Interactive Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cb-text tracking-tight mb-4">
            ⚡ Coba <span className="gradient-text">Quiz Singkat</span>
          </h2>
          <p className="text-base sm:text-lg text-cb-text-muted leading-relaxed">
            Rasakan sendiri — ini preview dari assessment lengkap kami
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="glass glow-green border border-cb-primary/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative transition-all duration-300">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium mb-3">
              <span className="text-cb-text-muted flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cb-primary animate-pulse" />
                {isCompleted
                  ? "Assessment Selesai"
                  : `Step ${currentStep + 1}/3`}
              </span>
              <span className="text-cb-primary font-mono font-semibold">
                {progressPercent}%
              </span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-full h-2 bg-cb-border rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cb-primary to-cb-secondary transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Body Content */}
          {isAnalyzing ? (
            /* AI Analyzing State */
            <div className="py-16 text-center animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cb-primary/10 border border-cb-primary/30 mb-6 glow-green-sm">
                <span className="text-4xl animate-spin">⚙️</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-cb-text mb-2">
                Mencocokkan Profil Anda dengan AI...
              </h3>
              <p className="text-cb-text-muted text-sm max-w-sm mx-auto">
                Menganalisis 200+ peluang side hustle berdasarkan keahlian,
                waktu, dan modal Anda.
              </p>
            </div>
          ) : isCompleted ? (
            /* Quiz Result State */
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cb-primary/20 border border-cb-primary/40 text-3xl mb-4 glow-green-sm">
                  🎉
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-cb-text mb-3">
                  Berdasarkan profil Anda, ada{" "}
                  <span className="text-cb-primary underline decoration-cb-primary/50 underline-offset-4">
                    12 peluang penghasilan
                  </span>{" "}
                  yang cocok! 🎉
                </h3>
                <p className="text-cb-text-muted text-sm sm:text-base max-w-lg mx-auto">
                  Algoritma CashBot menemukan kecocokan tinggi antara waktu
                  luang dan modal yang Anda tentukan.
                </p>
              </div>

              {/* Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-cb-card/90 border border-cb-border rounded-xl p-4 text-center">
                  <span className="text-xs text-cb-text-muted block mb-1">
                    Keahlian
                  </span>
                  <span className="text-sm font-semibold text-cb-text">
                    {selectedAnswers[0] || "—"}
                  </span>
                </div>
                <div className="bg-cb-card/90 border border-cb-border rounded-xl p-4 text-center">
                  <span className="text-xs text-cb-text-muted block mb-1">
                    Komitmen Waktu
                  </span>
                  <span className="text-sm font-semibold text-cb-text">
                    {selectedAnswers[1] || "—"}
                  </span>
                </div>
                <div className="bg-cb-card/90 border border-cb-border rounded-xl p-4 text-center">
                  <span className="text-xs text-cb-text-muted block mb-1">
                    Modal Awal
                  </span>
                  <span className="text-sm font-semibold text-cb-text">
                    {selectedAnswers[2] || "—"}
                  </span>
                </div>
              </div>

              {/* Teaser Preview Box */}
              <div className="bg-cb-card/70 border border-cb-border rounded-2xl p-5 mb-8">
                <div className="flex items-center justify-between mb-3 text-xs text-cb-text-muted">
                  <span className="font-semibold text-cb-primary uppercase tracking-wider">
                    Top 3 Peluang Paling Cocok
                  </span>
                  <span>Skor Kecocokan</span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-cb-bg/80 border border-cb-border">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-cb-primary/20 text-cb-primary flex items-center justify-center text-xs font-bold font-mono">
                        1
                      </span>
                      <span className="text-sm font-medium text-cb-text">
                        Digital Service & Automation Freelancing
                      </span>
                    </div>
                    <span className="text-xs font-bold text-cb-primary bg-cb-primary/10 px-2 py-1 rounded-md">
                      98% Match
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-cb-bg/80 border border-cb-border">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-cb-secondary/20 text-cb-secondary flex items-center justify-center text-xs font-bold font-mono">
                        2
                      </span>
                      <span className="text-sm font-medium text-cb-text">
                        Micro-Agency & Digital Assets Creator
                      </span>
                    </div>
                    <span className="text-xs font-bold text-cb-secondary bg-cb-secondary/10 px-2 py-1 rounded-md">
                      94% Match
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-cb-bg/80 border border-cb-border">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-cb-accent/20 text-cb-accent flex items-center justify-center text-xs font-bold font-mono">
                        3
                      </span>
                      <span className="text-sm font-medium text-cb-text">
                        High-Ticket Affiliate & Growth Partner
                      </span>
                    </div>
                    <span className="text-xs font-bold text-cb-accent bg-cb-accent/10 px-2 py-1 rounded-md">
                      91% Match
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-black bg-cb-primary hover:bg-cb-primary-dark transition-smooth glow-green text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Lihat Hasil Lengkap (Gratis)</span>
                  <span className="text-lg">→</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-cb-text-muted hover:text-cb-text bg-cb-card hover:bg-cb-card-hover border border-cb-border transition-smooth text-center cursor-pointer"
                >
                  Ulangi Quiz ↻
                </button>
              </div>

              <p className="text-center text-xs text-cb-text-muted mt-5">
                🔒 Tanpa kartu kredit. Dapatkan akses instant ke action plan
                lengkap.
              </p>
            </div>
          ) : (
            /* Active Question State */
            <div className="animate-fade-in-up">
              {/* Question Header */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cb-primary font-bold block mb-2">
                  Pertanyaan {currentStep + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-cb-text mb-2">
                  {currentQuestion.question}
                </h3>
                <p className="text-sm text-cb-text-muted">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[currentStep] === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className={`group flex items-center justify-between p-4 rounded-xl border text-left cursor-pointer transition-smooth ${
                        isSelected
                          ? "bg-cb-primary/15 border-cb-primary text-cb-text glow-green-sm"
                          : "bg-cb-card/80 hover:bg-cb-card-hover border-cb-border hover:border-cb-primary/40 text-cb-text"
                      }`}
                    >
                      <span className="text-sm sm:text-base font-medium group-hover:text-cb-primary transition-colors">
                        {option}
                      </span>
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ml-3 transition-colors ${
                          isSelected
                            ? "border-cb-primary bg-cb-primary text-black"
                            : "border-cb-border group-hover:border-cb-primary/60 text-transparent"
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Footer navigation */}
              <div className="flex items-center justify-between pt-4 border-t border-cb-border/60">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className={`text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    currentStep === 0
                      ? "opacity-30 cursor-not-allowed text-cb-text-muted"
                      : "text-cb-text-muted hover:text-cb-text"
                  }`}
                >
                  <span>←</span>
                  <span>Sebelumnya</span>
                </button>

                <span className="text-xs text-cb-text-muted/70">
                  Pilih salah satu opsi untuk lanjut
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

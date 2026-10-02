"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { matchHustles, type SideHustle } from "@/lib/hustles";
import Link from "next/link";

function ResultsContent() {
  const searchParams = useSearchParams();
  const skill = searchParams.get("skill") || "";
  const time = searchParams.get("time") || "";
  const capital = searchParams.get("capital") || "";

  const [results, setResults] = useState<SideHustle[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    // Simulate AI processing
    const timer = setTimeout(() => {
      const matches = matchHustles(skill, time, capital);
      setResults(matches);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [skill, time, capital]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cb-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cb-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-cb-text mb-2">
            🤖 AI Sedang Menganalisis Profil Anda...
          </h2>
          <p className="text-cb-text-muted">
            Mencocokkan skill, waktu, dan modal Anda dengan 200+ peluang
            penghasilan
          </p>
          <div className="mt-6 space-y-2 max-w-md mx-auto">
            <div className="flex items-center gap-2 text-sm text-cb-text-muted">
              <span className="text-green-400">✓</span> Menganalisis skill:{" "}
              {skill}
            </div>
            <div className="flex items-center gap-2 text-sm text-cb-text-muted">
              <span className="text-green-400">✓</span> Waktu tersedia: {time}
            </div>
            <div className="flex items-center gap-2 text-sm text-cb-text-muted">
              <span className="text-yellow-400 animate-pulse">⟳</span>{" "}
              Mencocokkan peluang terbaik...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cb-bg">
      {/* Header */}
      <header className="border-b border-cb-border">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold gradient-text-green">
            🤖 CashBot
          </Link>
          <Link
            href="/"
            className="text-sm text-cb-text-muted hover:text-cb-text transition-colors"
          >
            ← Kembali
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-green-500/10 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            🎉 Analisis Selesai!
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-cb-text mb-3">
            Kami Menemukan{" "}
            <span className="gradient-text-green">{results.length} Peluang</span>{" "}
            untuk Anda
          </h1>
          <p className="text-cb-text-muted max-w-2xl mx-auto">
            Berdasarkan profil Anda ({skill}, {time}, {capital}), berikut
            peluang penghasilan yang paling cocok — diurutkan dari yang paling
            relevan.
          </p>
        </div>

        {/* Profile Summary Card */}
        <div className="bg-cb-card border border-cb-border rounded-xl p-5 mb-8">
          <h3 className="font-semibold text-sm text-cb-text-muted uppercase tracking-wide mb-3">
            📊 Profil Anda
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cb-bg rounded-lg p-3">
              <p className="text-xs text-cb-text-muted">Keahlian</p>
              <p className="font-medium text-cb-text">{skill || "Umum"}</p>
            </div>
            <div className="bg-cb-bg rounded-lg p-3">
              <p className="text-xs text-cb-text-muted">Waktu Tersedia</p>
              <p className="font-medium text-cb-text">{time || "-"}</p>
            </div>
            <div className="bg-cb-bg rounded-lg p-3">
              <p className="text-xs text-cb-text-muted">Modal</p>
              <p className="font-medium text-cb-text">{capital || "-"}</p>
            </div>
          </div>
        </div>

        {/* Results Cards */}
        <div className="space-y-4">
          {results.map((hustle, index) => (
            <div
              key={hustle.id}
              className={`bg-cb-card border rounded-xl overflow-hidden transition-all duration-300 ${
                index === 0
                  ? "border-green-500/50 glow-green-sm"
                  : "border-cb-border"
              }`}
            >
              {/* Card Header */}
              <button
                onClick={() =>
                  setExpandedId(expandedId === hustle.id ? null : hustle.id)
                }
                className="w-full text-left p-5 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cb-primary/20 flex items-center justify-center font-bold text-cb-primary">
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold text-lg text-cb-text">
                      {hustle.name}
                    </h3>
                    {index === 0 && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        ⭐ Best Match
                      </span>
                    )}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        hustle.difficulty === "mudah"
                          ? "bg-green-500/20 text-green-400"
                          : hustle.difficulty === "medium"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {hustle.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-cb-text-muted">
                    {hustle.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="text-xs bg-cb-bg px-3 py-1 rounded-full text-green-400 font-medium">
                      💰 {hustle.incomeRange}
                    </span>
                    <span className="text-xs bg-cb-bg px-3 py-1 rounded-full text-cb-text-muted">
                      ⏱ {hustle.timeRequired}
                    </span>
                    <span className="text-xs bg-cb-bg px-3 py-1 rounded-full text-cb-text-muted">
                      💵 {hustle.capitalRequired}
                    </span>
                    <span className="text-xs bg-cb-bg px-3 py-1 rounded-full text-cb-text-muted">
                      ⚡ {hustle.timeToFirstIncome}
                    </span>
                  </div>
                </div>
                <span className="text-cb-text-muted text-xl">
                  {expandedId === hustle.id ? "−" : "+"}
                </span>
              </button>

              {/* Expanded Content */}
              {expandedId === hustle.id && (
                <div className="border-t border-cb-border p-5 space-y-4 animate-fade-in-up">
                  {/* Steps */}
                  <div>
                    <h4 className="font-medium text-sm text-cb-text mb-3">
                      🗺️ Action Plan Step-by-Step
                    </h4>
                    <div className="space-y-2">
                      {hustle.steps.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-cb-primary/20 flex items-center justify-center flex-shrink-0 text-xs font-bold text-cb-primary">
                            {i + 1}
                          </div>
                          <p className="text-sm text-cb-text-muted">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div>
                    <h4 className="font-medium text-sm text-cb-text mb-2">
                      🔗 Platform yang Disarankan
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {hustle.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="text-xs bg-cb-bg border border-cb-border px-3 py-1.5 rounded-full text-cb-text"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-500/5 rounded-lg p-4">
                      <h4 className="font-medium text-sm text-green-400 mb-2">
                        ✅ Kelebihan
                      </h4>
                      <ul className="space-y-1">
                        {hustle.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="text-sm text-cb-text-muted flex items-start gap-2"
                          >
                            <span className="text-green-400">•</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-500/5 rounded-lg p-4">
                      <h4 className="font-medium text-sm text-red-400 mb-2">
                        ⚠️ Tantangan
                      </h4>
                      <ul className="space-y-1">
                        {hustle.cons.map((con, i) => (
                          <li
                            key={i}
                            className="text-sm text-cb-text-muted flex items-start gap-2"
                          >
                            <span className="text-red-400">•</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Upgrade CTA */}
        <div className="mt-10 bg-gradient-to-r from-green-500/10 to-indigo-500/10 border border-green-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-cb-text mb-2">
            Mau Action Plan Lebih Detail? 🚀
          </h3>
          <p className="text-cb-text-muted mb-5 max-w-lg mx-auto">
            Upgrade ke Pro untuk mendapatkan: action plan harian, AI opportunity
            alerts, income tracker, dan akses ke komunitas eksklusif.
          </p>
          <button className="bg-cb-primary hover:bg-cb-primary-dark text-white font-semibold px-8 py-3 rounded-full transition-smooth">
            Upgrade ke Pro — $12/bulan →
          </button>
          <p className="text-xs text-cb-text-muted mt-3">
            30 hari garansi uang kembali • Batal kapan saja
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-cb-bg flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-cb-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}

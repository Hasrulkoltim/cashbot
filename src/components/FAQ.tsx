"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Apakah CashBot benar-benar gratis?",
      answer:
        "Ya! Plan Starter sepenuhnya gratis dan bisa digunakan selamanya. Anda bisa upgrade ke Pro kapan saja untuk fitur lebih lengkap.",
    },
    {
      question: "Apakah ini MLM atau skema cepat kaya?",
      answer:
        "Sama sekali bukan! CashBot adalah tools AI yang merekomendasikan peluang penghasilan legitimate seperti freelancing, jualan digital products, affiliate marketing, dan lainnya. Semua rekomendasi kami berdasarkan data dan sudah terverifikasi.",
    },
    {
      question: "Saya tidak punya skill apapun, bisa pakai CashBot?",
      answer:
        "Tentu! CashBot punya kategori khusus untuk pemula tanpa keahlian khusus. Kami akan rekomendasikan peluang yang bisa Anda mulai sambil belajar, termasuk sumber belajar gratis.",
    },
    {
      question: "Berapa cepat saya bisa menghasilkan uang?",
      answer:
        "Tergantung peluang yang Anda pilih dan usaha yang Anda investasikan. Beberapa pengguna kami mendapat penghasilan pertama dalam 1-2 minggu, yang lain butuh 1-2 bulan. Yang pasti, action plan kami dirancang untuk hasil secepat mungkin.",
    },
    {
      question: "Apakah ada garansi uang kembali?",
      answer:
        "Ya! Plan Pro punya 30 hari garansi uang kembali. Kalau Anda merasa CashBot tidak membantu, kami refund 100% tanpa pertanyaan.",
    },
    {
      question: "Bagaimana CashBot berbeda dari googling sendiri?",
      answer:
        "Google memberikan ribuan artikel generic. CashBot menganalisis profil UNIK Anda (skill, waktu, modal, preferensi) dan memberikan action plan SPESIFIK yang bisa langsung dikerjakan. Plus, kami update rekomendasi secara real-time berdasarkan tren pasar.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">
      {/* Background glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cb-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cb-border bg-cb-card text-cb-text-muted text-xs font-semibold uppercase tracking-wider mb-4">
          <span>💡 Pusat Bantuan</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-cb-text tracking-tight mb-4">
          ❓ Pertanyaan yang Sering Ditanya
        </h2>
        <p className="text-cb-text-muted text-base sm:text-lg max-w-xl mx-auto">
          Masih ragu atau punya pertanyaan seputar CashBot? Temukan jawabannya di sini.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-cb-card/90 border-cb-primary/40 shadow-lg shadow-cb-primary/5"
                  : "bg-cb-card/50 border-cb-border hover:border-cb-border/80 hover:bg-cb-card"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
              >
                <span className="font-semibold text-base sm:text-lg text-cb-text pr-4">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                    isOpen
                      ? "bg-cb-primary text-cb-bg border-cb-primary rotate-180"
                      : "bg-cb-bg text-cb-text-muted border-cb-border"
                  }`}
                >
                  <svg
                    className="w-4 h-4 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 text-cb-text-muted text-sm sm:text-base leading-relaxed border-t border-cb-border/40 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

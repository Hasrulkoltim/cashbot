"use client";

import React from "react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  stars: number;
  quote: string;
  initials: string;
  avatarColor: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Rina S.",
    role: "Content Writer",
    stars: 5,
    quote:
      "Dalam 2 minggu setelah ikuti action plan CashBot, saya dapat 3 client pertama dari Upwork. Sekarang penghasilan saya Rp 8 juta/bulan dari freelance writing!",
    initials: "RS",
    avatarColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
  },
  {
    id: 2,
    name: "Budi P.",
    role: "Graphic Designer",
    stars: 5,
    quote:
      "Saya bingung mau jual desain di mana. CashBot kasih roadmap lengkap — sekarang template Canva saya sudah terjual 500+ copies.",
    initials: "BP",
    avatarColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/40",
  },
  {
    id: 3,
    name: "Sarah M.",
    role: "Ibu Rumah Tangga",
    stars: 5,
    quote:
      "Dengan waktu 2 jam sehari, CashBot sarankan saya jualan produk digital. Bulan pertama sudah dapat Rp 3 juta tambahan!",
    initials: "SM",
    avatarColor: "bg-amber-500/20 text-amber-400 border-amber-500/40",
  },
  {
    id: 4,
    name: "Andi K.",
    role: "Mahasiswa",
    stars: 4,
    quote:
      "Sebagai mahasiswa dengan waktu terbatas, CashBot bantu saya nemuin peluang yang pas. Sekarang penghasilan sampingan saya cukup buat bayar kos.",
    initials: "AK",
    avatarColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
  },
  {
    id: 5,
    name: "Dewi L.",
    role: "Karyawan Swasta",
    stars: 5,
    quote:
      "Pengen tambahan di luar gaji. CashBot suggest affiliate marketing — sekarang passive income saya Rp 5 juta/bulan.",
    initials: "DL",
    avatarColor: "bg-purple-500/20 text-purple-400 border-purple-500/40",
  },
  {
    id: 6,
    name: "Fajar R.",
    role: "Fresh Graduate",
    stars: 5,
    quote:
      "Belum dapat kerja, tapi berkat CashBot saya jadi freelancer dan penghasilan malah lebih besar dari gaji teman-teman!",
    initials: "FR",
    avatarColor: "bg-teal-500/20 text-teal-400 border-teal-500/40",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-cb-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cb-secondary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cb-primary/10 border border-cb-primary/20 text-cb-primary text-xs sm:text-sm font-semibold mb-4">
            <span>⭐</span>
            <span>Kisah Sukses Pengguna</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cb-text tracking-tight mb-4">
            💬 Apa Kata <span className="gradient-text">Mereka</span>
          </h2>
          <p className="text-base sm:text-lg text-cb-text-muted leading-relaxed">
            Ratusan orang telah menemukan jalan penghasilan baru mereka lewat
            bimbingan AI CashBot.
          </p>
        </div>

        {/* Testimonials Grid (3 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-cb-card rounded-xl border border-cb-border hover:border-cb-primary/40 p-6 sm:p-7 flex flex-col justify-between card-hover transition-smooth shadow-lg relative group"
            >
              {/* Top part: Quote mark & Stars */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1" aria-label={`Rating: ${item.stars} dari 5 bintang`}>
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-4 h-4 ${
                          starIndex <= item.stars
                            ? "text-amber-400 fill-amber-400"
                            : "text-cb-border fill-cb-border"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Decorative quote icon */}
                  <span className="text-cb-border group-hover:text-cb-primary/40 transition-colors text-2xl font-serif leading-none select-none">
                    “
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-cb-text-muted text-sm sm:text-base leading-relaxed mb-6 group-hover:text-cb-text transition-colors">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom part: User info with Avatar Initial Circle */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-cb-border/60">
                <div
                  className={`w-11 h-11 rounded-full border flex items-center justify-center font-bold text-sm shrink-0 shadow-inner ${item.avatarColor}`}
                >
                  {item.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-cb-text truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-cb-text-muted truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note at Bottom */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-cb-text-muted/70 italic">
            * Hasil masing-masing orang dapat berbeda
          </p>
        </div>
      </div>
    </section>
  );
}

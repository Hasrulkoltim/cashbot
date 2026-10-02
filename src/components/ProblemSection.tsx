"use client";

export default function ProblemSection() {
  const problems = [
    {
      title: "🔍 Googling Tanpa Henti",
      description:
        'Cari "cara dapat uang" di Google, baca 100 artikel, tapi tetap bingung mau mulai dari mana',
    },
    {
      title: "😵 Information Overload",
      description:
        "Terlalu banyak pilihan: freelance, dropship, affiliate, crypto, trading... mana yang cocok?",
    },
    {
      title: "⏰ Waktu Terbuang",
      description:
        "Sudah habis berminggu-minggu riset tapi belum menghasilkan sepeser pun",
    },
    {
      title: "💸 Trial & Error Mahal",
      description:
        "Coba sana-sini, beli kursus, ikut webinar, tapi hasilnya nol",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-cb-text">
            😫 Kenal Situasi Ini?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-cb-text-muted max-w-xl mx-auto">
            Hampir semua orang yang ingin mulai side hustle menghadapi rintangan yang sama berulang kali.
          </p>
        </div>

        {/* 4 Problem Cards in a Grid (2x2 on desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-cb-card card-hover rounded-2xl p-6 sm:p-8 border border-cb-border/60 transition-smooth"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-cb-text mb-3">
                {problem.title}
              </h3>
              <p className="text-base text-cb-text-muted leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Solution text below cards */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text-green">
            CashBot menyelesaikan semua masalah ini dalam 5 menit.
          </p>
        </div>
      </div>
    </section>
  );
}

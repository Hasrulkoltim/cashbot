export interface SideHustle {
  id: string;
  name: string;
  category: string;
  description: string;
  incomeRange: string;
  timeRequired: string;
  capitalRequired: string;
  difficulty: "mudah" | "medium" | "sulit";
  skills: string[];
  platforms: string[];
  steps: string[];
  pros: string[];
  cons: string[];
  timeToFirstIncome: string;
  tags: string[];
}

export const sideHustles: SideHustle[] = [
  {
    id: "freelance-writing",
    name: "Freelance Content Writing",
    category: "Menulis / Konten",
    description:
      "Menulis artikel, blog post, copywriting untuk bisnis dan website. Salah satu cara tercepat menghasilkan uang online tanpa modal.",
    incomeRange: "Rp 3-15 Juta/bulan",
    timeRequired: "5-20 jam/minggu",
    capitalRequired: "Rp 0",
    difficulty: "mudah",
    skills: ["Menulis / Konten"],
    platforms: ["Upwork", "Fiverr", "Sribulancer", "Projects.co.id"],
    steps: [
      "Buat portfolio writing dengan 3-5 sampel artikel",
      "Daftar di platform freelance (Upwork, Fiverr, Sribulancer)",
      "Buat profile yang compelling dengan foto profesional",
      "Mulai apply ke 5-10 job per hari",
      "Deliver hasil terbaik untuk dapat review positif",
      "Naikkan harga setelah dapat 5+ review bintang 5",
    ],
    pros: [
      "Tanpa modal",
      "Bisa dikerjakan dari mana saja",
      "Demand tinggi",
      "Income bisa scale dengan cepat",
    ],
    cons: [
      "Kompetisi awal cukup ketat",
      "Perlu konsistensi",
      "Butuh waktu bangun reputasi",
    ],
    timeToFirstIncome: "1-2 minggu",
    tags: ["tanpa modal", "pemula", "remote", "fleksibel"],
  },
  {
    id: "graphic-design",
    name: "Jasa Desain Grafis Freelance",
    category: "Desain / Visual",
    description:
      "Buat logo, social media posts, banner, presentasi untuk bisnis. Canva sudah cukup untuk memulai.",
    incomeRange: "Rp 5-20 Juta/bulan",
    timeRequired: "10-20 jam/minggu",
    capitalRequired: "Rp 0 - 200K",
    difficulty: "mudah",
    skills: ["Desain / Visual"],
    platforms: ["Fiverr", "99designs", "Canva", "Sribulancer"],
    steps: [
      "Kuasai Canva Pro atau Figma (gratis)",
      "Buat 10 sampel desain untuk portfolio",
      "Upload portfolio di Behance dan Dribbble",
      "Buat gig di Fiverr dengan harga kompetitif",
      "Tawarkan jasa di grup Facebook bisnis lokal",
      "Bangun repeat client base",
    ],
    pros: [
      "Bisa mulai dengan Canva (gratis)",
      "Banyak template untuk percepat kerja",
      "High demand dari UMKM",
    ],
    cons: [
      "Perlu eye for design",
      "Revisi bisa makan waktu",
      "Rate awal mungkin rendah",
    ],
    timeToFirstIncome: "1-3 minggu",
    tags: ["kreatif", "visual", "remote", "fleksibel"],
  },
  {
    id: "social-media-management",
    name: "Social Media Manager",
    category: "Marketing / Jualan",
    description:
      "Kelola akun Instagram, TikTok, Facebook untuk bisnis. Buat konten, jadwalkan posting, analisis engagement.",
    incomeRange: "Rp 3-10 Juta/bulan per client",
    timeRequired: "10-15 jam/minggu",
    capitalRequired: "Rp 0",
    difficulty: "mudah",
    skills: ["Marketing / Jualan"],
    platforms: ["Instagram", "TikTok", "Facebook", "LinkedIn"],
    steps: [
      "Kelola akun media sosial sendiri sebagai portfolio",
      "Belajar tools scheduling (Buffer, Later, Hootsuite)",
      "Buat proposal template untuk pitching ke UMKM",
      "Approach 10 bisnis lokal yang social medianya kurang aktif",
      "Tawarkan trial 1 bulan gratis atau harga diskon",
      "Tunjukkan hasil growth → convert jadi client tetap",
    ],
    pros: [
      "Tanpa modal",
      "Skill yang sudah Anda pakai sehari-hari",
      "Recurring income (retainer bulanan)",
      "Bisa handle 3-5 client sekaligus",
    ],
    cons: [
      "Perlu kreatif bikin konten terus",
      "Client bisa demanding",
      "Weekend kerja kadang diperlukan",
    ],
    timeToFirstIncome: "2-4 minggu",
    tags: ["marketing", "social media", "recurring", "tanpa modal"],
  },
  {
    id: "web-development",
    name: "Web Developer Freelance",
    category: "Coding / Tech",
    description:
      "Buat website, landing page, atau web app untuk bisnis. Salah satu skill dengan bayaran tertinggi di freelance.",
    incomeRange: "Rp 10-50 Juta/bulan",
    timeRequired: "15-40 jam/minggu",
    capitalRequired: "Rp 0",
    difficulty: "medium",
    skills: ["Coding / Tech"],
    platforms: ["Upwork", "Toptal", "GitHub", "LinkedIn"],
    steps: [
      "Kuasai HTML, CSS, JavaScript + satu framework (React/Next.js)",
      "Buat 3-5 project portfolio",
      "Publish portfolio website sendiri",
      "Join platform freelance dan mulai bidding",
      "Networking di komunitas developer",
      "Spesialisasi di niche tertentu (e-commerce, SaaS, dll)",
    ],
    pros: [
      "Rate sangat tinggi ($30-100+/jam)",
      "Demand sangat besar dan terus tumbuh",
      "Remote friendly",
      "Bisa scale jadi agency",
    ],
    cons: [
      "Learning curve cukup tinggi",
      "Perlu terus update skill",
      "Project bisa complex dan makan waktu",
    ],
    timeToFirstIncome: "1-3 bulan",
    tags: ["tech", "high-income", "remote", "scalable"],
  },
  {
    id: "online-tutoring",
    name: "Tutor / Pengajar Online",
    category: "Mengajar / Melatih",
    description:
      "Ajarkan skill apapun yang Anda kuasai secara online: bahasa, musik, akademik, coding, marketing, dll.",
    incomeRange: "Rp 2-10 Juta/bulan",
    timeRequired: "5-15 jam/minggu",
    capitalRequired: "Rp 0",
    difficulty: "mudah",
    skills: ["Mengajar / Melatih"],
    platforms: ["Superprof", "Preply", "Italki", "Zoom", "Google Meet"],
    steps: [
      "Tentukan apa yang mau diajarkan",
      "Daftar di platform tutoring (Superprof, Preply)",
      "Set harga kompetitif untuk attract murid pertama",
      "Buat materi/kurikulum sederhana",
      "Minta review dari murid yang puas",
      "Naikkan harga setelah dapat 10+ review",
    ],
    pros: [
      "Tanpa modal",
      "Sangat fleksibel jadwalnya",
      "Rewarding secara personal",
      "Bisa scale ke group class",
    ],
    cons: [
      "Income terbatas oleh waktu",
      "Perlu sabar dengan murid",
      "Cancelation bisa frustrating",
    ],
    timeToFirstIncome: "1-2 minggu",
    tags: ["mengajar", "fleksibel", "tanpa modal", "rewarding"],
  },
  {
    id: "digital-product-selling",
    name: "Jual Produk Digital",
    category: "Belum punya keahlian khusus",
    description:
      "Buat dan jual template Notion, Canva, spreadsheet Excel, ebook, atau preset foto. Sekali buat, bisa dijual berulang (passive income).",
    incomeRange: "Rp 1-20 Juta/bulan",
    timeRequired: "10-20 jam/minggu (awal), 2-5 jam/minggu (setelah jalan)",
    capitalRequired: "Rp 0 - 500K",
    difficulty: "medium",
    skills: ["Belum punya keahlian khusus"],
    platforms: [
      "Gumroad",
      "Tokopedia Digital",
      "Etsy",
      "Creative Market",
      "Shopee",
    ],
    steps: [
      "Pilih jenis produk digital (template, ebook, preset, dll)",
      "Riset apa yang laku di marketplace (lihat best sellers)",
      "Buat produk pertama dengan kualitas tinggi",
      "Upload di Gumroad/Etsy dengan SEO yang baik",
      "Promote di Instagram, TikTok, Pinterest",
      "Iterate: buat produk baru berdasarkan feedback",
    ],
    pros: [
      "Passive income potensial",
      "Sekali buat, bisa dijual ribuan kali",
      "Bisa mulai tanpa skill khusus (Canva templates)",
      "Scalable tanpa tambah waktu",
    ],
    cons: [
      "Butuh effort awal yang signifikan",
      "Perlu marketing untuk drive sales",
      "Kompetisi meningkat",
    ],
    timeToFirstIncome: "2-4 minggu",
    tags: ["passive income", "scalable", "pemula", "produk digital"],
  },
  {
    id: "affiliate-marketing",
    name: "Affiliate Marketing",
    category: "Marketing / Jualan",
    description:
      "Promosikan produk orang lain dan dapat komisi dari setiap penjualan. Cocok untuk yang jago marketing tapi tidak mau bikin produk sendiri.",
    incomeRange: "Rp 2-30 Juta/bulan",
    timeRequired: "5-15 jam/minggu",
    capitalRequired: "Rp 0 - 1 Juta",
    difficulty: "medium",
    skills: ["Marketing / Jualan"],
    platforms: [
      "Tokopedia Affiliate",
      "Shopee Affiliate",
      "Amazon Associates",
      "Impact",
    ],
    steps: [
      "Pilih niche yang Anda passionate (tech, beauty, finance, dll)",
      "Daftar program affiliate (Tokopedia, Shopee, Amazon)",
      "Buat platform konten: blog, YouTube, TikTok, atau Instagram",
      "Buat review dan rekomendasi produk yang genuine",
      "Optimize untuk SEO dan social media",
      "Scale dengan lebih banyak konten dan traffic sources",
    ],
    pros: [
      "Tidak perlu buat produk",
      "Passive income setelah konten dibuat",
      "Bisa dikombinasikan dengan konten yang sudah ada",
      "Scalable",
    ],
    cons: [
      "Butuh waktu bangun audience",
      "Komisi bervariasi (2-50%)",
      "Tergantung pada platform affiliate",
    ],
    timeToFirstIncome: "1-3 bulan",
    tags: ["marketing", "passive income", "konten", "scalable"],
  },
  {
    id: "dropshipping",
    name: "Dropshipping / Reseller Online",
    category: "Belum punya keahlian khusus",
    description:
      "Jual produk fisik tanpa stok. Supplier yang kirim langsung ke pembeli. Modal kecil, risiko rendah.",
    incomeRange: "Rp 3-15 Juta/bulan",
    timeRequired: "10-20 jam/minggu",
    capitalRequired: "Rp 500K - 2 Juta",
    difficulty: "medium",
    skills: ["Belum punya keahlian khusus"],
    platforms: ["Shopee", "Tokopedia", "TikTok Shop", "Shopify"],
    steps: [
      "Riset produk trending di marketplace",
      "Cari supplier terpercaya (Alibaba, supplier lokal)",
      "Buat toko di marketplace (Shopee/Tokopedia)",
      "Optimize listing: foto bagus, deskripsi compelling, harga kompetitif",
      "Jalankan iklan kecil untuk test market",
      "Scale produk yang laku, drop yang tidak",
    ],
    pros: [
      "Tidak perlu stok barang",
      "Modal relatif kecil",
      "Bisa dikerjakan part-time",
      "Belajar bisnis secara langsung",
    ],
    cons: [
      "Margin bisa tipis",
      "Kualitas tergantung supplier",
      "Customer service bisa makan waktu",
      "Kompetisi di marketplace tinggi",
    ],
    timeToFirstIncome: "1-4 minggu",
    tags: ["jualan", "e-commerce", "pemula", "modal kecil"],
  },
  {
    id: "video-editing",
    name: "Video Editor Freelance",
    category: "Desain / Visual",
    description:
      "Edit video untuk YouTuber, TikToker, bisnis. Demand sangat tinggi seiring boom konten video.",
    incomeRange: "Rp 5-25 Juta/bulan",
    timeRequired: "15-30 jam/minggu",
    capitalRequired: "Rp 0 - 500K",
    difficulty: "medium",
    skills: ["Desain / Visual"],
    platforms: ["Upwork", "Fiverr", "Instagram DM", "LinkedIn"],
    steps: [
      "Kuasai CapCut (gratis) atau DaVinci Resolve (gratis)",
      "Edit 5 video portfolio (bisa re-edit video YouTube orang)",
      "Buat profile di Fiverr dan Upwork",
      "DM langsung ke YouTuber/TikToker yang butuh editor",
      "Tawarkan 1 video gratis sebagai trial",
      "Lock long-term retainer deals",
    ],
    pros: [
      "Demand sangat tinggi",
      "Tools gratis tersedia (CapCut, DaVinci Resolve)",
      "Rate bisa sangat tinggi untuk editor skilled",
      "Recurring income dari retainer",
    ],
    cons: [
      "Butuh komputer yang cukup kuat",
      "Deadline bisa ketat",
      "Revisi bisa makan waktu",
    ],
    timeToFirstIncome: "1-3 minggu",
    tags: ["kreatif", "video", "high-demand", "remote"],
  },
  {
    id: "online-course-creation",
    name: "Buat & Jual Kursus Online",
    category: "Mengajar / Melatih",
    description:
      "Buat kursus online tentang apapun yang Anda kuasai. Passive income terbaik — sekali buat, bisa dijual terus.",
    incomeRange: "Rp 5-50 Juta/bulan",
    timeRequired: "40-80 jam (pembuatan), 5 jam/minggu (maintenance)",
    capitalRequired: "Rp 0 - 1 Juta",
    difficulty: "sulit",
    skills: ["Mengajar / Melatih"],
    platforms: ["Udemy", "Skillshare", "Teachable", "Own Website"],
    steps: [
      "Pilih topik yang Anda expert dan ada demand",
      "Riset kursus kompetitor — apa yang bisa Anda improve?",
      "Buat outline kursus (8-15 modul)",
      "Record dengan smartphone + mic murah (cukup!)",
      "Upload di Udemy atau buat website sendiri",
      "Promote di social media, YouTube, blog",
    ],
    pros: [
      "Passive income setelah launch",
      "Authority building",
      "Scalable tanpa batas",
      "Harga bisa premium ($50-500)",
    ],
    cons: [
      "Effort awal sangat besar",
      "Perlu marketing yang kuat",
      "Perlu update konten berkala",
    ],
    timeToFirstIncome: "1-3 bulan",
    tags: ["passive income", "premium", "authority", "scalable"],
  },
  {
    id: "virtual-assistant",
    name: "Virtual Assistant (VA)",
    category: "Belum punya keahlian khusus",
    description:
      "Bantu bisnis owner dengan tugas admin, email, scheduling, data entry, customer service. Tidak perlu skill khusus.",
    incomeRange: "Rp 3-8 Juta/bulan",
    timeRequired: "10-30 jam/minggu",
    capitalRequired: "Rp 0",
    difficulty: "mudah",
    skills: ["Belum punya keahlian khusus"],
    platforms: [
      "Belay",
      "Time Etc",
      "Upwork",
      "OnlineJobs.ph",
      "LinkedIn",
    ],
    steps: [
      "List semua skill admin yang Anda punya (email, spreadsheet, scheduling)",
      "Buat CV/profile yang highlight organizational skills",
      "Daftar di platform VA atau apply langsung ke bisnis",
      "Mulai dengan rate competitive",
      "Spesialisasi di industry tertentu untuk naikkan rate",
      "Bangun long-term relationships dengan client",
    ],
    pros: [
      "Tanpa modal dan tanpa skill khusus",
      "Demand tinggi dari bisnis owner",
      "Bisa dikerjakan dari rumah",
      "Peluang belajar banyak skill baru",
    ],
    cons: [
      "Rate awal cukup rendah",
      "Bisa monoton",
      "Time zone differences (untuk client luar)",
    ],
    timeToFirstIncome: "1-2 minggu",
    tags: ["pemula", "tanpa modal", "remote", "admin"],
  },
  {
    id: "podcast-production",
    name: "Podcast Editor & Producer",
    category: "Desain / Visual",
    description:
      "Edit dan produksi podcast untuk podcaster. Niche yang masih undersaturated tapi demand terus tumbuh.",
    incomeRange: "Rp 3-12 Juta/bulan",
    timeRequired: "10-20 jam/minggu",
    capitalRequired: "Rp 0",
    difficulty: "mudah",
    skills: ["Desain / Visual"],
    platforms: ["Upwork", "Fiverr", "Podcast communities"],
    steps: [
      "Belajar audio editing dengan Audacity (gratis) atau GarageBand",
      "Edit 3-5 podcast episodes sebagai portfolio",
      "Buat gig di Fiverr khusus podcast editing",
      "Join komunitas podcaster dan tawarkan jasa",
      "Offer package: editing + show notes + social media clips",
      "Lock retainer deals (per episode atau per bulan)",
    ],
    pros: [
      "Niche yang belum terlalu ramai",
      "Recurring income per episode",
      "Tools gratis tersedia",
      "Bisa add-on services",
    ],
    cons: [
      "Perlu telinga yang detail",
      "Bisa repetitive",
      "Market masih growing di Indonesia",
    ],
    timeToFirstIncome: "1-3 minggu",
    tags: ["audio", "niche", "recurring", "remote"],
  },
];

export function matchHustles(
  skill: string,
  timePerWeek: string,
  capital: string
): SideHustle[] {
  return sideHustles
    .map((hustle) => {
      let score = 0;

      // Skill match
      if (hustle.skills.includes(skill)) score += 3;
      if (skill === "Belum punya keahlian khusus" && hustle.difficulty === "mudah")
        score += 2;

      // Time match
      if (timePerWeek === "1-5 jam" && hustle.timeRequired.includes("5"))
        score += 2;
      if (timePerWeek === "5-10 jam" && hustle.timeRequired.includes("10"))
        score += 2;
      if (
        timePerWeek === "10-20 jam" &&
        (hustle.timeRequired.includes("15") || hustle.timeRequired.includes("20"))
      )
        score += 2;
      if (timePerWeek === "20+ jam (full time)") score += 2;

      // Capital match
      if (capital === "Rp 0 (tanpa modal)" && hustle.capitalRequired.includes("0"))
        score += 2;
      if (capital === "Rp 100K - 500K") score += 1;
      if (capital === "Rp 500K - 2 Juta") score += 1;
      if (capital === "Rp 2 Juta+") score += 1;

      return { ...hustle, score };
    })
    .sort(
      (a, b) => (b as SideHustle & { score: number }).score - (a as SideHustle & { score: number }).score
    )
    .slice(0, 5);
}

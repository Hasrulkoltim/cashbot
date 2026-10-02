import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CashBot — Temukan Cara Menghasilkan Uang yang Cocok untuk Anda",
  description:
    "AI-powered side hustle finder. Jawab 5 pertanyaan, dapatkan rekomendasi personalized untuk mulai menghasilkan uang berdasarkan skill, waktu, dan modal Anda.",
  keywords: [
    "cara menghasilkan uang",
    "side hustle",
    "penghasilan tambahan",
    "kerja online",
    "freelance",
    "passive income",
    "uang dari internet",
  ],
  openGraph: {
    title: "CashBot — Temukan Cara Menghasilkan Uang yang Cocok untuk Anda",
    description:
      "Jawab 5 pertanyaan. Dapatkan rekomendasi AI personalized untuk mulai menghasilkan uang.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "CashBot — AI Side Hustle Finder",
    description:
      "Temukan cara menghasilkan uang yang cocok dengan skill & waktu Anda.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

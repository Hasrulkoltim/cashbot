"use client";

import React, { useState, useEffect } from "react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("Cari penghasilan tambahan");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setGoal("Cari penghasilan tambahan");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in-up"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Modal Card */}
      <div
        className="glass bg-cb-card/95 border border-cb-border max-w-md w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          aria-label="Tutup modal"
          className="absolute top-5 right-5 text-cb-text-muted hover:text-cb-text p-2 rounded-full hover:bg-cb-border/60 transition-colors cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-5 animate-fade-in-up">
            <div className="w-16 h-16 bg-cb-primary/10 border border-cb-primary/30 rounded-full flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-cb-text">Terima Kasih!</h3>
              <p className="text-sm text-cb-text-muted leading-relaxed px-2">
                🎉 Anda sudah terdaftar! Cek email Anda untuk langkah selanjutnya.
              </p>
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-4 w-full py-3 px-6 rounded-xl bg-cb-primary hover:bg-cb-primary-dark text-cb-bg font-bold transition-smooth"
            >
              Tutup
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-2xl sm:text-3xl font-black text-cb-text tracking-tight mb-2">
                Daftar Early Access Gratis
              </h3>
              <p className="text-sm text-cb-text-muted">
                Dapatkan akses pertama + Pro plan{" "}
                <span className="text-cb-primary font-semibold">GRATIS selama 3 bulan.</span>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-cb-text-muted mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Pratama"
                  className="w-full px-4 py-3 rounded-xl bg-cb-bg border border-cb-border text-cb-text placeholder-cb-text-muted/50 focus:outline-none focus:border-cb-primary focus:ring-1 focus:ring-cb-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-cb-text-muted mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-cb-bg border border-cb-border text-cb-text placeholder-cb-text-muted/50 focus:outline-none focus:border-cb-primary focus:ring-1 focus:ring-cb-primary transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-cb-text-muted mb-1.5">
                  Apa tujuan Anda?
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-cb-bg border border-cb-border text-cb-text focus:outline-none focus:border-cb-primary focus:ring-1 focus:ring-cb-primary transition-colors text-sm cursor-pointer"
                >
                  <option value="Cari penghasilan tambahan">Cari penghasilan tambahan</option>
                  <option value="Jadi freelancer">Jadi freelancer</option>
                  <option value="Buat bisnis online">Buat bisnis online</option>
                  <option value="Resign dari kantor">Resign dari kantor</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3.5 px-6 rounded-xl bg-cb-primary hover:bg-cb-primary-dark disabled:opacity-50 text-cb-bg font-bold transition-smooth shadow-lg shadow-cb-primary/20 cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Mendaftarkan...</span>
                ) : (
                  <>
                    <span>Daftar Sekarang</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>

            {/* Social Proof & Privacy */}
            <div className="mt-6 pt-5 border-t border-cb-border/60 text-center space-y-1.5">
              <p className="text-xs text-cb-text-muted">
                Bergabung dengan <span className="text-cb-primary font-semibold">2,847 orang lainnya</span>
              </p>
              <p className="text-xs text-cb-text-muted/70">
                🔒 Data Anda aman. Kami tidak akan spam.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

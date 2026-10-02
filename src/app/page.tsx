"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import QuizPreview from "@/components/QuizPreview";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <main className="animated-gradient grid-pattern min-h-screen">
      <Navbar onJoinWaitlist={openWaitlist} />
      <Hero onJoinWaitlist={openWaitlist} />
      <ProblemSection />
      <HowItWorks />
      <QuizPreview />
      <Testimonials />
      <Pricing onJoinWaitlist={openWaitlist} />
      <FAQ />
      <CTA onJoinWaitlist={openWaitlist} />
      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </main>
  );
}

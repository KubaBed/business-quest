"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

const HeroBlobs = dynamic(() => import("@/components/animations/HeroBlobs"), {
  ssr: false,
});

/* Custom cubic-bezier — no linear/ease-in-out (taste skill mandate) */
const ease = [0.32, 0.72, 0, 1] as const;

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20"
      style={{ background: "var(--gradient-warm-bg)" }}
    >
      {/* Layer 1: Animated gradient blobs */}
      <HeroBlobs />

      {/* Layer 2: Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left column — text content (original businessquest.pl copy) */}
          <div>
            {/* Eyebrow tag — pill-shaped, microscopic (high-end-visual-design §4C) */}
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease }}
            >
              <SectionLabel className="mb-6">HR Consulting & Leadership</SectionLabel>
            </motion.div>

            {/* H1 — no gradient text on large headers (taste skill §7) */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-brand-text mb-6"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease, delay: 0.08 }}
            >
              Budujemy efektywne zespoły i proste{" "}
              <span className="text-magenta">procesy HR</span>
            </motion.h1>

            <motion.p
              className="text-brand-muted text-base lg:text-lg leading-relaxed max-w-[55ch] mb-8"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease, delay: 0.16 }}
            >
              Procesy i checklisty wspierają współpracę zespołu, ale jej nie zastąpią.
              Pomagamy firmom budować struktury HR, rozwijać liderów
              i&nbsp;tworzyć kulturę, która zatrzymuje talenty.
            </motion.p>

            {/* CTA — Button-in-Button with trailing icon (high-end-visual-design §4B) */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease, delay: 0.24 }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-magenta text-white rounded-full pl-7 pr-2 py-2 font-semibold text-[15px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lg hover:shadow-magenta/25 active:scale-[0.98]"
              >
                Porozmawiajmy
                {/* Nested icon circle — flush right (high-end-visual-design §4B) */}
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
              <Button href="#uslugi" variant="ghost" size="lg">
                Nasze usługi
              </Button>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              className="flex flex-wrap items-center gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
            >
              {/* Client logos hint */}
              <div className="flex items-center -space-x-2">
                {["V", "A", "S", "C"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{
                      background: `hsl(${330 + i * 25}, 75%, ${45 + i * 8}%)`,
                      zIndex: 4 - i,
                    }}
                  >
                    {letter}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-brand-bg-alt flex items-center justify-center text-[10px] font-semibold text-brand-muted" style={{ zIndex: 0 }}>
                  +6
                </div>
              </div>
              <div className="h-8 w-px bg-magenta-dim/40 hidden sm:block" />
              <p className="text-brand-muted text-sm">
                Zaufało nam <span className="font-semibold text-brand-text">ponad 150 firm</span> z branży tech i&nbsp;e&#8209;commerce
              </p>
            </motion.div>
          </div>

          {/* Right column — photo with Double-Bezel architecture */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            {/* Soft radial glow */}
            <div
              className="absolute inset-[-24px] opacity-25 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 60% 40%, #F7087F 0%, transparent 65%)",
              }}
            />

            {/* Outer shell — Double-Bezel (high-end-visual-design §4A) */}
            <div className="relative rounded-[2rem] bg-magenta/[0.04] ring-1 ring-magenta/[0.08] p-1.5">
              {/* Inner core — blob-masked photo */}
              <div
                className="relative w-full aspect-[4/5] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
                style={{
                  borderRadius: "calc(2rem - 0.375rem)",
                }}
              >
                <Image
                  src="/images/team/asia.png"
                  alt="Business Quest — konsulting HR i rozwój liderów"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Gradient accent dot */}
            <div
              className="absolute -bottom-3 -right-5 w-16 h-16 rounded-full opacity-80 pointer-events-none"
              style={{ background: "var(--gradient-brand)" }}
            />

            {/* Floating badge — Double-Bezel architecture (outer + inner) */}
            <motion.div
              className="absolute -bottom-5 left-4 rounded-[1.25rem] bg-white/5 ring-1 ring-black/[0.04] p-1"
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.65 }}
            >
              <div className="bg-white rounded-[calc(1.25rem-0.25rem)] px-4 py-3 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] flex items-center gap-2.5">
                {/* SVG star instead of emoji (taste skill anti-emoji policy) */}
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-brand-text text-sm leading-none tabular-nums">4.9 / 5</p>
                  <p className="text-brand-muted text-[11px] mt-0.5">ocena warsztatów</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

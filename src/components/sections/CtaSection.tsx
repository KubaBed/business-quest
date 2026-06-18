"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/animations/MagneticButton";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CtaSection() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-32"
      style={{ background: "var(--color-dark)" }}
    >
      {/* Rotating decorative blob */}
      <motion.div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none"
        style={{
          background: "var(--gradient-brand)",
          borderRadius: "48% 52% 42% 58% / 55% 45% 60% 40%",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Second blob — subtler */}
      <motion.div
        className="absolute left-[-8%] bottom-[-10%] w-[350px] h-[350px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #FF6B2B 0%, transparent 70%)",
          borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-magenta-dim text-sm font-semibold uppercase tracking-widest mb-4">
              Gotowy na zmianę?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-tight tracking-tight mb-6">
              Zacznijmy od rozmowy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Bezpłatna 30-minutowa konsultacja. Bez zobowiązań.
              Dowiedz się, jak możemy wesprzeć Twój zespół.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <MagneticButton strength={0.25}>
                <Button href="#kontakt" variant="white" size="lg">
                  Umów bezpłatną rozmowę
                </Button>
              </MagneticButton>
              <Button href="mailto:hello@businessquest.pl" variant="white-ghost" size="lg">
                Napisz do nas
              </Button>
            </div>

            <p className="text-white/30 text-sm">
              lub zadzwoń:{" "}
              <a href="tel:+48000000000" className="hover:text-white/60 transition-colors">
                +48 000 000 000
              </a>
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

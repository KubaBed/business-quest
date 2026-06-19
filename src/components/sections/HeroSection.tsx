"use client";

import { motion } from "framer-motion";
import RotatingPhotos from "@/components/sections/RotatingPhotos";
import RoughHighlight from "@/components/decor/RoughHighlight";
import LogoMarquee from "@/components/sections/LogoMarquee";

/* Custom cubic-bezier — no linear/ease-in-out (taste skill mandate) */
const ease = [0.32, 0.72, 0, 1] as const;

/* Wspólny preset fade-in + blur */
const fadeBlur = {
  initial: { opacity: 0, y: 24, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#F7F2EA] pt-20">
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 lg:min-h-[calc(100dvh-5rem)]">

          {/* Left — tekst */}
          <div className="flex flex-col justify-center order-2 lg:order-1 pb-14 lg:pb-0">
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-[5.5rem] font-extrabold tracking-tight leading-[0.98] text-brand-text"
              {...fadeBlur}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
            >
              Twój{" "}
              <RoughHighlight type="highlight" color="#F7087F" delay={1300} padding={[2, 1]} className="inline-block leading-[0.5]">
                pierwszy
              </RoughHighlight>{" "}
              zespół&nbsp;HR.
            </motion.h1>

            <motion.p
              className="mt-8 2xl:mt-10 text-brand-body text-lg lg:text-xl 2xl:text-2xl leading-relaxed max-w-[48ch]"
              {...fadeBlur}
              transition={{ duration: 0.8, ease, delay: 0.28 }}
            >
              Sprawy zespołu przestają lądować tylko na Twoim biurku. Proste
              i&nbsp;użyteczne rozwiązania dla{" "}
              <span className="font-semibold text-brand-text">mikro i małych firm</span>.
            </motion.p>

            <motion.div
              className="mt-10"
              {...fadeBlur}
              transition={{ duration: 0.8, ease, delay: 0.44 }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-magenta text-white rounded-full pl-7 pr-2 py-2 font-semibold text-[15px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lg hover:shadow-magenta/25 active:scale-[0.98]"
              >
                Umów bezpłatną rozmowę
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Pasek logo klientów — marquee */}
            <motion.div
              className="mt-14 max-w-md"
              {...fadeBlur}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
            >
              <LogoMarquee label="Zaufali nam" />
            </motion.div>
          </div>

          {/* Right — rotujące zdjęcia founderek, doklejone do dołu sekcji */}
          <motion.div
            className="order-1 lg:order-2 flex items-end justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease, delay: 0.2 }}
          >
            <div className="w-full max-w-[420px] aspect-[4/5] lg:max-w-[520px] 2xl:max-w-[620px] lg:aspect-auto lg:h-[90%]">
              <RotatingPhotos className="rounded-[2rem] lg:rounded-b-none lg:rounded-t-[2.5rem]" />
            </div>
          </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { team, teamPhoto } from "@/data/team";

/* Panel = trzecia część zdjęcia 2000×1414 (aspect ~1.414); szer. = wys. * 0.4715.
   Kolumna = szerokość panelu (bez odstępu) → 3 panele stykają się w jedno zdjęcie.
   Podpisy są szersze i wystają poza kolumnę (centrowane) — mieszczą się
   w przerwach, które powstają po rozjeździe. */
/* Wysokość zdjęcia liczona od dostępnej wysokości widoku: rezerwujemy miejsce
   na navbar, nagłówek, podpisy i oddech, więc przy rozjeździe przyciski nie
   chowają się pod kolejną sekcją, a nad zdjęciem zostaje przestrzeń. */
const PANEL_H = "clamp(340px, calc(100vh - 25rem), 800px)";
const PANEL_W = `calc(${PANEL_H} * 0.4715)`;
const POS_X = ["0%", "50%", "100%"];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ReadMoreButton() {
  return (
    <Link
      href="/o-nas"
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-magenta-deep border border-magenta/30 hover:border-magenta hover:bg-magenta/5 transition-colors"
    >
      Poczytaj więcej
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const reduce = useReducedMotion();
  // Jedno zdjęcie → rozjazd na 3 (nagłówek statyczny)
  const xLeft = useTransform(scrollYProgress, [0.12, 0.52], [0, -130]);
  const xRight = useTransform(scrollYProgress, [0.12, 0.52], [0, 130]);
  const yCenter = useTransform(scrollYProgress, [0.12, 0.52], [0, -28]); // CEO wyżej
  const radius = useTransform(scrollYProgress, [0.12, 0.52], [0, 20]);
  // Podpisy pojawiają się po rozjeździe, pod każdym zdjęciem
  const capOpacity = useTransform(scrollYProgress, [0.52, 0.8], [0, 1]);
  const capY = useTransform(scrollYProgress, [0.52, 0.8], [16, 0]);

  const xByIndex = [xLeft, undefined, xRight];

  return (
    <section id="zespol" className="bg-brand-bg-subtle">
      {/* Desktop — rozjazd jednego zdjęcia na 3 + podpisy pod zdjęciami */}
      <div ref={ref} className="relative hidden lg:block h-[300vh]">
        <div
          className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-8"
          style={{ clipPath: "inset(0 -300px)" }}
        >
          <div className="text-center mb-9 xl:mb-12">
            <SectionLabel className="justify-center mb-3">Poznaj nas</SectionLabel>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-brand-text tracking-tight leading-[1.02]">
              Zespół businessQuest
            </h2>
          </div>

          <div className="flex justify-center items-start">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                style={{ x: reduce ? 0 : xByIndex[i], y: reduce ? 0 : m.featured ? yCenter : undefined, width: PANEL_W }}
                className="flex flex-col items-center"
              >
                <motion.div
                  style={{
                    width: PANEL_W,
                    height: PANEL_H,
                    borderRadius: reduce ? 16 : radius,
                    backgroundImage: `url(${teamPhoto})`,
                    backgroundSize: "300% 100%",
                    backgroundPositionX: POS_X[i],
                    backgroundRepeat: "no-repeat",
                  }}
                  className="overflow-hidden bg-white flex-shrink-0"
                />
                <motion.div style={{ opacity: reduce ? 1 : capOpacity, y: reduce ? 0 : capY }} className="text-center mt-6 w-[240px] xl:w-[280px]">
                  <h3 className="font-bold text-brand-text text-xl xl:text-2xl">{m.name}</h3>
                  <p className="text-magenta-deep text-sm font-medium mt-1">{m.role}</p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-border text-brand-muted hover:text-magenta-deep hover:border-magenta transition-colors"
                      aria-label={`LinkedIn — ${m.name}`}
                    >
                      <LinkedInIcon />
                    </a>
                    <ReadMoreButton />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile — statyczny układ */}
      <div className="lg:hidden section-py">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal className="mb-10">
            <SectionLabel className="mb-4">Poznaj nas</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-text tracking-tight leading-[1.02]">
              Zespół businessQuest
            </h2>
          </ScrollReveal>
          <div className="relative w-full aspect-[1.414] rounded-[1.5rem] overflow-hidden bg-white mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={teamPhoto} alt="Founderki businessQuest" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            {team.map((m) => (
              <div key={m.name} className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-brand-text text-lg leading-tight">{m.name}</h3>
                  <p className="text-magenta-deep text-sm font-medium mt-0.5">{m.role}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-border text-brand-muted hover:text-magenta-deep hover:border-magenta transition-colors"
                    aria-label={`LinkedIn — ${m.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                  <ReadMoreButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { team, teamPhoto } from "@/data/team";

/* Panel = trzecia część zdjęcia 2000×1414 (aspect ~1.414); szer. = wys. * 0.4715.
   Kolumna = szerokość panelu (bez odstępu) → 3 panele stykają się w jedno zdjęcie.
   Podpisy/bio są szersze i wystają poza kolumnę (centrowane) — mieszczą się
   w przerwach, które powstają po rozjeździe. */
const PANEL_H = "clamp(360px, 52vh, 600px)";
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

export default function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Jedno zdjęcie → rozjazd na 3 (nagłówek statyczny)
  const xLeft = useTransform(scrollYProgress, [0.12, 0.5], [0, -130]);
  const xRight = useTransform(scrollYProgress, [0.12, 0.5], [0, 130]);
  const yCenter = useTransform(scrollYProgress, [0.12, 0.5], [0, -40]); // CEO wyżej
  const radius = useTransform(scrollYProgress, [0.12, 0.5], [0, 20]);
  // Podpisy + bio pojawiają się po rozjeździe, pod każdym zdjęciem
  const capOpacity = useTransform(scrollYProgress, [0.5, 0.66], [0, 1]);
  const capY = useTransform(scrollYProgress, [0.5, 0.66], [14, 0]);
  const bioOpacity = useTransform(scrollYProgress, [0.52, 0.68], [0, 1]);

  const xByIndex = [xLeft, undefined, xRight];

  return (
    <section id="zespol" className="bg-brand-bg-subtle">
      {/* Desktop — rozjazd jednego zdjęcia na 3 + podpisy/bio pod zdjęciami */}
      <div ref={ref} className="relative hidden lg:block h-[260vh]">
        <div className="sticky top-20 h-[calc(100vh-5rem)] flex flex-col items-center justify-center px-8">
          <div className="text-center mb-8">
            <SectionLabel className="justify-center mb-4">Poznaj nas</SectionLabel>
            <h2 className="text-5xl xl:text-6xl font-extrabold text-brand-text tracking-tight leading-[1.02]">
              Zespół businessQuest
            </h2>
          </div>

          <div className="flex justify-center items-start">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                style={{ x: xByIndex[i], y: m.featured ? yCenter : undefined, width: PANEL_W }}
                className="flex flex-col items-center"
              >
                <motion.div
                  style={{
                    width: PANEL_W,
                    height: PANEL_H,
                    borderRadius: radius,
                    backgroundImage: `url(${teamPhoto})`,
                    backgroundSize: "300% 100%",
                    backgroundPositionX: POS_X[i],
                    backgroundRepeat: "no-repeat",
                  }}
                  className="overflow-hidden bg-white flex-shrink-0"
                />
                <motion.div style={{ opacity: capOpacity, y: capY }} className="text-center mt-5 w-[240px] xl:w-[280px]">
                  <h3 className="font-bold text-brand-text text-xl">{m.name}</h3>
                  <p className="text-magenta text-sm font-medium mt-1">{m.role}</p>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-brand-border text-brand-muted hover:text-magenta hover:border-magenta transition-colors mt-3"
                    aria-label={`LinkedIn — ${m.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                </motion.div>
                <motion.p
                  style={{ opacity: bioOpacity }}
                  className="text-center mt-3 w-[240px] xl:w-[280px] text-brand-body text-sm leading-relaxed"
                >
                  {m.bio}
                </motion.p>
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
          <div className="space-y-8">
            {team.map((m) => (
              <div key={m.name}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold text-brand-text text-lg leading-tight">{m.name}</h3>
                    <p className="text-magenta text-sm font-medium mt-0.5">{m.role}</p>
                  </div>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-brand-border text-brand-muted hover:text-magenta hover:border-magenta transition-colors flex-shrink-0"
                    aria-label={`LinkedIn — ${m.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
                <p className="mt-3 text-brand-body text-[15px] leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

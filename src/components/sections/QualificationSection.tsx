"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const ease = [0.32, 0.72, 0, 1] as const;
const INTERVAL = 4200;

const signals = [
  {
    title: "Sprawy zespołu wracają do Ciebie",
    text: "Rekrutacje, trudne rozmowy, konflikty, decyzje o zmianach. A te, które nie wracają, prędzej czy później robią się problemem.",
  },
  {
    title: "Rekrutacje zabierają za dużo czasu",
    text: "Prowadzenie ich między innymi obowiązkami rozciąga się w nieskończoność — albo kończy nietrafionym zatrudnieniem.",
  },
  {
    title: "Pojawiają się trudne decyzje personalne",
    text: "Łatwiej je podjąć, gdy można je przegadać z kimś, kto ma doświadczenie i dystans do sytuacji.",
  },
  {
    title: "Sposób zarządzania przestał nadążać za firmą",
    text: "To, co działało przy kilku osobach, przy większym zespole zaczyna zgrzytać. Pojawia się potrzeba uporządkowania ról i odpowiedzialności.",
  },
  {
    title: "Chcesz wsparcia, ale nie chcesz budować działu HR",
    text: "Wystarczy ktoś, kto poprowadzi tematy ludzi na bieżąco i wesprze Cię w decyzjach dotyczących zespołu.",
  },
];

export default function QualificationSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % signals.length),
      INTERVAL
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section id="dla-kogo" className="section-py bg-brand-bg overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <SectionLabel className="mb-6">Dla kogo</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.02] text-brand-text">
            Kiedy ta usługa jest dla&nbsp;Ciebie?
          </h2>
          <p className="mt-6 text-brand-body text-lg leading-relaxed">
            Najczęściej zaczynamy współpracę, gdy tematy zespołu zajmują coraz
            więcej czasu — nie dlatego, że firma jest w kryzysie, tylko dlatego,
            że rośnie.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Lewa — lista sygnałów */}
          <ul className="flex flex-col">
            {signals.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.title}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="w-full text-left py-5 border-b border-brand-border transition-colors duration-300"
                  >
                    <span
                      className={`text-lg lg:text-xl font-semibold transition-colors duration-300 ${
                        isActive ? "text-brand-text" : "text-brand-muted"
                      }`}
                    >
                      {s.title}
                    </span>
                    {/* Pasek postępu pod aktywnym */}
                    <div className="mt-3 h-0.5 bg-brand-border/60 overflow-hidden rounded-full">
                      {isActive && (
                        <motion.div
                          key={active + (paused ? "-p" : "")}
                          className="h-full bg-magenta"
                          initial={{ width: "0%" }}
                          animate={{ width: paused ? "100%" : "100%" }}
                          transition={{
                            duration: paused ? 0.3 : INTERVAL / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Prawa — panel aktywnego sygnału */}
          <div className="relative rounded-[1.75rem] bg-gradient-to-br from-magenta/[0.06] to-purple/[0.06] border border-brand-border p-9 lg:p-12 flex items-center min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease }}
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-magenta mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-brand-text leading-snug mb-4">
                  {signals[active].title}
                </h3>
                <p className="text-brand-body text-lg leading-relaxed">
                  {signals[active].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5 rounded-2xl border border-brand-border bg-brand-bg-subtle px-7 py-6">
          <p className="text-brand-text text-lg font-medium flex-1">
            Rozpoznajesz choć jeden z tych sygnałów?
          </p>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 bg-magenta text-white rounded-full pl-6 pr-2 py-2 font-semibold text-[15px] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lg hover:shadow-magenta/25 active:scale-[0.98] flex-shrink-0"
          >
            Umów bezpłatną rozmowę
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

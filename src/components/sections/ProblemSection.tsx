"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const ease = [0.32, 0.72, 0, 1] as const;

const fragments = [
  "Rekrutacja.",
  "Trudna rozmowa z pracownikiem.",
  "Decyzja o podwyżce.",
  "Ktoś przestaje dowozić wyniki.",
  "W zespole rośnie napięcie.",
];

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Przełączanie kolorystyki na scrollu: jasny → ciemny → jasny (jak Mercury)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#F7F2EA", "#160910", "#160910", "#FFFFFF"]
  );
  const color = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["#0E0E10", "#FAFAFA", "#FAFAFA", "#0E0E10"]
  );

  return (
    <motion.section
      ref={ref}
      id="problem"
      style={{ backgroundColor, color }}
      className="relative section-py overflow-hidden"
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl"
        >
          <SectionLabel className="mb-6">Znasz to?</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.02]">
            Gdy wszystko, co dotyczy ludzi, trafia do&nbsp;Ciebie
          </h2>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Lewa — emocjonalna lista fragmentów */}
          <ul>
            {fragments.map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="flex items-center gap-4 py-5"
              >
                <span className="block w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0" />
                <span className="text-xl lg:text-2xl font-medium">{line}</span>
              </motion.li>
            ))}
          </ul>

          {/* Prawa — kontekst i pomost do usługi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:pt-4"
          >
            <p className="text-lg lg:text-xl leading-relaxed opacity-80">
              Tego nie da się odłożyć {`„na później"`} — a pojawia się między
              sprzedażą, klientami, finansami i&nbsp;projektami.
            </p>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed opacity-80">
              Usługa{" "}
              <span className="font-semibold opacity-100">
                Twój pierwszy zespół HR
              </span>{" "}
              powstała dokładnie dla takich sytuacji. Prowadzimy tematy ludzi
              razem z Tobą — czasem to rekrutacja, czasem uporządkowanie ról,
              a&nbsp;czasem po prostu spokojne spojrzenie z&nbsp;zewnątrz.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

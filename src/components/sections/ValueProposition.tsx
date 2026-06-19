"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  {
    num: "01",
    title: "Nie zostajesz sam z tematami ludzi",
    description:
      "Masz partnera, z którym przegadasz decyzje o zespole — i który pomaga je wprowadzić w życie, nie tylko nazwać.",
  },
  {
    num: "02",
    title: "Wsparcie w realnych sytuacjach",
    description:
      "Rekrutacje, zmiany w zespole, trudne rozmowy, rozstania z pracownikiem. Jesteśmy obok właśnie wtedy, gdy robi się niewygodnie.",
  },
  {
    num: "03",
    title: "Zrealizowane zadania, nie tylko doradztwo",
    description:
      "Jeśli trzeba, prowadzimy rekrutację, przygotowujemy procesy i checklisty albo wdrażamy ustalenia w zespole. Nasza rola nie kończy się na rekomendacji.",
  },
  {
    num: "04",
    title: "Proste i użyteczne rozwiązania",
    description:
      "Mała firma nie potrzebuje skomplikowanych procesów HR. Wprowadzamy tylko to, co realnie ułatwia pracę i da się utrzymać na co dzień.",
  },
  {
    num: "05",
    title: "Doświadczenie z wielu firm",
    description:
      "Pracujemy z różnymi organizacjami i branżami, więc schematy problemów rozpoznajemy szybciej — często zanim urosną.",
  },
];

export default function ValueProposition() {
  return (
    <section className="section-py bg-brand-bg" id="wartosci">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-16 lg:mb-20 max-w-3xl">
          <SectionLabel className="mb-4">Dlaczego my</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-text tracking-tight leading-[1.02]">
            Co zyskujesz?
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
          {values.map((val, i) => (
            <ValueCard key={val.num} {...val} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  num,
  title,
  description,
  delay,
}: {
  num: string;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative pt-4"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {/* Big number background */}
      <div
        className="absolute -top-2 -left-2 text-[7rem] lg:text-[9rem] font-extrabold leading-none select-none pointer-events-none"
        style={{ color: "#F7087F", opacity: 0.06 }}
        aria-hidden
      >
        {num}
      </div>

      <div className="relative">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="text-magenta font-bold text-sm tracking-widest">{num}</span>
          <span className="w-8 h-px bg-magenta/30" />
        </div>
        <h3 className="text-[1.5rem] font-bold text-brand-text mb-3">{title}</h3>
        <p className="text-brand-muted text-[15px] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

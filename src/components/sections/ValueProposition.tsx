"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  {
    num: "01",
    title: "Relacje",
    description:
      "Rekrutujemy i rozwijamy z myślą o długoterminowej współpracy, nie jednorazowej transakcji. Budujemy zaufanie, które procentuje latami.",
  },
  {
    num: "02",
    title: "Wyniki",
    description:
      "Każde działanie jest mierzone. Dostarczamy raporty, dane i realne KPIs — bo decyzje HR powinny być oparte na faktach.",
  },
  {
    num: "03",
    title: "Wzrost",
    description:
      "Od onboardingu po program rozwoju liderów — towarzyszymy firmom na każdym etapie skalowania. Razem idziemy do przodu.",
  },
];

export default function ValueProposition() {
  return (
    <section className="section-py bg-brand-bg" id="o-nas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16 lg:mb-20">
          <SectionLabel className="justify-center mb-4">Dlaczego BusinessQuest</SectionLabel>
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-brand-text tracking-tight leading-tight max-w-2xl mx-auto">
            Budujemy fundamenty,{" "}
            <span className="text-gradient">które działają</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
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

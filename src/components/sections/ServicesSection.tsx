"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { services } from "@/data/services";

/* ---------- Ilustrowane mockupy (inline SVG, kolory brandu) ---------- */

function RecruitMockup() {
  const rows = [
    { active: true },
    { active: false },
    { active: false },
  ];
  return (
    <svg viewBox="0 0 360 240" className="w-full h-auto" role="img" aria-label="Lista kandydatów">
      <defs>
        <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7087F" />
          <stop offset="1" stopColor="#8B3FE8" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="360" height="240" rx="16" fill="#fff" />
      <rect x="20" y="20" width="120" height="10" rx="5" fill="#0E0E10" opacity="0.8" />
      <rect x="270" y="16" width="70" height="22" rx="11" fill="url(#rg)" />
      <rect x="286" y="24" width="38" height="6" rx="3" fill="#fff" />
      {rows.map((r, i) => {
        const y = 56 + i * 58;
        return (
          <g key={i}>
            <rect x="20" y={y} width="320" height="46" rx="10" fill={r.active ? "#FDEAF3" : "#F7F7F8"} stroke={r.active ? "#F7087F" : "transparent"} strokeWidth="1.5" />
            <circle cx="46" cy={y + 23} r="14" fill={r.active ? "url(#rg)" : "#D9D9DE"} />
            <rect x="72" y={y + 13} width="110" height="8" rx="4" fill="#0E0E10" opacity="0.65" />
            <rect x="72" y={y + 27} width="70" height="6" rx="3" fill="#0E0E10" opacity="0.3" />
            {r.active ? (
              <g>
                <circle cx="312" cy={y + 23} r="13" fill="#F7087F" />
                <path d={`M306 ${y + 23} l4 4 8 -8`} stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ) : (
              <rect x="288" y={y + 18} width="48" height="10" rx="5" fill="#0E0E10" opacity="0.12" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function ChatMockup() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-auto" role="img" aria-label="Rozmowa">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F7087F" />
          <stop offset="1" stopColor="#8B3FE8" />
        </linearGradient>
      </defs>
      {/* incoming */}
      <g>
        <rect x="16" y="24" width="190" height="58" rx="16" fill="#F1F1F3" />
        <rect x="32" y="40" width="150" height="8" rx="4" fill="#0E0E10" opacity="0.4" />
        <rect x="32" y="56" width="110" height="8" rx="4" fill="#0E0E10" opacity="0.25" />
      </g>
      {/* outgoing */}
      <g>
        <rect x="100" y="104" width="204" height="72" rx="16" fill="url(#cg)" />
        <rect x="118" y="122" width="168" height="8" rx="4" fill="#fff" opacity="0.95" />
        <rect x="118" y="140" width="168" height="8" rx="4" fill="#fff" opacity="0.8" />
        <rect x="118" y="158" width="96" height="8" rx="4" fill="#fff" opacity="0.6" />
      </g>
    </svg>
  );
}

function ProcessMockup() {
  const node = (x: number, y: number, w: number, accent?: boolean) => (
    <g>
      <rect x={x} y={y} width={w} height="40" rx="10" fill={accent ? "#FFF3EC" : "#F7F7F8"} stroke={accent ? "#FF6B2B" : "#ECECEE"} strokeWidth="1.5" />
      <rect x={x + 14} y={y + 12} width={w - 48} height="7" rx="3.5" fill="#0E0E10" opacity="0.55" />
      <rect x={x + 14} y={y + 24} width={w - 70} height="6" rx="3" fill="#0E0E10" opacity="0.25" />
    </g>
  );
  return (
    <svg viewBox="0 0 460 200" className="w-full h-auto" role="img" aria-label="Struktura zespołu">
      {/* connectors */}
      <path d="M230 60 V90 M230 90 H90 V110 M230 90 H230 V110 M230 90 H370 V110" stroke="#D9D9DE" strokeWidth="2" fill="none" />
      {node(150, 20, 160, true)}
      {node(20, 110, 140)}
      {node(160, 110, 140)}
      {node(300, 110, 140)}
    </svg>
  );
}

/* ---------- Sekcja ---------- */

export default function ServicesSection() {
  const [rekrutacje, sparing, procesy] = services;

  return (
    <section className="section-py bg-brand-bg-subtle" id="uslugi">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-12 lg:mb-14 max-w-2xl">
          <SectionLabel className="mb-4">Zakres współpracy</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-text tracking-tight leading-[1.02]">
            W jakich obszarach działamy?
          </h2>
          <p className="mt-5 text-brand-body text-base lg:text-lg leading-relaxed">
            Zakres dopasowujemy do sytuacji firmy. Najczęściej obejmuje trzy
            obszary.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-5 lg:gap-6">
          {/* Sparing partner — wąski, po lewej */}
          <ScrollReveal className="lg:col-span-1">
            <BentoCard className="h-full flex flex-col">
              <CardHead title={sparing.title} desc={sparing.description} />
              <BulletList items={sparing.bullets} />
              <div className="mt-auto pt-6 rounded-2xl bg-gradient-to-br from-magenta/[0.06] to-purple/[0.06] p-5">
                <ChatMockup />
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Procesy HR — szeroki, po prawej */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <BentoCard className="h-full">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <CardHead title={procesy.title} desc={procesy.description} />
                  <BulletList items={procesy.bullets} cols2 />
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-orange/[0.07] to-magenta/[0.05] p-6">
                  <ProcessMockup />
                </div>
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Rekrutacje — pełna szerokość, na dole */}
          <ScrollReveal delay={0.15} className="lg:col-span-3">
            <BentoCard>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <CardHead title={rekrutacje.title} desc={rekrutacje.description} />
                  <BulletList items={rekrutacje.bullets} cols2 />
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-magenta/[0.06] to-purple/[0.06] p-5">
                  <RecruitMockup />
                </div>
              </div>
            </BentoCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[1.5rem] border border-brand-border bg-brand-card p-7 lg:p-9 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function CardHead({ title, desc }: { title: string; desc: string }) {
  return (
    <>
      <h3 className="text-xl lg:text-2xl font-bold text-brand-text leading-snug">{title}</h3>
      <p className="mt-2.5 text-brand-body text-[15px] leading-relaxed">{desc}</p>
    </>
  );
}

function BulletList({ items, cols2 = false }: { items: string[]; cols2?: boolean }) {
  return (
    <ul className={`mt-5 grid gap-x-6 gap-y-2.5 ${cols2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((b) => (
        <li key={b} className="flex items-center gap-2.5 text-brand-body text-[14px]">
          <span className="block w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0" />
          {b}
        </li>
      ))}
    </ul>
  );
}

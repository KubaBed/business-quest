"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { services } from "@/data/services";
import StepText from "@/components/ui/StepText";
import { RecruitMockup, ChatMockup, ProcessMockup } from "@/components/decor/ServiceMockups";

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
              <BulletList items={sparing.process.steps} />
              <MoreLink href={`/uslugi/${sparing.slug}`} className="mb-6" />
              <div className="mt-auto pt-6 rounded-2xl bg-gradient-to-br from-magenta/[0.06] to-purple/[0.06] p-5">
                <ChatMockup />
              </div>
            </BentoCard>
          </ScrollReveal>

          {/* Procesy HR, szeroki, po prawej */}
          <ScrollReveal delay={0.1} className="lg:col-span-2">
            <BentoCard className="h-full">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <CardHead title={procesy.title} desc={procesy.description} />
                  <BulletList items={procesy.process.steps} labeled={procesy.process.labeled} />
                  <MoreLink href={`/uslugi/${procesy.slug}`} />
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
                  <BulletList items={rekrutacje.process.steps} cols2 />
                  <MoreLink href={`/uslugi/${rekrutacje.slug}`} />
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

function BulletList({
  items,
  cols2 = false,
  labeled = false,
}: {
  items: string[];
  cols2?: boolean;
  labeled?: boolean;
}) {
  return (
    <ul className={`mt-5 grid gap-x-6 gap-y-2.5 ${cols2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((b) => (
        <li key={b} className="flex items-baseline gap-2.5 text-brand-body text-[14px] leading-snug">
          <span className="block w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0 -translate-y-px" />
          <StepText text={b} labeled={labeled} />
        </li>
      ))}
    </ul>
  );
}

function MoreLink({ href, className = "" }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`group mt-6 inline-flex items-center gap-2 text-magenta-deep font-semibold text-[15px] hover:gap-3 transition-all ${className}`}
    >
      Szczegóły i cennik
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </Link>
  );
}

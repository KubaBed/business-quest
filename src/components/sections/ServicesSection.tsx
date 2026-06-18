"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { services } from "@/data/services";

const iconSvgs: Record<string, React.ReactNode> = {
  Briefcase: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <path d="M12 12v4M8 14h8" />
    </svg>
  ),
  Users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  Monitor: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
  TrendingUp: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
};

export default function ServicesSection() {
  return (
    <section className="section-py bg-brand-bg-alt" id="uslugi">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Left: headline */}
          <ScrollReveal direction="right" className="lg:sticky lg:top-32">
            <SectionLabel className="mb-5">Nasze usługi</SectionLabel>
            <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-brand-text tracking-tight leading-tight mb-6">
              Co robimy{" "}
              <span className="text-gradient">najlepiej</span>
            </h2>
            <p className="text-brand-muted text-[15px] leading-relaxed max-w-sm">
              Kompleksowe podejście do HR — od procesów rekrutacji przez development liderów po kulturę organizacyjną.
            </p>

            {/* Three-dot decorative divider */}
            <div className="flex flex-col gap-2 mt-8 opacity-20" aria-hidden>
              <div className="w-2 h-2 rounded-full bg-magenta" />
              <div className="w-1.5 h-1.5 rounded-full bg-magenta" />
              <div className="w-1 h-1 rounded-full bg-magenta" />
            </div>
          </ScrollReveal>

          {/* Right: 2×2 grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  return (
    <ScrollReveal delay={delay}>
      <motion.div
        className="bg-brand-card rounded-2xl p-7 shadow-sm border border-black/[0.04] group cursor-pointer h-full"
        whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(247,8,127,0.15)" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
          style={{ background: "var(--gradient-brand)" }}
        >
          {iconSvgs[service.icon]}
        </div>

        <h3 className="font-bold text-brand-text text-[17px] mb-2">{service.title}</h3>
        <p className="text-brand-muted text-[14px] leading-relaxed mb-5">{service.description}</p>

        <Link
          href={service.href}
          className="inline-flex items-center gap-1.5 text-magenta text-[13px] font-semibold group-hover:gap-2.5 transition-all duration-200"
        >
          Dowiedz się więcej
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </ScrollReveal>
  );
}

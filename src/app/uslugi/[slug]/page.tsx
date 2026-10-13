import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CtaBanner from "@/components/sections/CtaBanner";
import ServicePricing from "@/components/sections/ServicePricing";
import DotGrid from "@/components/decor/DotGrid";
import ServiceIcon from "@/components/decor/ServiceIcons";
import RecruitHeroVisual from "@/components/decor/RecruitHeroVisual";
import { mockupFor } from "@/components/decor/ServiceMockups";
import { services, getService } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";

interface Params {
  params: { slug: string };
}

export const dynamicParams = false;

// Ilustracje do hero - na razie pilotażowo tylko rekrutacje.
const heroVisuals: Record<string, ReactNode> = {
  rekrutacje: <RecruitHeroVisual />,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = getService(params.slug);
  if (!service) return { title: "Usługa nie znaleziona | businessQuest" };
  return {
    title: `${service.name} | businessQuest`,
    description: service.metaDescription,
  };
}

function ArrowRight() {
  return (
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
  );
}

export default function ServicePage({ params }: Params) {
  const service = getService(params.slug);
  if (!service) notFound();

  const contactHref = `/kontakt?temat=${service.id}`;
  const cases = service.caseStudies
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
  const others = services.filter((s) => s.slug !== service.slug);
  const threeCols = service.offerings.length % 3 === 0;

  return (
    <>
      <PageHeader
        eyebrow="Usługi"
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Usługi", href: "/#uslugi" },
          { label: service.name },
        ]}
        title={service.name}
        lead={service.tagline}
        aside={heroVisuals[service.id]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button href={contactHref} size="lg">
            {service.start.ctaLabel}
          </Button>
          <Button href="#cennik" variant="ghost" size="lg">
            Zobacz cennik
          </Button>
        </div>
      </PageHeader>

      {/* Krótki opis usługi */}
      <section className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-x-16 lg:gap-y-8 border-t border-brand-border pt-12 lg:pt-16">
            <ScrollReveal>
              <h2 className="sr-only">Krótki opis usługi</h2>
              <SectionLabel>Krótki opis usługi</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="lg:row-span-2">
              <div className="space-y-6 max-w-3xl">
                {service.intro.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-brand-text text-2xl lg:text-[1.75rem] font-semibold leading-snug tracking-tight"
                        : "text-brand-body text-lg leading-relaxed"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
            {service.process && (
              <ScrollReveal delay={0.15} className="mt-4 lg:mt-0">
                <ProcessSteps {...service.process} />
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Co robimy w ramach tej usługi */}
      <section className="relative overflow-hidden section-py bg-brand-bg-subtle">
        <DotGrid className="hidden md:block absolute top-16 right-8 w-44 h-28 opacity-50" />
        <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-12 lg:mb-14 max-w-2xl">
            <SectionLabel className="mb-4">{service.offeringsLabel}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-brand-text tracking-tight leading-[1.05]">
              Co robimy w ramach tej usługi
            </h2>
          </ScrollReveal>

          <div
            className={`grid md:grid-cols-2 ${
              threeCols ? "lg:grid-cols-3" : ""
            } gap-5 lg:gap-6`}
          >
            {service.offerings.map((o, i) => (
              <ScrollReveal key={o.title} delay={(i % (threeCols ? 3 : 2)) * 0.08}>
                <article className="h-full rounded-[1.5rem] border border-brand-border bg-brand-card p-7 lg:p-8 shadow-sm">
                  {o.icon ? (
                    <div className="flex items-start justify-between mb-6">
                      <span className="flex w-11 h-11 items-center justify-center rounded-xl bg-magenta/[0.08] text-magenta-deep">
                        <ServiceIcon name={o.icon} />
                      </span>
                      <span className="text-magenta-deep/40 font-bold text-sm tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 mb-5">
                      <span className="text-magenta-deep font-bold text-sm tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="w-8 h-px bg-magenta/30" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-brand-text leading-snug mb-3">
                    {o.title}
                  </h3>
                  <p className="text-brand-body text-[15px] leading-relaxed">
                    {o.text}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies dla tej usługi */}
      {cases.length > 0 && (
        <section className="section-py bg-brand-bg">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
            <ScrollReveal className="mb-10 lg:mb-12 max-w-2xl">
              <SectionLabel className="mb-4">Case study</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-brand-text tracking-tight leading-[1.05]">
                Z naszej praktyki
              </h2>
            </ScrollReveal>
            {cases.length === 1 ? (
              <ScrollReveal>
                <FeaturedCase study={cases[0]} />
              </ScrollReveal>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
                {cases.map((c, i) => (
                  <ScrollReveal key={c.slug} delay={i * 0.08}>
                    <CaseCard study={c} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Cennik */}
      <section
        id="cennik"
        className={`section-py scroll-mt-16 lg:scroll-mt-20 ${
          cases.length > 0 ? "bg-brand-bg-subtle" : "bg-brand-bg"
        }`}
      >
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-10 lg:mb-12 max-w-2xl">
            <SectionLabel className="mb-4">Formy współpracy</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-brand-text tracking-tight leading-[1.05]">
              Cennik
            </h2>
            {service.pricingIntro && (
              <p className="mt-5 text-brand-body text-lg leading-relaxed">
                {service.pricingIntro}
              </p>
            )}
            <p className="mt-3 text-sm text-brand-muted">Wszystkie kwoty netto.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ServicePricing blocks={service.pricing} />
          </ScrollReveal>

          {service.pricingAside && (
            <p className="mt-8 text-brand-body text-lg leading-relaxed max-w-3xl">
              {service.pricingAside.text}{" "}
              <Link
                href={service.pricingAside.href}
                className="text-magenta-deep font-semibold underline decoration-magenta/30 underline-offset-4 hover:decoration-magenta transition-colors"
              >
                {service.pricingAside.linkLabel}
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      {/* Jak zacząć */}
      <CtaBanner
        eyebrow="Jak zacząć"
        title={service.start.title}
        text={service.start.paragraphs.join(" ")}
        primaryHref={contactHref}
        primaryLabel={service.start.ctaLabel}
        aside={
          service.start.steps ? <StartSteps steps={service.start.steps} /> : undefined
        }
      />

      {/* Pozostałe usługi */}
      <section className="section-py bg-brand-bg-subtle">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-text tracking-tight mb-8">
            Inne obszary współpracy
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            {others.map((s) => (
              <Link key={s.slug} href={`/uslugi/${s.slug}`} className="group block">
                <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
                  <div
                    className={`mb-6 flex h-40 items-center justify-center rounded-2xl p-5 bg-gradient-to-br ${
                      s.id === "procesy"
                        ? "from-orange/[0.07] to-magenta/[0.05]"
                        : "from-magenta/[0.06] to-purple/[0.06]"
                    }`}
                  >
                    <div className="w-full max-w-[280px] transition-transform duration-300 group-hover:scale-[1.03]">
                      {mockupFor(s.id)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-brand-text leading-snug group-hover:text-magenta-deep transition-colors">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-brand-body text-[15px] leading-relaxed flex-1">
                    {s.tagline}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-magenta-deep font-semibold text-[15px] group-hover:gap-3 transition-all">
                    Zobacz usługę
                    <ArrowRight />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

type CaseStudy = (typeof caseStudies)[number];

function ProcessSteps({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className="rounded-[1.25rem] border border-brand-border bg-brand-bg-subtle p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted mb-5">
        {label}
      </p>
      <div>
        <ol className="relative space-y-4">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li key={step} className="relative flex items-start gap-3">
                {!last && (
                  <span
                    aria-hidden
                    className="absolute left-[7px] top-[18px] -bottom-4 w-px bg-magenta/25"
                  />
                )}
                <span
                  className={`relative mt-[3px] flex-shrink-0 w-[15px] h-[15px] rounded-full ${
                    last ? "ring-4 ring-magenta/15" : "border-2 border-magenta bg-white"
                  }`}
                  style={last ? { background: "var(--gradient-magenta)" } : undefined}
                />
                <span
                  className={`text-[15px] leading-snug ${
                    last ? "font-semibold text-brand-text" : "text-brand-body"
                  }`}
                >
                  {step}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function CaseMetrics({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  if (!study.metrics || study.metrics.length === 0) return null;
  return (
    <dl
      className={`grid grid-cols-3 gap-4 rounded-2xl bg-gradient-to-br from-magenta/[0.07] to-purple/[0.07] ${
        compact ? "p-4" : "p-6 lg:p-8"
      }`}
    >
      {study.metrics.map((m) => (
        <div key={m.label}>
          <dt className="sr-only">{m.label}</dt>
          <dd
            className={`font-extrabold text-magenta-deep leading-none tabular-nums ${
              compact ? "text-2xl" : "text-4xl lg:text-5xl"
            }`}
          >
            {m.value}
          </dd>
          <dd
            aria-hidden
            className={`mt-2 text-brand-body leading-snug ${compact ? "text-xs" : "text-sm"}`}
          >
            {m.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function FeaturedCase({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-study/${study.slug}`} className="group block">
      <article className="grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-12 items-center rounded-[1.5rem] border border-brand-border bg-brand-card p-7 lg:p-10 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
        <div>
          <p className="text-sm text-brand-muted">
            {study.client} · {study.industry}
          </p>
          <h3 className="mt-3 text-2xl font-bold text-brand-text leading-snug group-hover:text-magenta-deep transition-colors">
            {study.title}
          </h3>
          <p className="mt-3 text-brand-body text-[15px] leading-relaxed">
            {study.resultOneLine}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-magenta-deep font-semibold text-[15px] group-hover:gap-3 transition-all">
            Czytaj case study
            <ArrowRight />
          </span>
        </div>
        <CaseMetrics study={study} />
      </article>
    </Link>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/case-study/${study.slug}`} className="group block h-full">
      <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 lg:p-8 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
        <p className="text-sm text-brand-muted">
          {study.client} · {study.industry}
        </p>
        <h3 className="mt-3 text-xl font-bold text-brand-text leading-snug group-hover:text-magenta-deep transition-colors">
          {study.title}
        </h3>
        <p className="mt-3 text-brand-body text-[15px] leading-relaxed flex-1">
          {study.resultOneLine}
        </p>
        <div className="mt-6">
          <CaseMetrics study={study} compact />
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-magenta-deep font-semibold text-[15px] group-hover:gap-3 transition-all">
          Czytaj case study
          <ArrowRight />
        </span>
      </article>
    </Link>
  );
}

function StartSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="relative space-y-3">
      {steps.map((step, i) => (
        <li
          key={step}
          className="flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 backdrop-blur-sm"
        >
          <span className="flex flex-shrink-0 w-9 h-9 items-center justify-center rounded-full bg-white text-magenta-deep font-bold">
            {i + 1}
          </span>
          <span className="text-white font-semibold">{step}</span>
        </li>
      ))}
    </ol>
  );
}

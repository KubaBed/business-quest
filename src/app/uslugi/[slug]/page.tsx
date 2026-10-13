import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CtaBanner from "@/components/sections/CtaBanner";
import ServicePricing from "@/components/sections/ServicePricing";
import { services, getService } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";

interface Params {
  params: { slug: string };
}

export const dynamicParams = false;

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
          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-16 border-t border-brand-border pt-12 lg:pt-16">
            <ScrollReveal>
              <h2 className="sr-only">Krótki opis usługi</h2>
              <SectionLabel>Krótki opis usługi</SectionLabel>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
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
          </div>
        </div>
      </section>

      {/* Co robimy w ramach tej usługi */}
      <section className="section-py bg-brand-bg-subtle">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
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
                  <div className="inline-flex items-center gap-2 mb-5">
                    <span className="text-magenta-deep font-bold text-sm tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="w-8 h-px bg-magenta/30" />
                  </div>
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
            <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
              {cases.map((c, i) => (
                <ScrollReveal key={c.slug} delay={i * 0.08}>
                  <Link href={`/case-study/${c.slug}`} className="group block h-full">
                    <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 lg:p-8 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
                      <p className="text-sm text-brand-muted">
                        {c.client} · {c.industry}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-brand-text leading-snug group-hover:text-magenta-deep transition-colors">
                        {c.title}
                      </h3>
                      <p className="mt-3 text-brand-body text-[15px] leading-relaxed flex-1">
                        {c.resultOneLine}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-magenta-deep font-semibold text-[15px] group-hover:gap-3 transition-all">
                        Czytaj case study
                        <ArrowRight />
                      </span>
                    </article>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
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

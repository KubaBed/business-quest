import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

interface Params {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case study nie znalezione — businessQuest" };
  return {
    title: `${study.title} — businessQuest`,
    description: study.excerpt,
  };
}

export default function CaseStudyDetailPage({ params }: Params) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        eyebrow={study.service}
        crumbs={[
          { label: "Start", href: "/" },
          { label: "Case study", href: "/case-study" },
          { label: study.client },
        ]}
        title={study.title}
        lead={study.excerpt}
      />

      <article className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          {/* W skrócie */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-brand-border bg-brand-border mb-10 lg:mb-12">
            {study.facts.map((f) => (
              <div key={f.label} className="bg-brand-card p-6">
                <p className="text-sm text-brand-muted mb-1">{f.label}</p>
                <p className="text-brand-text font-semibold">{f.value}</p>
              </div>
            ))}
          </div>

          {/* Kluczowe metryki */}
          {study.metrics && study.metrics.length > 0 && (
            <div
              className="relative overflow-hidden rounded-2xl px-7 py-8 lg:px-10 lg:py-9 mb-12 lg:mb-16"
              style={{ background: "var(--gradient-magenta)" }}
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
                  backgroundSize: "22px 22px",
                }}
              />
              <p className="relative text-white/80 text-sm font-semibold uppercase tracking-widest mb-6">
                Kluczowe metryki projektu
              </p>
              <div className="relative grid sm:grid-cols-3 gap-8">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-white text-4xl lg:text-5xl font-extrabold leading-none">
                      {m.value}
                    </p>
                    <p className="text-white/85 text-sm mt-2 leading-snug">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            {/* Lewa — wyzwanie / efekt w skrócie */}
            <aside className="lg:sticky lg:top-28 self-start space-y-6">
              <div className="rounded-2xl bg-brand-bg-subtle border border-brand-border p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-brand-muted mb-2">
                  Wyzwanie
                </p>
                <p className="text-brand-text leading-relaxed">
                  {study.challengeOneLine}
                </p>
              </div>
              <div className="rounded-2xl border border-magenta/20 bg-magenta/[0.04] p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-magenta-deep mb-2">
                  Efekt
                </p>
                <p className="text-brand-text leading-relaxed">
                  {study.resultOneLine}
                </p>
              </div>
            </aside>

            {/* Prawa — pełna treść */}
            <div>
              <div className="space-y-8">
                {study.sections.map((block, i) => (
                  <div key={i}>
                    <h2 className="text-2xl lg:text-[1.85rem] font-bold text-brand-text tracking-tight leading-snug mb-4">
                      {block.heading}
                    </h2>
                    {block.paragraphs?.map((p, j) => (
                      <p
                        key={j}
                        className="text-brand-body text-lg leading-relaxed mb-4 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}
                    {block.bullets && (
                      <ul className="mt-4 space-y-3">
                        {block.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-3 text-brand-body text-lg leading-relaxed"
                          >
                            <span className="mt-2.5 block w-1.5 h-1.5 rounded-full bg-magenta flex-shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Cytat klienta */}
              {study.quote && (
                <figure className="mt-12 rounded-[1.5rem] border border-brand-border bg-brand-bg-subtle p-8 lg:p-10">
                  <svg
                    className="text-magenta-deep/25 mb-4"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M9.5 7H5a1 1 0 00-1 1v5a1 1 0 001 1h3v3a1 1 0 01-1 1H6a1 1 0 100 2h1a3 3 0 003-3V8a1 1 0 00-.5-1zm9 0H14a1 1 0 00-1 1v5a1 1 0 001 1h3v3a1 1 0 01-1 1h-1a1 1 0 100 2h1a3 3 0 003-3V8a1 1 0 00-.5-1z" />
                  </svg>
                  <blockquote className="text-brand-text text-xl lg:text-2xl font-medium leading-relaxed">
                    {study.quote.text}
                  </blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-brand-border">
                    <p className="font-bold text-brand-text">
                      {study.quote.author}
                    </p>
                    <p className="text-brand-muted text-sm mt-0.5">
                      {study.quote.role} · {study.quote.company}
                    </p>
                  </figcaption>
                </figure>
              )}

              {/* Powrót */}
              <div className="mt-12 pt-8 border-t border-brand-border">
                <Link
                  href="/case-study"
                  className="inline-flex items-center gap-2 text-magenta-deep font-semibold hover:gap-3 transition-all"
                >
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
                    <path d="M19 12H5M11 18l-6-6 6-6" />
                  </svg>
                  Wszystkie case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Powiązane */}
      {related.length > 0 && (
        <section className="pb-20 lg:pb-28 bg-brand-bg-subtle pt-16 lg:pt-20">
          <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-text tracking-tight mb-8">
              Zobacz również
            </h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-study/${c.slug}`}
                  className="group block"
                >
                  <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
                    <span className="inline-flex w-fit items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta-deep text-[12px] font-semibold">
                      {c.service}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-brand-text leading-snug group-hover:text-magenta-deep transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-brand-muted text-[15px] leading-relaxed flex-1">
                      {c.excerpt}
                    </p>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        eyebrow="Podobne wyzwanie?"
        title="Porozmawiajmy o Twoim przypadku"
        text="Opisz w kilku zdaniach swoją sytuację — wspólnie zobaczymy, czy i jak możemy pomóc. Pierwsza rozmowa jest bezpłatna i niezobowiązująca."
      />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case study — businessQuest",
  description:
    "Realne historie współpracy: rekrutacje nietypowych ról, sprzedaż w kanale partnerskim i stałe wsparcie HR dla rosnących firm.",
};

function Arrow() {
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

function FactsRow({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-magenta/10 text-magenta text-[12px] font-semibold">
        {study.service}
      </span>
      <span className="text-brand-muted">{study.client}</span>
      <span className="text-brand-border">·</span>
      <span className="text-brand-muted">{study.industry}</span>
    </div>
  );
}

export default function CaseStudyPage() {
  const [featured, ...rest] = caseStudies;

  return (
    <>
      <PageHeader
        eyebrow="Case study"
        crumbs={[{ label: "Start", href: "/" }, { label: "Case study" }]}
        title={
          <>
            Jak to wygląda{" "}
            <span className="text-gradient">w praktyce</span>.
          </>
        }
        lead="Każda firma jest inna, dlatego zakres współpracy dopasowujemy do sytuacji. Oto kilka historii, które dobrze pokazują, jak pracujemy."
      />

      {/* Wyróżniony case */}
      <section className="pb-8 lg:pb-12 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <Link href={`/case-study/${featured.slug}`} className="group block">
            <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-[1.75rem] border border-brand-border bg-brand-card p-7 lg:p-10 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
              <div
                aria-hidden
                className="relative order-1 lg:order-2 aspect-[16/10] rounded-2xl overflow-hidden flex items-end p-7"
                style={{ background: "var(--gradient-orange)" }}
              >
                <div
                  className="absolute inset-0 opacity-[0.14]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <p className="relative text-white text-xl lg:text-2xl font-bold leading-snug max-w-sm">
                  {featured.resultOneLine}
                </p>
              </div>

              <div className="order-2 lg:order-1">
                <FactsRow study={featured} />
                <h2 className="mt-5 text-3xl lg:text-[2.4rem] font-extrabold text-brand-text leading-[1.06] tracking-tight group-hover:text-magenta transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-brand-body text-lg leading-relaxed">
                  {featured.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-magenta font-semibold">
                  Zobacz case study
                  <span className="transition-transform group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </section>

      {/* Pozostałe */}
      <section className="pb-20 lg:pb-28 bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
            {rest.map((study) => (
              <Link
                key={study.slug}
                href={`/case-study/${study.slug}`}
                className="group block"
              >
                <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card p-7 lg:p-8 shadow-sm transition-all group-hover:border-magenta/40 group-hover:shadow-md">
                  <FactsRow study={study} />
                  <h3 className="mt-4 text-xl lg:text-[1.5rem] font-bold text-brand-text leading-snug group-hover:text-magenta transition-colors">
                    {study.title}
                  </h3>
                  <p className="mt-3 text-brand-muted text-[15px] leading-relaxed flex-1">
                    {study.excerpt}
                  </p>
                  {study.quote && (
                    <p className="mt-5 pt-5 border-t border-brand-border text-brand-body text-[15px] italic leading-relaxed">
                      „{study.quote.text}”
                    </p>
                  )}
                  <span className="mt-6 inline-flex items-center gap-2 text-magenta font-semibold text-[15px]">
                    Zobacz case study
                    <span className="transition-transform group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="Twoja sytuacja jest inna?"
        title="Opowiedz nam o niej"
        text="Nie musisz mieć gotowego briefu. Wystarczy, że opiszesz, co teraz najbardziej zajmuje Ci głowę w temacie zespołu — resztę rozłożymy na czynniki razem."
      />
    </>
  );
}

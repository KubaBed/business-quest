import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import LogoStrip from "@/components/sections/LogoStrip";
import CtaBanner from "@/components/sections/CtaBanner";
import FounderHero from "@/components/sections/FounderHero";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "O nas — businessQuest",
  description:
    "Jesteśmy zespołem, który prowadzi tematy ludzi razem z właścicielami mikro i małych firm. Proste, użyteczne wsparcie HR — bez budowania całego działu.",
};

const principles = [
  {
    num: "01",
    title: "Blisko biznesu, nie obok niego",
    text: "Nie zostawiamy Cię z prezentacją i listą rekomendacji. Działamy operacyjnie — prowadzimy rekrutacje, rozmowy i wdrożenia razem z Tobą.",
  },
  {
    num: "02",
    title: "Proste rozwiązania zamiast systemów",
    text: "Mała firma nie potrzebuje rozbudowanych procesów HR. Wprowadzamy tylko to, co realnie ułatwia pracę i da się utrzymać na co dzień.",
  },
  {
    num: "03",
    title: "Partnerstwo, nie audyt",
    text: "Jesteśmy drugą perspektywą w decyzjach, w których trudno decydować w pojedynkę. Bez oceniania — z doświadczeniem i dystansem.",
  },
  {
    num: "04",
    title: "Doświadczenie z wielu firm i branż",
    text: "Pracowałyśmy z technologią, software house'ami, kancelariami i produkcją. Schematy problemów rozpoznajemy szybciej — często zanim urosną.",
  },
];

const stats = [
  { value: "Średnio rok", label: "tyle trwa współpraca z naszymi klientami" },
  { value: "100%", label: "klientów trafia do nas z polecenia" },
  { value: "2 z 3", label: "klientów poszerza z nami współpracę" },
  { value: "24 dni", label: "rocznie poświęcamy na rozwój zespołu" },
];

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ONasPage() {
  return (
    <>
      {/* Founder hero — interaktywna sylwetka Zuzanny + cytat założycielki */}
      <FounderHero />

      {/* Historia / misja */}
      <section className="section-py bg-brand-bg-subtle">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <SectionLabel className="mb-5">Po co powstaliśmy</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-brand-text tracking-tight leading-[1.05]">
                W małej firmie tematy ludzi nie mają swojego działu. Mają Twoje
                biurko.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:pt-3">
              <div className="space-y-5 text-brand-body text-lg leading-relaxed">
                <p>
                  Rekrutacja, trudna rozmowa, decyzja o podwyżce, rosnące
                  napięcie w zespole — w mikro i małej firmie to wszystko trafia
                  do jednej osoby. Najczęściej do właściciela, między sprzedażą,
                  klientami i&nbsp;finansami.
                </p>
                <p>
                  Stworzyłyśmy businessQuest, żeby te sprawy przestały lądować
                  tylko na Twoim biurku. Nie sprzedajemy gotowego działu HR ani
                  grubych procedur. Wchodzimy tam, gdzie realnie jesteśmy
                  potrzebne — i wychodzimy, gdy temat jest ogarnięty.
                </p>
                <p className="text-brand-text font-semibold">
                  Chcemy być Twoim pierwszym zespołem HR — takim, który rozumie,
                  że mała firma rządzi się własnymi prawami.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statystyki */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-brand)" }}
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-white text-3xl lg:text-[2.75rem] font-extrabold leading-none">
                  {s.value}
                </p>
                <p className="text-white/80 text-sm mt-3 leading-snug max-w-[22ch]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak pracujemy */}
      <section className="section-py bg-brand-bg">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-14 lg:mb-16 max-w-2xl">
            <SectionLabel className="mb-4">W co wierzymy</SectionLabel>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-text tracking-tight leading-[1.02]">
              Jak pracujemy
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-16 lg:gap-y-14">
            {principles.map((p, i) => (
              <ScrollReveal key={p.num} delay={(i % 2) * 0.1}>
                <div className="relative pt-3">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-magenta-deep font-bold text-sm tracking-widest">
                      {p.num}
                    </span>
                    <span className="w-8 h-px bg-magenta/30" />
                  </div>
                  <h3 className="text-[1.5rem] font-bold text-brand-text mb-3">
                    {p.title}
                  </h3>
                  <p className="text-brand-muted text-[15px] leading-relaxed max-w-md">
                    {p.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zespół */}
      <section className="section-py bg-brand-bg-subtle">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
          <ScrollReveal className="mb-12 lg:mb-16 max-w-2xl">
            <SectionLabel className="mb-4">Poznaj nas</SectionLabel>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-text tracking-tight leading-[1.02]">
              Zespół businessQuest
            </h2>
            <p className="mt-5 text-brand-body text-lg leading-relaxed">
              Trzy founderki, kilkanaście lat doświadczenia w HR, rekrutacji
              i&nbsp;rozwoju zespołów — i jedno podejście: blisko ludzi.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={(i % 3) * 0.1}>
                <article className="h-full flex flex-col rounded-[1.5rem] border border-brand-border bg-brand-card overflow-hidden shadow-sm">
                  <div className="relative aspect-[4/5] bg-brand-bg-subtle overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                    />
                    {m.featured && (
                      <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full bg-magenta text-white text-[11px] font-semibold uppercase tracking-wide">
                        {m.role}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-6 lg:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-brand-text leading-tight">
                          {m.name}
                        </h3>
                        <p className="text-magenta-deep text-sm font-medium mt-1">
                          {m.role}
                        </p>
                      </div>
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border border-brand-border text-brand-muted hover:text-magenta-deep hover:border-magenta transition-colors"
                        aria-label={`LinkedIn — ${m.name}`}
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                    <p className="mt-4 text-brand-muted text-[14px] leading-relaxed">
                      {m.bio}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zaufali nam */}
      <LogoStrip />

      <CtaBanner
        title="Poznajmy się"
        text="Najlepiej zaczyna się od rozmowy. Opowiedz, co teraz najbardziej zajmuje Ci głowę w temacie zespołu — a my powiemy, czy i jak możemy pomóc."
      />
    </>
  );
}

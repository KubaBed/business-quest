import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import { cooperationModels } from "@/data/services";

/** Dwie formy współpracy w kolorowym panelu, pod sekcją „W jakich sytuacjach możemy Ci pomóc?". */
export default function CooperationModels() {
  const { title, intro, models, cta } = cooperationModels;

  return (
    <section id="formy-wspolpracy" className="pb-20 lg:pb-28 bg-brand-bg scroll-mt-20">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div
            className="rounded-[1.75rem] p-7 sm:p-10 lg:p-14 text-white shadow-lg shadow-magenta/20"
            style={{ background: "var(--gradient-magenta)" }}
          >
            <div className="max-w-2xl mb-10 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.05]">
                {title}
              </h2>
              <p className="mt-4 text-white/85 text-lg leading-relaxed">{intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {models.map((m, i) => (
                <article
                  key={m.id}
                  className="flex flex-col rounded-[1.5rem] bg-white text-brand-text p-7 lg:p-9"
                >
                  <span className="text-magenta-deep/50 font-bold text-sm tracking-widest mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold leading-snug">{m.title}</h3>
                  <p className="mt-3 text-brand-body text-[15px] lg:text-base leading-relaxed">
                    {m.text}
                  </p>
                  <p className="mt-5 rounded-2xl bg-magenta/[0.06] px-5 py-4 text-[15px] leading-relaxed text-brand-body">
                    <span className="font-semibold text-brand-text">To dobry wybór, gdy:</span>{" "}
                    {m.fit}
                  </p>
                  {"link" in m && m.link && (
                    <Link
                      href={m.link.href}
                      className="group mt-auto pt-6 inline-flex items-center gap-2 text-magenta-deep font-semibold text-[15px] hover:gap-3 transition-all"
                    >
                      {m.link.label}
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
                  )}
                </article>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <p className="text-lg lg:text-xl font-semibold">{cta.text}</p>
              <Button href={cta.href} variant="white" size="lg">
                {cta.label}
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/animations/MagneticButton";
import ScrollReveal from "@/components/animations/ScrollReveal";
import GradientCircle from "@/components/decor/GradientCircle";

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Treść w prawej kolumnie panelu (np. kroki startu); dokłada też pierścienie w rogu. */
  aside?: ReactNode;
}

/**
 * Reużywalny, magentowy panel CTA dla podstron — wariant CtaSection bez
 * kotwicy #kontakt, z konfigurowalnymi akcjami (domyślnie → /kontakt).
 */
export default function CtaBanner({
  eyebrow = "Gotowy na zmianę?",
  title = "Zacznijmy od rozmowy",
  text = "Opowiedz, co najbardziej zajmuje Ci teraz głowę w temacie zespołu. Wspólnie zobaczymy, czy i jak możemy pomóc — bezpłatnie i bez zobowiązań.",
  primaryHref = "/kontakt",
  primaryLabel = "Umów bezpłatną rozmowę",
  secondaryHref = "mailto:zuzanna.wozniak@businessquest.pl",
  secondaryLabel = "Napisz do nas",
  aside,
}: CtaBannerProps) {
  return (
    <section className="section-py bg-brand-bg">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] px-8 py-16 lg:px-16 lg:py-24"
          style={{ background: "var(--gradient-magenta)" }}
        >
          {/* Subtelna siatka kropek (białe, jak w decku) */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />

          {aside && (
            <>
              <GradientCircle
                variant="none"
                ring="white"
                className="absolute -right-28 -bottom-40 w-[440px] opacity-70"
              />
              <GradientCircle
                variant="none"
                ring="white"
                className="absolute -right-10 -bottom-56 w-[300px] opacity-50"
              />
            </>
          )}

          <div
            className={
              aside
                ? "relative grid lg:grid-cols-[1.2fr_0.8fr] gap-10 lg:gap-14 items-center"
                : "relative max-w-2xl"
            }
          >
            <div className={aside ? "max-w-2xl" : undefined}>
              <ScrollReveal>
                <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-4">
                  {eyebrow}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.02] tracking-tight mb-6">
                  {title}
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-lg">
                  {text}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton strength={0.25}>
                    <Button href={primaryHref} variant="white" size="lg">
                      {primaryLabel}
                    </Button>
                  </MagneticButton>
                  {secondaryHref && secondaryLabel && (
                    <Button href={secondaryHref} variant="white-ghost" size="lg">
                      {secondaryLabel}
                    </Button>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {aside && <ScrollReveal delay={0.3}>{aside}</ScrollReveal>}
          </div>
        </div>
      </div>
    </section>
  );
}

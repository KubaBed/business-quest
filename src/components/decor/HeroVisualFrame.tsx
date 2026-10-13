import type { ReactNode } from "react";
import GradientCircle from "@/components/decor/GradientCircle";
import DotGrid from "@/components/decor/DotGrid";
import HandArrow from "@/components/decor/HandArrow";

interface HeroVisualFrameProps {
  /** Nagłówek karty-makiety. */
  title: string;
  /** Wnętrze karty-makiety. */
  children: ReactNode;
  /** Mała karta „wyskakująca" (od sm w górę) ze strzałką do makiety. */
  badge: { icon: ReactNode; text: string };
  circle?: "magenta" | "orange";
}

/**
 * Wspólna kompozycja ilustracji w hero podstron usług: koło z pierścieniem,
 * siatka kropek, karta-makieta i karta-etykieta z odręczną strzałką.
 */
export default function HeroVisualFrame({
  title,
  children,
  badge,
  circle = "magenta",
}: HeroVisualFrameProps) {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[460px] pt-4 pb-6 sm:pb-20">
      <GradientCircle variant={circle} className="absolute -right-3 sm:-right-6 top-0 w-[78%]" />
      <DotGrid className="absolute -left-4 top-6 w-20 h-20 sm:w-24 sm:h-24 opacity-60" />

      {/* Karta-makieta */}
      <div className="fade-blur-up d3 relative z-10 ml-auto w-full sm:w-[86%] rounded-[1.25rem] border border-brand-border bg-white p-5 sm:p-6 shadow-[0_28px_60px_-24px_rgba(14,14,16,0.35)]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[15px] font-bold text-brand-text">{title}</p>
          <span className="flex items-center gap-1">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/15" />
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/15" />
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/15" />
          </span>
        </div>
        {children}
      </div>

      {/* Strzałka od karty-etykiety do makiety */}
      <HandArrow className="hidden sm:block absolute z-20 left-[7%] bottom-[76px] w-[16%]" />

      {/* Karta-etykieta */}
      <div className="fade-blur-up d5 hidden sm:flex absolute z-20 left-0 bottom-0 items-center gap-3 rounded-2xl border border-brand-border bg-white px-4 py-3 shadow-lg">
        <span className="flex w-9 h-9 items-center justify-center rounded-xl bg-magenta text-white">
          {badge.icon}
        </span>
        <p className="text-[14px] font-semibold text-brand-text">{badge.text}</p>
      </div>
    </div>
  );
}

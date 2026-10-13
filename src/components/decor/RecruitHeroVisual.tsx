import GradientCircle from "@/components/decor/GradientCircle";
import DotGrid from "@/components/decor/DotGrid";
import HandArrow from "@/components/decor/HandArrow";

const rows = [
  { recommended: true, name: "w-28", meta: "w-16" },
  { recommended: false, name: "w-24", meta: "w-20" },
  { recommended: false, name: "w-20", meta: "w-14" },
];

/**
 * Ilustracja do hero podstrony „Rekrutacje": makieta shortlisty kandydatów
 * na kole z pierścieniem. Etykiety wzięte dosłownie z treści klienta.
 */
export default function RecruitHeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[460px] pt-4 pb-6 sm:pb-20">
      <GradientCircle className="absolute -right-3 sm:-right-6 top-0 w-[78%]" />
      <DotGrid className="absolute -left-4 top-6 w-20 h-20 sm:w-24 sm:h-24 opacity-60" />

      {/* Karta shortlisty */}
      <div className="fade-blur-up d3 relative z-10 ml-auto w-full sm:w-[86%] rounded-[1.25rem] border border-brand-border bg-white p-5 sm:p-6 shadow-[0_28px_60px_-24px_rgba(14,14,16,0.35)]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[15px] font-bold text-brand-text">Shortlista</p>
          <span className="flex items-center gap-1">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/15" />
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/15" />
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/15" />
          </span>
        </div>

        <div className="space-y-2.5">
          {rows.map((r, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-xl px-3 py-3 ${
                r.recommended
                  ? "bg-magenta/[0.06] ring-1 ring-magenta/40"
                  : "bg-brand-bg-subtle"
              }`}
            >
              <span
                className={`flex-shrink-0 w-9 h-9 rounded-full ${
                  r.recommended ? "" : "bg-[#D9D9DE]"
                }`}
                style={r.recommended ? { background: "var(--gradient-magenta)" } : undefined}
              />
              <span className="flex-1 min-w-0 space-y-1.5">
                <span className={`block h-2 max-w-full rounded-full bg-brand-text/60 ${r.name}`} />
                <span className={`block h-1.5 max-w-full rounded-full bg-brand-text/25 ${r.meta}`} />
              </span>
              {r.recommended ? (
                <span className="flex-shrink-0 rounded-full bg-magenta px-2.5 py-1 text-[11px] font-semibold text-white">
                  Rekomendacja
                </span>
              ) : (
                <span className="flex-shrink-0 block h-2 w-10 rounded-full bg-brand-text/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Strzałka od karty decyzji do shortlisty */}
      <HandArrow className="hidden sm:block absolute z-20 left-[7%] bottom-[76px] w-[16%]" />

      {/* Karta decyzji */}
      <div className="fade-blur-up d5 hidden sm:flex absolute z-20 left-0 bottom-0 items-center gap-3 rounded-2xl border border-brand-border bg-white px-4 py-3 shadow-lg">
        <span className="flex w-9 h-9 items-center justify-center rounded-xl bg-magenta text-white">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5 9-10" />
          </svg>
        </span>
        <p className="text-[14px] font-semibold text-brand-text">Ty podejmujesz decyzję.</p>
      </div>
    </div>
  );
}

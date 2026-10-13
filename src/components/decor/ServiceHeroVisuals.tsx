import HeroVisualFrame from "@/components/decor/HeroVisualFrame";
import ServiceIcon from "@/components/decor/ServiceIcons";

/*
 * Ilustracje do hero podstron usług. Etykiety wzięte dosłownie z treści
 * klienta (Google Doc „Opisy produktów na stronę"); reszta to szkielety.
 */

function Bar({ className }: { className: string }) {
  return <span className={`block max-w-full rounded-full ${className}`} />;
}

const candidates = [
  { recommended: true, name: "w-28", meta: "w-16" },
  { recommended: false, name: "w-24", meta: "w-20" },
  { recommended: false, name: "w-20", meta: "w-14" },
];

/** Rekrutacje: shortlista kandydatów z rekomendacją. */
export function RecruitHeroVisual() {
  return (
    <HeroVisualFrame
      title="Shortlista"
      badge={{ icon: <ServiceIcon name="check" />, text: "Ty podejmujesz decyzję." }}
    >
      <div className="space-y-2.5">
        {candidates.map((r, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-xl px-3 py-3 ${
              r.recommended ? "bg-magenta/[0.06] ring-1 ring-magenta/40" : "bg-brand-bg-subtle"
            }`}
          >
            <span
              className={`flex-shrink-0 w-9 h-9 rounded-full ${r.recommended ? "" : "bg-[#D9D9DE]"}`}
              style={r.recommended ? { background: "var(--gradient-magenta)" } : undefined}
            />
            <span className="flex-1 min-w-0 space-y-1.5">
              <Bar className={`h-2 bg-brand-text/60 ${r.name}`} />
              <Bar className={`h-1.5 bg-brand-text/25 ${r.meta}`} />
            </span>
            {r.recommended ? (
              <span className="flex-shrink-0 rounded-full bg-magenta px-2.5 py-1 text-[11px] font-semibold text-white">
                Rekomendacja
              </span>
            ) : (
              <Bar className="flex-shrink-0 h-2 w-10 bg-brand-text/10" />
            )}
          </div>
        ))}
      </div>
    </HeroVisualFrame>
  );
}

/** Sparing partner: rozmowa, czyli druga perspektywa. */
export function SparingHeroVisual() {
  return (
    <HeroVisualFrame
      title="Druga perspektywa"
      badge={{ icon: <ServiceIcon name="check" />, text: "Z dystansem do Twojej sytuacji" }}
    >
      <div className="space-y-3">
        {/* Ty */}
        <div className="flex items-end gap-2.5">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D9D9DE]" />
          <div className="w-[72%] rounded-2xl rounded-bl-md bg-brand-bg-subtle px-4 py-3 space-y-2">
            <Bar className="h-2 w-full bg-brand-text/45" />
            <Bar className="h-2 w-3/4 bg-brand-text/25" />
          </div>
        </div>
        {/* businessQuest */}
        <div className="flex items-end justify-end gap-2.5">
          <div
            className="w-[78%] rounded-2xl rounded-br-md px-4 py-3 space-y-2"
            style={{ background: "var(--gradient-magenta)" }}
          >
            <Bar className="h-2 w-full bg-white/90" />
            <Bar className="h-2 w-full bg-white/75" />
            <Bar className="h-2 w-1/2 bg-white/60" />
          </div>
          <span
            className="flex-shrink-0 w-8 h-8 rounded-full ring-2 ring-white"
            style={{ background: "var(--gradient-magenta)" }}
          />
        </div>
        {/* Ty, odpowiedź w toku */}
        <div className="flex items-end gap-2.5">
          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D9D9DE]" />
          <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-brand-bg-subtle px-4 py-3.5">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/30" />
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/30" />
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-text/30" />
          </div>
        </div>
      </div>
    </HeroVisualFrame>
  );
}

/** Procesy HR: uporządkowana struktura zespołu. */
export function ProcessHeroVisual() {
  return (
    <HeroVisualFrame
      title="Struktura zespołu"
      circle="orange"
      badge={{ icon: <ServiceIcon name="fileText" />, text: "Wszystko na jednej stronie" }}
    >
      <div className="relative">
        {/* Węzeł nadrzędny */}
        <div className="mx-auto w-[62%] rounded-xl border-[1.5px] border-orange bg-[#FFF3EC] px-3.5 py-3 space-y-1.5">
          <Bar className="h-2 w-3/4 bg-brand-text/60" />
          <Bar className="h-1.5 w-1/2 bg-brand-text/25" />
        </div>
        {/* Łączniki */}
        <div aria-hidden className="relative h-6">
          <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-[#D9D9DE]" />
          <span className="absolute left-[16.5%] right-[16.5%] top-3 h-px bg-[#D9D9DE]" />
          <span className="absolute left-[16.5%] top-3 h-3 w-px bg-[#D9D9DE]" />
          <span className="absolute left-1/2 top-3 h-3 w-px -translate-x-1/2 bg-[#D9D9DE]" />
          <span className="absolute right-[16.5%] top-3 h-3 w-px bg-[#D9D9DE]" />
        </div>
        {/* Węzły podrzędne */}
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`rounded-xl px-2.5 py-2.5 space-y-1.5 ${
                i === 1 ? "bg-magenta/[0.06] ring-1 ring-magenta/40" : "bg-brand-bg-subtle"
              }`}
            >
              <span
                className={`block w-6 h-6 rounded-full ${i === 1 ? "" : "bg-[#D9D9DE]"}`}
                style={i === 1 ? { background: "var(--gradient-magenta)" } : undefined}
              />
              <Bar className="h-1.5 w-full bg-brand-text/50" />
              <Bar className="h-1.5 w-2/3 bg-brand-text/20" />
            </div>
          ))}
        </div>
      </div>
    </HeroVisualFrame>
  );
}

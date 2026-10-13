interface GradientCircleProps {
  /** Wypełnienie koła; "none" zostawia sam pierścień. */
  variant?: "magenta" | "orange" | "none";
  /** Kolor przesuniętego pierścienia. */
  ring?: "dark" | "white";
  /** Pozycja i rozmiar (szerokość) ustawiane przez rodzica. */
  className?: string;
}

/**
 * Sygnatura marki z decku: koło z gradientem i cienki, przesunięty pierścień.
 * Ten sam wzór co w FounderHero, bez parallaxu.
 */
export default function GradientCircle({
  variant = "magenta",
  ring = "dark",
  className = "",
}: GradientCircleProps) {
  return (
    <div aria-hidden className={`pointer-events-none ${className}`}>
      <div className="relative w-full aspect-square">
        {variant !== "none" && (
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: `var(--gradient-${variant})` }}
          />
        )}
        <div
          className={`absolute inset-0 rounded-full border translate-x-[14px] translate-y-[10px] ${
            ring === "white" ? "border-white/30" : "border-brand-text/15"
          }`}
        />
      </div>
    </div>
  );
}

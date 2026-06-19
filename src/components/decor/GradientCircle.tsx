interface GradientCircleProps {
  /** Gradient wariant — magenta→fiolet lub czerwony→pomarańcz */
  variant?: "magenta" | "orange";
  /** Średnica koła (px) */
  size?: number;
  /** Pokaż przesunięty pierścień (outline) w tle — sygnatura z decku */
  ring?: boolean;
  className?: string;
}

/**
 * Koło wypełnione gradientem z cienkim, czarnym, przesuniętym pierścieniem.
 * Podpis wizualny z prezentacji ofertowej businessQuest.
 */
export default function GradientCircle({
  variant = "magenta",
  size = 320,
  ring = true,
  className = "",
}: GradientCircleProps) {
  const gradient =
    variant === "magenta" ? "var(--gradient-magenta)" : "var(--gradient-orange)";

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {ring && (
        <div
          className="absolute rounded-full border border-black/80"
          style={{
            width: size,
            height: size,
            top: -size * 0.06,
            left: -size * 0.06,
          }}
        />
      )}
      <div
        className="absolute rounded-full"
        style={{ width: size, height: size, background: gradient }}
      />
    </div>
  );
}

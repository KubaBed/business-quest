interface DotGridProps {
  /** Liczba kolumn i wierszy kropek */
  cols?: number;
  rows?: number;
  /** Odstęp między kropkami (px) */
  gap?: number;
  /** Średnica kropki (px) */
  dot?: number;
  className?: string;
}

/**
 * Siatka małych kropek — tekstura dekoracyjna z prezentacji businessQuest.
 */
export default function DotGrid({
  cols = 12,
  rows = 6,
  gap = 16,
  dot = 2.5,
  className = "",
}: DotGridProps) {
  const width = (cols - 1) * gap + dot;
  const height = (rows - 1) * gap + dot;

  return (
    <div
      className={className}
      aria-hidden
      style={{
        width,
        height,
        backgroundImage:
          "radial-gradient(circle, rgba(14,14,16,0.22) " +
          dot / 2 +
          "px, transparent " +
          dot / 2 +
          "px)",
        backgroundSize: `${gap}px ${gap}px`,
      }}
    />
  );
}

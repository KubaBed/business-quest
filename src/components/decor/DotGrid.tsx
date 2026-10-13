interface DotGridProps {
  tone?: "dark" | "white";
  /** Pozycja i rozmiar ustawiane przez rodzica. */
  className?: string;
}

/** Tekstura małych kropek - akcent w narożnikach sekcji. */
export default function DotGrid({ tone = "dark", className = "" }: DotGridProps) {
  const color = tone === "white" ? "rgba(255,255,255,0.85)" : "rgba(14,14,16,0.22)";
  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1.25px, transparent 1.25px)`,
        backgroundSize: "16px 16px",
      }}
    />
  );
}

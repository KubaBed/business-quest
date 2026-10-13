/**
 * Odręczna, markerowa strzałka w orange (motyw z decku).
 * Domyślnie biegnie od dołu-lewej do góry-prawej; kierunek zmieniaj transformem.
 */
export default function HandArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 120"
      fill="none"
      stroke="#FF6B2B"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none ${className}`}
    >
      <path d="M14 112 C 8 84, 18 52, 46 36 C 60 28, 76 22, 90 20" />
      <path d="M90 20 L 77 10 M90 20 L 79 32" />
    </svg>
  );
}

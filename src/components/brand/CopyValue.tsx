"use client";

import { useState } from "react";

// Klikalna wartość (kod koloru, CSS) - kopiuje do schowka i na chwilę pokazuje potwierdzenie.
export default function CopyValue({
  value,
  label,
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      // Schowek niedostępny (np. brak HTTPS) - wartość i tak jest widoczna do zaznaczenia.
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Kliknij, żeby skopiować"
      className={`group relative inline-flex items-center gap-2 rounded-md font-mono text-left transition-colors hover:text-magenta-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta ${className}`}
    >
      <span className="break-words">{label ?? value}</span>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="w-3.5 h-3.5 shrink-0 opacity-40 group-hover:opacity-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" />
        <path d="M10.5 5V3.5A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9a1.5 1.5 0 0 0 1.5 1.5H5" />
      </svg>
      <span
        aria-live="polite"
        className={`absolute -top-7 left-0 whitespace-nowrap rounded-full bg-brand-text px-2.5 py-1 font-sans text-[11px] font-semibold text-white transition-opacity ${
          status === "idle" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {status === "error" ? "Nie udało się, zaznacz i skopiuj ręcznie" : "Skopiowano"}
      </span>
    </button>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import type { RoughAnnotation } from "rough-notation/lib/model";

interface RoughHighlightProps {
  children: React.ReactNode;
  /** Typ adnotacji — domyślnie odręczne kółko (jak Amby) */
  type?: "circle" | "underline" | "highlight" | "box";
  /** Kolor — domyślnie magenta brandu */
  color?: string;
  /** Opóźnienie startu animacji (ms) — by pojawiło się po fade-in tekstu */
  delay?: number;
  strokeWidth?: number;
  padding?: number | [number, number];
  className?: string;
}

/**
 * Odręczna adnotacja tekstu (rough-notation) — kółko/podkreślenie w kolorze brandu.
 * Pojawia się po opóźnieniu, respektuje prefers-reduced-motion, przelicza na resize.
 */
export default function RoughHighlight({
  children,
  type = "circle",
  color = "#F7087F",
  delay = 1200,
  strokeWidth = 2.5,
  padding = [6, 10],
  className = "",
}: RoughHighlightProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const annotation: RoughAnnotation = annotate(el, {
      type,
      color,
      strokeWidth,
      padding,
      multiline: type !== "circle",
      animate: !reduce,
      animationDuration: 900,
    });

    const timer = window.setTimeout(() => annotation.show(), reduce ? 0 : delay);

    let resizeTimer: number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        annotation.hide();
        annotation.show();
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      annotation.remove();
    };
  }, [type, color, delay, strokeWidth, padding]);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}

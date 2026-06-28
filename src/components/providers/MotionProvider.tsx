"use client";

import { MotionConfig } from "framer-motion";

/* Globalny respekt dla prefers-reduced-motion — framer redukuje animacje
   transformów (zachowuje opacity) dla użytkowników z włączoną redukcją ruchu. */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

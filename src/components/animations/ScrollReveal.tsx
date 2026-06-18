"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const variantMap: Record<string, Variants> = {
    up: fadeUp,
    left: slideLeft,
    right: slideRight,
  };

  const selectedVariant = variantMap[direction];

  const delayedVariant: Variants = {
    hidden: selectedVariant.hidden,
    visible: {
      ...(selectedVariant.visible as object),
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={delayedVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

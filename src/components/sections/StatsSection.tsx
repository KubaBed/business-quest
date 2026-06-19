"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { stats } from "@/data/stats";

function CountUp({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const motionVal = useMotionValue(0);
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        if (displayRef.current) {
          displayRef.current.textContent =
            Math.round(v).toLocaleString("pl-PL") + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, value, suffix, motionVal]);

  return (
    <span ref={displayRef} className="tabular-nums">
      0{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section ref={ref} className="relative overflow-hidden py-16 lg:py-24">
      {/* Full-bleed gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-brand)" }}
      />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            >
              {/* Divider on desktop */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/20" />
              )}

              <div className="text-[3rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold text-white leading-none mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-white/70 text-sm font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

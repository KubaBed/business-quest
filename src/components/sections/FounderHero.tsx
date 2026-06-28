"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const ease = [0.22, 1, 0.36, 1] as const;
const spring = { stiffness: 90, damping: 18, mass: 0.5 };

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/**
 * Dynamiczny hero strony „O nas" — wycięta sylwetka założycielki na kole
 * gradientowym, z parallaxem reagującym na ruch myszy (inspiracja: bold,
 * sportowe hero typu landonorris.com), zaadaptowanym do języka marki.
 */
export default function FounderHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  function onMove(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  // Warstwy parallax — różne współczynniki budują głębię
  const nameX = useTransform(sx, [-0.5, 0.5], [44, -44]);
  const circleX = useTransform(sx, [-0.5, 0.5], [-36, 36]);
  const circleY = useTransform(sy, [-0.5, 0.5], [-24, 24]);
  const dotsX = useTransform(sx, [-0.5, 0.5], [28, -28]);
  const dotsY = useTransform(sy, [-0.5, 0.5], [20, -20]);
  const figX = useTransform(sx, [-0.5, 0.5], [18, -18]);
  const figY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const figRot = useTransform(sx, [-0.5, 0.5], [-2.2, 2.2]);
  const badgeX = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const badgeY = useTransform(sy, [-0.5, 0.5], [-16, 16]);

  return (
    <header
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-brand-bg pt-28 lg:pt-32"
    >
      {/* Ambientowe gradienty */}
      <div
        aria-hidden
        className="absolute -top-40 -right-24 w-[520px] h-[520px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "var(--gradient-magenta)" }}
      />

      <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-10 items-end">
          {/* Lewa — tekst + cytat */}
          <div className="pb-14 lg:pb-28 max-w-xl">
            <nav
              className="fade-blur-up flex items-center gap-2 text-sm text-brand-muted mb-6"
              aria-label="Ścieżka"
            >
              <Link href="/" className="hover:text-magenta transition-colors">
                Start
              </Link>
              <span className="text-brand-border">/</span>
              <span className="text-brand-body">O nas</span>
            </nav>

            <div className="fade-blur-up d1">
              <SectionLabel className="mb-5">O nas</SectionLabel>
            </div>

            <h1 className="fade-blur-up d2 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight leading-[1.03] text-brand-text">
              Zaczęło się od&nbsp;prostego{" "}
              <span className="text-gradient">przekonania</span>.
            </h1>

            <figure className="fade-blur-up d3 mt-8 relative pl-6 border-l-2 border-magenta">
              <span
                aria-hidden
                className="absolute -top-4 left-4 text-magenta/20 text-6xl font-serif leading-none select-none"
              >
                &ldquo;
              </span>
              <blockquote className="text-xl lg:text-[1.6rem] text-brand-text font-medium leading-snug">
                W małej firmie wszystkie sprawy ludzi lądują na jednym biurku —
                najczęściej właściciela. Założyłam businessQuest, żeby nikt nie
                musiał być z&nbsp;tym sam.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div>
                  <p className="font-bold text-brand-text">Zuzanna Woźniak</p>
                  <p className="text-magenta text-sm font-medium">
                    CEO i&nbsp;założycielka businessQuest
                  </p>
                </div>
                <a
                  href="https://www.linkedin.com/in/zuzawozprzyb/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-brand-border text-brand-muted hover:text-magenta hover:border-magenta transition-colors"
                  aria-label="LinkedIn — Zuzanna Woźniak"
                >
                  <LinkedInIcon />
                </a>
              </figcaption>
            </figure>
          </div>

          {/* Prawa — interaktywna scena z sylwetką */}
          <div className="relative self-end h-[440px] sm:h-[560px] lg:h-[660px]">
            {/* Wielkie, subtelne imię w tle */}
            <motion.span
              aria-hidden
              style={{ x: nameX }}
              className="pointer-events-none select-none absolute -top-2 lg:top-6 left-1/2 -translate-x-1/2 text-[6rem] sm:text-[8rem] lg:text-[11rem] font-extrabold tracking-tight text-brand-text/[0.045] whitespace-nowrap"
            >
              Zuzanna
            </motion.span>

            {/* Koło gradientowe */}
            <motion.div
              aria-hidden
              style={{ x: circleX, y: circleY, background: "var(--gradient-magenta)" }}
              className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[86%] max-w-[460px] aspect-square rounded-full"
            />
            {/* Przesunięty pierścień (sygnatura marki) */}
            <motion.div
              aria-hidden
              style={{ x: circleX, y: circleY }}
              className="absolute bottom-[6%] left-[calc(50%+14px)] -translate-x-1/2 w-[86%] max-w-[460px] aspect-square rounded-full border border-brand-text/15 translate-y-[10px]"
            />
            {/* Tekstura kropek */}
            <motion.div
              aria-hidden
              style={{
                x: dotsX,
                y: dotsY,
                backgroundImage:
                  "radial-gradient(circle, rgba(14,14,16,0.22) 1.25px, transparent 1.25px)",
                backgroundSize: "16px 16px",
              }}
              className="absolute bottom-8 left-2 lg:left-0 w-28 h-28 opacity-60"
            />

            {/* Sylwetka */}
            <motion.div
              style={{ x: figX, y: figY, rotate: figRot }}
              initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease, delay: 0.15 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full flex items-end justify-center"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/team/zuzia-cutout.webp"
                alt="Zuzanna Woźniak — CEO i założycielka businessQuest"
                className="relative z-10 h-full w-auto object-contain object-bottom"
                style={{ filter: "drop-shadow(0 24px 40px rgba(14,14,16,0.22))" }}
              />
            </motion.div>

            {/* Pływający badge */}
            <motion.div
              style={{ x: badgeX, y: badgeY }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease, delay: 0.7 }}
              className="absolute z-20 bottom-[22%] right-0 lg:right-2 flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-border shadow-lg px-4 py-2.5"
            >
              <span className="flex w-2 h-2 rounded-full bg-magenta" />
              <span className="text-[13px] font-semibold text-brand-text">
                CEO &amp; założycielka
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}

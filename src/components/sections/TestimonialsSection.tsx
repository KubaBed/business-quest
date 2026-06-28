"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/data/testimonials";

const ease = [0.32, 0.72, 0, 1] as const;

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-brand-bg overflow-hidden" id="opinie">
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-12 lg:mb-16 max-w-2xl">
          <SectionLabel className="mb-4">Opinie klientów</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-brand-text tracking-tight leading-[1.02]">
            Co mówią o nas klienci
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease, delay: (i % 2) * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-brand-border bg-brand-bg-subtle p-8 lg:p-9"
            >
              {/* Quote mark */}
              <svg
                className="text-magenta-deep/25 mb-5"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M9.5 7H5a1 1 0 00-1 1v5a1 1 0 001 1h3v3a1 1 0 01-1 1H6a1 1 0 100 2h1a3 3 0 003-3V8a1 1 0 00-.5-1zm9 0H14a1 1 0 00-1 1v5a1 1 0 001 1h3v3a1 1 0 01-1 1h-1a1 1 0 100 2h1a3 3 0 003-3V8a1 1 0 00-.5-1z" />
              </svg>

              <blockquote className="text-brand-text text-lg lg:text-xl leading-relaxed font-medium flex-1">
                {t.quote}
              </blockquote>

              <figcaption className="mt-7 pt-6 border-t border-brand-border">
                <p className="font-bold text-brand-text">{t.author}</p>
                <p className="text-brand-muted text-sm mt-0.5">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

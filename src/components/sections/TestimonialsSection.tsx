"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-brand-bg overflow-hidden" id="opinie">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <SectionLabel className="mb-4">Opinie klientów</SectionLabel>
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-brand-text tracking-tight leading-tight max-w-xl">
            Co mówią o nas{" "}
            <span className="text-gradient">nasi klienci</span>
          </h2>
        </ScrollReveal>

        {/* Scrollable testimonial row */}
        <div
          className="flex gap-5 overflow-x-auto pb-4 -mx-6 px-6 lg:-mx-8 lg:px-8"
          style={{
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-brand-light text-xs mt-4 text-center lg:hidden">
          Przesuń, żeby zobaczyć więcej →
        </p>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  return (
    <ScrollReveal
      direction="left"
      delay={index * 0.1}
      className="flex-none w-[85vw] sm:w-[420px] lg:w-[400px]"
    >
      <motion.div
        className="bg-brand-card rounded-3xl p-8 shadow-sm border border-black/[0.04] h-full relative overflow-hidden"
        whileHover={{ y: -4, boxShadow: "0 16px 40px -12px rgba(247,8,127,0.12)" }}
        transition={{ duration: 0.25 }}
        style={{ scrollSnapAlign: "start" }}
      >
        {/* Decorative quote mark */}
        <div
          className="absolute top-4 right-6 text-[8rem] font-extrabold leading-none pointer-events-none select-none"
          style={{ color: "#F7087F", opacity: 0.06 }}
          aria-hidden
        >
          &ldquo;
        </div>

        <p className="text-brand-text text-[15px] leading-relaxed mb-8 relative z-10">
          &#8220;{testimonial.quote}&#8221;
        </p>

        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
            style={{ background: "var(--gradient-brand)" }}
          >
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-brand-text text-sm">{testimonial.author}</p>
            <p className="text-brand-muted text-xs">
              {testimonial.role} · {testimonial.company}
            </p>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

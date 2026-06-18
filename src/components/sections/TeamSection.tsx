"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { team } from "@/data/team";

const blobShapes = [
  "58% 42% 48% 52% / 42% 56% 44% 58%",
  "45% 55% 60% 40% / 55% 42% 58% 45%",
  "52% 48% 42% 58% / 48% 58% 42% 52%",
];

const blobHover = [
  "45% 55% 55% 45% / 55% 45% 55% 45%",
  "58% 42% 45% 55% / 42% 58% 50% 50%",
  "42% 58% 55% 45% / 55% 42% 58% 42%",
];

export default function TeamSection() {
  return (
    <section className="section-py bg-brand-bg-alt" id="zespol">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="justify-center mb-4">Nasz zespół</SectionLabel>
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-bold text-brand-text tracking-tight leading-tight">
            Ludzie za{" "}
            <span className="text-gradient">BusinessQuest</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-end">
          {team.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              blobShape={blobShapes[i]}
              blobHoverShape={blobHover[i]}
              delay={i * 0.15}
              offsetUp={i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({
  member,
  blobShape,
  blobHoverShape,
  delay,
  offsetUp,
}: {
  member: (typeof team)[number];
  blobShape: string;
  blobHoverShape: string;
  delay: number;
  offsetUp: boolean;
}) {
  return (
    <ScrollReveal delay={delay} className={offsetUp ? "md:-translate-y-6" : ""}>
      <motion.div className="text-center group">
        {/* Photo */}
        <div className="relative mx-auto w-52 h-64 mb-6">
          {/* Soft glow behind photo */}
          <div
            className="absolute inset-[-16px] rounded-full opacity-20 blur-2xl"
            style={{ background: "var(--gradient-brand)" }}
            aria-hidden
          />

          {/* Blob-masked photo */}
          <motion.div
            className="relative w-full h-full overflow-hidden"
            style={{ borderRadius: blobShape }}
            whileHover={{ borderRadius: blobHoverShape }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Image
              src={member.photoSrc}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </div>

        {/* Info */}
        <h3 className="font-bold text-brand-text text-xl mb-1">{member.name}</h3>
        <p className="text-magenta text-sm font-medium mb-3">{member.role}</p>
        <p className="text-brand-muted text-[14px] leading-relaxed max-w-xs mx-auto mb-4">
          {member.bio}
        </p>

        {/* LinkedIn */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-magenta text-xs font-semibold hover:text-magenta-light transition-colors"
          aria-label={`LinkedIn — ${member.name}`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
      </motion.div>
    </ScrollReveal>
  );
}

import HeroSectionFirewatch from "@/components/sections/HeroSectionFirewatch";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";

/* Alternate landing — firewatch (illustrated cinemagraph) hero variant.
   Same sections as `/`, only the hero differs. */
export default function Hero2() {
  return (
    <>
      <HeroSectionFirewatch />
      <ValueProposition />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}

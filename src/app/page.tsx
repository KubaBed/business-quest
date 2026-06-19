import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesSection from "@/components/sections/ServicesSection";
import QualificationSection from "@/components/sections/QualificationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ValueProposition />
      <ServicesSection />
      <QualificationSection />
      <TestimonialsSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}

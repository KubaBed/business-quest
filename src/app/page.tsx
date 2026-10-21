import type { Metadata } from "next";
import { organizationSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesSection from "@/components/sections/ServicesSection";
import QualificationSection from "@/components/sections/QualificationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CtaSection";

// Tytuł i opis dziedziczone z layoutu; tu tylko canonical.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <HeroSection />
      <ProblemSection />
      <ValueProposition />
      <ServicesSection />
      <TeamSection />
      <QualificationSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

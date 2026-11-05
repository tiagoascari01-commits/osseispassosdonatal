import { AnnouncementBar } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PreviewCarousel } from "@/components/PreviewCarousel";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full mx-auto bg-grafite">
      <AnnouncementBar />
      <HeroSection />
      <HowItWorksSection />
      <PreviewCarousel />
      <BenefitsSection />
      <AudienceSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}

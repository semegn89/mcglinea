import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { BuyerTypesSection } from "@/components/home/buyer-types-section"
import { FaqSection } from "@/components/home/faq-section"
import { CtaSection } from "@/components/home/cta-section"
import { FaqSchema } from "@/components/seo/faq-schema"
import { SITE } from "@/config/company"

export const metadata: Metadata = {
  title: SITE.defaultTitle,
  description: SITE.defaultDescription,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <FaqSchema />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BuyerTypesSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}

import type { Metadata } from "next";
import { SiteHeader } from "../components/layout/site-header";
import SiteFooter from "../components/layout/site-footer";
import CenteredHeroSection from "../components/sections/centered-hero-section";
import HowItWorksSection from "../components/sections/how-it-works-section";
import BenefitsSection from "../components/sections/benefits-section";
import PricingSection from "../components/sections/pricing-section";
import AudienceFaqSection from "../components/sections/audience-faq-section";
import { IconVerifiedBadge } from "../components/ui/icons";
import {
  vendorTitles,
  vendorSteps,
  vendorBenefits,
  vendorPricingColumns,
  vendorFaqs,
} from "@/data/sell-on-manna";

export const metadata: Metadata = {
  title: "Sell on Manna",
  description:
    "Join Manna as a vendor and reach more customers for your farm produce or grocery business.",
};

export default function SellOnMannaPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(90deg,#FFFDED_0%,#FFFDED_24%,#F7FDDC_58%,#DFFBCB99_100%)]">
      <SiteHeader />

      <CenteredHeroSection
        eyebrowIcon={<IconVerifiedBadge className="h-full w-full" />}
        eyebrowText="Sell on Manna"
        titles={vendorTitles}
        subtitle="Join Manna as a vendor and reach households and businesses across Lagos looking for fresh produce — no shop and no delivery fleet required."
        primaryCta={{ label: "Become a vendor", href: "/signup?type=vendor" }}
        secondaryCta={{ label: "See how it works", href: "#how-it-works" }}
      />

      <div id="how-it-works">
        <HowItWorksSection
          eyebrow="How it works"
          title="From your farm or store to a buyer's doorstep"
          steps={vendorSteps}
          iconVariant="colored"
        />
      </div>

      <BenefitsSection
        eyebrow="Why sell on Manna"
        title="Built for farmers and vendors, not just big suppliers"
        benefits={vendorBenefits}
        layout="grid-cards"
      />

      <PricingSection
        eyebrow="Pricing"
        title="Simple, transparent terms"
        description="Manna doesn't charge to join or list produce. Here's how things are split between you and Manna."
        columns={vendorPricingColumns}
        note="Exact commission details are confirmed during vendor onboarding, before you list your first product."
      />

      <AudienceFaqSection
        eyebrow="FAQ"
        title="Questions vendors ask us"
        faqs={vendorFaqs}
      />

      <SiteFooter />
    </main>
  );
}
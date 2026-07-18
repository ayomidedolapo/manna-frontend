import type { Metadata } from "next";
import { SiteHeader } from "../components/layout/site-header";
import SiteFooter from "../components/layout/site-footer";
import CenteredHeroSection from "../components/sections/centered-hero-section";
import AudienceSegmentsSection from "../components/sections/audience-segments-section";
import HowItWorksSection from "../components/sections/how-it-works-section";
import BenefitsSection from "../components/sections/benefits-section";
import PricingSection from "../components/sections/pricing-section";
import AudienceFaqSection from "../components/sections/audience-faq-section";
import SignupFormSection from "../components/sections/signup-form-section";
import { IconOfficeColor } from "../components/ui/icons";
import {
  b2bSteps,
  b2bBenefits,
  b2bPricingColumns,
  b2bFaqs,
  b2bSignupFields,
} from "@/data/b2b";

export const metadata: Metadata = {
  title: "Manna for Business",
  description:
    "Bulk groceries and produce for restaurants, hotels, and offices in Lagos — reliable supply, wholesale-friendly pricing.",
};

export default function B2BPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(90deg,#FFFDED_0%,#FFFDED_24%,#F7FDDC_58%,#DFFBCB99_100%)]">
      <SiteHeader />

      <CenteredHeroSection
        eyebrowIcon={<IconOfficeColor className="h-full w-full" />}
        eyebrowText="Manna for Businesses"
        titles={[
          { accent: "Never run out of stock", rest: "again." },
          { accent: "One order.", rest: "Every ingredient sorted." },
          { accent: "Groceries at the scale", rest: "your business needs." },
          { accent: "Built for businesses", rest: "that can't afford delays." },
        ]}
        subtitle="Predictable delivery, wholesale-friendly pricing, and one point of contact — so supply is one less thing you have to worry about."
        primaryCta={{ label: "Start business order", href: "#b2b-signup" }}
        secondaryCta={{
          label: "Chat with Us",
          href: "https://wa.me/2349063657802?text=" +
            encodeURIComponent(
              "Hi Manna, I'd like to know more about business/bulk orders.",
            ),
          external: true,
        }}
      />

      <AudienceSegmentsSection
        eyebrow="Business Types"
        title="Who We Serve"
        segments={[
          { image: "/images/business-types/restaurants.png", label: "Restaurants" },
          { image: "/images/business-types/mini-markets.png", label: "Mini Markets" },
          { image: "/images/business-types/food-vendors.png", label: "Food Vendors" },
          { image: "/images/business-types/offices-bulk-buyers.png", label: "Offices and Bulk Buyers" },
        ]}
      />

      <div id="how-it-works">
        <HowItWorksSection
          eyebrow="How it works"
          title="From request to recurring delivery"
          steps={b2bSteps}
          iconVariant="badge"
        />
      </div>

      <BenefitsSection
        eyebrow="The Benefits"
        title="Why Choose Manna?"
        benefits={b2bBenefits}
        layout="grid-cards"
      />

      <PricingSection
        eyebrow="Pricing"
        title="Pricing built around your order volume"
        description="There's no fixed public price list for business accounts — every quote is based on what and how often you order."
        columns={b2bPricingColumns}
        note="Reach out below and we'll follow up with a custom quote before you commit to anything."
      />

      <div id="faq">
        <AudienceFaqSection
          eyebrow="FAQ"
          title="Questions businesses ask us"
          faqs={b2bFaqs}
        />
      </div>

      <SignupFormSection
        id="b2b-signup"
        eyebrow="Get started"
        title="Request business pricing"
        description="Tell us about your business. This is a preview of the request form — it isn't connected to a backend yet."
        fields={b2bSignupFields}
        submitLabel="Request a quote"
        successTitle="Thanks — we've got your request!"
        successMessage="This is a preview confirmation. Once the real form is wired up, our team will follow up with a custom quote."
        showPreviewNote={false}
      />

      <SiteFooter />
    </main>
  );
}
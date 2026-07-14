import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "../components/layout/site-header";
import SiteFooter from "../components/layout/site-footer";
import CenteredHeroSection from "../components/sections/centered-hero-section";
import ServicesSection from "../components/sections/services-section";
import TeamSection from "../components/sections/team-section";
import FounderStorySection from "../components/sections/founder-story-section";
import JoinCtaSection from "../components/sections/join-cta-section";
import {
  aboutUsTitle,
  aboutUsServices,
  aboutUsTeam,
  founderStoryParagraphs,
} from "@/data/about-us";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Manna is a modern grocery supply platform helping individuals and businesses get fresh food items fast and reliably.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(90deg,#FFFDED_0%,#FFFDED_24%,#F7FDDC_58%,#DFFBCB99_100%)]">
      <SiteHeader />

      <CenteredHeroSection
        eyebrowIcon={
          <Image
            src="/icons/streamline-ultimate-color_farmers-market-kiosk-1.png"
            alt=""
            width={24}
            height={24}
            className="h-full w-full object-contain"
          />
        }
        eyebrowText="Your no. 1 reliable grocery vendor"
        titles={[aboutUsTitle]}
        subtitle="Manna is a modern grocery supply platform helping individuals and businesses get fresh food items fast and reliably."
        primaryCta={{ label: "Shop Now", href: "/" }}
        secondaryCta={{ label: "View Available Products", href: "/" }}
      />

      <ServicesSection
        eyebrow="Our Services"
        title="What We Offer"
        cards={aboutUsServices}
        closingIcon={
          <Image
            src="/icons/cart-illustration.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
        }
        closingBold="Manna makes fresh food access simple—"
        closingRest="connecting you directly to trusted suppliers with fast, reliable delivery."
      />

      <TeamSection
        eyebrow="Meet the Team"
        title="Who We Are"
        members={aboutUsTeam}
      />

      <FounderStorySection
        title="Founder's Story"
        paragraphs={founderStoryParagraphs}
        founderName="Stephen PHILLIPS"
        founderRole="Founder & CEO"
        founderPhoto="/images/team/stephen-philips.png"
      />

      <JoinCtaSection
        title="Join Us as We Redefine Grocery Access"
        subtitle="Whether you're ordering for your home or your business. Manna is here to simplify the way you get essentials."
        primaryCta={{
          label: "Chat on WhatsApp",
          href:
            "https://wa.me/2349063657802?text=" +
            encodeURIComponent("Hi Manna, I'd like to know more."),
          external: true,
        }}
        secondaryCta={{ label: "Order Now", href: "/" }}
      />

      <SiteFooter />
    </main>
  );
}
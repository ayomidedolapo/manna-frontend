import { SiteHeader } from "./components/layout/site-header";
import { HeroSection } from "./components/sections/hero-section";
import FeaturesSection from "./components/sections/features-section";
import DeliverySection from "./components/sections/delivery-section";
import DiscountSection from "./components/sections/discount-section";
import FaqSection from "./components/sections/faq-section";
import NewsletterSection from "./components/sections/newsletter-section";
import SiteFooter from "./components/layout/site-footer";

export default function HomePage() {
  return (
     <main className="min-h-screen bg-[linear-gradient(90deg,#FFFDED_0%,#FFFDED_24%,#F7FDDC_58%,#DFFBCB99_100%)]">
       <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <DeliverySection />
      <DiscountSection />
      <FaqSection />
      <NewsletterSection />
      <SiteFooter />
     </main>
  );
}
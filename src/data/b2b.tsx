import Image from "next/image";
import {
  IconCalendar,
  IconReceipt,
  IconShield,
  IconTag,
  IconTrash,
  IconMessageCircle,
  IconLeaf,
} from "@/app/components/ui/icons";
import type { AudienceHeroBadge } from "@/app/components/sections/audience-hero-section";
import type { HowItWorksStep } from "@/app/components/sections/how-it-works-section";
import type { Benefit } from "@/app/components/sections/benefits-section";
import type { PricingColumn } from "@/app/components/sections/pricing-section";
import type { FaqItem } from "@/app/components/sections/audience-faq-section";
import type { SignupField } from "@/app/components/sections/signup-form-section";

export const b2bHeroBadges: AudienceHeroBadge[] = [
  { icon: <IconCalendar className="h-4 w-4" />, label: "Recurring delivery schedules" },
  { icon: <IconReceipt className="h-4 w-4" />, label: "Custom quotes, no guesswork" },
  { icon: <IconShield className="h-4 w-4" />, label: "One point of contact" },
];

export const b2bSteps: HowItWorksStep[] = [
  {
    icon: (
      <Image
        src="/icons/b2b-steps/step-1.png"
        alt=""
        width={72}
        height={72}
        className="h-full w-full"
      />
    ),
    title: "Tell us what you need",
    description:
      "Share your business type and the produce or groceries you order regularly.",
  },
  {
    icon: (
      <Image
        src="/icons/b2b-steps/step-2.png"
        alt=""
        width={72}
        height={72}
        className="h-full w-full"
      />
    ),
    title: "Get a custom quote",
    description:
      "We put together pricing based on your volume and delivery frequency.",
  },
  {
    icon: (
      <Image
        src="/icons/b2b-steps/step-3.png"
        alt=""
        width={72}
        height={72}
        className="h-full w-full"
      />
    ),
    title: "Schedule recurring delivery",
    description:
      "Set up a delivery rhythm that matches how your business actually operates.",
  },
  {
    icon: (
      <Image
        src="/icons/b2b-steps/step-4.png"
        alt=""
        width={72}
        height={72}
        className="h-full w-full"
      />
    ),
    title: "Manage orders in one place",
    description:
      "Track upcoming and past orders, and adjust your standing order as your needs change.",
  },
];

export const b2bBenefits: Benefit[] = [
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Freshness Guaranteed",
    description:
      "Produce goes from farm to client within hours, so menus stay crisp and waste drops.",
  },
  {
    icon: <IconCalendar className="h-5 w-5" />,
    title: "Predictable Scheduling",
    description:
      "Reliable, predictable delivery — built for businesses that can't afford to run out of stock mid-service.",
  },
  {
    icon: <IconTag className="h-5 w-5" />,
    title: "Transparent Pricing",
    description:
      "Wholesale-friendly pricing put together around your order volume, not one-off retail prices.",
  },
  {
    icon: <IconLeaf className="h-5 w-5" />,
    title: "Local Sourcing",
    description:
      "We prioritize Nigerian farms, shortening chains and supporting nearby growers.",
  },
  {
    icon: <IconMessageCircle className="h-5 w-5" />,
    title: "Responsive Support",
    description:
      "A dedicated point of contact for your account — skip the general support queue for order issues.",
  },
  {
    icon: <IconTrash className="h-5 w-5" />,
    title: "Reduced Waste",
    description:
      "Right-sized packs and reliable timing help kitchens order only what they'll use.",
  },
];

export const b2bPricingColumns: [PricingColumn, PricingColumn] = [
  {
    title: "How pricing works",
    items: [
      "Pricing is quoted based on your expected order volume",
      "No fixed public price list — every business account gets a custom quote",
      "Quotes are shared before you commit to anything",
    ],
  },
  {
    title: "What's included",
    items: [
      "A dedicated contact for your account",
      "Delivery coordination for recurring orders",
      "Simple invoicing for your orders",
    ],
  },
];

export const b2bFaqs: FaqItem[] = [
  {
    question: "What businesses does Manna work with?",
    answer:
      "Restaurants, hotels, offices, caterers, and other businesses that need groceries or produce regularly and in larger quantities.",
  },
  {
    question: "Is there a minimum order size?",
    answer:
      "This depends on your business type and location. We'll confirm minimums when we put together your quote.",
  },
  {
    question: "How is billing handled?",
    answer:
      "Business accounts are typically invoiced per delivery or on an agreed schedule. Details are confirmed as part of your quote.",
  },
  {
    question: "Can I set up recurring deliveries?",
    answer:
      "Yes, you can arrange a standing delivery schedule that fits your operations.",
  },
  {
    question: "Which areas do you currently deliver to?",
    answer:
      "Manna currently operates in Lagos. Reach out and we'll confirm whether your location is covered.",
  },
];

export const b2bSignupFields: SignupField[] = [
  { name: "businessName", label: "Business name", type: "text", required: true, placeholder: "e.g. Green Table Restaurant" },
  { name: "contactName", label: "Contact person", type: "text", required: true, placeholder: "e.g. Tunde Bakare" },
  { name: "phone", label: "Phone number", type: "tel", required: true, placeholder: "080..." },
  { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@business.com" },
  {
    name: "businessType",
    label: "Business type",
    type: "select",
    required: true,
    options: ["Restaurant", "Hotel", "Office / corporate", "Event caterer", "Other"],
  },
  {
    name: "volume",
    label: "Estimated order frequency",
    type: "select",
    options: ["Weekly", "Bi-weekly", "Monthly", "One-off / not sure yet"],
  },
  {
    name: "notes",
    label: "Anything else we should know?",
    type: "textarea",
    fullWidth: true,
    placeholder: "e.g. typical items you order, delivery constraints, etc.",
  },
];
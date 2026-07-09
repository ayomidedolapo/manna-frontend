import {
  IconLeaf,
  IconClipboard,
  IconHandshake,
  IconWallet,
  IconTruck,
  IconShield,
  IconUsers,
} from "@/app/components/ui/icons";
import type { RotatingTitle } from "@/app/components/sections/centered-hero-section";
import type { HowItWorksStep } from "@/app/components/sections/how-it-works-section";
import type { Benefit } from "@/app/components/sections/benefits-section";
import type { PricingColumn } from "@/app/components/sections/pricing-section";
import type { FaqItem } from "@/app/components/sections/audience-faq-section";

export const vendorTitles: RotatingTitle[] = [
  { accent: "Turn your harvest", rest: "into income." },
  { accent: "No shop needed.", rest: "Just fresh produce." },
  { accent: "Reach more buyers,", rest: "sell more often." },
  { accent: "Simple listing,", rest: "steady payouts." },
];

export const vendorSteps: HowItWorksStep[] = [
  {
    icon: <IconClipboard className="h-5 w-5" />,
    title: "Register as a vendor",
    description:
      "Tell us a bit about you and what you grow or sell. It takes a few minutes.",
  },
  {
    icon: <IconLeaf className="h-5 w-5" />,
    title: "List your produce",
    description:
      "Add what's available — vegetables, fruits, grains, or livestock — with your own pricing.",
  },
  {
    icon: <IconHandshake className="h-5 w-5" />,
    title: "Get matched with buyers",
    description:
      "Households and businesses on Manna discover your produce and place orders.",
  },
  {
    icon: <IconWallet className="h-5 w-5" />,
    title: "Get paid after delivery",
    description:
      "Once an order is delivered and confirmed, your payout is released to you.",
  },
];

export const vendorBenefits: Benefit[] = [
  {
    icon: <IconUsers className="h-5 w-5" />,
    title: "Reach more customers",
    description:
      "Get discovered by households and businesses across Lagos without needing your own storefront or delivery riders.",
  },
  {
    icon: <IconShield className="h-5 w-5" />,
    title: "Fair, transparent terms",
    description:
      "You set your own prices. Manna is upfront about how commission and payouts work before you list anything.",
  },
  {
    icon: <IconTruck className="h-5 w-5" />,
    title: "We handle logistics",
    description:
      "Manna coordinates delivery to the buyer, so you can focus on your farm or shop instead of running errands.",
  },
  {
    icon: <IconClipboard className="h-5 w-5" />,
    title: "Simple listing tools",
    description:
      "Add, update, or take down produce listings in a few taps — no technical experience needed.",
  },
];

export const vendorPricingColumns: [PricingColumn, PricingColumn] = [
  {
    title: "What you keep",
    items: [
      "You set your own prices for everything you list",
      "No fee to join or list produce",
      "Clear payout amount shown before you confirm an order",
    ],
  },
  {
    title: "What Manna handles",
    items: [
      "Delivery coordination to the buyer",
      "Customer support for order issues",
      "Secure, trackable payments",
    ],
  },
];

export const vendorFaqs: FaqItem[] = [
  {
    question: "Do I need a registered business to join?",
    answer:
      "No. Manna is open to individual farmers, home producers, and registered vendors alike. We'll ask a few basic details to get you set up.",
  },
  {
    question: "How and when do I get paid?",
    answer:
      "Payouts are released after an order is delivered and confirmed by the buyer. Payout details and schedule will be shared during onboarding.",
  },
  {
    question: "Is there a fee to join or list produce?",
    answer:
      "No listing fees. Manna's commission structure will be shared clearly with you before you start selling, so there are no surprises.",
  },
  {
    question: "What can I sell on Manna?",
    answer:
      "Fresh produce, grains and tubers, poultry and livestock, and other farm or grocery items. If you're unsure whether something fits, ask us during signup.",
  },
  {
    question: "Do I need to handle delivery myself?",
    answer:
      "No — Manna coordinates delivery to the buyer once an order is placed. You're responsible for having the produce ready for pickup.",
  },
  {
    question: "How soon can I start receiving orders?",
    answer:
      "Once your vendor registration is reviewed and approved, you can start listing produce right away.",
  },
];
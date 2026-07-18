import type { RotatingTitle } from "@/app/components/sections/centered-hero-section";
import type { ServiceCard } from "@/app/components/sections/services-section";
import type { TeamMember } from "@/app/components/sections/team-section";

export const aboutUsTitle: RotatingTitle = {
  accent: "Building a Better Way",
  rest: "to Access Everyday Essentials",
};

export const aboutUsServices: ServiceCard[] = [
  {
    title: "Fresh Groceries, On Demand.",
    description:
      "Get access to fresh farm produce and everyday essentials without the hassle. Browse, order, and receive quality groceries delivered straight to your doorstep—fast, easy, and reliable.",
  },
  {
    title: "Sell With Ease.",
    description:
      "Are you a farmer or supplier? List your products, reach more customers, and manage your sales in one place. Manna gives you the tools to grow your business without complexity.",
  },
  {
    title: "Seamless Delivery Network.",
    description:
      "From farm to doorstep, we handle the logistics. Our reliable delivery system ensures your orders arrive fresh and on time, every time.",
  },
];

export const aboutUsTeam: TeamMember[] = [
  {
    name: "Ayomide DOLAPO",
    role: "Co-Founder | Technology",
    photo: "/images/team/ayomide-dolapo.png",
  },
  {
    name: "Stephen PHILLIPS",
    role: "Founder & CEO",
    photo: "/images/team/stephen-philips.png",
  },
  {
    name: "David ALIKA",
    role: "Co-Founder | Operations",
    photo: "/images/team/david-alika.png",
  },
];

export const founderStoryParagraphs: string[] = [
  "Manna began with a simple frustration — getting fresh food in the city shouldn't feel like a chore.",
  "We saw people navigating inconsistent prices, unreliable supply, and the stress of moving from one market to another just to find basic groceries. At the same time, farmers, vendors, and suppliers had no direct, structured way to reach everyday customers and businesses.",
  "So, we built Manna — not as a single store, but as a marketplace from day one.",
  "Our vision has always been to connect multiple farmers, vendors, and suppliers directly to the people and businesses that need them, all on one platform. No middlemen taking the biggest cut, and no vendor locked out for being too small.",
  "We're building the infrastructure — the platform, the delivery network, the trust and verification systems — so that any vendor, from a single farmer to an established supplier, can plug in and reach customers reliably.",
  "Manna is still growing, but our mission remains clear: to simplify food access and build a marketplace that genuinely works for everyone — farmers, vendors, businesses, and the households that depend on them.",
];
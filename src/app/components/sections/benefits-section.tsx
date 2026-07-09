import type { ReactNode } from "react";

export type Benefit = {
  icon: ReactNode;
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  eyebrow: string;
  title: string;
  benefits: Benefit[];
  /**
   * "list"       — left-label / right-divided-list layout (default; used by
   *                the Sell on Manna page).
   * "grid-cards" — bordered card grid, 3 columns on desktop (used by the
   *                B2B page's Figma-matched "Why Choose Manna?" design).
   */
  layout?: "list" | "grid-cards";
};

export default function BenefitsSection({
  eyebrow,
  title,
  benefits,
  layout = "list",
}: BenefitsSectionProps) {
  if (layout === "grid-cards") {
    return (
      <section className="bg-transparent">
        <div className="mx-auto w-full max-w-[1500px] px-5 py-[clamp(2rem,4vw,3.25rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
          <div className="text-center">
            <p className="text-[13px] font-medium text-[#086453]">{eyebrow}</p>
            <h2 className="mx-auto mt-2 max-w-[24ch] text-[clamp(1.4rem,3.8vw,2.3rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#00A14B]">
              {title}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 min-[640px]:grid-cols-2 min-[1080px]:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[18px] border border-[#00A14B]/35 p-6 transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(7,39,32,0.08)]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#086453] text-white">
                  <span className="h-6 w-6">{benefit.icon}</span>
                </span>

                <h3 className="mt-4 text-[16px] font-semibold leading-snug text-[#086453]">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-[13.5px] leading-[1.55] text-[#072720]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[clamp(2rem,4vw,3.25rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="grid gap-10 min-[900px]:grid-cols-[0.85fr_1.15fr] min-[900px]:gap-16">
          <div>
            <p className="text-[13px] font-medium text-[#086453]">{eyebrow}</p>
            <h2 className="mt-2 max-w-[20ch] text-[clamp(1.35rem,3.6vw,2.1rem)] font-medium leading-[1.2] tracking-[-0.03em] text-[#00A14B]">
              {title}
            </h2>
          </div>

          <div className="border-t border-[#00A14B]/15">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 border-b border-[#00A14B]/15 py-6 first:pt-0"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#DFFBCB] text-[#086453]">
                  {benefit.icon}
                </span>

                <div>
                  <h3 className="text-[15px] font-semibold leading-snug text-[#086453]">
                    {benefit.title}
                  </h3>

                  <p className="mt-1.5 text-[13.5px] leading-[1.55] text-[#072720]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
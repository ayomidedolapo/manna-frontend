import Image from "next/image";
import type { ReactNode } from "react";

export type AudienceHeroBadge = {
  icon: ReactNode;
  label: string;
};

type AudienceHeroSectionProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
  badges: AudienceHeroBadge[];
  floatingCard?: ReactNode;
};

export default function AudienceHeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  badges,
  floatingCard,
}: AudienceHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 pb-[clamp(2.5rem,5vw,4rem)] pt-[clamp(2.5rem,6vw,4.5rem)] min-[900px]:grid-cols-[1.05fr_0.95fr] min-[900px]:items-center min-[900px]:gap-[clamp(2rem,4vw,4rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div>
          <span className="inline-flex h-[38px] items-center rounded-full bg-[#DFFBCB] px-5 text-[13px] font-medium text-[#086453]">
            {eyebrow}
          </span>

          <h1 className="mt-6 max-w-[16ch] text-[clamp(1.9rem,5.5vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-[#08715a]">
            {title}
          </h1>

          <p className="mt-5 max-w-[46ch] text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.55] text-[#072720]">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={primaryCta.href}
              className="group flex h-[56px] items-center gap-3 rounded-full px-7 text-[16px] font-medium text-white shadow-[0_14px_28px_rgba(0,161,75,0.25)] transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(90deg, #00A14B 0%, #086453 100%)",
              }}
            >
              <span>{primaryCta.label}</span>
              <span className="text-[20px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={secondaryCta.href}
              className="group flex items-center gap-2 border-b-2 border-[#08715a] pb-[2px] text-[15px] font-medium text-[#009b52] transition-colors hover:text-[#08715a]"
            >
              <span>{secondaryCta.label}</span>
              <span className="text-[18px] leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-[#00A14B]/25 bg-white/60 px-4 py-2 text-[13px] font-medium text-[#086453]"
              >
                <span className="grid h-5 w-5 place-items-center text-[#00A14B]">
                  {badge.icon}
                </span>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[1.05] w-full overflow-hidden rounded-[clamp(1.5rem,3vw,2.5rem)] bg-[#DFFBCB]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 900px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          {floatingCard && (
            <div className="absolute -bottom-5 left-5 right-5 min-[480px]:left-6 min-[480px]:right-auto min-[480px]:w-[min(280px,80%)]">
              {floatingCard}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
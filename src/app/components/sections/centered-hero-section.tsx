"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type RotatingTitle = {
  accent: string;
  rest: string;
};

type CenteredHeroSectionProps = {
  eyebrowIcon: ReactNode;
  eyebrowText: string;
  titles: RotatingTitle[];
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; external?: boolean };
};

const ROTATE_INTERVAL_MS = 6000;
const FADE_DURATION_MS = 700;

export default function CenteredHeroSection({
  eyebrowIcon,
  eyebrowText,
  titles,
  subtitle,
  primaryCta,
  secondaryCta,
}: CenteredHeroSectionProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (titles.length <= 1) return;

    const timer = window.setInterval(() => {
      if (reducedMotionRef.current) {
        setIndex((current) => (current + 1) % titles.length);
        return;
      }

      setVisible(false);

      window.setTimeout(() => {
        setIndex((current) => (current + 1) % titles.length);
        setVisible(true);
      }, FADE_DURATION_MS);
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [titles.length]);

  const current = titles[index];
  const fullSentence = titles.map((t) => `${t.accent} ${t.rest}`).join(" ");

  return (
    <section className="relative isolate overflow-hidden border-t-0 bg-transparent text-[#063f34] min-[900px]:border-t-4 min-[900px]:border-[#086453]">
      {/* Desktop background */}
      <Image
        src="/images/map%20background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 hidden object-fill min-[900px]:block"
      />

      {/* Mobile background */}
      <Image
        src="/images/map%20background%20mobile_110216.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 block object-fill min-[900px]:hidden"
      />

      {/* Light readable overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#f8ffeb]/15" />

      <div className="relative z-10 mx-auto flex w-full max-w-[860px] flex-col items-center px-5 pb-[clamp(3rem,6vw,4.5rem)] pt-[clamp(2.75rem,6vw,4.25rem)] text-center">
        {/* Vendor badge — exact styling from homepage hero */}
        <div className="flex h-[clamp(44px,5vw,52px)] items-center gap-[clamp(8px,1vw,12px)] rounded-full bg-[#fffef2] px-[clamp(16px,2vw,24px)] shadow-[0_12px_24px_rgba(7,39,32,0.13)]">
          <span className="grid h-[clamp(18px,2vw,24px)] w-[clamp(18px,2vw,24px)] place-items-center text-[#086453]">
            {eyebrowIcon}
          </span>

          <span className="whitespace-nowrap text-[clamp(12px,1.4vw,15px)] text-[#063f34]">
            {eyebrowText}
          </span>
        </div>

        {/* Main heading — rotates through options with a crossfade */}
        <div className="mt-[clamp(28px,4vw,42px)] flex min-h-[clamp(4.5rem,14vw,10.5rem)] items-center">
          <h1
            aria-label={fullSentence}
            className={`max-w-[20ch] text-[clamp(32px,7vw,78px)] font-semibold leading-[1.04] tracking-[-0.045em] text-[#086453] transition-all duration-700 ease-in-out motion-reduce:transition-none ${
              visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <span aria-hidden="true">
              <span className="text-[#00A14B]">{current.accent}</span>{" "}
              {current.rest}
            </span>
          </h1>
        </div>

        {/* Subtitle — same color/size scale as homepage hero */}
        <p className="mt-[clamp(14px,2vw,20px)] max-w-[52ch] text-[clamp(16px,1.8vw,22px)] leading-[1.45] text-[#063f34]">
          {subtitle}
        </p>

        <div className="mt-[clamp(28px,5vw,48px)] flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a
            href={primaryCta.href}
            className="group flex h-[clamp(52px,5vw,64px)] items-center gap-[clamp(12px,1.5vw,20px)] rounded-full px-[clamp(24px,3vw,32px)] text-[clamp(15px,1.6vw,19px)] text-white shadow-[0_14px_28px_rgba(0,161,75,0.27)] transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(90deg, #00A14B 0%, #086453 100%)",
            }}
          >
            <span>{primaryCta.label}</span>
            <span className="text-[clamp(20px,2.5vw,31px)] font-light leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href={secondaryCta.href}
            target={secondaryCta.external ? "_blank" : undefined}
            rel={secondaryCta.external ? "noopener noreferrer" : undefined}
            className="group flex h-[48px] items-center gap-2 rounded-full bg-[#dcffca] px-6 text-[15px] text-[#009b52] transition-all duration-300 hover:-translate-y-1 min-[640px]:h-[clamp(44px,4vw,52px)] min-[640px]:gap-[clamp(10px,1.5vw,16px)] min-[640px]:rounded-none min-[640px]:border-b-2 min-[640px]:border-[#08715a] min-[640px]:bg-transparent min-[640px]:px-0 min-[640px]:pb-[2px] min-[640px]:text-[clamp(15px,1.6vw,19px)] min-[640px]:hover:translate-y-0 min-[640px]:hover:text-[#08715a]"
          >
            <span>{secondaryCta.label}</span>
            <span className="text-[18px] leading-none transition-transform duration-300 group-hover:translate-x-1 min-[640px]:text-[clamp(18px,2vw,28px)]">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
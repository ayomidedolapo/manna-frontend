"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type HowItWorksStep = {
  icon: ReactNode;
  title: string;
  description: string;
};

type HowItWorksSectionProps = {
  eyebrow: string;
  title: string;
  steps: HowItWorksStep[];
  /**
   * "framed"  — wraps the icon in a bordered circle with a small number badge
   *             (default; simple outlined look).
   * "badge"   — renders the icon as-is, no wrapper or number badge
   *             (use for icons that already include their own circle/number,
   *             e.g. the B2B page's numbered step badges).
   * "colored" — wraps the icon in a filled brand-color circle (rotating
   *             through your dark-green shades) with a lime icon and a
   *             number badge — same color language as the B2B badges,
   *             built from line icons instead of images.
   */
  iconVariant?: "framed" | "badge" | "colored";
};

const CIRCLE_THEMES = ["#0B3A30", "#086453", "#00A14B", "#072720"];

function StepIcon({
  icon,
  index,
  iconVariant,
}: {
  icon: ReactNode;
  index: number;
  iconVariant: "framed" | "badge" | "colored";
}) {
  if (iconVariant === "badge") {
    return (
      <div className="h-[clamp(76px,9vw,104px)] w-[clamp(76px,9vw,104px)]">
        {icon}
      </div>
    );
  }

  if (iconVariant === "colored") {
    const bg = CIRCLE_THEMES[index % CIRCLE_THEMES.length];

    return (
      <div className="relative">
        <span
          className="grid h-14 w-14 place-items-center rounded-full text-[#E0EE29]"
          style={{ backgroundColor: bg }}
        >
          {icon}
        </span>
        <span className="absolute -right-1 -top-1 grid h-[19px] w-[19px] place-items-center rounded-full bg-[#E0EE29] text-[9px] font-semibold text-[#072720]">
          {index + 1}
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-[#00A14B] bg-[#FFFDED] text-[#00A14B]">
        {icon}
      </span>
      <span className="absolute -right-1 -top-1 grid h-[19px] w-[19px] place-items-center rounded-full bg-[#00A14B] text-[9px] font-semibold text-white">
        {index + 1}
      </span>
    </div>
  );
}

export default function HowItWorksSection({
  eyebrow,
  title,
  steps,
  iconVariant = "framed",
}: HowItWorksSectionProps) {
  const stepCount = steps.length;
  const lineInset = stepCount > 0 ? 100 / (stepCount * 2) : 0;

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const node = scrollerRef.current;
    if (!node) return;

    let frame = 0;

    const handleScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const slideWidth = node.clientWidth;
        if (slideWidth === 0) return;
        const nextIndex = Math.round(node.scrollLeft / slideWidth);
        setActiveSlide(Math.min(Math.max(nextIndex, 0), stepCount - 1));
      });
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      node.removeEventListener("scroll", handleScroll);
    };
  }, [stepCount]);

  const goToSlide = (index: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTo({ left: index * node.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[clamp(2rem,4vw,3.25rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="flex flex-col items-start justify-between gap-3 min-[900px]:flex-row min-[900px]:items-end">
          <div>
            <p className="text-[13px] font-medium text-[#086453]">{eyebrow}</p>
            <h2 className="mt-2 max-w-[26ch] text-[clamp(1.35rem,3.6vw,2.1rem)] font-medium leading-[1.2] tracking-[-0.03em] text-[#00A14B]">
              {title}
            </h2>
          </div>

          <p className="text-[13px] text-[#086453]/70">
            {String(stepCount).padStart(2, "0")} steps
          </p>
        </div>

        {/* Mobile: swipeable slider */}
        <div className="mt-8 min-[900px]:hidden">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="w-full shrink-0 snap-center px-1"
              >
                <div className="flex flex-col items-center rounded-[20px] bg-gradient-to-br from-[#FAFFD9] via-[#F6FFD5] to-[#EDFAC9] px-6 py-8 text-center">
                  <StepIcon icon={step.icon} index={index} iconVariant={iconVariant} />

                  <h3 className="mt-4 text-[16px] font-semibold leading-snug text-[#086453]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[30ch] text-[13.5px] leading-[1.5] text-[#072720]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide indicator dots */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to step ${index + 1}: ${step.title}`}
                aria-current={activeSlide === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? "w-6 bg-[#00A14B]"
                    : "w-2 bg-[#00A14B]/25"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: connected timeline grid */}
        <div className="relative mt-10 hidden min-[900px]:block">
          <div
            aria-hidden="true"
            className="absolute top-11 h-px bg-[#00A14B]/25"
            style={{ left: `${lineInset}%`, right: `${lineInset}%` }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="relative z-10">
                  <StepIcon icon={step.icon} index={index} iconVariant={iconVariant} />
                </div>

                <h3 className="mt-4 text-[15px] font-semibold leading-snug text-[#086453]">
                  {step.title}
                </h3>

                <p className="mt-1.5 max-w-[26ch] text-[13px] leading-[1.5] text-[#072720]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
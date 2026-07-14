"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export type ServiceCard = {
  title: string;
  description: string;
};

type ServicesSectionProps = {
  eyebrow: string;
  title: string;
  cards: ServiceCard[];
  closingIcon: ReactNode;
  closingBold: string;
  closingRest: string;
};

function Card({ card }: { card: ServiceCard }) {
  return (
    <div
      className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[26px] p-7"
      style={{
        background:
          "radial-gradient(120% 90% at 15% 10%, rgba(255,255,255,0.10) 0%, transparent 45%), radial-gradient(90% 70% at 85% 30%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(100% 80% at 60% 90%, rgba(0,0,0,0.12) 0%, transparent 55%), linear-gradient(160deg, #0B3A30 0%, #00893F 100%)",
      }}
    >
      <h3 className="max-w-[15ch] text-[clamp(1.15rem,2.2vw,1.4rem)] font-semibold leading-[1.25] text-white">
        {card.title}
      </h3>

      <p className="text-[13.5px] leading-[1.6] text-white/80">
        {card.description}
      </p>
    </div>
  );
}

export default function ServicesSection({
  eyebrow,
  title,
  cards,
  closingIcon,
  closingBold,
  closingRest,
}: ServicesSectionProps) {
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
        setActiveSlide(Math.min(Math.max(nextIndex, 0), cards.length - 1));
      });
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      node.removeEventListener("scroll", handleScroll);
    };
  }, [cards.length]);

  const goToSlide = (index: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollTo({ left: index * node.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-[clamp(2.5rem,5vw,4.5rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="text-center">
          <p className="text-[13px] font-medium text-[#086453]">{eyebrow}</p>

          <h2 className="mx-auto mt-2 max-w-[24ch] text-[clamp(1.5rem,4vw,2.4rem)] font-bold leading-[1.2] tracking-[-0.03em] text-[#00A14B]">
            {title}
          </h2>
        </div>

        {/* Mobile: swipeable slider */}
        <div className="mt-10 min-[900px]:hidden">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-0 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card) => (
              <div key={card.title} className="w-full shrink-0 snap-center px-1">
                <Card card={card} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {cards.map((card, index) => (
              <button
                key={card.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to card ${index + 1}: ${card.title}`}
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

        {/* Desktop: static grid */}
        <div className="mt-10 hidden gap-6 min-[900px]:grid min-[900px]:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center text-center">
          <span className="grid h-8 w-8 place-items-center text-[#7FBFAE]">
            {closingIcon}
          </span>

          <p className="mt-3 max-w-[46ch] text-[clamp(0.95rem,1.8vw,1.15rem)] leading-[1.5]">
            <span className="font-semibold text-[#0B3A30]">
              {closingBold}
            </span>
            <span className="text-[#6b7a74]">{closingRest}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
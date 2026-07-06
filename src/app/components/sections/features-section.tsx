"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const features = [
  {
    title: (
      <>
        <span className="italic">Search</span> is instant.
      </>
    ),
    description:
      "Find what you need fast with smart search, clear results, and easy filters.",
    image: "/images/search.png",
    alt: "Manna grocery search screen",
  },
  {
    title: (
      <>
        <span className="italic">Cart</span> tells you the truth.
      </>
    ),
    description:
      "See everything at a glance, adjust items, and get ready to check out in seconds.",
    image: "/images/cart.png",
    alt: "Manna grocery cart screen",
  },
  {
    title: (
      <>
        <span className="italic">One checkout</span> for the house.
      </>
    ),
    description:
      "Review items, confirm details, and pay securely — all in a smooth, distraction-free flow.",
    image: "/images/Checkout M_023725.png",
    alt: "Manna secure checkout screen",
  },
  {
    title: (
      <>
        <span className="italic">Your space</span>, your control
      </>
    ),
    description:
      "Manage details, track orders, save favorites, and update preferences — all in one simple, secure place.",
    image: "/images/accounts.png",
    alt: "Manna account settings screen",
  },
];

export default function FeaturesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const updateActiveFeature = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const slides = Array.from(carousel.children) as HTMLElement[];
    const carouselCenter = carousel.scrollLeft + carousel.clientWidth / 2;

    let closestSlide = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(carouselCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestSlide = index;
      }
    });

    setActiveFeature(closestSlide);
  };

  const goToFeature = (index: number) => {
    const carousel = carouselRef.current;
    const slide = carousel?.children[index] as HTMLElement | undefined;

    if (!carousel || !slide) return;

    carousel.scrollTo({
      left: slide.offsetLeft - (carousel.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });

    setActiveFeature(index);
  };

  return (
    <section id="features" className="bg-transparent">
      <div className="mx-auto w-full max-w-[1600px] pb-[clamp(2rem,4vw,4rem)] pt-[clamp(2.25rem,4.8vw,5rem)] min-[640px]:px-[26px]">
        <div className="px-[14px] text-center min-[640px]:px-0">
          <p className="text-[clamp(0.6875rem,2.8vw,0.8125rem)] font-medium text-[#086453] min-[640px]:text-[clamp(0.625rem,1.25vw,1rem)]">
            Features
          </p>

          <h2 className="mt-2 text-[clamp(1.25rem,5vw,1.625rem)] font-medium leading-[1.15] tracking-[-0.035em] text-[#00A14B] min-[640px]:mt-[clamp(1rem,2vw,2rem)] min-[640px]:text-[clamp(1.4375rem,3vw,3rem)]">
            Smart features designed for your grocery needs!
          </h2>
        </div>

        <div className="mt-9 min-[640px]:mt-[clamp(3.25rem,6.8vw,7rem)]">
          <div
            ref={carouselRef}
            onScroll={updateActiveFeature}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-[6vw] scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[640px]:grid min-[640px]:grid-cols-4 min-[640px]:gap-[14px] min-[640px]:overflow-visible min-[640px]:px-0"
          >
            {features.map((feature, index) => (
              <article
                key={feature.alt}
                className="relative flex aspect-[0.475] w-[88vw] max-w-[340px] shrink-0 snap-center flex-col overflow-hidden rounded-[22px] bg-gradient-to-br from-[#FAFFD9] via-[#F6FFD5] to-[#EDFAC9] px-[clamp(1.75rem,7vw,2.25rem)] pb-[18px] pt-[clamp(2.15rem,9vw,3.15rem)] min-[640px]:aspect-[0.445] min-[640px]:w-auto min-[640px]:max-w-none min-[640px]:shrink min-[640px]:rounded-[clamp(1.25rem,2.7vw,2.5rem)] min-[640px]:px-[clamp(1.25rem,2.6vw,2.5rem)] min-[640px]:pb-[clamp(0.75rem,1.6vw,1.25rem)] min-[640px]:pt-[clamp(2.2rem,4.5vw,4.5rem)]"
              >
                <div className="relative z-10 shrink-0">
                  <h3
                    className={`max-w-[15ch] text-[clamp(0.9375rem,4.2vw,1.125rem)] font-semibold leading-[1.35] tracking-[-0.025em] text-[#00A14B] min-[640px]:max-w-[12ch] min-[640px]:text-[clamp(0.6875rem,1.4vw,1.4rem)] min-[640px]:leading-[1.45] ${
                      index === 0
                        ? "whitespace-nowrap min-[640px]:whitespace-normal"
                        : ""
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-[28ch] text-[clamp(0.6875rem,3vw,0.8125rem)] leading-[1.55] tracking-[-0.02em] text-[#072720] min-[640px]:mt-[clamp(0.625rem,1.3vw,1.25rem)] min-[640px]:max-w-[25ch] min-[640px]:text-[clamp(0.5rem,1vw,0.9rem)] min-[640px]:leading-[1.6]">
                    {feature.description}
                  </p>
                </div>

                <div className="relative mt-3 min-h-0 flex-1">
                  <div className="relative mx-auto h-full w-[96%] min-[640px]:w-[92%]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      unoptimized
                      loading="eager"
                      sizes="(min-width: 640px) 19vw, 88vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[15px] flex items-center justify-center gap-[4px] min-[640px]:hidden">
            {features.map((feature, index) => {
              const isActive = activeFeature === index;

              return (
                <button
                  key={feature.alt}
                  type="button"
                  aria-label={`Show feature ${index + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goToFeature(index)}
                  className={`h-[4px] rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-[26px] bg-[#00A14B]"
                      : "w-[17px] bg-[#D9F6D7]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
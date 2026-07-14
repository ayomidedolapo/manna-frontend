"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type TeamMember = {
  name: string;
  role: string;
  photo: string;
};

type TeamSectionProps = {
  eyebrow: string;
  title: string;
  members: TeamMember[];
};

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div>
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[20px] bg-gradient-to-b from-[#9aa39c] to-[#c9cdc4]">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes="(min-width: 720px) 30vw, 90vw"
          className="object-contain object-bottom"
        />
      </div>

      <p className="mt-4 text-[16px] font-semibold text-[#086453]">
        {member.name}
      </p>

      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-[#00A14B]">
        {member.role}
      </p>
    </div>
  );
}

export default function TeamSection({
  eyebrow,
  title,
  members,
}: TeamSectionProps) {
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
        setActiveSlide(Math.min(Math.max(nextIndex, 0), members.length - 1));
      });
    };

    node.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      node.removeEventListener("scroll", handleScroll);
    };
  }, [members.length]);

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
            {members.map((member) => (
              <div key={member.name} className="w-full shrink-0 snap-center px-1">
                <MemberCard member={member} />
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {members.map((member, index) => (
              <button
                key={member.name}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${member.name}`}
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
          {members.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
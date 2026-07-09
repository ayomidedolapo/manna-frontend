import Image from "next/image";

export type AudienceSegment = {
  image: string;
  label: string;
};

type AudienceSegmentsSectionProps = {
  eyebrow: string;
  title: string;
  segments: AudienceSegment[];
};

export default function AudienceSegmentsSection({
  eyebrow,
  title,
  segments,
}: AudienceSegmentsSectionProps) {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[clamp(2rem,4vw,3.25rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="text-center">
          <p className="text-[13px] font-medium text-[#086453]">{eyebrow}</p>

          <h2 className="mx-auto mt-2 max-w-[22ch] text-[clamp(1.4rem,3.8vw,2.3rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#00A14B]">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 min-[560px]:grid-cols-2 min-[1080px]:grid-cols-4">
          {segments.map((segment) => (
            <div
              key={segment.label}
              className="group relative rounded-[24px] bg-gradient-to-b from-white/80 to-[#DFFBCB]/40 p-3 shadow-[0_4px_16px_rgba(7,39,32,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_32px_rgba(7,39,32,0.14)]"
            >
              <div className="relative aspect-[1.38] w-full overflow-hidden rounded-[18px]">
                <Image
                  src={segment.image}
                  alt={segment.label}
                  fill
                  sizes="(min-width: 1080px) 22vw, (min-width: 560px) 45vw, 90vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
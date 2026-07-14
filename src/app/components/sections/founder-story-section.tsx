import Image from "next/image";

type FounderStorySectionProps = {
  title: string;
  paragraphs: string[];
  founderName: string;
  founderRole: string;
  founderPhoto: string;
};

export default function FounderStorySection({
  title,
  paragraphs,
  founderName,
  founderRole,
  founderPhoto,
}: FounderStorySectionProps) {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-[clamp(2.5rem,5vw,4.5rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="grid grid-cols-1 gap-8 min-[820px]:grid-cols-2 min-[820px]:gap-14">
          {/* Heading — first on mobile, top-right on desktop */}
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-bold uppercase tracking-wide text-[#00A14B] min-[820px]:col-start-2 min-[820px]:row-start-1">
            {title}
          </h2>

          {/* Photo — second on mobile, left column (full height) on desktop */}
          <div className="min-[820px]:col-start-1 min-[820px]:row-start-1 min-[820px]:row-span-2">
            <div className="relative aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[20px] bg-gradient-to-b from-[#9aa39c] to-[#c9cdc4]">
              <Image
                src={founderPhoto}
                alt={founderName}
                fill
                sizes="(min-width: 820px) 30vw, 90vw"
                className="object-contain object-bottom"
              />
            </div>

            <p className="mt-4 text-[16px] font-semibold text-[#086453]">
              {founderName}
            </p>

            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-[#00A14B]">
              {founderRole}
            </p>
          </div>

          {/* Paragraphs — third on mobile, bottom-right on desktop */}
          <div className="space-y-4 min-[820px]:col-start-2 min-[820px]:row-start-2">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[14.5px] leading-[1.65] text-[#1f2933]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
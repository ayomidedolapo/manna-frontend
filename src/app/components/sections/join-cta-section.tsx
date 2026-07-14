type JoinCtaSectionProps = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta: { label: string; href: string };
};

export default function JoinCtaSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: JoinCtaSectionProps) {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[clamp(1.5rem,3vw,2.5rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div
          className="relative overflow-hidden rounded-[28px] px-6 py-[clamp(2.5rem,5vw,4rem)] text-center"
          style={{
            background:
              "radial-gradient(120% 90% at 10% 0%, rgba(255,255,255,0.10) 0%, transparent 45%), radial-gradient(90% 70% at 90% 20%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(100% 80% at 50% 100%, rgba(0,0,0,0.14) 0%, transparent 55%), linear-gradient(120deg, #0B3A30 0%, #00893F 100%)",
          }}
        >
          <h2 className="mx-auto max-w-[26ch] text-[clamp(1.4rem,3.6vw,2.2rem)] font-bold leading-[1.25] text-white">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-[52ch] text-[clamp(0.85rem,1.6vw,1rem)] leading-[1.5] text-white/85">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={primaryCta.href}
              target={primaryCta.external ? "_blank" : undefined}
              rel={primaryCta.external ? "noopener noreferrer" : undefined}
              className="flex h-[50px] items-center gap-2 rounded-full bg-[#FFFDED] px-6 text-[14px] font-medium text-[#0B3A30] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span>{primaryCta.label}</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={secondaryCta.href}
              className="flex h-[50px] items-center rounded-full border border-white/60 px-6 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
            >
              {secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export type PricingColumn = {
  title: string;
  items: string[];
};

type PricingSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  columns: [PricingColumn, PricingColumn];
  note: string;
};

export default function PricingSection({
  eyebrow,
  title,
  description,
  columns,
  note,
}: PricingSectionProps) {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-[clamp(2rem,4vw,3.25rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="text-center">
          <p className="text-[13px] font-medium text-[#086453]">{eyebrow}</p>

          <h2 className="mx-auto mt-3 max-w-[24ch] text-[clamp(1.4rem,4vw,2.4rem)] font-medium leading-[1.2] tracking-[-0.03em] text-[#00A14B]">
            {title}
          </h2>

          <p className="mx-auto mt-4 max-w-[52ch] text-[14.5px] leading-[1.6] text-[#072720]">
            {description}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-[#00A14B]/20">
          <div className="grid min-[720px]:grid-cols-2">
            {columns.map((column, index) => (
              <div
                key={column.title}
                className={`p-7 ${
                  index === 0
                    ? "bg-white/70"
                    : "bg-gradient-to-br from-[#00A14B] to-[#086453] text-white"
                }`}
              >
                <h3
                  className={`text-[16px] font-semibold ${
                    index === 0 ? "text-[#086453]" : "text-white"
                  }`}
                >
                  {column.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13.5px] leading-[1.5]">
                      <span
                        className={`mt-[3px] grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] ${
                          index === 0
                            ? "bg-[#DFFBCB] text-[#086453]"
                            : "bg-white/20 text-white"
                        }`}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span className={index === 0 ? "text-[#072720]" : "text-white/90"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[54ch] text-center text-[13px] leading-[1.6] text-[#086453]">
          {note}
        </p>
      </div>
    </section>
  );
}
import Image from "next/image";

const countdownItems = [
  { value: "004", label: "Months" },
  { value: "016", label: "Weeks" },
  { value: "120", label: "Days" },
];

export default function DiscountSection() {
  return (
    <section
      id="discount"
      aria-label="Limited-time grocery discount"
      className="hidden overflow-hidden bg-transparent min-[640px]:block"
    >
      <div className="w-full px-[clamp(1.25rem,3.4vw,3.5rem)] pb-[clamp(1.25rem,2.8vw,3rem)] pt-0">
        <div className="grid grid-cols-[1fr_2.06fr_1fr] items-start gap-[clamp(0.75rem,1.45vw,1.5rem)]">
          <div className="relative aspect-[0.313] overflow-hidden rounded-[clamp(0.75rem,1.35vw,1.25rem)]">
            <Image
              src="/images/9c1e21677716b5d8c9d8424e1fc41488076c7ce0 (1).jpg"
              alt="Manna customer shopping for groceries"
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
          </div>

          <div className="relative aspect-[0.645] overflow-hidden rounded-[clamp(1.25rem,2.7vw,2.5rem)] bg-[#DFFBCB]">
            <Image
              src="/images/00f6582fec1c26394bd9471f0ceea02903f75006.jpg"
              alt=""
              fill
              sizes="50vw"
              className="object-cover object-center opacity-[0.4] mix-blend-multiply"
            />

            <div className="absolute inset-0 bg-[#DFFBCB]/70" />

            <Image
              src="/images/431f4d7e0980e07b0c0d702fa59b665d20767c3e.png"
              alt=""
              width={720}
              height={720}
              className="pointer-events-none absolute bottom-[-11%] right-[-6%] z-[1] w-[52%] max-w-none"
            />

            <div className="relative z-10 flex h-full flex-col items-center justify-end px-[8%] pb-[65%] text-center">
              <h2 className="text-[clamp(1.5rem,3.8vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.04em]">
  <span className="text-[#072720]">Faster</span>{" "}
  <span className="text-[#086453]">Discount</span>
</h2>

              <p className="mt-[clamp(0.35rem,0.8vw,0.75rem)] text-[clamp(0.625rem,1.35vw,1rem)] leading-[1.45] text-[#086453]">
                Get 50% Off - Limited Time Offer
              </p>

              <div className="mt-[clamp(2rem,5vw,4rem)] flex items-start justify-center gap-[clamp(0.45rem,1vw,0.9rem)]">
                {countdownItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-[clamp(0.45rem,1vw,0.9rem)]"
                  >
                    <div>
                      <p className="text-[clamp(2rem,4.4vw,4rem)] font-medium leading-none tracking-[-0.045em] text-[#072720]">
                        {item.value}
                      </p>

                      <p className="mt-[clamp(0.45rem,0.8vw,0.75rem)] text-[clamp(0.5rem,0.9vw,0.75rem)] leading-none text-[#072720]">
                        {item.label}
                      </p>
                    </div>

                    {index < countdownItems.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-[0.05em] text-[clamp(1.6rem,3.6vw,3.2rem)] font-medium leading-none text-[#072720]"
                      >
                        :
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="#products"
                className="mt-[clamp(1.9rem,4.8vw,4.25rem)] flex h-[clamp(2.4rem,4.8vw,4.2rem)] w-[73%] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] px-6 text-[clamp(1rem,1.8vw,1.4rem)] font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
              >
                Shop now
                <span
                  className="ml-[clamp(0.5rem,1vw,0.9rem)] text-[1.15em]"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="relative aspect-[0.313] overflow-hidden rounded-[clamp(0.75rem,1.35vw,1.25rem)]">
            <Image
              src="/images/image right (1).png"
              alt="Manna customer carrying fresh groceries"
              fill
              sizes="25vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
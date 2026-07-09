import Image from "next/image";

export default function DeliverySection() {
  return (
    <section id="delivery" className="overflow-hidden bg-transparent">
      <div className="mx-auto w-full max-w-[1720px] px-5 pb-0 pt-10 min-[640px]:grid min-[640px]:grid-cols-[0.72fr_1.28fr] min-[640px]:items-center min-[640px]:gap-[clamp(3rem,7vw,9rem)] min-[640px]:px-[clamp(2.5rem,7vw,9rem)] min-[640px]:py-[clamp(3rem,7vw,7rem)]">
        <div className="text-center">
          <h2 className="font-medium leading-[1.2] tracking-[-0.04em] text-[#00A14B]">
            <span className="text-[clamp(1.25rem,5.4vw,1.7rem)] min-[640px]:hidden">
              Get Your Groceries Delivered!
            </span>

            <span className="hidden text-[clamp(2rem,3.2vw,4rem)] min-[640px]:block">
              Get Your
              <br />
              Groceries
              <br />
              Delivered!
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[330px] text-[clamp(0.78rem,3.2vw,0.95rem)] leading-[1.5] tracking-[-0.02em] text-[#072720] min-[640px]:mt-6 min-[640px]:max-w-[300px] min-[640px]:text-[clamp(0.9rem,1.25vw,1.3rem)]">
            Staples like rice, oil, and veggies—order now and get delivery in
            minutes. We’ve got you in Lagos.
          </p>

          <a
            href="#products"
            className="mx-auto mt-7 flex h-[3.2rem] w-full max-w-[340px] items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] px-8 text-[1rem] font-medium text-white transition-transform duration-300 hover:scale-[1.02] min-[640px]:mt-14 min-[640px]:h-[4.1rem] min-[640px]:w-[19rem] min-[640px]:max-w-none min-[640px]:text-[clamp(1rem,1.2vw,1.3rem)]"
          >
            <span>Shop now</span>

            <span
              className="ml-3 hidden text-[1.35em] leading-none min-[640px]:inline"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        <div className="relative mt-12 aspect-[1.07] w-full overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#F8FFD5_0%,#EEF9C8_100%)] min-[640px]:mt-0 min-[640px]:aspect-[1.04] min-[640px]:justify-self-end min-[640px]:rounded-[clamp(2rem,3vw,3.5rem)]">
          <Image
            src="/images/phone mockup (5).png"
            alt="Manna grocery delivery phone screens"
            fill
            priority
            sizes="(min-width: 640px) 62vw, 100vw"
            className="scale-[1.6] object-contain pl-10 object-center min-[720px]:scale-[1.60]"
          />
        </div>
      </div>
    </section>
  );
}
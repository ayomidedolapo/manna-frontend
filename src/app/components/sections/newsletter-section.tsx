"use client";

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="overflow-hidden bg-transparent">
      <div className="mx-auto w-full max-w-[1600px] px-[14px] pb-[62px] pt-[34px] min-[640px]:px-[35px] min-[640px]:pb-[clamp(3.5rem,6vw,6rem)] min-[640px]:pt-[clamp(4.5rem,7vw,7rem)]">
        <div className="mx-auto text-center">
          <p className="text-[clamp(0.75rem,3.2vw,0.95rem)] font-medium text-[#086453] min-[640px]:text-[clamp(0.75rem,1.15vw,1rem)]">
            Newsletter
          </p>

          <h2 className="mx-auto mt-5 max-w-[20ch] text-[clamp(1.3rem,5.4vw,1.7rem)] font-medium leading-[1.35] tracking-[-0.035em] text-[#00A14B] min-[640px]:mt-4 min-[640px]:max-w-none min-[640px]:text-[clamp(1.7rem,3vw,3rem)] min-[640px]:leading-[1.2]">
            Stay Fresh with Manna: Our Newsletter
          </h2>

          <p className="mx-auto mt-8 max-w-[44ch] text-[clamp(0.875rem,3.4vw,1.05rem)] leading-[1.42] tracking-[-0.025em] text-[#086453] min-[640px]:mt-7 min-[640px]:max-w-[900px] min-[640px]:text-[clamp(0.75rem,1.1vw,1rem)] min-[640px]:leading-[1.45]">
            Subscribe to our newsletter for fresh deals, recipes, and farm
            updates straight to your inbox!
            <br className="hidden min-[640px]:block" /> No spam, just the good
            stuff.
          </p>
        </div>

        <form
          className="relative mx-auto mt-[clamp(2.5rem,9vw,4rem)] h-[64px] w-full max-w-[578px] rounded-full bg-[#DFFBCB] min-[640px]:mt-[clamp(2rem,3vw,2.9rem)] min-[640px]:h-[clamp(3.75rem,5vw,4.25rem)] min-[640px]:max-w-none"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter Email Address"
            className="h-full  w-full rounded-full bg-transparent pl-5 pr-36 text-[clamp(0.75rem,3.2vw,0.9rem)] font-normal tracking-[-0.025em] text-[#072720] outline-none placeholder:text-[#7E9B8B] min-[640px]:pl-[clamp(1.25rem,2vw,2rem)] min-[640px]:pr-[clamp(9.5rem,15vw,12.5rem)] min-[640px]:text-[clamp(0.8rem,1.25vw,1.15rem)]"
          />

          <button
            type="submit"
            className="absolute right-2 top-1/2 flex h-[48px] w-[126px] -translate-y-1/2 items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[0.875rem] font-medium text-white transition-transform duration-300 hover:scale-[1.02] min-[640px]:right-[clamp(0.55rem,1vw,0.9rem)] min-[640px]:h-[clamp(2.7rem,4vw,3.3rem)] min-[640px]:w-[clamp(8.2rem,12vw,10.5rem)] min-[640px]:text-[clamp(0.75rem,1.1vw,1rem)]"
          >
            Subscribe
            <span
              className="ml-2 hidden text-[1.15em] leading-none min-[640px]:inline"
              aria-hidden="true"
            >
              ↗
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
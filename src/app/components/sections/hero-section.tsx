"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ASSETS = {
  marketKiosk: "/icons/streamline-ultimate-color_farmers-market-kiosk-1.png",
  clock: "/icons/iconamoon_clock-light.png",
  happyCustomers: "/icons/pics.png",
  star: "/icons/emojione_star.png",
  cardPayment: "/icons/Vector%20(1).png",
  transferPayment:
    "/icons/streamline-ultimate_cash-payment-bill-bold.png",
  phoneMockup: "/images/phone%20mockup (4).png",
  pepper: "/landing/pic.png",
  delete: "/icons/fluent_delete-16-regular.png",
  edit: "/icons/tabler_edit.png",
  desktopMap: "/images/map%20background.png",
  mobileMap: "/images/map%20background%20mobile_110216.png",
};

const rotatingWords = ["Fingertips.", "Destination.", "Convenience."] as const;

type TypingWordProps = {
  value: string;
  className?: string;
};

function TypingWord({ value, className = "" }: TypingWordProps) {
  return (
    <span
      className={`inline-flex justify-start whitespace-nowrap text-left text-[#00a14b] ${className}`}
    >
      {value}

      <span
        aria-hidden="true"
        className="manna-type-cursor ml-[2px] inline-block h-[0.82em] w-[2px] translate-y-[0.08em] bg-[#00a14b]"
      />
    </span>
  );
}

type PaymentCardProps = {
  icon: string;
  title: string;
  description: string;
  active?: boolean;
  className?: string;
};

function PaymentCard({
  icon,
  title,
  description,
  active = false,
  className = "",
}: PaymentCardProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-[20px] bg-[#fffef2]/95 px-4 text-left shadow-[0_12px_24px_rgba(7,39,32,0.10)] ${
        active
          ? "border border-[#00a14b] shadow-[0_14px_28px_rgba(0,161,75,0.16)]"
          : "border border-[#d9dfcb]"
      } ${className}`}
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[#eaffda]">
        <Image
          src={icon}
          alt=""
          width={21}
          height={21}
          className="h-[21px] w-[21px] object-contain"
        />
      </span>

      <span className="min-w-0">
        <span className="block text-[12px] leading-4 text-[#063f34]">
          {title}
        </span>

        <span className="block text-[9px] leading-[13px] text-[#7e877d]">
          {description}
        </span>
      </span>
    </div>
  );
}

function PepperCart() {
  return (
    <div className="relative h-[110px] w-[270px] rounded-[21px] border border-[#00a14b] bg-[#fffef2]/95 p-4 shadow-[0_14px_28px_rgba(7,39,32,0.10)]">
      <Image
        src={ASSETS.pepper}
        alt="Fresh pepper"
        width={62}
        height={62}
        className="absolute left-4 top-[22px] h-[62px] w-[62px] rounded-[12px] object-cover"
      />

      <div className="ml-[74px] pr-8">
        <p className="text-[13px] leading-5 text-[#075e4b]">Pepper</p>

        <p className="text-[9px] leading-4 text-[#075e4b]">
          Size: Half basket
        </p>

        <p className="mt-1 text-[13px] text-[#00a14b]">₦1600</p>
      </div>

      <Image
        src={ASSETS.delete}
        alt=""
        width={15}
        height={15}
        className="absolute right-4 top-3 h-[15px] w-[15px] object-contain"
      />

      <Image
        src={ASSETS.edit}
        alt=""
        width={15}
        height={15}
        className="absolute right-4 top-[46px] h-[15px] w-[15px] object-contain"
      />

      <div className="absolute bottom-3 right-4 flex h-[20px] items-center rounded-full bg-[#e8efdd] px-2">
        <span className="grid h-4 w-4 place-items-center text-[12px] text-[#526054]">
          −
        </span>

        <span className="min-w-5 text-center text-[9px] text-[#0b473b]">
          2
        </span>

        <span className="grid h-4 w-4 place-items-center text-[12px] text-[#526054]">
          +
        </span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeWord = rotatingWords[wordIndex];
  const visibleWord = activeWord.slice(0, characterIndex);

  useEffect(() => {
    const wordComplete = characterIndex === activeWord.length;
    const wordEmpty = characterIndex === 0;

    const delay = isDeleting ? 45 : wordComplete ? 1450 : 85;

    const timer = window.setTimeout(() => {
      if (!isDeleting && wordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && wordEmpty) {
        setWordIndex((current) => (current + 1) % rotatingWords.length);
        setIsDeleting(false);
        return;
      }

      setCharacterIndex((current) =>
        isDeleting ? Math.max(0, current - 1) : current + 1,
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [activeWord, characterIndex, isDeleting]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-t-0 bg-transparent text-[#063f34] min-[900px]:border-t-4 min-[900px]:border-[#086453]"
    >
      {/* Desktop background */}
      <Image
        src={ASSETS.desktopMap}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 hidden object-fill opacity-100 min-[900px]:block"
      />

      {/* Mobile background */}
      <Image
        src={ASSETS.mobileMap}
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 z-0 block object-fill opacity-100 min-[900px]:hidden"
      />

      {/* Light readable overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#f8ffeb]/15" />

      {/* Desktop Hero */}
      <div
        className="relative z-10 hidden w-full min-[900px]:block"
        style={{
          height: "clamp(740px, 48vw, 865px)",
        }}
      >
        {/* Vendor badge */}
        <div
          className="absolute left-1/2 flex h-[52px] -translate-x-1/2 items-center gap-3 rounded-full bg-[#fffef2] px-6 shadow-[0_12px_24px_rgba(7,39,32,0.13)]"
          style={{
            top: "clamp(50px, 4vw, 66px)",
          }}
        >
          <Image
            src={ASSETS.marketKiosk}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />

          <span className="whitespace-nowrap text-[15px] text-[#063f34]">
            Your no. 1 reliable grocery vendor
          </span>
        </div>

        {/* Main heading */}
        <h1
          aria-label={`The Market at your ${activeWord}`}
          className="absolute left-[calc(50%+38px)] w-full -translate-x-1/2 px-6 text-center text-[clamp(56px,5vw,78px)] font-semibold leading-[1.04] tracking-[-0.045em] text-[#08715a]"
          style={{
            top: "clamp(122px, 10vw, 148px)",
          }}
        >
          The Market at your{" "}
          <TypingWord value={visibleWord} className="min-w-[11.5ch]" />
        </h1>

        {/* Subtitle */}
        <p
          className="absolute left-1/2 w-full -translate-x-1/2 px-6 text-center text-[clamp(18px,1.35vw,22px)] text-[#063f34]"
          style={{
            top: "clamp(224px, 17vw, 246px)",
          }}
        >
          Get the best quality produce delivered straight to your doorstep!
        </p>

        {/* Main actions */}
        <div
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-8"
          style={{
            top: "clamp(282px, 21vw, 320px)",
          }}
        >
          <a
            href="#shop"
            className="group flex h-[64px] items-center gap-5 rounded-full px-8 text-[19px] text-white shadow-[0_14px_28px_rgba(0,161,75,0.27)] transition-transform duration-300 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(90deg, #00A14B 0%, #086453 100%)",
            }}
          >
            <span>Shop now</span>

            <span className="text-[31px] font-light leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#shop"
            className="group flex h-[52px] items-center gap-4 border-b-2 border-[#08715a] pb-[2px] text-[19px] text-[#009b52] transition-colors hover:text-[#08715a]"
          >
            <span>View available products</span>

            <span className="text-[28px] leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Delivery badge */}
        <div
          className="absolute right-[clamp(34px,4vw,88px)] flex h-[44px] items-center gap-2 rounded-full bg-[#009b52] px-4 text-white shadow-[0_8px_16px_rgba(0,161,75,0.20)]"
          style={{
            top: "clamp(118px, 11vw, 146px)",
          }}
        >
          <Image
            src={ASSETS.clock}
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] object-contain brightness-0 invert"
          />

          <span className="leading-[11px]">
            <span className="block text-[10px]">Delivery</span>
            <span className="block text-[8px]">30 Minutes</span>
          </span>
        </div>

        {/* Happy customers */}
        <div
          className="absolute left-[clamp(38px,5vw,110px)] h-[90px] w-[184px] rounded-[22px] bg-[#fffef2]/95 px-4 pt-3 shadow-[0_13px_26px_rgba(7,39,32,0.12)]"
          style={{
            top: "clamp(238px, 24vw, 278px)",
          }}
        >
          <Image
            src={ASSETS.happyCustomers}
            alt="Happy Manna customers"
            width={80}
            height={24}
            className="mx-auto h-[24px] w-[80px] object-contain"
          />

          <p className="mt-1 text-center text-[11px] leading-4 text-[#063f34]">
            Our Happy Customers
          </p>

          <div className="mt-1 flex items-center justify-center gap-1">
            <Image
              src={ASSETS.star}
              alt=""
              width={11}
              height={11}
              className="h-[11px] w-[11px]"
            />

            <span className="text-[9px] text-[#405148]">
              4.8 (1.5k Reviews)
            </span>
          </div>
        </div>

        {/* Payments */}
        <div
          className="absolute left-[clamp(38px,5vw,110px)] flex w-[300px] flex-col items-center gap-3"
          style={{
            top: "clamp(430px, 48vw, 500px)",
          }}
        >
          <PaymentCard
            active
            icon={ASSETS.cardPayment}
            title="Pay using card"
            description="Complete the payment using credit or debit card"
            className="h-[72px] w-[300px]"
          />

          <PaymentCard
            icon={ASSETS.transferPayment}
            title="Secure bank transfer"
            description="Complete payment securely from your bank"
            className="h-[68px] w-[218px]"
          />

          <div className="flex h-[20px] items-center rounded-full bg-[#dfe7d5] px-3">
            <span className="grid h-4 w-4 place-items-center text-[12px] text-[#60715f]">
              −
            </span>

            <span className="min-w-5 text-center text-[9px] text-[#526054]">
              3
            </span>

            <span className="grid h-4 w-4 place-items-center text-[12px] text-[#60715f]">
              +
            </span>
          </div>
        </div>

        {/* Phone mockup */}
        <div
          className="absolute left-1/2 w-[min(52vw,800px)] -translate-x-1/2"
          style={{
            top: "clamp(382px, 30vw, 442px)",
          }}
        >
          <Image
            src={ASSETS.phoneMockup}
            alt="Manna mobile grocery shopping app"
            width={1000}
            height={2000}
            priority
            className="h-auto w-full drop-shadow-[-32px_18px_20px_rgba(7,39,32,0.32)]"
          />
        </div>

        {/* Pepper order */}
        <div
          className="absolute right-[clamp(38px,5vw,110px)]"
          style={{
            top: "clamp(470px, 52vw, 545px)",
          }}
        >
          <PepperCart />
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="relative z-10 flex min-h-[630px] flex-col items-center px-5 pb-16 pt-[51px] text-center min-[900px]:hidden">
        <div className="flex h-[44px] items-center gap-2 rounded-full bg-[#fffef2]/95 px-4 shadow-[0_8px_17px_rgba(7,39,32,0.10)]">
          <Image
            src={ASSETS.marketKiosk}
            alt=""
            width={18}
            height={18}
            className="h-[18px] w-[18px] object-contain"
          />

          <span className="text-[12px] text-[#063f34]">
            Your no. 1 reliable grocery vendor
          </span>
        </div>

        <h1
          aria-label={`The Market at your ${activeWord}`}
          className="mt-[42px] max-w-[330px] text-[32px] font-semibold leading-[1.13] tracking-[-0.04em] text-[#08715a] min-[390px]:text-[36px]"
        >
          The Market at
          <br />
          your{" "}
          <TypingWord value={visibleWord} className="min-w-[10.5ch]" />
        </h1>

        <p className="mt-4 max-w-[315px] text-[16px] leading-[23px] text-[#063f34]">
          Get the best quality produce delivered straight to your doorstep!
        </p>

        <div className="mt-[128px] flex w-full max-w-[310px] flex-col items-center gap-[15px]">
          <a
            href="#shop"
            className="flex h-[54px] w-full items-center justify-center rounded-full text-[16px] text-white shadow-[0_12px_24px_rgba(0,161,75,0.22)] transition-transform duration-300 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(90deg, #00A14B 0%, #086453 100%)",
            }}
          >
            Shop now
          </a>

          <a
            href="#shop"
            className="flex h-[54px] w-full items-center justify-center rounded-full bg-[#dcffca] text-[16px] text-[#009b52] transition-transform duration-300 hover:-translate-y-1"
          >
            View available products
          </a>
        </div>
      </div>

      <style jsx global>{`
        @keyframes mannaTypeCursor {
          0%,
          48% {
            opacity: 1;
          }

          49%,
          100% {
            opacity: 0;
          }
        }

        .manna-type-cursor {
          animation: mannaTypeCursor 820ms steps(1, end) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .manna-type-cursor {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
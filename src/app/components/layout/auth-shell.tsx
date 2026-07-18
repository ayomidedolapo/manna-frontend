"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import { authQuotes } from "@/data/auth";

type AuthShellProps = {
  children: ReactNode;
};

export default function AuthShell({ children }: AuthShellProps) {
  // Picked once on mount — suppressHydrationWarning below accepts that the
  // server's pick and the client's first-paint pick may differ.
  const [quote] = useState(
    () => authQuotes[Math.floor(Math.random() * authQuotes.length)],
  );

  return (
    <main className="grid min-h-screen grid-cols-1 min-[900px]:grid-cols-2">
      {/* Left panel — brand image + rotating fact */}
      <div className="relative hidden min-h-[320px] overflow-hidden min-[900px]:block">
        <Image
          src="/images/00f6582fec1c26394bd9471f0ceea02903f75006.jpg"
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#072720]/70 via-[#072720]/55 to-[#072720]/85" />

        <div className="relative z-10 flex h-full flex-col justify-between p-10">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo/logo.png"
              alt="Manna"
              width={140}
              height={38}
              className="h-auto w-[140px]"
            />
          </Link>

          <div className="max-w-[420px]">
            <span className="text-[32px] leading-none text-[#5CD68A]">
              &ldquo;
            </span>
            <p
              suppressHydrationWarning
              className="text-[clamp(1.25rem,2vw,1.6rem)] font-bold leading-[1.35] text-white"
            >
              {quote}
            </p>
            <span className="mt-1 block text-right text-[32px] leading-none text-[#5CD68A]">
              &rdquo;
            </span>
          </div>
        </div>
      </div>

      {/* Right panel — page content */}
      <div className="flex items-center justify-center bg-[linear-gradient(180deg,#FFFDED_0%,#F7FDDC_100%)] px-5 py-12">
        <div className="w-full max-w-[420px]">
          <Link href="/" className="mb-8 flex justify-center min-[900px]:hidden">
            <Image
              src="/logo/logo.png"
              alt="Manna"
              width={130}
              height={35}
              className="h-auto w-[130px]"
            />
          </Link>

          {children}
        </div>
      </div>
    </main>
  );
}
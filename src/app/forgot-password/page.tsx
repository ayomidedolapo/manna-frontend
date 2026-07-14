"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import AuthShell from "../components/layout/auth-shell";
import { IconGoogle, IconApple } from "../components/ui/icons";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    window.setTimeout(() => {
      router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
    }, 900);
  };

  return (
    <AuthShell>
      <div className="text-center">
        <h1 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-[#00A14B]">
          Forgot Password?
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#072720]">
          Enter your email to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-3">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="!mt-5 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
        >
          {status === "submitting" ? "Sending code…" : "Proceed"}
        </button>

        <p className="!mt-3 text-center text-[11px] text-[#072720]/60">
          This form is a preview — no email is sent yet.
        </p>

        <div className="!mt-5 flex items-center gap-3">
          <span className="h-px flex-1 bg-[#00A14B]/20" />
          <span className="text-[11px] text-[#072720]/60">
            or continue with
          </span>
          <span className="h-px flex-1 bg-[#00A14B]/20" />
        </div>

        <div className="!mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#00A14B]/25 bg-white text-[13px] font-medium text-[#072720] transition-colors hover:bg-[#DFFBCB]/40"
          >
            <IconGoogle className="h-4 w-4" />
            Google
          </button>

          <button
            type="button"
            className="flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#00A14B]/25 bg-white text-[13px] font-medium text-[#072720] transition-colors hover:bg-[#DFFBCB]/40"
          >
            <IconApple className="h-4 w-4" />
            Apple
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-[13px] text-[#072720]">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-[#00A14B] hover:text-[#086453]"
        >
          Sign Up
        </Link>
      </p>
    </AuthShell>
  );
}
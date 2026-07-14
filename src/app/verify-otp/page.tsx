"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Suspense,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import AuthShell from "../components/layout/auth-shell";
import AuthSuccessOverlay from "../components/layout/auth-success-overlay";

const CODE_LENGTH = 6;
const RESEND_SECONDS = 59;

function VerifyOtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const flow = searchParams.get("flow") === "signup" ? "signup" : "reset";

  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(
    "idle",
  );
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [secondsLeft]);

  const handleDigitChange = (index: number, value: string) => {
    const clean = value.replace(/[^0-9]/g, "").slice(-1);

    setDigits((current) => {
      const next = [...current];
      next[index] = clean;
      return next;
    });

    if (clean && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (secondsLeft > 0) return;
    setSecondsLeft(RESEND_SECONDS);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    window.setTimeout(() => {
      if (flow === "signup") {
        setStatus("done");
      } else {
        router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      }
    }, 900);
  };

  return (
    <div className="relative">
      <div className="text-center">
        <h1 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-[#00A14B]">
          Verify Account
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#072720]">
          Enter the six-digit OTP code sent to your email.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex justify-center gap-2">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(node) => {
                inputRefs.current[index] = node;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) =>
                handleDigitChange(index, event.target.value)
              }
              onKeyDown={(event) => handleKeyDown(index, event)}
              className="h-[52px] w-[46px] rounded-xl border border-[#00A14B]/30 bg-white/60 text-center text-[18px] font-semibold text-[#072720] outline-none focus:border-[#00A14B]"
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-[12px]">
          <button
            type="button"
            onClick={handleResend}
            disabled={secondsLeft > 0}
            className="font-medium text-[#00A14B] transition-colors hover:text-[#086453] disabled:text-[#072720]/50"
          >
            {secondsLeft > 0
              ? `Resend code in ${secondsLeft}s`
              : "Resend code"}
          </button>

          <Link
            href={flow === "signup" ? "/signup" : "/forgot-password"}
            className="font-medium text-[#00A14B] hover:text-[#086453]"
          >
            {flow === "signup" ? "Edit details" : "Change email"}
          </Link>
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || digits.some((d) => !d)}
          className="mt-6 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-60"
        >
          {status === "submitting" ? "Verifying…" : "Verify"}
        </button>

        <p className="mt-3 text-center text-[11px] text-[#072720]/60">
          This is a preview — any 6 digits will work.
        </p>
      </form>

      {status === "done" && flow === "signup" && (
        <AuthSuccessOverlay
          title="Account Created!"
          message="Welcome to Manna! Your account is ready."
          cta={{ label: "Continue to Manna", href: "/" }}
        />
      )}
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <AuthShell>
      <Suspense fallback={null}>
        <VerifyOtpForm />
      </Suspense>
    </AuthShell>
  );
}
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import AuthShell from "../components/layout/auth-shell";
import AuthSuccessOverlay from "../components/layout/auth-success-overlay";
import { IconGoogle, IconApple } from "../components/ui/icons";

export default function LoginPage() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(
    "idle",
  );

  const handleChange = (name: "email" | "password", value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    window.setTimeout(() => {
      setStatus("done");
    }, 900);
  };

  return (
    <AuthShell>
      <div className="relative">
        <div className="text-center">
          <h1 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-[#00A14B]">
            Welcome Back
          </h1>
          <p className="mt-1.5 text-[13.5px] text-[#072720]">
            Log in to your Manna account to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-3">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
          />

          <input
            type="password"
            required
            placeholder="Enter your password"
            value={values.password}
            onChange={(event) =>
              handleChange("password", event.target.value)
            }
            className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
          />

          <div className="!mt-2 text-right">
            <Link
              href="/forgot-password"
              className="text-[12px] font-medium text-[#00A14B] hover:text-[#086453]"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="!mt-5 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
          >
            {status === "submitting" ? "Logging in…" : "Log In"}
          </button>

          <p className="!mt-3 text-center text-[11px] text-[#072720]/60">
            This form is a preview — no data is sent yet.
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

        {status === "done" && (
          <AuthSuccessOverlay
            title="Logged In!"
            message="Welcome back to Manna."
          />
        )}
      </div>
    </AuthShell>
  );
}
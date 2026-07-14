"use client";

import { Suspense, useState, type FormEvent } from "react";
import AuthShell from "../components/layout/auth-shell";
import AuthSuccessOverlay from "../components/layout/auth-success-overlay";

function ResetPasswordForm() {
  const [values, setValues] = useState({ password: "", confirm: "" });
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "done">(
    "idle",
  );

  const handleChange = (name: "password" | "confirm", value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (values.password !== values.confirm) {
      setError("Passwords don't match — please check and try again.");
      return;
    }

    if (status === "submitting") return;
    setStatus("submitting");

    window.setTimeout(() => {
      setStatus("done");
    }, 900);
  };

  return (
    <div className="relative">
      <div className="text-center">
        <h1 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-[#00A14B]">
          Set New Password
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#072720]">
          Create a strong, unique password for your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-3">
        <input
          type="password"
          required
          placeholder="Enter new password"
          value={values.password}
          onChange={(event) => handleChange("password", event.target.value)}
          className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
        />

        <input
          type="password"
          required
          placeholder="Confirm new password"
          value={values.confirm}
          onChange={(event) => handleChange("confirm", event.target.value)}
          className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
        />

        {error && (
          <p className="text-center text-[12px] text-[#c0392b]">{error}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="!mt-5 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
        >
          {status === "submitting" ? "Updating…" : "Proceed"}
        </button>

        <p className="!mt-3 text-center text-[11px] text-[#072720]/60">
          This form is a preview — no password is actually changed yet.
        </p>
      </form>

      {status === "done" && (
        <AuthSuccessOverlay
          title="Password Updated!"
          message="Your password has been changed successfully."
        />
      )}
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <AuthShell>
      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </AuthShell>
  );
}
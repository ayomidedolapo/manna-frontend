"use client";

import { Suspense, useState, type FormEvent } from "react";
import AuthShell from "../components/layout/auth-shell";
import AuthSuccessOverlay from "../components/layout/auth-success-overlay";
import { IconEye, IconEyeOff } from "../components/ui/icons";

function ResetPasswordForm() {
  const [values, setValues] = useState({ password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter new password"
            value={values.password}
            onChange={(event) => handleChange("password", event.target.value)}
            className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 pr-12 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
          />
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center text-[#086453]/60 hover:text-[#086453]"
          >
            {showPassword ? (
              <IconEyeOff className="h-4 w-4" />
            ) : (
              <IconEye className="h-4 w-4" />
            )}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            required
            placeholder="Confirm new password"
            value={values.confirm}
            onChange={(event) => handleChange("confirm", event.target.value)}
            className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 pr-12 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
          />
          <button
            type="button"
            onClick={() => setShowConfirm((current) => !current)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center text-[#086453]/60 hover:text-[#086453]"
          >
            {showConfirm ? (
              <IconEyeOff className="h-4 w-4" />
            ) : (
              <IconEye className="h-4 w-4" />
            )}
          </button>
        </div>

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
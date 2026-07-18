"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";
import AuthShell from "../components/layout/auth-shell";
import { IconGoogle, IconApple, IconEye, IconEyeOff } from "../components/ui/icons";
import {
  customerSignupFields,
  vendorSignupStep1Fields,
  vendorSignupStep2Fields,
  type SignupFieldConfig,
} from "@/data/auth";

type AccountType = "customer" | "vendor";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accountType, setAccountType] = useState<AccountType>(() =>
    searchParams.get("type") === "vendor" ? "vendor" : "customer",
  );
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState<Record<string, string>>({});
  const [visiblePasswords, setVisiblePasswords] = useState<
    Record<string, boolean>
  >({});
  const [stepError, setStepError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const isVendor = accountType === "vendor";

  const allFields: SignupFieldConfig[] = isVendor
    ? step === 1
      ? vendorSignupStep1Fields
      : vendorSignupStep2Fields
    : customerSignupFields;

  const fields = allFields.filter((field) => {
    if (!field.showIf) return true;
    return values[field.showIf.field] === field.showIf.equals;
  });

  const handleChange = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const togglePasswordVisibility = (name: string) => {
    setVisiblePasswords((current) => ({
      ...current,
      [name]: !current[name],
    }));
  };

  const handleAccountTypeChange = (type: AccountType) => {
    setAccountType(type);
    setValues({});
    setStep(1);
    setStepError(null);
  };

  const passwordsMatch = () =>
    !values.password ||
    !values.confirmPassword ||
    values.password === values.confirmPassword;

  const handleContinue = () => {
    const missing = vendorSignupStep1Fields.some(
      (field) => !values[field.name]?.trim(),
    );

    if (missing) {
      setStepError("Please fill in all fields before continuing.");
      return;
    }

    if (values.password !== values.confirmPassword) {
      setStepError("Passwords don't match — please check and try again.");
      return;
    }

    setStepError(null);
    setStep(2);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isVendor && values.password !== values.confirmPassword) {
      setStepError("Passwords don't match — please check and try again.");
      return;
    }

    if (status === "submitting") return;
    setStepError(null);
    setStatus("submitting");

    window.setTimeout(() => {
      const email = values.email ?? "";
      router.push(
        `/verify-otp?email=${encodeURIComponent(email)}&flow=signup`,
      );
    }, 900);
  };

  const heading = isVendor
    ? step === 1
      ? "Let's Get to Know You"
      : "Tell Us About Your Business"
    : "Create an Account";

  const subtitle = isVendor
    ? step === 1
      ? "First, a few details about you."
      : "Now let's set up your business profile."
    : "Join Manna and get fresh farm products delivered!";

  return (
    <div className="relative">
      <div className="text-center">
        <h1 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-[#00A14B]">
          {heading}
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#072720]">{subtitle}</p>
      </div>

      {/* Account type toggle */}
      <div className="mt-6 flex rounded-full bg-[#DFFBCB] p-1">
        {(["customer", "vendor"] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleAccountTypeChange(type)}
            className={`flex-1 rounded-full py-2 text-[13px] font-medium capitalize transition-colors duration-200 ${
              accountType === type
                ? "bg-[#00A14B] text-white shadow-sm"
                : "text-[#086453] hover:text-[#072720]"
            }`}
          >
            I&apos;m a {type}
          </button>
        ))}
      </div>

      {/* Step indicator — vendor only */}
      {isVendor && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {[1, 2].map((s) => (
            <span
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                step === s ? "w-8 bg-[#00A14B]" : "w-4 bg-[#00A14B]/25"
              }`}
            />
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        {fields.map((field) => {
          const isPasswordField = field.type === "password";
          const isVisible = visiblePasswords[field.name];
          const mismatch =
            field.name === "confirmPassword" &&
            values.confirmPassword &&
            !passwordsMatch();
          const showExpansionNotice =
            field.name === "state" &&
            !isVendor &&
            values.state &&
            values.state !== "Lagos";

          return (
            <div key={field.name}>
              {field.type !== "checkbox" && (
                <label
                  htmlFor={field.name}
                  className="mb-1.5 block text-[12.5px] font-medium text-[#086453]"
                >
                  {field.label}
                </label>
              )}

              {field.type === "select" ? (
                <select
                  id={field.name}
                  required
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    handleChange(field.name, event.target.value)
                  }
                  className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none focus:border-[#00A14B]"
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  required
                  rows={3}
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    handleChange(field.name, event.target.value)
                  }
                  className="w-full rounded-[20px] border border-[#00A14B]/30 bg-white/60 px-5 py-3 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
                />
              ) : field.type === "checkbox" ? (
                <label className="flex items-start gap-2.5 text-[11.5px] leading-[1.5] text-[#072720]/80">
                  <input
                    type="checkbox"
                    required
                    checked={values[field.name] === "true"}
                    onChange={(event) =>
                      handleChange(
                        field.name,
                        event.target.checked ? "true" : "false",
                      )
                    }
                    className="mt-0.5 h-4 w-4 shrink-0 accent-[#00A14B]"
                  />
                  <span>{field.label}</span>
                </label>
              ) : isPasswordField ? (
                <div className="relative">
                  <input
                    id={field.name}
                    type={isVisible ? "text" : "password"}
                    required
                    placeholder={field.placeholder}
                    value={values[field.name] ?? ""}
                    onChange={(event) =>
                      handleChange(field.name, event.target.value)
                    }
                    className={`h-[50px] w-full rounded-full border bg-white/60 px-5 pr-12 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 ${
                      mismatch
                        ? "border-[#c0392b]"
                        : "border-[#00A14B]/30 focus:border-[#00A14B]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility(field.name)}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    className="absolute right-4 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center text-[#086453]/60 hover:text-[#086453]"
                  >
                    {isVisible ? (
                      <IconEyeOff className="h-4 w-4" />
                    ) : (
                      <IconEye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    handleChange(field.name, event.target.value)
                  }
                  className="h-[50px] w-full rounded-full border border-[#00A14B]/30 bg-white/60 px-5 text-[13.5px] text-[#072720] outline-none placeholder:text-[#072720]/50 focus:border-[#00A14B]"
                />
              )}

              {mismatch && (
                <p className="mt-1 text-[11px] text-[#c0392b]">
                  Passwords don&apos;t match.
                </p>
              )}

              {showExpansionNotice && (
                <p className="mt-1.5 text-[11px] leading-[1.5] text-[#086453]">
                  Manna is currently working to expand to your state — please
                  continue with your signup and be among the first customers
                  to know when we launch there.
                </p>
              )}
            </div>
          );
        })}

        {stepError && (
          <p className="text-center text-[12px] text-[#c0392b]">
            {stepError}
          </p>
        )}

        {isVendor && step === 1 ? (
          <button
            type="button"
            onClick={handleContinue}
            className="!mt-6 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01]"
          >
            Continue
          </button>
        ) : (
          <>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="!mt-6 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
            >
              {status === "submitting" ? "Creating account…" : "Sign Up"}
            </button>

            {isVendor && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="!mt-2 w-full text-center text-[12.5px] font-medium text-[#00A14B] hover:text-[#086453]"
              >
                ← Back to personal details
              </button>
            )}
          </>
        )}

        {(!isVendor || step === 2) && (
          <>
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
          </>
        )}
      </form>

      <p className="mt-6 text-center text-[13px] text-[#072720]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-[#00A14B] hover:text-[#086453]"
        >
          Log In
        </Link>
      </p>
    </div>
  );
}

export default function SignupPage() {
  return (
    <AuthShell>
      <Suspense fallback={null}>
        <SignupForm />
      </Suspense>
    </AuthShell>
  );
}
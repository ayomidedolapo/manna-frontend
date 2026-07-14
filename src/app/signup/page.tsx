"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, type FormEvent } from "react";
import AuthShell from "../components/layout/auth-shell";
import { IconGoogle, IconApple } from "../components/ui/icons";
import { customerSignupFields, vendorSignupFields } from "@/data/auth";

type AccountType = "customer" | "vendor";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [accountType, setAccountType] = useState<AccountType>(() =>
    searchParams.get("type") === "vendor" ? "vendor" : "customer",
  );
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const fields = (
    accountType === "customer" ? customerSignupFields : vendorSignupFields
  ).filter((field) => {
    if (!field.showIf) return true;
    return values[field.showIf.field] === field.showIf.equals;
  });

  const handleChange = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleAccountTypeChange = (type: AccountType) => {
    setAccountType(type);
    setValues({});
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    window.setTimeout(() => {
      const email = values.email ?? "";
      router.push(
        `/verify-otp?email=${encodeURIComponent(email)}&flow=signup`,
      );
    }, 900);
  };

  return (
    <div className="relative">
      <div className="text-center">
        <h1 className="text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-[#00A14B]">
          Create an Account
        </h1>
        <p className="mt-1.5 text-[13.5px] text-[#072720]">
          Join Manna and get fresh farm products delivered!
        </p>
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

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        {fields.map((field) => (
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
          </div>
        ))}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="!mt-6 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
        >
          {status === "submitting" ? "Creating account…" : "Sign Up"}
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
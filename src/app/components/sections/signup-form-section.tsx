"use client";

import { useState, type FormEvent } from "react";

export type SignupField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required?: boolean;
  fullWidth?: boolean;
};

type SignupFormSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  fields: SignupField[];
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  showPreviewNote?: boolean;
};

export default function SignupFormSection({
  id,
  eyebrow,
  title,
  description,
  fields,
  submitLabel,
  successTitle,
  successMessage,
  showPreviewNote = true,
}: SignupFormSectionProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const handleChange = (name: string, value: string) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");

    // Dummy submission — no backend wired up yet.
    window.setTimeout(() => {
      setStatus("done");
    }, 900);
  };

  return (
    <section
      id={id}
      className="bg-transparent"
      aria-label="Signup form"
    >
      <div className="mx-auto w-full max-w-[900px] px-5 py-[clamp(2rem,4vw,3.25rem)] min-[900px]:px-[clamp(2.5rem,6vw,6rem)]">
        <div className="rounded-[28px] bg-[#072720] p-6 min-[640px]:p-10">
          <div className="text-center">
            <p className="text-[13px] font-medium text-[#E0EE29]">{eyebrow}</p>

            <h2 className="mx-auto mt-3 max-w-[28ch] text-[clamp(1.3rem,3.6vw,2rem)] font-medium leading-[1.25] tracking-[-0.03em] text-white">
              {title}
            </h2>

            <p className="mx-auto mt-3 max-w-[48ch] text-[13.5px] leading-[1.6] text-[#DFFBCB]">
              {description}
            </p>
          </div>

          {status === "done" ? (
            <div className="mt-8 rounded-[18px] bg-[#0b3a30] p-6 text-center">
              <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[#00A14B] text-[20px] text-white">
                ✓
              </span>

              <h3 className="mt-4 text-[16px] font-semibold text-white">
                {successTitle}
              </h3>

              <p className="mx-auto mt-2 max-w-[40ch] text-[13.5px] leading-[1.55] text-[#DFFBCB]">
                {successMessage}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4 min-[640px]:grid-cols-2"
            >
              {fields.map((field) => {
                const wrapperClass = field.fullWidth
                  ? "min-[640px]:col-span-2"
                  : "";

                return (
                  <label
                    key={field.name}
                    className={`block text-left text-[12.5px] text-[#DFFBCB] ${wrapperClass}`}
                  >
                    {field.label}
                    {field.required && (
                      <span className="text-[#E0EE29]"> *</span>
                    )}
                    {field.type === "select" ? (
                      <select
                        required={field.required}
                        value={values[field.name] ?? ""}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                        className="mt-2 h-[46px] w-full rounded-xl border border-[#DFFBCB]/20 bg-[#0b3a30] px-4 text-[13.5px] text-white outline-none focus:border-[#00A14B]"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "textarea" ? (
                      <textarea
                        required={field.required}
                        placeholder={field.placeholder}
                        value={values[field.name] ?? ""}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                        rows={3}
                        className="mt-2 w-full rounded-xl border border-[#DFFBCB]/20 bg-[#0b3a30] px-4 py-3 text-[13.5px] text-white outline-none placeholder:text-[#DFFBCB]/50 focus:border-[#00A14B]"
                      />
                    ) : (
                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        value={values[field.name] ?? ""}
                        onChange={(event) =>
                          handleChange(field.name, event.target.value)
                        }
                        className="mt-2 h-[46px] w-full rounded-xl border border-[#DFFBCB]/20 bg-[#0b3a30] px-4 text-[13.5px] text-white outline-none placeholder:text-[#DFFBCB]/50 focus:border-[#00A14B]"
                      />
                    )}
                  </label>
                );
              })}

              <div className="min-[640px]:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(90deg,#00A14B_0%,#086453_100%)] text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.01] disabled:opacity-70"
                >
                  {status === "submitting" ? "Submitting…" : submitLabel}
                </button>

                {showPreviewNote && (
                  <p className="mt-3 text-center text-[11.5px] text-[#DFFBCB]/70">
                    This form is a preview — no data is sent yet.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
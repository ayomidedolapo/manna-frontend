"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse available groceries, add what you need to your cart, review your order, and complete checkout securely.",
  },
  {
    question: "Do you deliver outside Lagos?",
    answer:
      "We currently focus on selected areas in Lagos. Delivery coverage will expand as more locations become available.",
  },
  {
    question: "How fresh are your produce?",
    answer:
      "Our groceries are carefully selected and handled to help ensure they arrive fresh and ready for your kitchen.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "You can request an update or cancellation before your order is processed. Contact support as soon as possible.",
  },
  {
    question: "Do you offer bulk orders for events or businesses?",
    answer:
      "Yes. We can support larger grocery orders for homes, events, offices, and businesses.",
  },
  {
    question: "What products do you sell?",
    answer:
      "You can shop groceries such as fresh produce, pantry staples, food items, household essentials, and more.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <section id="faq" className="bg-transparent">
      <div className="mx-auto w-full max-w-[1600px] px-[14px] pb-[clamp(2rem,5vw,5rem)] pt-10 min-[640px]:pt-[clamp(1.1rem,4vw,3rem)] min-[640px]:px-[27px]">
        <div className="text-center">
          <p className="text-[clamp(0.4375rem,1vw,0.8125rem)] font-medium text-[#086453]">
            FAQ
          </p>

          <h2 className="mx-auto mt-[clamp(0.35rem,1.2vw,1rem)] max-w-[19ch] text-[clamp(0.75rem,4vw,1rem)] font-medium leading-[1.3] tracking-[-0.035em] text-[#00A14B] min-[640px]:max-w-none min-[640px]:text-[clamp(1.5rem,3vw,2.7rem)]">
            Frequently Asked Questions &amp; Answers
          </h2>
        </div>

        <div className="mt-[clamp(2rem,7vw,4.25rem)] space-y-[clamp(0.7rem,1.7vw,1rem)]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[9px] border border-[#00A14B] bg-transparent min-[640px]:rounded-[15px]"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex min-h-[35px] w-full items-center justify-between gap-4 px-[10px] text-left transition-colors duration-300 hover:bg-[#DFFBCB]/30 min-[640px]:min-h-[59px] min-[640px]:px-[17px]"
                >
                  <span className="text-[clamp(0.5rem,2.3vw,0.625rem)] font-medium leading-none text-[#086453] min-[640px]:text-[clamp(0.875rem,1.4vw,1.15rem)]">
                    {faq.question}
                  </span>

                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`h-[11px] w-[11px] shrink-0 text-[#086453] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] min-[640px]:h-[19px] min-[640px]:w-[19px] ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M10 4v12" />
                    <path d="M4 10h12" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-[#00A14B]/25 px-[10px] pb-[11px] pt-[9px] text-[clamp(0.48rem,2.2vw,0.625rem)] leading-[1.55] text-[#072720] min-[640px]:px-[17px] min-[640px]:pb-[18px] min-[640px]:pt-[14px] min-[640px]:text-[clamp(0.75rem,1.2vw,1rem)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
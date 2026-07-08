"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Manna and how does it work?",
    answer:
      "Manna is a marketplace that connects you with trusted food vendors, making it easy to order fresh groceries and food essentials from your phone. Simply browse available products, add what you need to your cart, review your order, complete checkout securely, and we coordinate delivery from the vendor to your doorstep.",
  },
  {
    question: "Where is Manna available and how much does delivery cost?",
    answer:
      "Manna is launching in selected areas of Lagos first, with plans to expand to more cities across Nigeria. Delivery fees depend on your location and the vendor you are ordering from, and you will always see the delivery cost before confirming your order.",
  },
  {
    question: "What products can I buy on Manna?",
    answer:
      "At launch, you can shop for everyday essentials such as yam, rice, onions, potatoes, tomatoes, pepper, fresh produce, pantry staples, food items, household essentials, and more.",
  },
  {
    question: "How do you ensure product quality and freshness?",
    answer:
      "We carefully onboard and monitor vendors on our platform, encourage customer reviews, and continuously evaluate vendor performance. Groceries are also carefully selected and handled to help ensure they arrive fresh and ready for your kitchen.",
  },
  {
    question: "How are orders delivered, and can I change or cancel an order?",
    answer:
      "Orders are delivered through trusted logistics partners to help ensure your groceries arrive safely and on time. You can request an update or cancellation before your order is processed by contacting support as soon as possible.",
  },
  {
    question: "Do you offer bulk orders for events or businesses?",
    answer:
      "Yes. We can support larger grocery orders for homes, events, offices, and businesses.",
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
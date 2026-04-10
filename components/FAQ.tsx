"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do my clients see a Brick & Yield brand?",
    answer:
      "The app is listed as Brick & Yield in the App Store, but once your clients open it, everything inside is branded to you \u2014 your name, your brokerage, your contact info, your colors. Brick & Yield is the technology behind the scenes.",
  },
  {
    question: "Which MLS markets do you support?",
    answer:
      "We currently support the Wasatch Front Regional MLS (WFRMLS) covering Utah\u2019s Wasatch Front. We\u2019re expanding to additional markets \u2014 join the waitlist to request your MLS.",
  },
  {
    question: "Do I need a CRM to use this?",
    answer:
      "No. Brick & Yield includes client management, messaging, and pipeline stages. If you already use a CRM like GoHighLevel, we can integrate.",
  },
  {
    question: "What does my client see?",
    answer:
      "A branded mobile app (iOS) with their property matches, investment analysis, mortgage tools, messaging with you, and transaction updates. No ads, no competing agents.",
  },
  {
    question: "Can I use this for seller clients too?",
    answer:
      "Yes \u2014 the portal supports both buyer and seller journeys with listing stats, offer tracking, feedback, and net sheets.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. Month to month. Cancel anytime.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-dark-text">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-misty-aqua/30 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-dark-text pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-oracle shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-dark-text/70 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

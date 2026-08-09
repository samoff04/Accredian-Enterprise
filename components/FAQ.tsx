"use client";

import { useState } from "react";
import { faqCategories, faqs } from "@/lib/data";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = faqs[activeCategory];

  function selectCategory(cat: string) {
    setActiveCategory(cat);
    setOpenIndex(0);
  }

  return (
    <section id="faq" className="mx-auto max-w-content px-6 py-20">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Frequently Asked <span className="text-brand">Questions</span>
      </h2>

      <div className="mt-10 grid gap-8 md:grid-cols-[240px_1fr]">
        <div className="flex gap-3 overflow-x-auto md:flex-col">
          {faqCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`focus-ring shrink-0 rounded-lg border px-5 py-3 text-left text-sm font-semibold transition-colors ${
                activeCategory === cat
                  ? "border-brand bg-brand text-white"
                  : "border-slate-100 bg-white text-slate-600 hover:border-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  className="focus-ring flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-base font-semibold text-slate-900">{item.q}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`shrink-0 text-brand transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-10 text-sm leading-relaxed text-slate-600">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-dark">
            FAQ
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            Questions L&D teams usually ask.
          </h2>
        </div>

        <div className="mt-10 divide-y divide-navy-100 border-y border-navy-100">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="font-display text-lg font-medium text-navy">
                    {item.q}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-100 font-mono text-sm text-navy transition-transform ${
                      isOpen
                        ? "rotate-45 border-gold-dark text-gold-dark"
                        : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-6 pr-10 text-sm leading-relaxed text-navy-700">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
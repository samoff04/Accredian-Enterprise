"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="border-y border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          What Our <span className="text-brand">Partners</span> Say
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-100 bg-white p-8 text-left shadow-sm">
              <blockquote className="text-base leading-relaxed text-slate-700">
                &quot;{t.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-brand">
                {t.name} &middot; {t.role}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                active === i ? "bg-brand" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
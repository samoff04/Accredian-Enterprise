import { process } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-content px-6 py-20 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        How We Deliver <span className="text-brand">Results</span> That Matter?
      </h2>
      <p className="mt-3 text-slate-600">
        A Structured Three-Step Approach to <span className="font-medium text-brand">Skill Development</span>
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {process.map((step, i) => (
          <div key={step.step} className="rounded-2xl border-l-4 border-brand bg-mist p-8 text-left">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand text-sm font-bold text-brand">
              {i + 1}
            </span>
            <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19h16M4 15l4-4 3 3 6-6" />
              </svg>
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">{step.step}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import { heroChecks } from "@/lib/data";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-brand"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="bg-mist"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Next-Gen Expertise For Your
          </p>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Enterprise
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Cultivate high-performance teams through expert learning.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {heroChecks.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-slate-700"
              >
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#lead-form"
            className="focus-ring mt-8 inline-flex items-center rounded-lg bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Enquire Now
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg shadow-brand-100/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">
            Enterprise Learning
          </p>

          <p className="mt-3 text-2xl font-bold text-slate-900">
            Skill programs built around your team&apos;s real goals
          </p>

          <div className="mt-6 space-y-4">
            {[
              "Leadership Elevation",
              "Tech & Data Insights",
              "Gen-AI Mastery",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center justify-between rounded-lg bg-mist px-4 py-3"
              >
                <span className="text-sm font-medium text-slate-700">
                  {label}
                </span>

                <span
                  className="h-2 w-2 rounded-full bg-brand"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
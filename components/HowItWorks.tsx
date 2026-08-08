import { process } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="section-padding bg-paper">
      <div className="mx-auto max-w-content px-6">
        <div>
          <p className="eyebrow font-mono text-xs uppercase tracking-wide text-gold-dark">
            How it works
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            From diagnostic to dashboard, in four stages.
          </h2>
        </div>

        <ol className="mt-14 grid gap-0 md:grid-cols-4">
          {process.map((step, i) => (
            <li
              key={step.step}
              className="relative border-t-2 border-navy-100 py-6 pr-6 md:border-l-2 md:border-t-0 md:py-2 md:pl-6 first:md:border-l-0 first:md:pl-0"
            >
              <span className="font-mono text-xs text-gold-dark">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-2 font-display text-lg font-semibold text-navy">
                {step.step}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-navy-700">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
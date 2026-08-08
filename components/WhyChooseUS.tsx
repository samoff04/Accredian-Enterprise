import { pillars } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="why" className="section-padding bg-paper">
      <div className="mx-auto max-w-content px-6">
        <div className="max-w-3xl">
          <p className="eyebrow font-mono text-xs uppercase tracking-wide text-gold-dark">
            Why Accredian
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
            Built for teams that need proof, not promises.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-navy-700 md:text-lg">
            Most upskilling vendors sell a course catalog. We build a learning
            program around your team&apos;s actual skill gaps — and report back
            on whether it closed them.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="group rounded-2xl border border-navy-100 bg-white/60 p-7 transition-colors hover:border-gold-light"
            >
              <span className="font-mono text-xs text-gold-dark">
                {p.tag}
              </span>

              <h3 className="mt-3 font-display text-xl font-semibold text-navy">
                {p.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-navy-700">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="results" className="section-padding bg-navy text-paper">
      <div className="mx-auto max-w-content px-6">
        <div>
          <p className="eyebrow font-mono text-xs uppercase tracking-wide text-gold-light">
            Results
          </p>

          <h2 className="mt-3 font-display text-3xl font-semibold text-paper md:text-4xl">
            What L&amp;D leaders say after a cohort ships.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-navy-400 bg-navy-700/50 p-7"
            >
              <blockquote className="font-display text-lg italic leading-relaxed text-navy-100">
                &quot;{t.quote}&quot;
              </blockquote>

              <figcaption className="mt-6 border-t border-navy-400 pt-4 font-mono text-xs text-gold-light">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
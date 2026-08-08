import { programs } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-paper">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow font-mono text-xs uppercase tracking-wide text-gold-dark">
              Programs
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              Six tracks. One curriculum team behind all of them.
            </h2>
          </div>

          <a
            href="#lead-form"
            className="focus-ring inline-flex w-fit items-center rounded-full border border-navy px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-paper"
          >
            Get the full syllabus
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex flex-col justify-between rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <span className="inline-block rounded-full bg-teal-light px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-teal">
                  {program.category}
                </span>

                <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-navy">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm text-navy-700">
                  {program.outcome}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-navy-100 pt-4 font-mono text-xs text-navy-400">
                <span>{program.duration}</span>
                <span>{program.format}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
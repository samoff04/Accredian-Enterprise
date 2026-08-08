import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-navy text-paper">
      <div className="relative mx-auto grid max-w-content gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p className="eyebrow font-mono text-xs uppercase text-gold-light">
            Enterprise Learning &amp; Development
          </p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            Upskill your workforce with{" "}
            <span className="italic text-gold-light">institute-grade</span>{" "}
            AI and Data programs.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-navy-100">
            Accredian Enterprise co-designs cohort-based programs with IIT and
            IIM faculty, tailored to your stack and measured against outcomes
            your leadership team actually cares about.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#lead-form"
              className="focus-ring inline-flex items-center rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Book a skill assessment
            </a>

            <a
              href="#programs"
              className="focus-ring inline-flex items-center rounded-full border border-navy-400 px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-gold-light hover:text-gold-light"
            >
              View programs
            </a>
          </div>

          <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-navy-400 pt-3">
                <dt className="font-mono text-[11px] uppercase tracking-wide text-navy-100/70">
                  {s.label}
                </dt>

                <dd className="mt-1 font-display text-2xl font-semibold text-gold-light">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center md:mx-0">
          <div className="w-full rounded-2xl border border-gold-light/30 bg-navy-700/60 p-7 shadow-seal backdrop-blur">
            <div className="flex items-center justify-between border-b border-gold-light/20 pb-4">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-light">
                Certificate of Completion
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-light/60 font-display text-xs text-gold-light">
                A
              </span>
            </div>

            <p className="mt-5 font-display text-xl italic leading-snug text-paper">
              Generative AI &amp; LLM Engineering
            </p>

            <p className="mt-1 text-sm text-navy-100/80">
              Co-certified with premier institute faculty
            </p>

            <div className="mt-6 space-y-3">
              {[
                ["Cohort", "Enterprise · Sept 2026"],
                ["Duration", "12 weeks"],
                ["Status", "Verified"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-b border-navy-400/60 pb-2 text-sm"
                >
                  <span className="text-navy-100/70">{k}</span>
                  <span className="font-medium text-paper">{v}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-mono text-[10px] text-navy-100/50">
                ID · ACC-ENT-2026-0417
              </span>

              <span className="rounded-full border border-gold-light/50 px-3 py-1 font-mono text-[10px] text-gold-light">
                Verified ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section id="stats" className="mx-auto max-w-content px-6 py-20 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Our <span className="text-brand">Track Record</span>
      </h2>
      <p className="mt-3 text-slate-600">
        The Numbers Behind <span className="font-medium text-brand">Our Success</span>
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-4 ${i > 0 ? "sm:border-l sm:border-slate-100" : ""}`}
          >
            <span className="inline-flex items-center justify-center rounded-full bg-brand-50 px-6 py-2 text-xl font-extrabold text-brand">
              {s.value}
            </span>
            <p className="mt-4 text-sm text-slate-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
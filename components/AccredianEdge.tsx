import { edgePoints } from "@/lib/data";

export default function AccredianEdge() {
  return (
    <section id="edge" className="mx-auto max-w-content px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          The <span className="text-brand">Accredian Edge</span>
        </h2>
        <p className="mt-3 text-slate-600">
          Key Aspects of <span className="font-medium text-brand">Our Strategic Training</span>
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {edgePoints.map((p, i) => (
          <div
            key={p.title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand">
              {i + 1}
            </span>
            <h3 className="mt-4 text-base font-semibold text-slate-900">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
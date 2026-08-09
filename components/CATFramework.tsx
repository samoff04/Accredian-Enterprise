import { catFramework } from "@/lib/data";

export default function CATFramework() {
  return (
    <section id="cat" className="mx-auto max-w-content px-6 py-20 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        The <span className="text-brand">CAT Framework</span>
      </h2>
      <p className="mt-3 text-slate-600">
        Our Proven Approach to <span className="font-medium text-brand">Learning Excellence</span>
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {catFramework.map((step, i) => (
          <div key={step.step} className="relative rounded-2xl border border-slate-100 bg-mist p-8">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
              {i + 1}
            </span>
            <h3 className="mt-4 text-lg font-bold text-slate-900">{step.step}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
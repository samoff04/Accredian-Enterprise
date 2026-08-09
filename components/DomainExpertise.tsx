import { domainExpertise, courseSegmentation } from "@/lib/data";

function DomainIcon({ index }: { index: number }) {
  const paths = [
    "M9 18h6M10 21h4M12 3a6 6 0 00-3 11.2V16h6v-1.8A6 6 0 0012 3z",
    "M8 12a4 4 0 118 0 4 4 0 01-8 0zM8 12H5m14 0h-3M12 8V5m0 14v-3",
    "M17 20a4 4 0 00-10 0M12 12a4 4 0 100-8 4 4 0 000 8z",
    "M4 20V10m6 10V4m6 16v-7",
    "M12 8v4l3 2M12 3a9 9 0 100 18 9 9 0 000-18z",
    "M4 5h16v14H4zM4 9h16",
    "M3 10h18M7 15h2m4 0h4M5 6h14v12H5z",
  ];
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[index % paths.length]} />
    </svg>
  );
}

export default function DomainExpertise() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Domain <span className="text-brand">Expertise</span>
          </h2>
          <p className="mt-3 text-slate-600">
            <span className="font-medium text-brand">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {domainExpertise.map((d, i) => (
            <div
              key={d.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-white px-6 py-8 text-center shadow-sm"
            >
              <DomainIcon index={i} />
              <h3 className="text-base font-semibold text-slate-900">{d.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tailored <span className="text-brand">Course Segmentation</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Explore <span className="font-medium text-brand">Custom-fit Courses</span> Designed to Address Every Professional Focus
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courseSegmentation.map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
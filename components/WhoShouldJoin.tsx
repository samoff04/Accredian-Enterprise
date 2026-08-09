import { whoShouldJoin } from "@/lib/data";

function AudienceIcon({ index }: { index: number }) {
  const paths = [
    "M4 4h16v12H4zM8 20h8M12 16v4",
    "M6 18L18 6M6 6l12 12",
    "M12 3l9 5v8l-9 5-9-5V8z",
    "M4 20V8h4v12M14 20V4h6v16",
  ];
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={paths[index % paths.length]} />
    </svg>
  );
}

export default function WhoShouldJoin() {
  return (
    <section className="mx-auto max-w-content px-6 py-4 md:py-10">
      <div className="rounded-3xl bg-brand-700 px-8 py-12 text-white sm:px-12">
        <p className="text-sm font-medium text-brand-100">Who Should Join?</p>
        <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Strategic Skill Enhancement</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {whoShouldJoin.map((item, i) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/30">
                <AudienceIcon index={i} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
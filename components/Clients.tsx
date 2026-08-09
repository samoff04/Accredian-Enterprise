import { clientLogos } from "@/lib/data";

export default function Clients() {
  return (
    <section id="clients" className="border-y border-slate-100 bg-slate-50 py-20">
      <div className="mx-auto max-w-content px-6 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Our Proven <span className="text-brand">Partnerships</span>
        </h2>
        <p className="mt-3 text-slate-600">
          Successful Collaborations With the <span className="font-medium text-brand">Industry&apos;s Best</span>
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clientLogos.map((name) => (
            <span key={name} className="text-lg font-bold tracking-tight text-slate-400">
              {name}
            </span>
          ))}
        </div>
        <p className="mt-8 text-xs text-slate-400">
          Company names shown for illustrative, educational reference only.
        </p>
      </div>
    </section>
  );
}
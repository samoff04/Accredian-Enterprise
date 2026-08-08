import { partnerLogos } from "@/lib/data";

export default function TrustedBy() {
  const doubled = [...partnerLogos, ...partnerLogos];

  return (
    <section className="overflow-hidden border-b border-navy-100 bg-paper py-8">
      <div className="mx-auto max-w-content px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-navy-400">
          Trusted by 500+ enterprises, including
        </p>

        <div className="mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-xl font-medium tracking-tight text-navy-400/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
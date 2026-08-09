export default function CTABanner() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:gap-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Want to Learn More About Our Training Solutions?
          </p>

          <h2 className="mt-2 max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Get Expert Guidance for Your Team&apos;s Success!
          </h2>
        </div>

        <a
          href="#lead-form"
          className="focus-ring inline-flex shrink-0 items-center gap-1 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand-50"
        >
          Contact Us
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M9 6l6 6-6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
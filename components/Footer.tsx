import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-100">
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-navy">
                A
              </div>

              <span className="font-display text-xl font-semibold text-paper">
                Accredian Enterprise
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-100/70">
              Cohort-based AI, Data, and Leadership programs co-designed with
              IIT and IIM faculty for enterprise teams.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-gold-light">
              Navigate
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    className="focus-ring rounded hover:text-paper"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-gold-light">
              Company
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  className="focus-ring rounded hover:text-paper"
                  href="#why"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="focus-ring rounded hover:text-paper"
                  href="#results"
                >
                  Case studies
                </a>
              </li>

              <li>
                <a
                  className="focus-ring rounded hover:text-paper"
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-gold-light">
              Contact
            </p>

            <ul className="mt-4 space-y-3 text-sm">
              <li>enterprise@accredian.com</li>
              <li>+91 98183 29799</li>
              <li>Gurugram, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-700 pt-6 text-xs text-navy-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Accredian Enterprise. Educational
            demo project, unaffiliated fan build.
          </p>

          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
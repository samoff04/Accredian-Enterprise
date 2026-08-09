import { contact } from "@/lib/data";

const socials = [
  {
    label: "Facebook",
    d: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z",
  },
  {
    label: "LinkedIn",
    d: "M4 4h4v16H4zM10 9h4v2c1-1.5 2.5-2.3 4-2.3 3 0 5 2 5 5.5V20h-4v-5c0-1.7-.7-2.7-2-2.7S13 13.3 13 15v5h-4z",
  },
  {
    label: "Twitter",
    d: "M21 5.3c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-1.5-1.6-4-1.7-5.6-.2-1 1-1.4 2.4-1 3.8-3-.2-5.7-1.6-7.5-4-1 1.7-.5 3.9 1.2 5-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.7-.6.1-1.1.2-1.7.1.5 1.5 1.9 2.6 3.5 2.6-1.3 1-2.9 1.6-4.6 1.6H3c1.6 1 3.6 1.6 5.6 1.6 6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.3-1.2 1.8-1.9z",
  },
  {
    label: "Instagram",
    d: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 5a4 4 0 100 8 4 4 0 000-8zm5-1.5a1 1 0 100 2 1 1 0 000-2z",
  },
  {
    label: "YouTube",
    d: "M22 8.5s-.2-1.6-.8-2.3c-.8-.9-1.6-.9-2-1C16.4 5 12 5 12 5s-4.4 0-7.2.2c-.4.1-1.2.1-2 1-.6.7-.8 2.3-.8 2.3S2 10.4 2 12.2v1.6c0 1.8.2 3.7.2 3.7s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.4 1.6 6.6 1.6 0 0 4.4 0 7.2-.2.4-.1 1.2-.1 2-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.6c0-1.8-.2-3.7-.2-3.7zM10 15.5v-6l5.2 3-5.2 3z",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-100 pb-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-slate-900">
              accredian
            </p>
            <p className="mt-1 text-sm text-slate-500">
              credentials that matter
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand hover:text-brand"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="text-left sm:text-right">
            <a
              href="#lead-form"
              className="focus-ring inline-flex items-center rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Enquire Now
            </a>
            <p className="mt-2 text-xs text-slate-400">
              Speak with our Advisor
            </p>
          </div>
        </div>

        <div className="grid gap-10 pt-10 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-900">Accredian</p>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a
                  className="focus-ring rounded hover:text-brand"
                  href="#top"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="focus-ring rounded hover:text-brand"
                  href="#top"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  className="focus-ring rounded hover:text-brand"
                  href="#edge"
                >
                  Why Accredian
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Contact Us
            </p>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Email us: {contact.email}</li>
              <li>Office Address: {contact.address}</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-slate-100 pt-6 text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {contact.copyright}
        </p>
      </div>
    </footer>
  );
}
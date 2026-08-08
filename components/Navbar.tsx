"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="/"
          className="focus-ring flex items-center gap-3 rounded"
          aria-label="Accredian Enterprise Home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-display text-lg font-semibold text-gold-light">
            A
          </span>

          <span className="font-display text-xl font-semibold text-navy">
            Accredian Enterprise
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm font-medium text-navy-700 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#lead-form"
            className="focus-ring inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-navy-700"
          >
            Book skill assessment
          </a>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-navy transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-navy transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-5 bg-navy transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-100 bg-paper px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded text-base font-medium text-navy-700"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#lead-form"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-paper"
              >
                Book skill assessment
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
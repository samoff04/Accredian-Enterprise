"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="focus-ring flex flex-col rounded"
          onClick={() => setOpen(false)}
          aria-label="Accredian home"
        >
          <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
            accredian
          </span>
          <span className="text-[10px] font-medium tracking-[0.16em] text-slate-400">
            credentials that matter
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded text-sm font-medium text-slate-700 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#lead-form"
            className="focus-ring inline-flex items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-slate-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <div className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-slate-900 transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-ring block rounded text-base font-medium text-slate-700 hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#lead-form"
                onClick={() => setOpen(false)}
                className="focus-ring mt-2 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
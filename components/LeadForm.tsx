"use client";

import { useState, FormEvent } from "react";
import { contact } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const body = await res.json();
      if (!res.ok) throw new Error(body.error || "Something went wrong");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="lead-form" className="bg-mist py-20">
      <div className="mx-auto grid max-w-content gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">Enquire Now</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Speak with our advisor
          </h2>
          <p className="mt-4 max-w-md text-slate-600">
            Share a few details about your team and a learning specialist will
            follow up to design a program around your goals.
          </p>

          <div className="mt-8 space-y-2 text-sm text-slate-600">
            <p>Email us: {contact.email}</p>
            <p>Office Address: {contact.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required autoComplete="name" />
            <Field label="Work email" name="email" type="email" required autoComplete="email" />
            <Field label="Company" name="company" required autoComplete="organization" />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="teamSize">
                Team size
              </label>
              <select
                id="teamSize"
                name="teamSize"
                required
                defaultValue=""
                className="focus-ring w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
              >
                <option value="" disabled>Select a range</option>
                <option value="15-50">15-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor="message">
              What skill gap are you trying to close?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="focus-ring w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
              placeholder="e.g. Gen-AI fluency for a 40-person engineering org"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-lg bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {status === "submitting" ? "Sending..." : "Enquire Now"}
          </button>

          {status === "success" && (
            <p role="status" className="mt-4 text-sm font-medium text-green-600">
              Thanks, a learning specialist will reach out within one business day.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="mt-4 text-sm font-medium text-red-600">
              {errorMsg || "Couldn't submit right now, please try again."}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="focus-ring w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900"
      />
    </div>
  );
}
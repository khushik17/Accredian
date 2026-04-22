"use client";

import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "Enterprise upskilling",
  message: "",
};

export default function LeadCaptureForm() {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false); // ✅ dropdown state

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Could not save lead.");
      }

      setStatus("success");
      setForm(initialFormState);
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError?.message || "Something went wrong.");
    }
  };

  const options = [
    "Enterprise upskilling",
    "Leadership development",
    "AI & analytics training",
    "Custom program design",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-white/30 bg-white/10 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.3)] backdrop-blur-xl md:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
          Lead Capture
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">
          Request a callback for your team
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-200">
          Share your details and we&apos;ll save your enquiry for the enterprise team.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-100">
          Full name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="rounded-xl border border-white/30 bg-white/14 px-4 py-3 text-white outline-none"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-100">
          Work email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="rounded-xl border border-white/30 bg-white/14 px-4 py-3 text-white outline-none"
            placeholder="name@company.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-100">
          Company
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            required
            className="rounded-xl border border-white/30 bg-white/14 px-4 py-3 text-white outline-none"
            placeholder="Company name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-100">
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="rounded-xl border border-white/30 bg-white/14 px-4 py-3 text-white outline-none"
            placeholder="Optional"
          />
        </label>
      </div>

      {/* ✅ CUSTOM DROPDOWN */}
      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-100">
        Interest area
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full rounded-xl border border-white/30 bg-white/14 px-4 py-3 text-left text-white"
          >
            {form.interest}
          </button>

          {open && (
            <div className="absolute z-10 mt-2 w-full rounded-xl border border-white/20 bg-slate-900 shadow-lg">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setForm((prev) => ({ ...prev, interest: option }));
                    setOpen(false);
                  }}
                  className="cursor-pointer px-4 py-3 text-white hover:bg-slate-800"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </label>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-100">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="4"
          className="rounded-xl border border-white/30 bg-white/14 px-4 py-3 text-white outline-none"
          placeholder="Tell us what your team needs"
        />
      </label>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white"
        >
          {status === "submitting" ? "Saving..." : "Submit enquiry"}
        </button>

        {status === "success" ? (
          <p className="text-sm text-emerald-300">
            Lead saved successfully.
          </p>
        ) : error ? (
          <p className="text-sm text-red-300">{error}</p>
        ) : (
          <p className="text-sm text-slate-300">
            We will store this through the Next.js API route.
          </p>
        )}
      </div>
    </form>
  );
}
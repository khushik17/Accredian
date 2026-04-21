"use client";

import { useEffect, useMemo, useState } from "react";

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const date = new Date(value);
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function LeadsSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-12 rounded-2xl bg-white/70 animate-pulse dark:bg-slate-800/70" />
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="grid grid-cols-1 gap-3 px-5 py-4 md:grid-cols-6">
              {Array.from({ length: 6 }).map((__, cellIndex) => (
                <div
                  key={cellIndex}
                  className="h-4 rounded-full bg-slate-200 animate-pulse dark:bg-slate-700"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LeadsDashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const loadLeads = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/leads", { cache: "no-store" });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Could not load leads.");
      }

      setLeads(Array.isArray(data?.leads) ? data.leads : []);
    } catch (loadError) {
      setError(loadError?.message || "Failed to load leads.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    const loweredQuery = query.trim().toLowerCase();

    if (!loweredQuery) {
      return leads;
    }

    return leads.filter((lead) => {
      return [lead.name, lead.email, lead.company, lead.phone, lead.interest, lead.message]
        .filter(Boolean)
        .some((field) => field.toLowerCase().includes(loweredQuery));
    });
  }, [leads, query]);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 md:px-8">
      <div className="rounded-4xl border border-slate-200 bg-white/90 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">
              Stored Leads
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Lead Dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              View enquiries submitted through the API-backed lead capture form.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={loadLeads}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Refresh
            </button>
            <a
              href="/"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Back to site
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-blue-50 px-5 py-4 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Total stored
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{leads.length}</p>
          </div>
          <div className="rounded-2xl bg-blue-50 px-5 py-4 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Showing
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{filteredLeads.length}</p>
          </div>
          <label className="rounded-2xl bg-blue-50 px-5 py-4 dark:bg-slate-900">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Search
            </span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, company, email..."
              className="mt-2 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />
          </label>
        </div>

        <div className="mt-8">
          {loading ? (
            <LeadsSkeleton />
          ) : error ? (
            <div className="rounded-3xl border border-red-200 bg-red-50 p-5 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          ) : filteredLeads.length ? (
            <>
              <div className="hidden overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:block">
                <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                  <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                    <tr>
                      <th className="px-5 py-4">Name</th>
                      <th className="px-5 py-4">Email</th>
                      <th className="px-5 py-4">Company</th>
                      <th className="px-5 py-4">Interest</th>
                      <th className="px-5 py-4">Created</th>
                      <th className="px-5 py-4">Message</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="align-top text-sm text-slate-700 dark:text-slate-200">
                        <td className="px-5 py-4 font-semibold text-slate-900 dark:text-white">{lead.name}</td>
                        <td className="px-5 py-4">{lead.email}</td>
                        <td className="px-5 py-4">{lead.company}</td>
                        <td className="px-5 py-4">{lead.interest || "-"}</td>
                        <td className="px-5 py-4">{formatDateTime(lead.createdAt)}</td>
                        <td className="px-5 py-4 text-slate-500 dark:text-slate-400">{lead.message || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-4 md:hidden">
                {filteredLeads.map((lead) => (
                  <article
                    key={lead.id}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{lead.name}</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{lead.company}</p>
                      </div>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-slate-800 dark:text-blue-300">
                        {formatDateTime(lead.createdAt)}
                      </span>
                    </div>

                    <dl className="mt-4 space-y-3 text-sm">
                      <div>
                        <dt className="font-semibold text-slate-500 dark:text-slate-400">Email</dt>
                        <dd className="text-slate-900 dark:text-white">{lead.email}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-500 dark:text-slate-400">Interest</dt>
                        <dd className="text-slate-900 dark:text-white">{lead.interest || "-"}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-slate-500 dark:text-slate-400">Message</dt>
                        <dd className="text-slate-700 dark:text-slate-300">{lead.message || "-"}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
              No leads found yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

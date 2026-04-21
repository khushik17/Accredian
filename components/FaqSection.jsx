"use client";

import { useMemo, useState } from "react";

const faqData = {
  course: [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "We offer role-based, domain-based, and level-based enterprise training paths for teams across technology, leadership, operations, and innovation.",
    },
    {
      q: "Can we customize the curriculum for our business goals?",
      a: "Yes, each program can be tailored based on your organizational KPIs, team maturity, and target outcomes.",
    },
  ],
  delivery: [
    {
      q: "Do you provide online and offline delivery options?",
      a: "Yes, we support live online, on-site classroom, and hybrid delivery models.",
    },
    {
      q: "How long does implementation usually take?",
      a: "Typical implementation ranges from 2 to 8 weeks based on audience size and learning complexity.",
    },
  ],
  misc: [
    {
      q: "How do you measure training impact?",
      a: "We use pre and post assessments, engagement metrics, manager feedback, and business KPI impact tracking.",
    },
    {
      q: "Can you train teams across multiple locations?",
      a: "Yes, we run multi-location and global cohorts with unified learning outcomes.",
    },
  ],
};

const tabMap = {
  course: "About the Course",
  delivery: "About the Delivery",
  misc: "Miscellaneous",
};

export default function FaqSection() {
  const [tab, setTab] = useState("course");
  const [openQuestion, setOpenQuestion] = useState(0);

  const questions = useMemo(() => faqData[tab], [tab]);

  return (
    <section id="faqs" className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <h2 className="text-center text-4xl font-extrabold text-slate-900 md:text-5xl">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-[320px_1fr]">
          <div className="space-y-4">
            {Object.entries(tabMap).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  setTab(key);
                  setOpenQuestion(0);
                }}
                className={`w-full rounded-xl border px-5 py-4 text-left text-xl font-semibold transition ${
                  tab === key
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-300 bg-white text-slate-700 hover:border-blue-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {questions.map((item, index) => (
              <article key={item.q} className="rounded-xl border border-slate-300 bg-white p-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenQuestion((prev) => (prev === index ? -1 : index))}
                >
                  <span className="text-2xl font-bold text-slate-900">{item.q}</span>
                  <span className="text-3xl font-bold text-blue-600">{openQuestion === index ? "-" : "+"}</span>
                </button>
                {openQuestion === index ? <p className="mt-3 text-lg text-slate-700">{item.a}</p> : null}
              </article>
            ))}
            <a href="#contact" className="inline-block rounded-xl bg-blue-600 px-8 py-3 text-lg font-semibold text-white">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

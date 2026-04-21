const processSteps = [
  {
    title: "Concept",
    text: "Understand the core idea behind the learning path.",
    icon: "01",
  },
  {
    title: "Application",
    text: "Apply the concept through guided business scenarios.",
    icon: "02",
  },
  {
    title: "Tools",
    text: "Use practical tools to reinforce performance and adoption.",
    icon: "03",
  },
];

export default function CatFrameworkSection() {
  return (
    <section id="cat" className="bg-slate-100 py-18">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">How it works</p>
          <h2 className="mt-2 text-4xl font-extrabold text-slate-900 md:text-5xl">
            <span className="text-blue-600">Concept</span> to <span className="text-blue-600">Tools</span>
          </h2>
          <p className="mt-3 text-lg text-slate-700 md:text-xl">
            A structured workflow that moves from concept understanding to applied tools.
          </p>
        </div>

        <div className="relative mt-14 hidden md:block">
          <svg className="absolute left-0 top-10 h-20 w-full" viewBox="0 0 1200 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 110 C180 20, 280 20, 420 110 C560 20, 660 20, 800 110 C920 20, 1010 20, 1180 110" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8" />
          </svg>

          <div className="grid grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <article key={step.title} className="relative z-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/30">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:hidden">
          {processSteps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-slate-300 bg-white p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

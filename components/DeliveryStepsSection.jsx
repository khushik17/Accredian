const steps = [
  {
    id: "01",
    emoji: "🧭",
    title: "Choose A Service",
    text: "Pick the focus area your team needs the most.",
  },
  {
    id: "02",
    emoji: "📝",
    title: "Define Requirements",
    text: "Align business outcomes and learning goals clearly.",
  },
  {
    id: "03",
    emoji: "🤝",
    title: "Request A Meeting",
    text: "Review timeline, scope, and cohort plan with experts.",
  },
];

export default function DeliveryStepsSection() {
  return (
    <section id="how-it-works" className="delivery-flow-section py-14 md:py-18">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="delivery-flow-heading text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-6xl">
            How We <span className="text-blue-600">Deliver Results</span> That Matter?
          </h2>
          <p className="delivery-flow-subtitle mt-3 text-sm text-slate-700 sm:text-base md:mt-4 md:text-[2rem]">
            A Structured Three-Step Approach to <span className="text-blue-600">Skill Development</span>
          </p>
        </div>

        <div className="relative mt-10 md:mt-14">
          <div className="delivery-flow-line absolute left-[9%] right-[9%] top-8 hidden border-t-2 border-dashed md:block" />

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {steps.map((step) => (
              <article
                key={step.id}
                className="relative mx-auto flex w-full max-w-sm flex-col items-center overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 px-4 py-5 text-center shadow-[0_8px_20px_rgba(37,99,235,0.08)] md:max-w-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none"
              >
                <span className="absolute left-3 top-3 grid h-6 w-6 place-items-center rounded-full border border-blue-300 bg-white text-[11px] font-semibold text-slate-700 md:left-auto md:top-0">
                  {step.id}
                </span>

                <span className="delivery-flow-bubble mt-5 grid h-14 w-14 place-items-center rounded-full text-2xl font-extrabold text-white shadow-lg md:mt-0 md:h-18 md:w-18 md:text-3xl">
                  {step.emoji}
                </span>
                <h3 className="delivery-flow-step-title mt-4 text-lg font-bold tracking-tight md:mt-6 md:text-4xl">
                  {step.title}
                </h3>
                <p className="delivery-flow-step-text mt-2 max-w-xs text-sm leading-relaxed text-slate-600 md:mt-3 md:text-lg">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

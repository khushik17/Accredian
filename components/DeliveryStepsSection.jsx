"use client";

const steps = [
  {
    id: "01",
    icon: "📈",
    title: "Skill Gap Analysis",
    text: "Assess team skill gaps and developmental needs.",
  },
  {
    id: "02",
    icon: "🖥️",
    title: "Customized Training Plan",
    text: "Create a tailored roadmap addressing organizational goals.",
  },
  {
    id: "03",
    icon: "🎬",
    title: "Flexible Program Delivery",
    text: "Deliver adaptable programs aligned with industry and organizational needs.",
  },
];

export default function DeliveryStepsSection() {
  return (
    <section
      id="how-it-works"
      className="
        delivery-flow-section
        bg-white
        py-10 sm:py-12 md:py-18
      "
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 md:px-8">

        <div className="mx-auto max-w-xl text-center">
          <h2 className="
            delivery-flow-heading
            text-[1.35rem] font-extrabold leading-tight tracking-tight
            text-slate-900
            sm:text-3xl md:text-5xl
          ">
            How We{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>
          <p className="
            delivery-flow-subtitle
            mt-3 text-[0.78rem] leading-5
            text-slate-500
            sm:text-base md:mt-4 md:text-xl
          ">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Skill Development
            </span>
          </p>
        </div>

        <div className="relative mt-8 md:mt-14">

          <div className="
            delivery-flow-line
            absolute left-[8%] right-[8%] top-1/2 hidden
            border-t-2 border-dashed
            border-blue-200
            md:block
          " />

          <div className="grid gap-4 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <article
                key={step.id}
                className="
                  delivery-flow-card
                  relative mx-auto flex w-full max-w-[90%] flex-col items-center
                  overflow-hidden rounded-[18px]
                  border border-blue-100
                  bg-white
                  px-4 pb-7 pt-6 text-center
                  shadow-[0_4px_16px_rgba(37,99,235,0.08),0_1px_4px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_8px_32px_rgba(37,99,235,0.15),0_2px_8px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:-translate-y-1
                  sm:max-w-[320px] md:max-w-none md:min-h-70 md:px-6 md:pb-10 md:pt-7
                "
              >
                <span className="
                  delivery-flow-badge
                  absolute left-3 top-3
                  grid h-6 w-6 place-items-center rounded-full
                  border border-blue-200
                  bg-blue-50
                  text-[11px] font-semibold
                  text-blue-700
                  shadow-sm
                  md:left-4 md:top-4 md:h-7 md:w-7 md:text-[12px]
                ">
                  {step.id}
                </span>

                <span className="
                  delivery-flow-bubble
                  mt-5
                  grid h-14 w-14 place-items-center rounded-full
                  bg-linear-to-br from-blue-600 to-blue-400
                  text-xl text-white
                  shadow-[0_4px_14px_rgba(37,99,235,0.35)]
                  md:mt-4 md:h-18 md:w-18 md:text-3xl
                ">
                  {step.icon}
                </span>

                <h3 className="
                  delivery-flow-step-title
                  mt-5 text-[1rem] font-bold tracking-tight
                  text-slate-900
                  md:mt-8 md:text-2xl
                ">
                  {step.title}
                </h3>

                <p className="
                  delivery-flow-step-text
                  mt-2 max-w-[16rem] text-[0.82rem] leading-relaxed
                  text-slate-500
                  md:mt-3 md:text-base
                ">
                  {step.text}
                </p>

                <span className="
                  absolute left-0 top-[40%] hidden h-20 w-2 rounded-r-full
                  bg-blue-500 dark:bg-blue-600
                  md:block
                " />

                <span className="
                  absolute right-0 top-[40%] hidden h-20 w-2 rounded-l-full
                  bg-blue-500 dark:bg-blue-600
                  md:block
                " />
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
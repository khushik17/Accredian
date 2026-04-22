const audience = [
  {
    title: "Tech Professionals",
    text: "Enhance expertise, embrace tech, and drive innovation.",
  },
  {
    title: "Non-Tech Professionals",
    text: "Adapt digitally and collaborate effectively in tech-first environments.",
  },
  {
    title: "Emerging Professionals",
    text: "Develop powerful skills for rapid career growth.",
  },
  {
    title: "Senior Professionals",
    text: "Strengthen leadership and sharpen strategic decisions.",
  },
];

export default function WhoShouldJoinSection() {
  return (
    <section className="bg-slate-50 pb-12 sm:pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-2xl bg-blue-600 px-5 py-8 text-white sm:px-6 md:grid-cols-2 md:gap-10 md:px-12 md:py-10">
        <div className="max-w-xl">
          <p className="text-xl font-semibold text-blue-100 sm:text-2xl md:text-3xl">Who Should Join?</p>
          <h3 className="mt-2 max-w-[10ch] text-3xl font-black leading-[0.95] sm:text-4xl md:text-5xl">
            Strategic Skill Enhancement
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {audience.map((item) => (
            <article key={item.title} className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm sm:p-0">
              <h4 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl">{item.title}</h4>
              <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base md:text-lg">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="bg-slate-50 pb-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-2xl bg-blue-600 px-8 py-10 text-white md:grid-cols-2 md:px-12">
        <div>
          <p className="text-3xl font-semibold text-blue-100">Who Should Join?</p>
          <h3 className="mt-2 text-5xl font-black">Strategic Skill Enhancement</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {audience.map((item) => (
            <article key={item.title}>
              <h4 className="text-3xl font-bold">{item.title}</h4>
              <p className="mt-2 text-lg text-blue-100">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

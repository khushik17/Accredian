import SectionTitle from "./SectionTitle";

const cards = [
  { title: "Tailored Solutions", icon: "Targeted" },
  { title: "Innovative Framework", icon: "Modern" },
  { title: "Diverse Offerings", icon: "Broad" },
  { title: "Flexible Delivery", icon: "Agile" },
];

export default function EdgeSection() {
  return (
    <section id="edge" className="bg-white py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionTitle
          title="The"
          highlight="Accredian Edge"
          subtitle="Key aspects of our strategic training"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{card.icon}</p>
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

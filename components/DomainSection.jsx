import SectionTitle from "./SectionTitle";

const domains = [
  { title: "Product & Innovation Hub", emoji: "💡" },
  { title: "Gen-AI Mastery", emoji: "🧠" },
  { title: "Leadership Elevation", emoji: "👥" },
  { title: "Tech & Data Insights", emoji: "📊" },
  { title: "Operations Excellence", emoji: "⚙️" },
  { title: "Digital Enterprise", emoji: "🌐" },
  { title: "Fintech Innovation Lab", emoji: "💳" },
  { title: "Global Business", emoji: "✈️" },
];

export default function DomainSection() {
  return (
    <section id="domains" className="domain-expertise-section py-18">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionTitle
          title="Our"
          highlight="Domain Expertise"
          subtitle="Specialized Programs Designed to Fuel Innovation"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {domains.map((item) => (
            <div
              key={item.title}
              className="domain-expertise-card rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-blue-50 text-3xl shadow-sm">
                <span aria-hidden="true">{item.emoji}</span>
              </div>
              <p className="text-sm font-semibold leading-tight text-slate-900 sm:text-base md:text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */

const cards = [
  {
    title: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Certificate",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Topic Specific",
    subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Level Specific",
    subtitle: "Senior Leadership, Mid-Career Professionals, Freshers",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80",
  },
];

export default function CourseSegmentationSection() {
  return (
    <section id="courses" className="bg-slate-50 py-18 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#0b1c72] shadow-[0_24px_80px_rgba(15,23,42,0.22)]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
            alt="Team projects"
            className="h-72 w-full object-cover object-center opacity-70 md:h-80"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0a2fd8]/92 via-[#1a47e8]/78 to-[#1a47e8]/18" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_38%)]" />

          <div className="absolute left-6 right-6 top-8 z-10 max-w-2xl md:left-10 md:right-auto md:top-12 lg:max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-blue-100/95 md:text-[0.76rem]">
              Tailored Course Segmentation
            </p>
            <h2 className="mt-3 max-w-[15ch] text-[1.55rem] font-black leading-[0.98] tracking-tighter text-white sm:max-w-[16ch] sm:text-[1.9rem] md:max-w-[18ch] md:text-[2.35rem] lg:max-w-[20ch] lg:text-[2.85rem]">
              Explore Custom-fit Courses
              <br />
              Designed for Every Professional Focus
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-blue-50/90 md:text-base">
              Clear learning paths for different roles, industries, and levels without crowding the layout.
            </p>
          </div>
        </div>

        <div className="-mt-6 grid gap-5 md:-mt-8 md:grid-cols-2 xl:-mt-10 xl:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative">
                <img src={card.image} alt={card.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-linear-to-r from-[#1d4ed8]/35 via-[#2563eb]/15 to-transparent" />
              </div>
              <div className="border-t border-slate-200 bg-white p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-blue-600">Section</p>
                <h3 className="mt-2 text-xl font-extrabold tracking-[-0.03em] text-slate-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

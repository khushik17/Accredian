const testimonials = [
  {
    logo: "ADP",
    quote:
      "We would like to thank Accredian for wonderful support and delivery excellence. The team turned our vision into reality with unparallelled dedication and service.",
  },
  {
    logo: "BAYER",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded with high quality support.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <h2 className="text-center text-4xl font-extrabold text-slate-900 md:text-5xl">
          Testimonials from <span className="text-blue-600">Our Partners</span>
        </h2>
        <p className="mt-3 text-center text-xl text-slate-700">
          What <span className="text-blue-600">our clients</span> are saying
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.logo} className="rounded-2xl border border-slate-300 bg-white p-8">
              <p className="text-4xl font-black text-blue-700">{item.logo}</p>
              <p className="mt-4 text-2xl text-slate-700">{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

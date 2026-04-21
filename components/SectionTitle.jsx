export default function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
        {title} {highlight ? <span className="text-blue-600">{highlight}</span> : null}
      </h2>
      {subtitle ? <p className="mt-3 text-slate-500">{subtitle}</p> : null}
    </div>
  );
}

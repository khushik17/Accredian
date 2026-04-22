import SectionTitle from "./SectionTitle";

function LoadingSkeleton() {
  return (
    <div className="relative overflow-hidden">
      <div className="partner-marquee-track flex w-max items-center gap-6 py-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex h-14 w-36 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/80 px-7 py-3 shadow-sm animate-pulse dark:border-slate-700 dark:bg-slate-800/80"
          >
            <div className="h-4 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnershipsSection({ partners, loading }) {
  const marqueePartners = [...partners, ...partners];

  return (
    <section id="clients" className="bg-slate-100 py-14">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <SectionTitle
          title="Tailored Course"
          highlight="Segmentation"
          subtitle="Explore Custom-fit Courses Designed to Address Every Professional Focus"
        />
        {loading ? (
          <LoadingSkeleton />
        ) : (
          <div className="relative overflow-hidden">
            <div className="partner-marquee-track flex w-max items-center gap-6 py-2 text-xl font-bold italic text-slate-500 grayscale">
              {marqueePartners.map((partner, index) => (
                <span
                  key={`${partner}-${index}`}
                  className="shrink-0 rounded-full border border-slate-300 bg-white px-7 py-3 text-lg"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

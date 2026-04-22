import LeadCaptureForm from "./LeadCaptureForm";

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="lead-section relative overflow-hidden bg-[#080a2a] py-12 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 md:grid-cols-[1.05fr_0.95fr] md:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">
            Enterprise enquiries
          </p>
          <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight sm:text-3xl md:text-5xl">
            Want to learn more about our training solutions?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
            Share your team details and we&apos;ll route the enquiry to the right enterprise specialist.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2">Custom programs</span>
            <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2">Fast callback</span>
            <span className="rounded-full border border-white/20 bg-white/12 px-4 py-2">API backed</span>
          </div>
        </div>

        <LeadCaptureForm />
      </div>
    </section>
  );
}

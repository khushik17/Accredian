export default function Loading() {
  return (
    <div className="bg-background min-h-screen px-4 py-6 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="h-16 rounded-3xl bg-white/70 shadow-sm animate-pulse dark:bg-slate-800/70" />

        <section className="overflow-hidden rounded-[40px] bg-linear-to-r from-blue-100 via-blue-50 to-blue-100 p-6 shadow-sm dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-4">
              <div className="h-4 w-40 rounded-full bg-white/70 animate-pulse dark:bg-slate-700/70" />
              <div className="h-16 w-full max-w-xl rounded-2xl bg-white/70 animate-pulse dark:bg-slate-700/70" />
              <div className="h-4 w-full max-w-lg rounded-full bg-white/70 animate-pulse dark:bg-slate-700/70" />
              <div className="h-4 w-5/6 rounded-full bg-white/70 animate-pulse dark:bg-slate-700/70" />
              <div className="flex gap-3 pt-4">
                <div className="h-11 w-36 rounded-xl bg-white/70 animate-pulse dark:bg-slate-700/70" />
                <div className="h-11 w-28 rounded-xl bg-white/50 animate-pulse dark:bg-slate-700/50" />
              </div>
            </div>

            <div className="rounded-4xl border border-white/60 bg-white/70 p-4 shadow-lg animate-pulse dark:border-slate-700/50 dark:bg-slate-800/70">
              <div className="aspect-4/3 rounded-3xl bg-slate-200/80 dark:bg-slate-700/80" />
            </div>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-36 rounded-3xl bg-white/70 animate-pulse dark:bg-slate-800/70" />
          <div className="h-36 rounded-3xl bg-white/70 animate-pulse dark:bg-slate-800/70" />
          <div className="h-36 rounded-3xl bg-white/70 animate-pulse dark:bg-slate-800/70" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-80 rounded-4xl bg-white/70 animate-pulse dark:bg-slate-800/70" />
          <div className="h-80 rounded-4xl bg-white/70 animate-pulse dark:bg-slate-800/70" />
        </div>
      </div>
    </div>
  );
}
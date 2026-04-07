export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          DeniCal
        </p>

        <h1 className="mb-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          Your intelligent calendar.
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">
          A planning system that combines structured scheduling with flexible,
          ADHD-friendly follow-through.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="/calendar"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-90"
          >
            Open Calendar
          </a>

          <a
            href="/settings"
            className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-900"
          >
            Settings
          </a>
        </div>
      </div>
    </main>
  );
}
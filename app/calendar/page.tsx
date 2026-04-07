export default function CalendarPage() {
  const hours = [
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-slate-800 bg-slate-900 p-5">
          <h1 className="text-2xl font-semibold">DeniCal</h1>
          <p className="mt-1 text-sm text-slate-400">
            Plan clearly. Follow through gently.
          </p>

          <nav className="mt-8 space-y-2">
            <a
              href="/calendar"
              className="block rounded-lg bg-slate-800 px-3 py-2 text-sm"
            >
              Calendar
            </a>
            <a
              href="/"
              className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
            >
              Home
            </a>
            <a
              href="/settings"
              className="block rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800"
            >
              Settings
            </a>
          </nav>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Tasks
            </h2>

            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-700 bg-slate-950 p-3">
                <p className="font-medium">Write proposal</p>
                <p className="text-sm text-slate-400">30 min</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-950 p-3">
                <p className="font-medium">Reply to emails</p>
                <p className="text-sm text-slate-400">15 min</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-950 p-3">
                <p className="font-medium">Plan tomorrow</p>
                <p className="text-sm text-slate-400">10 min</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Calendar
              </p>
              <h2 className="mt-1 text-3xl font-semibold">Weekly Planner</h2>
            </div>

            <button className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-slate-950">
              + Add Task
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="grid grid-cols-6 border-b border-slate-800">
              <div className="border-r border-slate-800 p-3 text-sm text-slate-400">
                Time
              </div>

              {days.map((day) => (
                <div
                  key={day}
                  className="border-r border-slate-800 p-3 text-center text-sm font-medium last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>

            {hours.map((hour) => (
              <div key={hour} className="grid min-h-20 grid-cols-6 border-b border-slate-800 last:border-b-0">
                <div className="border-r border-slate-800 p-3 text-sm text-slate-400">
                  {hour}
                </div>

                {days.map((day) => (
                  <div
                    key={`${day}-${hour}`}
                    className="border-r border-slate-800 p-2 last:border-r-0"
                  >
                    {day === "Tue" && hour === "10 AM" && (
                      <div className="rounded-lg bg-blue-500/20 p-2 text-sm">
                        <p className="font-medium text-blue-200">
                          Team meeting
                        </p>
                        <p className="text-blue-100/80">10:00–11:00</p>
                      </div>
                    )}

                    {day === "Thu" && hour === "2 PM" && (
                      <div className="rounded-lg bg-emerald-500/20 p-2 text-sm">
                        <p className="font-medium text-emerald-200">
                          Deep work block
                        </p>
                        <p className="text-emerald-100/80">2:00–3:00</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
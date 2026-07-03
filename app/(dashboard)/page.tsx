export default function DashboardHomePage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">Your career dashboard</h1>
        <p className="mt-2 text-slate-300">Track resumes, discover jobs, and get AI coaching in one place.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
          <h2 className="font-medium">Resume score</h2>
          <p className="mt-2 text-sm text-slate-300">Ready to improve.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
          <h2 className="font-medium">Saved jobs</h2>
          <p className="mt-2 text-sm text-slate-300">Keep an eye on your shortlist.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
          <h2 className="font-medium">AI coach</h2>
          <p className="mt-2 text-sm text-slate-300">Get actionable interview tips.</p>
        </div>
      </div>
    </section>
  );
}

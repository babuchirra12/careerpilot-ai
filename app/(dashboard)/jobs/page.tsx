import Link from "next/link";
import JobList from "../../../components/dashboard/JobList";

const jobs = [
  {
    title: "Senior Product Manager, AI Platform",
    company: "Lumina Labs",
    location: "Remote",
    level: "Senior",
    tags: ["AI", "Product", "Remote"],
    score: "9.2",
  },
  {
    title: "Growth Marketing Lead",
    company: "CareerPilot",
    location: "New York, NY",
    level: "Mid-level",
    tags: ["Marketing", "Strategy", "Hybrid"],
    score: "8.7",
  },
  {
    title: "Data Science Manager",
    company: "NovaHire",
    location: "San Francisco, CA",
    level: "Manager",
    tags: ["Analytics", "AI", "Leadership"],
    score: "8.9",
  },
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <span className="inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
                Explore roles
              </span>
              <div className="space-y-2">
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                  Recommended roles for you
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  A handpicked selection of roles based on your profile, goals, and AI-driven career preferences.
                </p>
              </div>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/85 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-sky-400 hover:bg-slate-900"
            >
              Back to dashboard
            </Link>
          </div>

          <JobList jobs={jobs} />
        </div>
      </div>
    </main>
  );
}

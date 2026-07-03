import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-900/80 px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <h2 className="text-lg font-semibold">CareerPilot AI</h2>
          <nav className="flex gap-4 text-sm text-slate-300">
            <a href="/resume" className="hover:text-white">Resume</a>
            <a href="/jobs" className="hover:text-white">Jobs</a>
            <a href="/ai-coach" className="hover:text-white">AI Coach</a>
            <a href="/profile" className="hover:text-white">Profile</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-0">
        <div className="flex items-center gap-4">
          <div className="font-semibold text-lg">CareerPilot AI</div>
        </div>

        <div className="hidden sm:flex sm:items-center sm:gap-4 text-sm text-slate-300">
          <a href="/resume" className="hover:text-white">Resume</a>
          <a href="/jobs" className="hover:text-white">Jobs</a>
          <a href="/analytics" className="hover:text-white">Analytics</a>
          <a href="/ai-coach" className="hover:text-white">AI Coach</a>
          <a href="/profile" className="hover:text-white">Profile</a>
        </div>

        <div className="sm:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md bg-slate-900/60 p-2 text-slate-200"
          >
            <svg className={`h-6 w-6 transition-transform ${open ? "rotate-90" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden mt-3 rounded-lg border border-white/6 bg-slate-900/80 p-3 text-sm text-slate-200">
          <a href="/resume" className="block py-2 hover:text-white">Resume</a>
          <a href="/jobs" className="block py-2 hover:text-white">Jobs</a>
          <a href="/analytics" className="block py-2 hover:text-white">Analytics</a>
          <a href="/ai-coach" className="block py-2 hover:text-white">AI Coach</a>
          <a href="/profile" className="block py-2 hover:text-white">Profile</a>
        </div>
      )}
    </div>
  );
}

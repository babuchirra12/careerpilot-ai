import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-5">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur">
        {children}
      </div>
    </main>
  );
}

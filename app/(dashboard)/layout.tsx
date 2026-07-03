import type { ReactNode } from "react";
import ResponsiveNavbar from "../../components/ResponsiveNavbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-900/80 px-6 py-4">
        <ResponsiveNavbar />
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}

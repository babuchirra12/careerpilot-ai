export default function ProfileSummary({ profile }: { profile?: any }) {
  const p = profile || {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    location: "New York, NY",
    goal: "Product strategy leadership",
    industry: "Tech / AI",
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.25)]">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-800 text-2xl font-semibold text-white">AM</div>
        <div>
          <p className="text-sm text-slate-400">Signed in as</p>
          <p className="text-lg font-semibold text-white">{p.name}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-sm text-slate-400">
        <div className="rounded-2xl bg-slate-900/90 p-4">
          <p className="font-semibold text-white">Work email</p>
          <p>{p.email}</p>
        </div>
        <div className="rounded-2xl bg-slate-900/90 p-4">
          <p className="font-semibold text-white">Location</p>
          <p>{p.location}</p>
        </div>
      </div>
    </div>
  );
}

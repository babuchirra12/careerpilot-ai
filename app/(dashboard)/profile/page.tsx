import ProfileSummary from "../../../components/dashboard/ProfileSummary";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8">
          <div className="space-y-4">
            <ProfileSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

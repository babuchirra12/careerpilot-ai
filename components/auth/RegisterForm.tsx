"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Job seeker",
    location: "",
    agreeToTerms: false,
  });

  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const target = event.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [name]: target.checked }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.password || !form.confirmPassword) {
      setMessage("Please fill in all required fields.");
      return;
    }

    if (form.password.length < 8) {
      setMessage("Password should be at least 8 characters long.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (!form.agreeToTerms) {
      setMessage("Please accept the terms and privacy policy.");
      return;
    }

    setMessage(`Welcome aboard, ${form.fullName}! Your account is ready.`);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-slate-950/95 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8">
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Create account
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-white">Build your career with confidence</h2>
          <p className="text-sm leading-7 text-slate-400">
            Sign up for CareerPilot AI to upload resumes, discover curated roles, and receive intelligent coaching tailored to your goals.
          </p>
        </div>
      </div>

      <form className="space-y-5 pt-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="block text-sm text-slate-300">
            <span className="block pb-2 font-medium text-slate-100">Full name</span>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Alex Morgan"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
            />
          </label>

          <label className="block text-sm text-slate-300">
            <div className="flex items-center justify-between pb-2">
              <span className="font-medium text-slate-100">Work email</span>
              <span className="group relative inline-flex cursor-pointer items-center rounded-full bg-slate-900 px-2 py-1 text-[10px] tracking-[0.2em] text-sky-300 shadow-sm ring-1 ring-slate-700 transition duration-200 hover:bg-slate-800">
                info
                <span className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 mt-2 hidden w-64 rounded-2xl border border-slate-700/90 bg-slate-950 px-3 py-2 text-xs text-slate-200 shadow-xl ring-1 ring-white/10 group-hover:block">
                  We use this address for login, account updates, and password resets.
                </span>
              </span>
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="alex.morgan@example.com"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
            />
            <p className="mt-2 text-xs text-slate-500">Use this email for login.</p>
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-300">
            <span className="block pb-2 font-medium text-slate-100">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
            />
          </label>

          <label className="block text-sm text-slate-300">
            <span className="block pb-2 font-medium text-slate-100">Confirm password</span>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-300">
            <span className="block pb-2 font-medium text-slate-100">Career stage</span>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none transition duration-200 focus:border-sky-400 focus:bg-slate-900"
            >
              <option>Job seeker</option>
              <option>Student</option>
              <option>Career changer</option>
              <option>Experienced professional</option>
            </select>
          </label>

          <label className="block text-sm text-slate-300">
            <span className="block pb-2 font-medium text-slate-100">Location</span>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="New York, NY"
              className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
            />
          </label>
        </div>

        <label className="flex items-start gap-3 rounded-2xl border border-slate-700/80 bg-slate-950/85 p-4 text-sm text-slate-300 transition duration-200 hover:border-sky-400">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={form.agreeToTerms}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-400 focus:ring-sky-400"
          />
          <span>
            I agree to the <strong className="text-white">Terms of Service</strong> and <strong className="text-white">Privacy Policy</strong>.
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-650 transition duration-200 hover:bg-sky-400"
        >
          Create account
        </button>
      </form>

      {message ? (
        <p className="rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm text-sky-200">
          {message}
        </p>
      ) : null}

      <p className="text-center text-sm text-slate-400">
        Already have an account?{' '}
        <a href="/login" className="font-medium text-sky-300 hover:text-sky-200">
          Log in
        </a>
      </p>
    </div>
  );
}

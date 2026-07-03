"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Please enter both email and password.");
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-[32px] border border-white/10 bg-slate-950/95 p-6 shadow-[0_40px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:p-8">
      <div className="space-y-4 border-b border-white/10 pb-6">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Sign in
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Welcome back</h2>
          <p className="text-sm leading-7 text-slate-400">
            Enter your work email and password to continue your career journey with CareerPilot AI.
          </p>
        </div>
      </div>

      <form className="space-y-5 pt-4" onSubmit={handleSubmit}>
        <label className="block text-sm text-slate-300">
          <span className="block pb-2 font-medium text-slate-100">Work email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="alex.morgan@example.com"
            className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
          />
        </label>

        <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
          <label className="inline-flex items-center gap-3 text-slate-300">
            <input
              type="checkbox"
              name="rememberMe"
              checked={form.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-sky-400 focus:ring-sky-400"
            />
            Remember me
          </label>
          <a href="#" className="font-medium text-sky-300 hover:text-sky-200">
            Forgot password?
          </a>
        </div>

        <label className="block text-sm text-slate-300">
          <span className="block pb-2 font-medium text-slate-100">Password</span>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded-2xl border border-slate-700/80 bg-slate-950/85 px-4 py-3 text-sm text-white outline-none ring-0 transition duration-200 placeholder:text-slate-500 focus:border-sky-400 focus:bg-slate-900"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-sky-400"
        >
          Sign in
        </button>
      </form>

      {message ? (
        <p className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/10 px-4 py-3 text-sm text-sky-200">
          {message}
        </p>
      ) : null}

      <p className="mt-6 text-center text-sm text-slate-400">
        New to CareerPilot AI?{' '}
        <a href="/register" className="font-medium text-sky-300 hover:text-sky-200">
          Create account
        </a>
      </p>
    </div>
  );
}

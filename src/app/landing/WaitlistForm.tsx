"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type FormState = {
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
};

export default function WaitlistForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    position: "",
    company: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  const phoneDigits = (v: string) => v.replace(/\D/g, "");
  const allFilled = Object.values(form).every((v) => v.trim().length > 0);

  const isValid = useMemo(() => {
    if (!allFilled) return false;
    if (!isEmail(form.email)) return false;
    if (phoneDigits(form.phone).length < 7) return false; // minimal sanity check
    return true;
  }, [form, allFilled]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!endpoint) {
      setError("Form endpoint not configured.");
      return;
    }
    if (!isValid) {
      setError("Please complete all fields with valid details.");
      return;
    }

    try {
      setStatus("submitting");
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "workpapers-landing",
        }),
      });

      if (!resp.ok) {
        const j = await resp.json().catch(() => ({}));
        throw new Error(j?.error || `HTTP ${resp.status}`);
      }

      setStatus("success");
      setForm({ name: "", position: "", company: "", email: "", phone: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="rounded-xl bg-white p-4 sm:p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Join the waitlist</h2>

      {status === "success" ? (
        <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-900">
          Thanks! You’re on the list. We’ll be in touch soon.
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-4 space-y-3" noValidate>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-slate-700">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-700">Position</label>
              <input
                type="text"
                value={form.position}
                onChange={(e) => setForm({ ...form, position: e.target.value })}
                required
                placeholder="Partner / Senior / Manager…"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-slate-700">Company</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                required
                placeholder="Firm name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-slate-700">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                placeholder="you@firm.co.uk"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-slate-700">Contact number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              placeholder="Contact number"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-slate-400"
            />
          </div>

          {error && <p className="text-sm text-rose-600">{error}</p>}

          <button
            type="submit"
            disabled={status === "submitting" || !isValid}
            className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Join Waitlist"}
          </button>
        </form>
      )}
    </div>
  );
}

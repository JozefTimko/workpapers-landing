"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-sm font-semibold tracking-tight text-slate-900">
          WorkPapers.ai
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link
            className="text-slate-600 hover:text-slate-900"
            href="/privacy"
          >
            Privacy
          </Link>
          <a
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800"
            href="#waitlist"
          >
            Join waitlist
          </a>
        </nav>
      </div>
    </header>
  );
}

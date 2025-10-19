"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 text-neutral-400">The page you’re looking for doesn’t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg border border-neutral-700 px-4 py-2 hover:bg-neutral-800"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}

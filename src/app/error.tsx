"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 grid place-items-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-neutral-400">{error?.message || "Unexpected error."}</p>
        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg border border-neutral-700 px-4 py-2 hover:bg-neutral-800"
        >
          Try again
        </button>
      </div>
    </main>
  );
}

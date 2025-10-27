"use client";

import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import Video from "./video";
// You can remove these if unused, they won’t break the build:
import { useEffect, useRef, useState } from "react";

/* ---------- Layout helpers ---------- */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>;
}

function Section({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`py-12 sm:py-16 scroll-mt-14 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** XL image card helper */
function PromoImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 shadow-sm flex items-center justify-center ${className}`}
    >
      <div
        className="rounded-2xl flex items-center justify-center overflow-hidden w-full"
        style={{
          background:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1.6px)",
          backgroundSize: "18px 18px",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1400}
          className="w-full h-auto object-contain"
          sizes="(min-width:1280px) 1120px, 100vw"
          priority={priority}
        />
      </div>
    </div>
  );
}

/* ---------- Problem → Solution (updated, box removed) ---------- */
function ProblemSolution() {
  return (
    <Section id="problem-solution" className="pt-0">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900 px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
            Waste hours building workpapers?
          </h2>
          <p className="mt-3 text-neutral-300">
            Let AI handle the repetitive aspects so you can review, not build.
          </p>
        </div>

        {/* Solution content (no box) */}
        <div className="mx-auto mt-8 max-w-4xl text-left sm:text-center">
          <h3 className="text-lg font-semibold text-neutral-50">
            AI generated workpapers, ready for review
          </h3>
          <ul className="mt-3 space-y-2 text-neutral-300">
            <li>• AI builds complete Excel workpapers automatically</li>
            <li>• Designed for faster, cleaner year end files</li>
            <li>• Outputs clean Excel workpapers ready for review</li>
            <li>• Variances and movements verified automatically</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Page ---------- */
export default function Landing() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 [scroll-behavior:smooth] pt-14">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <Container className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <span className="text-base font-semibold text-neutral-100">WorkPapers.ai</span>
          </div>
          <nav aria-label="Section navigation" className="flex items-center gap-2">
            <a
              href="#how-it-works"
              className="rounded-full border border-neutral-800 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              How it works
            </a>
            <a
              href="#demos"
              className="rounded-full border border-neutral-800 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              Demo
            </a>
            <a
              href="#waitlist"
              className="rounded-full border border-neutral-800 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              Join Waitlist
            </a>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <Section id="hero" className="pt-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-neutral-50">
            AI Workpapers
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-300">Built for accountants.</p>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#waitlist"
            className="rounded-full bg-sky-600 hover:bg-sky-500 px-6 py-3 text-base font-medium text-white shadow transition-colors duration-200"
          >
            Join the Waitlist
          </a>
        </div>
      </Section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 bg-neutral-950">
        <div className="mx-auto text-center mb-20 px-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-50">
            How it works
          </h2>
        </div>

        {/* Xero → Workpapers */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-32 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 lg:px-16">
          {/* Text */}
          <div className="max-w-2xl space-y-5">
            <h3 className="text-3xl sm:text-4xl font-semibold text-neutral-50 leading-snug">
              From Xero to workpapers in seconds
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Connect to Xero, upload your prior year workpaper and let AI do the rest. In moments,
              receive automatically generated workpapers ready for review.
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 text-base sm:text-lg">
              <li>Build full workpapers in seconds</li>
              <li>Automatically prepared schedules</li>
              <li>Workpapers structured for review</li>
            </ul>
          </div>

          {/* GIF */}
          <div className="flex-1 w-full">
            <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto object-contain bg-black rounded-3xl"
                style={{ maxHeight: "1000px" }}
              >
                <source src="/videos/tinyvid_optimized_xerogif.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Bank Statement → Workpapers */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-6 lg:px-16">
          {/* GIF */}
          <div className="flex-1 w-full">
            <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto object-contain bg-black rounded-3xl"
                style={{ maxHeight: "1000px" }}
              >
                <source src="/videos/tinyvid_optimized_bsgif.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Text */}
          <div className="max-w-2xl space-y-5">
            <h3 className="text-3xl sm:text-4xl font-semibold text-neutral-50 leading-snug">
              From bank statements to workpapers
            </h3>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
              Upload a bank statement and automatically convert it into a structured Excel cashbook
              analysis. Transactions are categorised automatically, giving you a ready-made schedule.
            </p>
            <ul className="list-disc list-inside text-neutral-400 space-y-2 text-base sm:text-lg">
              <li>Turn bank statements into workpapers</li>
              <li>Automatically categorised transactions</li>
              <li>Workpapers prepared for review</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <ProblemSolution />

      {/* See it in action */}
      <Section id="demos" className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-50 text-center">
          See it in action
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-sm">
            <p className="text-center text-neutral-300 mb-3">
              Starting from Xero, instantly generate full workpapers with the necessary schedules and
              narratives.
            </p>
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800">
              <Video videoId="vgAd_M-C-yE" title="Xero → Workpapers" />
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-sm">
            <p className="text-center text-neutral-300 mb-3">
              Start with a bank statement and automatically turn it into categorised workpapers for
              review.
            </p>
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800">
              <Video videoId="2rdn8WgZcB4" title="Bank statement → Excel cashbook" />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="waitlist" className="py-0">
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-neutral-50">
                Be first to automate your workpapers.
              </h3>
              <p className="mt-1 text-neutral-300">
                Join the waitlist — we’ll reach out as soon as early access opens.
              </p>
              <p className="mt-3 text-sm font-medium text-sky-400">
                Join before the waitlist closes.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3 sm:p-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

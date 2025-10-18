// Variant 2 — dark slate with blue accents
import type { Metadata } from "next";
import Image from "next/image";
import WaitlistForm from "../../WaitlistForm";
import Video from "../../video";
import Footer from "../../parts/Footer";

export const metadata: Metadata = {
  title: "WorkPapers.ai — Variant 2",
  description: "Dark slate base with blue accents and high contrast.",
};

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`}>{children}</div>;
}

function Section({ children, id, className = "" }: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={`py-12 sm:py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-1 text-sm text-slate-300">{body}</p>
    </div>
  );
}

export default function LandingVariant2() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="WorkPapers logo" width={40} height={40} className="h-10 w-10 rounded-lg" priority />
          <span className="text-lg font-semibold text-white">WorkPapers.ai</span>
        </div>
      </header>

      {/* Hero */}
      <Section className="pt-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-8xl font-semibold tracking-tight bg-gradient-to-b from-blue-200 to-white bg-clip-text text-transparent">AI Workpapers</h1>
          <p className="mt-4 text-lg text-slate-300">Built specifically for accountants preparing year-end accounts.</p>
        </div>
      </Section>

      {/* Demos */}
      <Section className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-white text-center">See it in action</h2>
        <p className="mt-2 text-center text-slate-300">Two short demos: Xero → workpapers and bank statement extraction.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-3 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-700">
              <Video videoId="tXd4h9Su0mE" title="Xero → Workpapers" />
            </div>
            <p className="mt-2 text-center text-xs text-slate-400">Connect Xero and generate year-end workpapers with suggested narratives.</p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-3 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl border border-slate-700">
              <Video videoId="CGcSjqXgvR8" title="Bank statement → Excel cashbook" />
            </div>
            <p className="mt-2 text-center text-xs text-slate-400">Bank statement (PDF) converted into an Excel cashbook with allocations and review flags.</p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <h2 className="text-2xl font-semibold tracking-tight text-white text-center">Why firms choose WorkPapers</h2>
        <p className="mt-2 text-center text-slate-300">Fast imports, accurate schedules, and partner-ready exports.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Feature title="Connect Xero in minutes" body="Secure OAuth; pull TB, GL and journals for your chosen period." />
          <Feature title="AI bank statement → workbook" body="Upload a PDF and get a clean cashbook with suggested classifications." />
          <Feature title="Year-end built-ins" body="Lead schedules, movement analysis, variance notes, review points." />
          <Feature title="One-click Excel export" body="Nominal tabs, TB and supporting schedules — formatted for review." />
          <Feature title="Accountant-grade controls" body="Mapping overrides, audit trail, and change logs for seniors." />
          <Feature title="Privacy by default" body="Data minimisation, encryption, and strict vendor controls." />
        </div>
      </Section>

      {/* CTA band */}
      <Section id="waitlist" className="py-0">
        <div className="rounded-3xl bg-blue-600 p-6 sm:p-8">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">Be first to try WorkPapers</h3>
              <p className="mt-1 text-blue-100">Join the waitlist and we’ll notify you when early access opens.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-3 sm:p-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}



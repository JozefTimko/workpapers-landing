"use client";

import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import Video from "./video";
import Footer from "./parts/Footer";
import { useState } from "react";

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
  // scroll-mt-* prevents the sticky header from covering the anchor target
  return (
    <section id={id} className={`py-12 sm:py-16 scroll-mt-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** XL image card that shows screenshots in their original aspect (no crop/trim) */
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

export default function Landing() {
  const features = [
    {
      key: "save-time",
      title: "Save Hours Per Job",
      summary:
        "Automate trial balance imports, schedules, and workpapers — finish in minutes instead of hours.",
      details: (
        <div className="space-y-3">
          <p>Plug in your data once. WorkPapers builds the workpaper pack for you.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Connect Xero / QuickBooks and select the year or period.</li>
            <li>Auto-generate lead schedules and movement analysis.</li>
            <li>Export to Excel with tabs for TB, nominals, and support.</li>
          </ul>
        </div>
      ),
    },
    {
      key: "error-free",
      title: "Error-Free Workpapers",
      summary: "Reduce manual input and avoid formula mistakes with AI-verified consistency.",
      details: (
        <div className="space-y-3">
          <p>Your mapping and totals stay aligned across every sheet.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Automated cross-checks between TB, journals, and schedules.</li>
            <li>Flags unusual balances and missing mappings.</li>
            <li>Audit trail for every override you apply.</li>
          </ul>
        </div>
      ),
    },
    {
      key: "partner-ready",
      title: "Partner-Ready Output",
      summary:
        "Generate clean, standardised Excel workpapers your reviewers will actually enjoy checking.",
      details: (
        <div className="space-y-3">
          <p>Consistent formatting and clear sign-posting speeds up review.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Neat nominal tabs with subtotals and links back to the TB.</li>
            <li>Inline narratives and supporting notes where they matter.</li>
            <li>One-click export designed for partner sign-off.</li>
          </ul>
        </div>
      ),
    },
    {
      key: "fewer-points",
      title: "Fewer Review Points",
      summary:
        "Get clear variance notes and supporting schedules that anticipate partner queries.",
      details: (
        <div className="space-y-3">
          <p>Proactive commentary reduces back-and-forth.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Year-on-year movement explanations pulled from the data.</li>
            <li>Bank extractions classified with “Needs Review” flags.</li>
            <li>Change log shows exactly what was adjusted and why.</li>
          </ul>
        </div>
      ),
    },
  ];

  const [active, setActive] = useState<string | null>(features[0].key);

  return (
    // scroll behavior for anchor links
    <main className="min-h-screen bg-neutral-950 text-neutral-100 [scroll-behavior:smooth]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="WorkPapers logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl"
            priority
          />
          <span className="text-lg font-semibold text-neutral-100">WorkPapers.ai</span>
        </div>
      </header>

      {/* Sticky in-page nav */}
      <nav
        aria-label="Section navigation"
        className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60"
      >
        <Container className="flex flex-wrap items-center gap-2 py-3">
          <a
            href="#description"
            className="rounded-full border border-neutral-800 px-3.5 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900"
          >
            Overview
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
            Contact / Waitlist
          </a>
        </Container>
      </nav>

      {/* Hero */}
      <Section id="hero" className="pt-8">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-neutral-50">
            AI Workpapers
          </h1>
          <p className="mt-4 text-lg text-neutral-300">
            Built for real accounting workflows — your expertise, amplified by AI.
          </p>
        </div>
      </Section>

      {/* =========================
          Promo Section (Description)
         ========================= */}
      <Section id="description" className="pt-0">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900 px-4 py-12 sm:px-8 sm:py-16 text-neutral-100">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
              Automate your accounts preparation workpapers in seconds.
            </h2>
            <p className="mt-3 text-neutral-300">
              Built for accountants, powered by AI. Workpapers that build themselves — accurate,
              consistent and ready for review.
            </p>
          </div>

          {/* Row 1 — LEFT (image left, text right) */}
          <div className="mx-auto mt-12 grid max-w-[1600px] items-center gap-12 lg:grid-cols-12">
            <PromoImage
              src="/screenshots/Screenshot3.png"
              alt="Movement analysis with narrative comments"
              className="lg:col-span-9"
              priority
            />
            <div className="lg:col-span-3">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 shadow ring-1 ring-neutral-800">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" className="text-neutral-200 fill-current">
                  <path d="M12 2l1.8 4.6L18 8l-4.2 1.4L12 14l-1.8-4.6L6 8l4.2-1.4L12 2zM5 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zm13-2l1.2 2.4L22 17l-2.8.6L18 20l-1.2-2.4L14 17l2.8-.6L18 14z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-50">Work smarter from the very first click</h3>
              <p className="mt-2 text-neutral-300">
                Choose your workflow — Xero, QuickBooks, or bank statements — and let the AI generate
                structured workpapers instantly, ready for review in minutes.
              </p>
            </div>
          </div>

          {/* Row 2 — RIGHT (text left, image right) */}
          <div className="mx-auto mt-12 grid max-w-[1600px] items-center gap-12 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-3">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 shadow ring-1 ring-neutral-800">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" className="text-neutral-200 fill-current">
                  <path d="M2.5 12.5l18-9-4.5 16.5-5-5-8.5-2.5zM11 14l3.5 3.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-50">Turn bank statements into clean workpapers</h3>
              <p className="mt-2 text-neutral-300">
                Each transaction intelligently grouped into income and expense categories. Get a
                ready-made cashbook analysis in seconds.
              </p>
            </div>
            <PromoImage
              src="/screenshots/Screenshot4.png"
              alt="Cashbook Excel sheet auto-categorised from bank statement"
              className="order-1 lg:order-2 lg:col-span-9"
            />
          </div>

          {/* Row 3 — LEFT (image left, text right) */}
          <div className="mx-auto mt-12 grid max-w-[1600px] items-center gap-12 lg:grid-cols-12">
            <PromoImage
              src="/screenshots/Screenshot5.png"
              alt="Fixed asset schedule reconciled to trial balance"
              className="lg:col-span-9"
            />
            <div className="lg:col-span-3">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 shadow ring-1 ring-neutral-800">
                <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" className="text-neutral-200 fill-current">
                  <path d="M7 2h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V7h3.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-neutral-50">AI-generated schedules, ready for review</h3>
              <p className="mt-2 text-neutral-300">
                Automatically builds schedules from your accounting data. Each sheet reconciles to the
                TB, with movements and totals calculated for you.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Demos */}
      <Section id="demos" className="pt-0">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-50 text-center">See it in action</h2>
        <p className="mt-2 text-center text-neutral-300">
          Two short demos: Xero → workpapers and bank statement extraction.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* LEFT: Xero → Workpapers */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800">
              <Video videoId="tXd4h9Su0mE" title="Xero → Workpapers" />
            </div>
            <p className="mt-2 text-center text-xs text-neutral-400">
              Connect Xero and generate year-end workpapers with suggested narratives.
            </p>
          </div>

          {/* RIGHT: Bank statement → Excel */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800">
              <Video videoId="CGcSjqXgvR8" title="Bank statement → Excel cashbook" />
            </div>
            <p className="mt-2 text-center text-xs text-neutral-400">
              Bank statement (PDF) converted into an Excel cashbook with allocations and review flags.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA band */}
      <Section id="waitlist" className="py-0">
        <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8">
          <div className="grid items-center gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-neutral-50">Be first to try WorkPapers</h3>
              <p className="mt-1 text-neutral-300">
                Join the waitlist and we’ll notify you when early access opens.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3 sm:p-4">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

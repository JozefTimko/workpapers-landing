// src/app/landing/page.tsx
import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import Footer from "./parts/Footer";
import Video from "./video"; // ← direct import, no dynamic()

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
    // align anchor jumps with the fixed header height
    <section id={id} className={`py-12 sm:py-16 scroll-mt-14 ${className}`}>
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
  return (
    // add top padding = header height so content doesn't sit under it
    <main className="min-h-screen bg-neutral-950 text-neutral-100 [scroll-behavior:smooth] pt-14">
      {/* ✅ Combined fixed header (logo/title + pills on the same line) */}
      <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <Container className="flex h-full items-center justify-between">
          {/* Left: logo + name */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="WorkPapers logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-xl"
              priority
            />
            <span className="text-base font-semibold text-neutral-100">WorkPapers.ai</span>
          </div>

          {/* Right: pills */}
          <nav aria-label="Section navigation" className="flex items-center gap-2">
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
          </nav>
        </Container>
      </header>

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

      {/* Promo Section */}
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

          {/* Row 1 */}
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

          {/* Row 2 */}
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

          {/* Row 3 */}
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
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-3 shadow-sm">
            <div className="aspect-video overflow-hidden rounded-xl border border-neutral-800">
              <Video videoId="tXd4h9Su0mE" title="Xero → Workpapers" />
            </div>
            <p className="mt-2 text-center text-xs text-neutral-400">
              Connect Xero and generate year-end workpapers with suggested narratives.
            </p>
          </div>

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

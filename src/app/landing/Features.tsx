export default function Features() {
    const items = [
      {
        title: "Connect Xero in minutes",
        body: "Secure OAuth flow; pull TB, GL, and journals for your chosen period. No CSV juggling.",
      },
      {
        title: "AI-assisted bank statement → workbook",
        body: "Upload a PDF bank statement and get a clean Excel cashbook with suggested classifications and flags for review.",
      },
      {
        title: "Year-end built-ins",
        body: "Lead schedules, movement analysis, variance notes, and review points tailored for accounts prep (not audit).",
      },
      {
        title: "Export that partners trust",
        body: "One-click Excel export with nominal tabs, TB, and supporting schedules—formatted and ready to file.",
      },
      {
        title: "Accountant-grade controls",
        body: "Clear mapping, override controls, and change logs so seniors can review confidently.",
      },
    ];
  
    return (
      <section className="mx-auto mt-12 max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          Do more, reconcile less
        </h2>
        <p className="mt-2 text-slate-600">
          Workpapers built for accountants: fast imports, accurate schedules, and review-ready outputs.
        </p>
  
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.body}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
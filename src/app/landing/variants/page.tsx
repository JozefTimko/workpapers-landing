// Variants index — quick links to 10 visual themes
import Link from "next/link";

const items = [
  { href: "/landing/variants/variant1", title: "Variant 1", desc: "Dark minimal with indigo accents" },
  { href: "/landing/variants/variant2", title: "Variant 2", desc: "Dark slate with blue accents" },
  { href: "/landing/variants/variant3", title: "Variant 3", desc: "Charcoal with orange accents" },
  { href: "/landing/variants/variant4", title: "Variant 4", desc: "Deep teal on charcoal" },
  { href: "/landing/variants/variant5", title: "Variant 5", desc: "Dark mint (emerald on slate)" },
  { href: "/landing/variants/variant6", title: "Variant 6", desc: "Deep navy with gold accents" },
  { href: "/landing/variants/variant7", title: "Variant 7", desc: "Dark plum with violet accents" },
  { href: "/landing/variants/variant8", title: "Variant 8", desc: "Near-black graphite with cyan accents" },
  { href: "/landing/variants/variant9", title: "Variant 9", desc: "Deep rose with burgundy accents" },
  { href: "/landing/variants/variant10", title: "Variant 10", desc: "Neon on dark (cyan/pink)" },
];

export default function VariantsIndex() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Landing Page Themes</h1>
        <p className="mt-2 text-slate-600">Click a variant to preview its color and theme styling.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-slate-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-slate-900">{it.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
                </div>
                <span className="text-slate-400 group-hover:text-slate-600">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}



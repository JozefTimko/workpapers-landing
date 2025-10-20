import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400 py-8">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-center gap-2 px-6 text-sm">
        <a
          href="mailto:jozef@workpapersai.com"
          className="hover:text-neutral-300 transition-colors"
        >
          jozef@workpapersai.com
        </a>
        <span className="hidden sm:inline text-neutral-600">•</span>
        <a
          href="tel:+442081913245"
          className="hover:text-neutral-300 transition-colors"
        >
          020 8191 3245
        </a>
        <span className="hidden sm:inline text-neutral-600">•</span>
        <Link
          href="/privacy"
          className="hover:text-neutral-300 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-5 py-6 text-sm">
        <div className="flex gap-5">
          <a
            className="hover:text-neutral-200 transition-colors"
            href="/privacy"
          >
            Privacy
          </a>
          <a
            className="hover:text-neutral-200 transition-colors"
            href="mailto:jozef@workpapersai.com"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

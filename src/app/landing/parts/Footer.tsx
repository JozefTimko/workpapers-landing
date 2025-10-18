export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-5 py-6 text-sm">
        <div className="flex gap-4">
          <a className="text-slate-600 hover:text-slate-900" href="/privacy">
            Privacy
          </a>
          <a
            className="text-slate-600 hover:text-slate-900"
            href="mailto:jozef@workpapersai.com"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

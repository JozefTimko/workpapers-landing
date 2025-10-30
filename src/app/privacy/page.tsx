export const metadata = {
  title: "Privacy Policy — WorkPapers.ai",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        Privacy Policy
      </h1>

      <p className="mt-3 text-slate-700">
        WorkPapers.ai (“we”, “our”, or “us”) is committed to protecting your
        privacy. We collect only the information necessary to provide our
        services and communicate transparently about how it’s used.
      </p>

      <section className="prose prose-slate mt-6">
        <h2>Information we collect</h2>
        <p>
          On this website, we collect only the details you choose to provide
          through the waitlist form — typically your name, company, position,
          email address, and phone number.
        </p>

        <h2>How we use your information</h2>
        <p>
          Your information is used solely to contact you about early access,
          product updates, or support. We do not sell, rent, or share your data
          with third parties for marketing purposes.
        </p>

        <h2>Analytics & Cookies (Microsoft Clarity)</h2>
        <p>
          We use Microsoft Clarity to help us understand how visitors use this
          site so we can improve the experience. Clarity uses cookies and
          similar technologies to provide anonymised session replays and
          heatmaps (e.g., where users scroll and click). Clarity does not
          collect sensitive personal data or record keystrokes on forms. For
          more information about how Microsoft processes data, see Microsoft’s
          privacy documentation.
        </p>
        <p>
          You can control cookies via your browser settings. If you prefer not
          to be tracked for analytics, you may also use your browser’s
          “Do Not Track” feature or block third-party cookies. The site remains
          usable if analytics cookies are disabled.
        </p>

        <h2>Service providers</h2>
        <p>
          We may use trusted third-party services to help operate this website,
          such as Vercel (hosting) and Formspree (form submissions). These
          providers are bound by appropriate data protection and security
          commitments.
        </p>
        <p>
          We also use Microsoft Clarity for analytics as described above.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time. To make a request, contact us at{" "}
          <a href="mailto:jozef@workpapersai.com">jozef@workpapersai.com</a>.
        </p>

        <h2>Contact</h2>
        <p>
          For any questions or concerns about this Privacy Policy, please email{" "}
          <a href="mailto:jozef@workpapersai.com">jozef@workpapersai.com</a>.
        </p>

        <p className="text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </section>
    </main>
  );
}

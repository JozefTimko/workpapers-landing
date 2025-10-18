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
        WorkPapers.ai is operated by Jozef Timko. We believe in collecting only
        the information needed to provide our service and communicating
        transparently about how it’s used.
      </p>

      <section className="prose prose-slate mt-6">
        <h2>What we collect</h2>
        <p>
          On this website we collect only the details you choose to provide
          through the waitlist form — typically your name, company, position,
          email address, and contact number.
        </p>

        <h2>How we use your information</h2>
        <p>
          Your details are used solely to contact you about early access,
          product updates, or support. We never sell or share your information
          with third parties for marketing purposes.
        </p>

        <h2>Service providers</h2>
        <p>
          We may use trusted vendors such as Vercel (hosting) and Formspree
          (form submissions). Each provider is bound by appropriate data
          processing and security commitments.
        </p>

        <h2>Your rights</h2>
        <p>
          You can request access to, correction of, or deletion of your personal
          data at any time. To make a request, contact{" "}
          <a href="mailto:jozef@workpapersai.com">jozef@workpapersai.com</a>.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy or data protection enquiries, please email{" "}
          <a href="mailto:jozef@workpapersai.com">jozef@workpapersai.com</a>.
        </p>

        <p className="text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </section>
    </main>
  );
}

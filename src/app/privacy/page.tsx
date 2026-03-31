import type { Metadata } from "next"
import { COMPANY, SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for mcglinea.com — how MCG-LINEA S.R.L. collects and processes personal data.",
  alternates: { canonical: `${SITE.url}/privacy` },
}

const EFFECTIVE_DATE = "2024-01-01" // TODO_REAL_DATA

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Effective date: {EFFECTIVE_DATE} · Controller: {COMPANY.name}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">1. Controller</h2>
            <p>
              The data controller for personal data collected through this website is{" "}
              {COMPANY.name}, registered in {COMPANY.country}. Contact:{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-primary hover:underline">
                {COMPANY.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">2. Data We Collect</h2>
            <p>We collect personal data only when you voluntarily provide it, specifically:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Contact and company details submitted via the Request Quote form (name, email, phone, company name, country, VAT number)</li>
              <li>Parts inquiry content (OEM numbers, quantities, messages)</li>
              <li>Files you attach to inquiries</li>
              <li>Email correspondence you initiate with us</li>
            </ul>
            <p className="mt-2">
              We do not operate user accounts, newsletters, or marketing lists on this website.
              We do not use third-party analytics that track individual users.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">3. Purpose and Legal Basis</h2>
            <div className="space-y-2">
              <p><strong className="text-foreground">Responding to inquiries:</strong> Processing your RFQ submission to provide a commercial quotation. Legal basis: legitimate interests / pre-contractual steps (GDPR Art. 6(1)(b) and (f)).</p>
              <p><strong className="text-foreground">Business transactions:</strong> Processing orders, issuing invoices, and fulfilling contracts. Legal basis: performance of a contract (GDPR Art. 6(1)(b)).</p>
              <p><strong className="text-foreground">Legal obligations:</strong> Retaining transaction records for tax and accounting purposes. Legal basis: legal obligation (GDPR Art. 6(1)(c)).</p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">4. Data Retention</h2>
            <p>
              Inquiry data is retained for up to 2 years from initial submission unless a
              business relationship is established, in which case data is retained for the
              duration of the relationship plus the applicable statutory retention period
              (typically 5–10 years for invoices and contracts under Romanian law).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">5. Data Sharing</h2>
            <p>
              We do not sell personal data. We may share data with logistics partners and
              financial institutions solely to the extent necessary to fulfil an order or
              process a payment. All such sharing is governed by appropriate data processing
              agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">6. Your Rights</h2>
            <p>Under GDPR you have the right to: access your data, correct inaccuracies,
              request erasure (where no legal obligation to retain applies), object to
              processing, and request data portability. To exercise any right, email us at{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-primary hover:underline">
                {COMPANY.contact.email}
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">7. Cookies</h2>
            <p>
              We use only strictly necessary cookies required for website operation. See our{" "}
              <a href="/cookies" className="text-primary hover:underline">Cookie Policy</a> for details.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">8. Updates</h2>
            <p>
              We may update this policy to reflect changes in our practices or applicable law.
              The effective date at the top indicates the current version.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

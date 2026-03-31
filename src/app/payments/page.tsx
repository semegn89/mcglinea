import type { Metadata } from "next"
import { AlertTriangle, ShieldCheck } from "lucide-react"
import { COMPANY, SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Payment Information",
  description:
    "MCG-LINEA S.R.L. payment information for B2B orders. All payments are settled by EUR bank transfer against a formal commercial invoice.",
  alternates: { canonical: `${SITE.url}/payments` },
  robots: { index: true, follow: false }, // subordinate page, no need to rank
}

export default function PaymentsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          Payment Information
        </h1>
        <p className="mb-10 text-lg text-muted-foreground">
          All payments are settled by EUR bank transfer against a formal commercial invoice.
          This page provides general guidance only.
        </p>

        {/* Anti-fraud warning — first and prominent */}
        <div className="mb-8 flex gap-4 rounded-xl border border-destructive/40 bg-destructive/5 p-5">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
          <div className="space-y-1.5 text-sm">
            <p className="font-semibold text-destructive">Important: Verify All Payment Instructions</p>
            <p className="text-muted-foreground">
              MCG-LINEA S.R.L. will <strong>only</strong> send bank account details via a
              signed commercial invoice or pro-forma invoice issued from our official email
              address ({COMPANY.contact.salesEmail}). We will <strong>never</strong> request
              payment via phone, SMS, or unsigned documents.
            </p>
            <p className="text-muted-foreground">
              If you receive payment instructions from an unknown sender or via channels
              other than a formal invoice, do not proceed. Contact us immediately to verify.
            </p>
          </div>
        </div>

        {/* How payment works */}
        <section className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">How Payment Works</h2>
          <ol className="space-y-3">
            {[
              "You submit an inquiry via the Request Quote form or email.",
              "We issue a formal commercial quotation with pricing, availability, and terms.",
              "You confirm and submit a Purchase Order.",
              "We issue a pro-forma invoice in EUR with full payment instructions.",
              "You settle by bank transfer. The IBAN and SWIFT code appear on the invoice.",
              "We arrange shipment upon receipt of cleared funds.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Payment terms */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Payment Terms</h2>
          <div className="rounded-xl border border-border divide-y divide-border">
            {[
              { label: "Currency", value: "EUR (Euro)" },
              { label: "Method", value: "Bank transfer (SWIFT / SEPA)" },
              { label: "Timing", value: "Prepayment against pro-forma invoice (standard); deferred terms available for long-term partners" },
              { label: "Bank Details", value: "Provided on issued invoice only" },
              { label: "Invoicing", value: "Commercial invoice issued after confirmed payment" },
            ].map((row) => (
              <div key={row.label} className="flex gap-5 px-5 py-3.5 text-sm">
                <span className="w-32 shrink-0 font-medium text-muted-foreground">{row.label}</span>
                <span className="text-muted-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why we don't publish full banking details */}
        <section className="mb-8 space-y-3">
          <h2 className="text-xl font-semibold">Why Banking Details Are Not Published Here</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Publishing full IBAN and SWIFT on a public webpage creates a risk of fraud — bad
            actors can intercept, copy, and distribute modified payment details. For your
            protection, full banking details are only disclosed on authenticated, signed
            commercial documents sent directly from our official email address.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If you have already received an invoice and need to verify the banking details,
            contact us at{" "}
            <a
              href={`mailto:${COMPANY.contact.salesEmail}`}
              className="font-medium text-primary hover:underline"
            >
              {COMPANY.contact.salesEmail}
            </a>
            .
          </p>
        </section>

        {/* Security assurance */}
        <div className="flex gap-4 rounded-xl border border-border bg-muted/30 p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Secure Transactions</p>
            <p className="mt-1">
              All transactions are documented by formal commercial invoices and subject to
              Romanian and EU financial regulations. VAT documentation is provided as required
              for intra-EU business transactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

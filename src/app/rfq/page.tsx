import type { Metadata } from "next"
import { RfqForm } from "@/components/rfq/rfq-form"
import { COMPANY, SITE } from "@/config/company"
import { Mail, Clock, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your OEM list or part inquiry. MCG-LINEA S.R.L. responds with a formal quotation within one business day. B2B wholesale only.",
  alternates: { canonical: `${SITE.url}/rfq` },
  robots: { index: true, follow: true },
}

export default function RfqPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Request a Quote
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Submit your OEM numbers, SKUs, or a free-text parts list. We will respond with a
            formal written quotation — including pricing, availability, and lead time — within
            one business day.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          {/* Form */}
          <div>
            <RfqForm source="rfq-page" />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* What to expect */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-semibold">What Happens Next</h2>
              <ol className="space-y-4">
                {[
                  {
                    icon: FileText,
                    title: "We review your list",
                    desc: "Our team checks availability and pricing for each part number.",
                  },
                  {
                    icon: Clock,
                    title: "Formal quotation issued",
                    desc: "You receive a signed offer in EUR with unit price, MOQ, and lead time.",
                  },
                  {
                    icon: Mail,
                    title: "You confirm & order",
                    desc: "Reply to accept. We issue a pro-forma invoice and proceed to shipment.",
                  },
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Direct contact */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-3 font-semibold">Prefer Direct Contact?</h2>
              <p className="mb-3 text-sm text-muted-foreground">
                For urgent inquiries or large orders, email us directly:
              </p>
              <a
                href={`mailto:${COMPANY.contact.salesEmail}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                {COMPANY.contact.salesEmail}
              </a>
            </div>

            {/* B2B notice */}
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5 text-sm">
              <p className="font-medium text-amber-600 dark:text-amber-400">B2B Only</p>
              <p className="mt-1 text-muted-foreground">
                We supply registered business entities only. A valid VAT number and
                company registration are required to complete a partner agreement.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

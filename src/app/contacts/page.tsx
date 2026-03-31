import type { Metadata } from "next"
import { Mail, FileText } from "lucide-react"
import { COMPANY, SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Contact MCG-LINEA",
  description:
    "Contact MCG-LINEA S.R.L. for wholesale vehicle parts inquiries, OEM list submissions, and B2B partnership enquiries.",
  alternates: { canonical: `${SITE.url}/contacts` },
}

export default function ContactsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h1>
        <p className="mb-10 text-lg text-muted-foreground">
          For wholesale inquiries, OEM list submissions, and partnership discussions.
          We respond to all B2B enquiries within one business day.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Sales & Inquiries */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <FileText className="h-4.5 w-4.5 text-primary" />
            </div>
            <h2 className="mb-1 font-semibold">Sales &amp; Inquiries</h2>
            <p className="mb-3 text-sm text-muted-foreground">
              OEM lists, RFQ submissions, part availability, pricing, and order placement.
            </p>
            <a
              href={`mailto:${COMPANY.contact.salesEmail}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {COMPANY.contact.salesEmail}
            </a>
          </div>

          {/* General */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
              <Mail className="h-4.5 w-4.5 text-primary" />
            </div>
            <h2 className="mb-1 font-semibold">General Correspondence</h2>
            <p className="mb-3 text-sm text-muted-foreground">
              Partnership discussions, company documentation requests, and general enquiries.
            </p>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="text-sm font-medium text-primary hover:underline"
            >
              {COMPANY.contact.email}
            </a>
          </div>
        </div>

        {/* Company details */}
        <div className="mt-8 rounded-xl border border-border divide-y divide-border">
          {[
            { label: "Company", value: COMPANY.name },
            { label: "Country", value: COMPANY.country },
            {
              label: "VAT Number",
              value:
                COMPANY.vatNumber !== "TODO_REAL_DATA"
                  ? COMPANY.vatNumber
                  : "Available on request",
            },
          ].map((row) => (
            <div key={row.label} className="flex gap-6 px-5 py-3 text-sm">
              <span className="w-32 shrink-0 font-medium text-muted-foreground">{row.label}</span>
              <span>{row.value}</span>
            </div>
          ))}
        </div>

        {/* RFQ prompt */}
        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 px-6 py-6">
          <p className="font-semibold">Have a parts list ready?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Use our structured Request Quote form to submit OEM numbers, quantities, and
            requirements. We generate a formal written quotation from your submission.
          </p>
          <a
            href="/rfq"
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Request a Quote
          </a>
        </div>

        {/* Response time notice */}
        <p className="mt-8 text-sm text-muted-foreground">
          <strong>Response time:</strong> We aim to respond to all B2B enquiries within one
          business day (Mon–Fri, CET). For urgent requests, indicate a deadline in your message.
        </p>
      </div>
    </div>
  )
}

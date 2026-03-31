import type { Metadata } from "next"
import { COMPANY, SITE, BUYER_TYPES } from "@/config/company"

export const metadata: Metadata = {
  title: "About MCG-LINEA",
  description:
    "MCG-LINEA S.R.L. is a Romanian-registered wholesale supplier of vehicle parts and accessories, serving B2B buyers across the European Union.",
  alternates: { canonical: `${SITE.url}/about` },
}

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          About {COMPANY.name}
        </h1>
        <p className="mb-10 text-lg text-muted-foreground">
          Wholesale supplier of vehicle parts and accessories. B2B-only. EU-focused.
        </p>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-semibold">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            MCG-LINEA S.R.L. is a Romanian limited liability company specialising in the
            wholesale trade of vehicle parts and accessories. We operate exclusively in the
            B2B segment, supplying registered business entities — distributors, workshops,
            fleet operators, and procurement teams — across the European Union.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our model is built around formal procurement flows: inquiry → quotation → purchase
            order → invoice → delivery. Every partnership begins with a signed agreement and
            VAT verification. We do not sell retail or accept anonymous orders.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Legal &amp; Company Details</h2>
          <div className="rounded-xl border border-border divide-y divide-border">
            {[
              { label: "Company Name", value: COMPANY.name },
              { label: "Legal Form", value: "Society with Limited Liability (S.R.L.)" },
              { label: "Country of Registration", value: COMPANY.country },
              {
                label: "Registration Number",
                value:
                  COMPANY.registrationNumber !== "TODO_REAL_DATA"
                    ? COMPANY.registrationNumber
                    : "Available on request",
              },
              {
                label: "VAT Number",
                value:
                  COMPANY.vatNumber !== "TODO_REAL_DATA"
                    ? COMPANY.vatNumber
                    : "Available on request",
              },
              { label: "Settlement Currency", value: "EUR (Euro)" },
              { label: "Website", value: COMPANY.domain },
              { label: "Business Email", value: COMPANY.contact.salesEmail },
            ].map((row) => (
              <div key={row.label} className="flex gap-6 px-5 py-3.5 text-sm">
                <span className="w-44 shrink-0 font-medium text-muted-foreground">{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-semibold">What We Do</h2>
          <p className="text-muted-foreground leading-relaxed">
            We source and supply original and OEM-grade vehicle parts across the full spectrum
            of passenger car and light commercial vehicle components — engine parts, brake
            systems, suspension, transmission, electrical, filters, cooling, exhaust, and more.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our catalog is searchable by OEM number, SKU, brand, and category. For bulk
            requirements we accept OEM lists of any size and return a formal written quotation
            within one business day.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Who We Serve</h2>
          <ul className="space-y-2">
            {BUYER_TYPES.map((type) => (
              <li key={type} className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {type}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10 space-y-3">
          <h2 className="text-xl font-semibold">Geographic Focus</h2>
          <p className="text-muted-foreground leading-relaxed">
            We ship to all EU member states. Intra-EU supply is documented for VAT compliance.
            We also supply selected non-EU countries; applicable Incoterms and customs
            documentation are agreed per order.
          </p>
        </section>

        <div className="rounded-xl border border-border bg-muted/30 px-6 py-6">
          <p className="font-semibold">Ready to start a partnership?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Submit your OEM list or part inquiry and we will respond with a formal
            quotation within one business day.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/rfq"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="/contacts"
              className="rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import { COMPANY, SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions governing wholesale transactions with MCG-LINEA S.R.L.",
  alternates: { canonical: `${SITE.url}/terms` },
}

const EFFECTIVE_DATE = "2024-01-01" // TODO_REAL_DATA: update to actual effective date

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Effective date: {EFFECTIVE_DATE} · Applicable to: {COMPANY.name}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">1. Scope and Parties</h2>
            <p>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern all wholesale transactions
              between {COMPANY.name} (&ldquo;Seller&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
              and the purchasing business entity (&ldquo;Buyer&rdquo;, &ldquo;you&rdquo;).
            </p>
            <p className="mt-2">
              These Terms apply exclusively to B2B transactions. We do not supply consumers
              (natural persons acting for non-commercial purposes). By placing an order or
              submitting a Purchase Order, you confirm that you are acting in a commercial
              capacity with a valid VAT registration.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">2. Orders and Acceptance</h2>
            <p>
              All orders commence with a written inquiry submitted by the Buyer. We issue
              a formal written quotation in response. A contract is formed only when the
              Buyer submits a written Purchase Order referencing our quotation number AND we
              confirm acceptance in writing.
            </p>
            <p className="mt-2">
              Catalog prices displayed on this website are indicative and do not constitute
              an offer. Final pricing is confirmed in a formal written quotation only.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">3. Payment</h2>
            <p>
              All transactions are settled in EUR by bank transfer. Standard terms are
              prepayment against a pro-forma invoice unless alternative payment terms have
              been agreed in writing. Deferred payment terms may be extended to established
              B2B partners at our discretion.
            </p>
            <p className="mt-2">
              Full banking details are provided only on authenticated commercial invoices.
              We accept no liability for payments made to fraudulent or unverified accounts.
              Buyers are responsible for verifying invoice authenticity before remitting funds.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">4. Delivery</h2>
            <p>
              Delivery terms (EXW, DAP, CIF, or other Incoterms) are specified in each
              formal quotation and Purchase Order confirmation. Lead times are indicative and
              subject to availability confirmation. We are not liable for delays caused by
              logistics carriers, customs, or force majeure events.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">5. Product Quality and Warranty</h2>
            <p>
              We supply original OEM parts and OEM-grade equivalent parts. Part origin and
              type are stated in each quotation. Warranty terms for original parts are governed
              by the original manufacturer. For OEM-grade equivalents, conformity documentation
              is available on request.
            </p>
            <p className="mt-2">
              Claims for defective goods must be submitted in writing within 14 days of delivery,
              with supporting documentation (photographs, inspection report). We will investigate
              and respond within 10 business days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">6. Returns</h2>
            <p>
              Returns are accepted only for goods that are defective, incorrectly supplied, or
              materially differ from the agreed specification. Returns must be authorised by us
              in writing before shipment. Unauthorised returns will not be accepted.
            </p>
            <p className="mt-2">
              Correctly supplied goods that match the agreed order are not eligible for return
              unless separately agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">7. Limitation of Liability</h2>
            <p>
              Our liability for any claim arising from a transaction shall not exceed the
              invoice value of the goods to which the claim relates. We are not liable for
              indirect, consequential, or economic loss. These limitations apply to the
              maximum extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">8. Governing Law</h2>
            <p>
              These Terms are governed by Romanian law. Disputes that cannot be resolved
              amicably shall be subject to the exclusive jurisdiction of the competent courts
              in Romania.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">9. Amendments</h2>
            <p>
              We reserve the right to amend these Terms. The version applicable to any order
              is the version in force on the date the Purchase Order is accepted. Continued
              business after a change constitutes acceptance of the updated Terms.
            </p>
          </section>

          <p className="text-xs pt-4 border-t border-border">
            Questions about these Terms? Contact us at{" "}
            <a href={`mailto:${COMPANY.contact.email}`} className="text-primary hover:underline">
              {COMPANY.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

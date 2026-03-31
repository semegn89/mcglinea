import type { Metadata } from "next"
import { COMPANY, SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Delivery & Returns",
  description:
    "Delivery terms, lead times, and returns policy for B2B wholesale orders from MCG-LINEA S.R.L.",
  alternates: { canonical: `${SITE.url}/delivery-returns` },
}

export default function DeliveryReturnsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">Delivery &amp; Returns</h1>
        <p className="mb-10 text-lg text-muted-foreground">
          All delivery and return conditions for B2B wholesale orders placed with{" "}
          {COMPANY.name}.
        </p>

        <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Delivery Terms</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-foreground">Incoterms:</strong> Delivery terms
                (EXW, DAP, CIP, CIF, or other Incoterms 2020) are agreed per order and
                stated in the formal quotation and invoice. No single default Incoterm applies
                to all orders.
              </p>
              <p>
                <strong className="text-foreground">Lead Times:</strong> Indicative lead
                times are provided in quotations. Lead times are confirmed at the time of
                order acceptance based on current stock. We are not liable for delays caused
                by logistics carriers, customs authorities, or force majeure events.
              </p>
              <p>
                <strong className="text-foreground">Shipment:</strong> Goods are dispatched
                after cleared payment (unless deferred terms apply). Tracking details are
                provided upon shipment.
              </p>
              <p>
                <strong className="text-foreground">Geographic Coverage:</strong> We ship to
                all EU member states and selected non-EU countries. Additional
                documentation may be required for non-EU destinations (customs declarations,
                export licences). These requirements are addressed in the quotation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Receiving Goods</h2>
            <p>
              Upon receipt, the Buyer must inspect the shipment for visible damage or shortage
              immediately. Any discrepancy must be noted on the carrier delivery document and
              reported to us in writing within{" "}
              <strong className="text-foreground">3 business days</strong> of delivery.
              Claims submitted after this period may not be accepted.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Returns Policy</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-foreground">Eligible Returns:</strong> Returns are
                accepted only for goods that are:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Defective upon delivery (manufacturing fault)</li>
                <li>Incorrectly supplied (wrong part delivered against agreed specification)</li>
                <li>Materially non-conforming to the agreed specification</li>
              </ul>
              <p>
                <strong className="text-foreground">Return Authorisation:</strong> All
                returns require a Return Merchandise Authorisation (RMA) issued by us in
                writing. Goods returned without prior written authorisation will not be
                accepted and may be returned at the Buyer&apos;s expense.
              </p>
              <p>
                <strong className="text-foreground">Claim Deadline:</strong> Defect claims
                must be submitted in writing within{" "}
                <strong className="text-foreground">14 calendar days</strong> of delivery,
                accompanied by photographs and a written description.
              </p>
              <p>
                <strong className="text-foreground">Non-Returnable:</strong> Correctly
                supplied, undamaged goods that match the confirmed order specification are
                not eligible for return. Goods that have been installed, modified, or
                damaged after delivery are not eligible.
              </p>
              <p>
                <strong className="text-foreground">Resolution:</strong> Accepted return
                claims are resolved by replacement, credit note, or partial refund at our
                discretion, depending on the nature of the issue and parts availability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Contact for Logistics Issues</h2>
            <p>
              For delivery queries, damage claims, or return requests, contact us at{" "}
              <a href={`mailto:${COMPANY.contact.salesEmail}`} className="text-primary hover:underline">
                {COMPANY.contact.salesEmail}
              </a>{" "}
              with your order number and a description of the issue.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

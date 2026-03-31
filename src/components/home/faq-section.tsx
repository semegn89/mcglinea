const FAQS = [
  {
    q: "Do you sell to private individuals?",
    a: "No. MCG-LINEA operates exclusively in the B2B segment. We require a valid VAT number and a signed partner agreement before processing any order.",
  },
  {
    q: "What currencies and payment methods do you accept?",
    a: "All transactions are settled in EUR via bank transfer against a formal commercial invoice. We do not accept card payments or cash.",
  },
  {
    q: "How do I submit a large OEM list?",
    a: "Use our Request Quote form and paste your OEM numbers in the inquiry field, or attach a CSV/Excel file. We process lists of any size.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "MOQ depends on the product and brand. It is stated in each formal quotation. For most parts the MOQ is 1 unit; for high-volume lines, MOQs apply.",
  },
  {
    q: "Do you provide certifications or quality documentation?",
    a: "Yes. Original parts ship with OEM documentation. For OEM-grade equivalents, we supply quality conformity declarations on request.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We ship to all EU member states and selected non-EU countries. Shipping terms (EXW, DAP, CIF) are agreed per order in the formal offer.",
  },
  {
    q: "How long does a quotation take?",
    a: "Standard turnaround is one business day for most part numbers. Complex lists with 50+ items may take up to two business days.",
  },
  {
    q: "Are prices shown in the catalog final?",
    a: "Catalog prices are indicative. Final pricing is confirmed in a formal written quotation, which reflects current availability, quantity, and logistics.",
  },
]

export function FaqSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 md:py-28" id="faq">
      <div className="container">
        <div className="mb-12 max-w-xl">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Common questions from procurement managers and purchasing teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 font-semibold text-sm leading-snug">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

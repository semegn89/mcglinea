const FAQS = [
  {
    q: "Do you sell to private individuals?",
    a: "No. MCG-LINEA operates exclusively in the B2B segment. We require a valid VAT number and a signed partner agreement before processing any order.",
  },
  {
    q: "What currencies and payment methods do you accept?",
    a: "All transactions are settled in EUR via bank transfer against a formal commercial invoice.",
  },
  {
    q: "How do I submit a large OEM list?",
    a: "Use our Request Quote form and paste your OEM numbers in the inquiry field, or attach a CSV/Excel file.",
  },
  {
    q: "How long does a quotation take?",
    a: "Standard turnaround is one business day for most part numbers.",
  },
]

export function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

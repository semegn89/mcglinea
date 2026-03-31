import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const STEPS = [
  {
    step: "01",
    title: "Submit Your Inquiry",
    description:
      "Send us your OEM numbers, SKUs, part names, or a VIN. Use the Request Quote form or email us directly at sales@mcglinea.com.",
  },
  {
    step: "02",
    title: "Receive a Formal Quotation",
    description:
      "Within one business day we confirm availability, lead time, unit price (EUR), and MOQ. You get a signed commercial offer.",
  },
  {
    step: "03",
    title: "Sign & Submit Purchase Order",
    description:
      "Review the offer, agree to our Terms & Conditions, and submit your Purchase Order. A pro-forma invoice is then issued.",
  },
  {
    step: "04",
    title: "Payment & Delivery",
    description:
      "Settle the invoice by bank transfer (EUR). We arrange shipment upon cleared payment and send tracking details.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 md:py-28" id="how-it-works">
      <div className="container">
        <div className="mb-12 max-w-xl">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">How Ordering Works</h2>
          <p className="text-muted-foreground">
            A straightforward B2B process — no hidden steps, no retail checkout.
            Every order is handled professionally from inquiry to delivery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.step} className="relative rounded-xl border border-border bg-card p-6">
              <div className="mb-4 text-3xl font-bold text-primary/20">{s.step}</div>
              <h3 className="mb-2 font-semibold">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/rfq" className="flex items-center gap-2">
              Start an Inquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/catalog">Browse Catalog First</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Globe, FileCheck, Truck, Shield, Clock, Euro } from "lucide-react"

const FEATURES = [
  {
    icon: Globe,
    title: "EU-Wide Supply",
    description:
      "We ship to registered business buyers throughout the European Union. Cross-border settlements in EUR, compliant with EU trade requirements.",
  },
  {
    icon: FileCheck,
    title: "Structured Partner Onboarding",
    description:
      "All B2B relationships start with a partner agreement and VAT verification. No anonymous orders — we work with verified companies only.",
  },
  {
    icon: Euro,
    title: "Invoice-Based EUR Payments",
    description:
      "All transactions are settled via bank transfer against a formal commercial invoice in EUR. Full documentation for accounting and VAT.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    description:
      "We work with established EU logistics providers. Lead times and availability are confirmed before invoice is issued.",
  },
  {
    icon: Shield,
    title: "Original & OEM-Grade Parts",
    description:
      "Catalog includes original manufacturer parts and certified OEM-grade equivalents. Part origin is stated in every quotation.",
  },
  {
    icon: Clock,
    title: "Fast Quote Turnaround",
    description:
      "Submit your OEM list or SKU requirements and receive a formal quotation within one business day. No retail delays.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-28" id="why-us">
      <div className="container">
        <div className="mb-12 max-w-xl">
          <h2 className="mb-3 text-3xl font-bold tracking-tight">Why Work With Us</h2>
          <p className="text-muted-foreground">
            Built for B2B procurement — not retail browsing. We speak the language of
            distributors, fleet buyers, and procurement teams.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { BUYER_TYPES, PART_CATEGORIES } from "@/config/company"

export function BuyerTypesSection() {
  return (
    <section className="py-20 md:py-28" id="buyers">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Buyer Types */}
          <div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight">Who We Supply</h2>
            <p className="mb-8 text-muted-foreground">
              We work exclusively with registered business entities. No retail, no
              consumer orders. VAT number required for all accounts.
            </p>
            <ul className="space-y-3">
              {BUYER_TYPES.map((type) => (
                <li key={type} className="flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {type}
                </li>
              ))}
            </ul>
          </div>

          {/* Part Categories */}
          <div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight">What We Source</h2>
            <p className="mb-8 text-muted-foreground">
              Our catalog covers the full spectrum of passenger and light commercial
              vehicle parts, with a focus on German, French, and Scandinavian brands.
            </p>
            <div className="flex flex-wrap gap-2">
              {PART_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="rounded-md border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

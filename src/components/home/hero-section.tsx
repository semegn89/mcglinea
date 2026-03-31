import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border py-20 md:py-28 lg:py-36">
      {/* Background photo */}
      <Image
        src="/assets/hero-warehouse.jpg"
        alt="Warehouse with vehicle parts"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-background/75" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            EU B2B Wholesale — EUR Settlements
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Wholesale Vehicle Parts
            <br />
            <span className="text-muted-foreground">for Serious Buyers</span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
            MCG-LINEA S.R.L. supplies distributors, workshops, and fleet operators
            across the EU. Send your OEM list or request a quote — we respond within one business day.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/rfq" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Request a Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/catalog" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Browse Catalog
              </Link>
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-muted-foreground">
            Registered in Romania · EUR invoicing · B2B partner onboarding
          </p>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Mail } from "lucide-react"
import { COMPANY } from "@/config/company"

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="rounded-2xl border border-border bg-card px-8 py-14 text-center md:px-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Start a Partnership?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Send us your OEM list, part numbers, or describe what you need. We issue a
            formal quotation within one business day.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/rfq" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Request a Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${COMPANY.contact.salesEmail}`} className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Directly
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

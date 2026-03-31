import type { Metadata } from "next"
import { CatalogPageClient } from "@/components/catalog/catalog-page-client"
import { getProducts } from "@/lib/products"
import { SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Parts Catalog",
  description:
    "Browse our wholesale vehicle parts catalog. Search by OEM number, SKU, brand, or category. Prices are indicative — formal quotes issued on request.",
  alternates: { canonical: `${SITE.url}/catalog` },
}

export default async function CatalogPage() {
  const products = await getProducts()

  return (
    <div className="container py-10 md:py-14">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Parts Catalog</h1>
        <p className="max-w-2xl text-muted-foreground">
          Search by OEM number, SKU, brand, or category. Prices shown are indicative and
          confirmed in a formal quotation. Use{" "}
          <a href="/rfq" className="text-primary underline underline-offset-2 hover:no-underline">
            Request a Quote
          </a>{" "}
          to submit an OEM list or bulk inquiry.
        </p>
      </div>

      <CatalogPageClient initialProducts={products} />
    </div>
  )
}

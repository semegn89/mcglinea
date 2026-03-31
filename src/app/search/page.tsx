import type { Metadata } from "next"
import Link from "next/link"
import { CatalogGrid } from "@/components/catalog/catalog-grid"
import { searchProducts } from "@/lib/products"
import { SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Search Parts",
  description: "Search our wholesale vehicle parts catalog by OEM number, SKU, brand, or part name.",
  alternates: { canonical: `${SITE.url}/search` },
  robots: { index: false, follow: true }, // search result pages should not be indexed
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const { q } = await searchParams
  const query = (q ?? "").trim()
  const products = query.length >= 2 ? await searchProducts(query) : []

  return (
    <div className="container py-10 md:py-14">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          {query ? `Results for "${query}"` : "Search Parts"}
        </h1>
        {query && (
          <p className="text-muted-foreground">
            {products.length} part{products.length !== 1 ? "s" : ""} found
            {products.length > 0 && " — prices are indicative, confirmed in formal quotation"}
          </p>
        )}
      </div>

      {!query ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/30 py-16 text-center">
          <p className="text-muted-foreground">Enter an OEM number, SKU, or part name to search.</p>
          <Link href="/catalog" className="text-sm text-primary hover:underline">
            Or browse the full catalog
          </Link>
        </div>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/30 py-16 text-center">
          <p className="font-medium">No parts found for &ldquo;{query}&rdquo;</p>
          <p className="text-sm text-muted-foreground max-w-sm">
            Our catalog may not contain this part, or the OEM number format may differ.
            Submit an inquiry and we will check availability directly with suppliers.
          </p>
          <Link
            href={`/rfq?oem=${encodeURIComponent(query)}`}
            className="mt-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Request Quote for &ldquo;{query}&rdquo;
          </Link>
        </div>
      ) : (
        <CatalogGrid products={products} />
      )}
    </div>
  )
}

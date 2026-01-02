import type { Metadata } from "next"
import { CatalogGrid } from "@/components/catalog/catalog-grid"
import { searchProducts } from "@/lib/products"

export const metadata: Metadata = {
  title: "Search Results",
  description: "Search results for vehicle parts and accessories",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""
  const products = query ? await searchProducts(query) : []

  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">
          {query ? `Search Results for "${query}"` : "Search"}
        </h1>
        {query && (
          <p className="text-lg text-muted-foreground">
            Found {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        )}
      </div>

      {!query ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">Enter a search query to find products.</p>
        </div>
      ) : products.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">No products found for &ldquo;{query}&rdquo;.</p>
        </div>
      ) : (
        <CatalogGrid products={products} />
      )}
    </div>
  )
}


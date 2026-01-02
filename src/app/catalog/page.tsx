import type { Metadata } from "next"
import { CatalogGrid } from "@/components/catalog/catalog-grid"

export const metadata: Metadata = {
  title: "Catalog",
  description: "Browse our comprehensive catalog of vehicle parts and accessories",
}

export default function CatalogPage() {
  // This is a placeholder - will be replaced with actual data fetching
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Product Catalog</h1>
        <p className="text-lg text-muted-foreground">
          Browse our extensive selection of vehicle parts and accessories
        </p>
      </div>
      <CatalogGrid />
    </div>
  )
}


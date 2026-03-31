"use client"

import { useState } from "react"
import { CatalogGrid } from "./catalog-grid"
import { Filters } from "./filters"
import { SortSelect } from "./sort-select"
import type { Product } from "@/types"

interface CatalogPageClientProps {
  initialProducts: Product[]
}

export function CatalogPageClient({ initialProducts }: CatalogPageClientProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(initialProducts)

  const handleFilter = (filtered: Product[]) => {
    setFilteredProducts(filtered)
    setDisplayedProducts(filtered)
  }

  const handleSort = (sorted: Product[]) => {
    setDisplayedProducts(sorted)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      {/* Filters Sidebar */}
      <aside>
        <div className="sticky top-20">
          <Filters products={initialProducts} onFilter={handleFilter} />
        </div>
      </aside>

      {/* Products Grid */}
      <div className="space-y-6 min-w-0">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {displayedProducts.length.toLocaleString()} part
            {displayedProducts.length !== 1 ? "s" : ""} shown
            {displayedProducts.length < initialProducts.length
              ? ` (filtered from ${initialProducts.length.toLocaleString()})`
              : ""}
          </p>
          <SortSelect products={filteredProducts} onSort={handleSort} />
        </div>
        <CatalogGrid products={displayedProducts} />
        {displayedProducts.length > 48 && (
          <p className="pt-4 text-center text-sm text-muted-foreground">
            Showing first 48 results. Use filters or{" "}
            <a href="/rfq" className="text-primary underline underline-offset-2">
              submit an OEM list
            </a>{" "}
            for bulk inquiries.
          </p>
        )}
      </div>
    </div>
  )
}

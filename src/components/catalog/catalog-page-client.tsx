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
    <div className="grid gap-8 lg:grid-cols-4">
      {/* Filters Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-24">
          <Filters products={initialProducts} onFilter={handleFilter} />
        </div>
      </aside>

      {/* Products Grid */}
      <div className="lg:col-span-3 space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {displayedProducts.length} of {initialProducts.length} products
          </p>
          <SortSelect products={filteredProducts} onSort={handleSort} />
        </div>
        <CatalogGrid products={displayedProducts} />
      </div>
    </div>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import type { Product } from "@/types"

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc" | "name-desc" | "stock"

interface SortSelectProps {
  onSort: (sorted: Product[]) => void
  products: Product[]
}

export function SortSelect({ products, onSort }: SortSelectProps) {
  const handleSort = (option: SortOption) => {
    const sorted = [...products]

    switch (option) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price)
        break
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "stock":
        sorted.sort((a, b) => {
          if (a.inStock && !b.inStock) return -1
          if (!a.inStock && b.inStock) return 1
          return 0
        })
        break
      default:
        // Keep original order
        break
    }

    onSort(sorted)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Sort by:</span>
      <div className="flex gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSort("default")}
        >
          Default
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSort("price-asc")}
        >
          Price: Low to High
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSort("price-desc")}
        >
          Price: High to Low
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSort("name-asc")}
        >
          Name: A-Z
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleSort("stock")}
        >
          In Stock First
        </Button>
      </div>
    </div>
  )
}


"use client"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { searchProducts } from "@/lib/products"
import type { Product } from "@/types"
import { formatCurrency } from "@/lib/utils"

export function SearchAutocomplete() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.length >= 2) {
      setLoading(true)
      searchProducts(query)
        .then((products) => {
          setResults(products.slice(0, 8))
          setIsOpen(true)
          setLoading(false)
        })
        .catch(() => {
          setResults([])
          setLoading(false)
        })
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by SKU, OEM number, or product name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="pl-9 pr-4"
        />
      </div>

      {isOpen && (query.length >= 2 || results.length > 0) && (
        <Card className="absolute z-50 mt-2 w-full border-border/40 shadow-lg">
          <CardContent className="p-0">
            {loading ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                Searching...
              </div>
            ) : results.length > 0 ? (
              <div className="max-h-96 overflow-y-auto">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.slug}`}
                    onClick={() => {
                      setIsOpen(false)
                      setQuery("")
                    }}
                    className="block border-b border-border/40 p-4 transition-colors hover:bg-muted/50 last:border-0"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium">{product.name}</p>
                        <div className="mt-1 flex gap-4 text-xs text-muted-foreground">
                          <span>SKU: {product.sku}</span>
                          {product.oemNumbers && product.oemNumbers.length > 0 && (
                            <span>OEM: {product.oemNumbers[0]}</span>
                          )}
                        </div>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="font-semibold">{formatCurrency(product.price)}</p>
                        {!product.inStock && (
                          <p className="text-xs text-destructive">Out of Stock</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
                {results.length >= 8 && (
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    onClick={() => setIsOpen(false)}
                    className="block border-t border-border/40 p-4 text-center text-sm font-medium text-primary hover:bg-muted/50"
                  >
                    View all results for &ldquo;{query}&rdquo;
                  </Link>
                )}
              </div>
            ) : query.length >= 2 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No products found for &ldquo;{query}&rdquo;
              </div>
            ) : null}
          </CardContent>
        </Card>
      )}
    </div>
  )
}


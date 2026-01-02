"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import type { Product } from "@/types"

interface FiltersProps {
  products: Product[]
  onFilter: (filtered: Product[]) => void
}

export function Filters({ products, onFilter }: FiltersProps) {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [inStockOnly, setInStockOnly] = useState(false)
  const [originalOnly, setOriginalOnly] = useState(false)

  // Get unique brands and categories
  const brands = Array.from(new Set(products.map(p => 
    typeof p.brand === 'string' ? p.brand : p.brand?.name || ''
  ).filter(Boolean)))
  
  const categories = Array.from(new Set(products.map(p => 
    typeof p.category === 'string' ? p.category : p.category?.name || ''
  ).filter(Boolean)))

  const applyFilters = () => {
    let filtered = [...products]

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => {
        const brand = typeof p.brand === 'string' ? p.brand : p.brand?.name || ''
        return selectedBrands.includes(brand)
      })
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => {
        const category = typeof p.category === 'string' ? p.category : p.category?.name || ''
        return selectedCategories.includes(category)
      })
    }

    // Price filter
    if (minPrice) {
      const min = parseFloat(minPrice)
      if (!isNaN(min)) {
        filtered = filtered.filter(p => p.price >= min)
      }
    }
    if (maxPrice) {
      const max = parseFloat(maxPrice)
      if (!isNaN(max)) {
        filtered = filtered.filter(p => p.price <= max)
      }
    }

    // Stock filter
    if (inStockOnly) {
      filtered = filtered.filter(p => p.inStock)
    }

    // Original filter
    if (originalOnly) {
      filtered = filtered.filter(p => p.isOriginal)
    }

    onFilter(filtered)
  }

  const clearFilters = () => {
    setSelectedBrands([])
    setSelectedCategories([])
    setMinPrice("")
    setMaxPrice("")
    setInStockOnly(false)
    setOriginalOnly(false)
    onFilter(products)
  }

  const toggleBrand = (brand: string) => {
    const newBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter(b => b !== brand)
      : [...selectedBrands, brand]
    setSelectedBrands(newBrands)
  }

  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(newCategories)
  }

  // Auto-apply filters when state changes
  useEffect(() => {
    applyFilters()
  }, [selectedBrands, selectedCategories, minPrice, maxPrice, inStockOnly, originalOnly])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Brand Filter */}
        <div>
          <Label className="mb-3 block font-semibold">Brand</Label>
          <div className="space-y-2">
            {brands.map(brand => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => {
                    toggleBrand(brand)
                    setTimeout(applyFilters, 0)
                  }}
                  className="h-4 w-4 rounded border-border"
                />
                <span className="text-sm">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <Label className="mb-3 block font-semibold">Category</Label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map(category => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => {
                    toggleCategory(category)
                    setTimeout(applyFilters, 0)
                  }}
                  className="h-4 w-4 rounded border-border"
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div>
          <Label className="mb-3 block font-semibold">Price (EUR)</Label>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="min-price" className="text-xs text-muted-foreground">Min</Label>
              <Input
                id="min-price"
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value)
                  setTimeout(applyFilters, 0)
                }}
              />
            </div>
            <div>
              <Label htmlFor="max-price" className="text-xs text-muted-foreground">Max</Label>
              <Input
                id="max-price"
                type="number"
                placeholder="1000"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value)
                  setTimeout(applyFilters, 0)
                }}
              />
            </div>
          </div>
        </div>

        {/* Availability Filter */}
        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => {
                setInStockOnly(e.target.checked)
                setTimeout(applyFilters, 0)
              }}
              className="h-4 w-4 rounded border-border"
            />
            <span className="text-sm font-medium">In Stock Only</span>
          </label>
        </div>

        {/* Original Filter */}
        <div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={originalOnly}
              onChange={(e) => {
                setOriginalOnly(e.target.checked)
                setTimeout(applyFilters, 0)
              }}
              className="h-4 w-4 rounded border-border"
            />
            <span className="text-sm font-medium">Original Parts Only</span>
          </label>
        </div>
      </CardContent>
    </Card>
  )
}


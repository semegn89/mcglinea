"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

// Placeholder data - will be replaced with real data fetching
const mockProducts = [
  {
    id: "1",
    sku: "SKU001",
    name: "Brake Pad Set",
    price: 45.99,
    inStock: true,
    image: "/assets/parts-closeup.jpg",
    slug: "brake-pad-set",
  },
  {
    id: "2",
    sku: "SKU002",
    name: "Oil Filter",
    price: 12.50,
    inStock: true,
    image: "/assets/parts-closeup.jpg",
    slug: "oil-filter",
  },
  {
    id: "3",
    sku: "SKU003",
    name: "Air Filter",
    price: 15.00,
    inStock: false,
    image: "/assets/parts-closeup.jpg",
    slug: "air-filter",
  },
]

export function CatalogGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {mockProducts.map((product) => (
        <Card key={product.id} className="group flex flex-col border-border/40 transition-shadow hover:shadow-lg">
          <Link href={`/product/${product.slug}`}>
            <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              {!product.inStock && (
                <div className="absolute right-2 top-2 rounded-full bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
                  Out of Stock
                </div>
              )}
            </div>
          </Link>
          <CardHeader>
            <CardTitle className="line-clamp-2 text-lg">
              <Link href={`/product/${product.slug}`} className="hover:text-primary">
                {product.name}
              </Link>
            </CardTitle>
            <CardDescription>SKU: {product.sku}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-2xl font-bold">€{product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button asChild className="flex-1" disabled={!product.inStock}>
              <Link href={`/product/${product.slug}`}>
                View Details
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              disabled={!product.inStock}
              aria-label="Add to cart"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}


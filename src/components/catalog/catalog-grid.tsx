import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/types"
import { formatCurrency } from "@/lib/utils"

interface CatalogGridProps {
  products: Product[]
  limit?: number
}

export function CatalogGrid({ products, limit = 24 }: CatalogGridProps) {
  const displayedProducts = products.slice(0, limit)

  if (displayedProducts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground">No products found.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayedProducts.map((product) => (
        <Card key={product.id} className="group flex flex-col border-border/40 transition-shadow hover:shadow-lg">
          <Link href={`/product/${product.slug}`}>
            <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-muted">
              <Image
                src={product.images[0] || "/assets/parts-closeup.jpg"}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {!product.inStock && (
                <div className="absolute right-2 top-2 rounded-full bg-destructive px-2 py-1 text-xs font-semibold text-destructive-foreground">
                  Out of Stock
                </div>
              )}
              {product.isOriginal && (
                <div className="absolute left-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
                  OEM
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
            <CardDescription className="space-y-1">
              <span className="block">SKU: {product.sku}</span>
              {product.oemNumbers && product.oemNumbers.length > 0 && (
                <span className="block text-xs">OEM: {product.oemNumbers[0]}</span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-2xl font-bold">{formatCurrency(product.price)}</p>
            {product.deliveryDays && (
              <p className="text-sm text-muted-foreground">
                Delivery: {product.deliveryDays} {product.deliveryDays === 1 ? 'day' : 'days'}
              </p>
            )}
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


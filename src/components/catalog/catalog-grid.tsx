import Link from "next/link"
import Image from "next/image"
import { FileText, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Product } from "@/types"
import { formatCurrency } from "@/lib/utils"

interface CatalogGridProps {
  products: Product[]
  limit?: number
}

export function CatalogGrid({ products, limit = 48 }: CatalogGridProps) {
  const displayed = products.slice(0, limit)

  if (displayed.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/30 py-16 text-center">
        <Tag className="h-8 w-8 text-muted-foreground/40" />
        <p className="font-medium">No parts match your filters</p>
        <p className="text-sm text-muted-foreground">Try adjusting filters or search by OEM number</p>
        <Button asChild variant="outline" size="sm" className="mt-2">
          <Link href="/rfq">Submit an OEM Inquiry Instead</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {displayed.map((product) => (
        <Card
          key={product.id}
          className="group flex flex-col border-border/60 transition-shadow hover:shadow-md"
        >
          {/* Image */}
          <Link href={`/product/${product.slug}`} tabIndex={-1} aria-hidden>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-muted">
              <Image
                src={product.images[0] || "/assets/parts-closeup.jpg"}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute left-2 top-2 flex gap-1">
                {product.isOriginal && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    OEM
                  </span>
                )}
                {!product.inStock && (
                  <span className="rounded-full bg-muted/90 px-2 py-0.5 text-[10px] font-medium text-muted-foreground backdrop-blur">
                    On Request
                  </span>
                )}
              </div>
            </div>
          </Link>

          <CardHeader className="pb-2">
            <CardTitle className="line-clamp-2 text-sm font-semibold leading-snug">
              <Link
                href={`/product/${product.slug}`}
                className="hover:text-primary transition-colors"
              >
                {product.name}
              </Link>
            </CardTitle>
            <div className="space-y-0.5">
              <p className="text-xs text-muted-foreground font-mono">SKU: {product.sku}</p>
              {product.oemNumbers?.[0] && (
                <p className="text-xs text-muted-foreground font-mono">
                  OEM: {product.oemNumbers[0]}
                </p>
              )}
            </div>
          </CardHeader>

          <CardContent className="flex-1 pb-3">
            <p className="text-lg font-bold">
              {formatCurrency(product.price)}
              <span className="ml-1 text-xs font-normal text-muted-foreground">/ unit</span>
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground italic">
              Indicative — confirmed in formal quote
            </p>
            {product.deliveryDays && (
              <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3 w-3 shrink-0" />
                Lead time: {product.deliveryDays}{" "}
                {product.deliveryDays === 1 ? "day" : "days"}
              </div>
            )}
          </CardContent>

          <CardFooter className="gap-2 pt-0">
            <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
              <Link href={`/product/${product.slug}`}>View Details</Link>
            </Button>
            <Button asChild size="sm" className="flex-1 text-xs">
              <Link
                href={`/rfq?oem=${encodeURIComponent(product.oemNumbers?.[0] || product.sku)}`}
                className="flex items-center gap-1"
              >
                <FileText className="h-3 w-3" />
                Quote
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

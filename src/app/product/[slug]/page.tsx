import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Package, Truck, Shield } from "lucide-react"
import { getProductBySlug, getProducts } from "@/lib/products"
import { formatCurrency } from "@/lib/utils"
import { ProductSchema } from "@/components/seo/product-schema"

export async function generateStaticParams() {
  const products = await getProducts()
  return products.slice(0, 100).map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: product.name,
    description: product.description || `Buy ${product.name} - SKU: ${product.sku}, OEM: ${product.oemNumbers?.[0] || 'N/A'}`,
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductSchema product={product} />
      <div className="container py-8 md:py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
            <Image
              src={product.images[0] || "/assets/parts-closeup.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.isOriginal && (
              <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                OEM Original
              </div>
            )}
            {!product.inStock && (
              <div className="absolute right-4 top-4 rounded-full bg-destructive px-3 py-1 text-sm font-semibold text-destructive-foreground">
                Out of Stock
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">{product.name}</h1>
            {product.brand && (
              <p className="text-lg text-muted-foreground">
                Brand: <span className="font-semibold text-foreground">
                  {typeof product.brand === 'string' ? product.brand : product.brand.name}
                </span>
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-bold">{formatCurrency(product.price)}</span>
              {product.isOriginal && (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Original Part
                </span>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium">SKU</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-lg">{product.sku}</p>
                </CardContent>
              </Card>
              
              {product.oemNumbers && product.oemNumbers.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">OEM Number</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-lg">{product.oemNumbers[0]}</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Availability */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">
                      {product.inStock 
                        ? `In Stock (${product.stockQuantity || 'Available'})`
                        : 'Out of Stock'}
                    </p>
                    {product.deliveryDays && (
                      <p className="text-sm text-muted-foreground">
                        Delivery: {product.deliveryDays} {product.deliveryDays === 1 ? 'day' : 'days'}
                      </p>
                    )}
                  </div>
                </div>
                {product.deliveryDays && (
                  <div className="flex items-center gap-3">
                    <Truck className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Standard delivery across EU
                    </p>
                  </div>
                )}
                {product.isOriginal && (
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Manufacturer warranty included
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button size="lg" className="flex-1" disabled={!product.inStock}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" disabled={!product.inStock}>
              Request Quote
            </Button>
          </div>

          {/* Description */}
          {product.description && (
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Specifications */}
      {product.specifications && Object.keys(product.specifications).length > 0 && (
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid gap-4 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-medium text-muted-foreground">{key}</dt>
                    <dd className="mt-1 text-sm">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>
        </div>
      )}
      </div>
    </>
  )
}


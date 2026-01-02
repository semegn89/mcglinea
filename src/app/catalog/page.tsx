import type { Metadata } from "next"
import { CatalogGrid } from "@/components/catalog/catalog-grid"
import { getProducts } from "@/lib/products"

export const metadata: Metadata = {
  title: "Catalog",
  description: "Browse our comprehensive catalog of 5000+ vehicle parts and accessories for Mercedes-Benz, BMW, and Audi",
}

export default async function CatalogPage() {
  const products = await getProducts()
  
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Product Catalog</h1>
        <p className="text-lg text-muted-foreground">
          Browse our extensive selection of {products.length.toLocaleString()}+ vehicle parts and accessories for Mercedes-Benz, BMW, and Audi
        </p>
      </div>
      <CatalogGrid products={products} limit={24} />
    </div>
  )
}


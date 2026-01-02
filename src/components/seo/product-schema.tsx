import type { Product } from "@/types"

interface ProductSchemaProps {
  product: Product
}

export function ProductSchema({ product }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.name,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: typeof product.brand === "string" ? product.brand : product.brand?.name || "",
    },
    category: typeof product.category === "string" ? product.category : product.category?.name || "",
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://mcglinea.com"}/product/${product.slug}`,
    },
    image: product.images.map(
      (img) => `${process.env.NEXT_PUBLIC_SITE_URL || "https://mcglinea.com"}${img}`
    ),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


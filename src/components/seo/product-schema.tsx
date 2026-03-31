import type { Product } from "@/types"
import { SITE } from "@/config/company"

interface ProductSchemaProps {
  product: Product
}

export function ProductSchema({ product }: ProductSchemaProps) {
  const brandName =
    product.brand && typeof product.brand !== "string"
      ? product.brand.name
      : product.brand ?? ""
  const categoryName =
    product.category && typeof product.category !== "string"
      ? product.category.name
      : product.category ?? ""

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.name,
    sku: product.sku,
    mpn: product.oemNumbers?.[0],
    ...(brandName ? { brand: { "@type": "Brand", name: brandName } } : {}),
    ...(categoryName ? { category: categoryName } : {}),
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      url: `${SITE.url}/product/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "MCG-LINEA S.R.L.",
      },
    },
    image: product.images.map((img) =>
      img.startsWith("http") ? img : `${SITE.url}${img}`
    ),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

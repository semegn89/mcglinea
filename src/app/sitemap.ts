import type { MetadataRoute } from "next"
import { getProducts } from "@/lib/products"
import { SITE } from "@/config/company"

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: SITE.url, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE.url}/catalog`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${SITE.url}/rfq`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE.url}/contacts`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE.url}/terms`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE.url}/cookies`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE.url}/delivery-returns`, changeFrequency: "yearly", priority: 0.4 },
  // payments page intentionally excluded — non-conversion support page
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts()
  const now = new Date()

  const productUrls: MetadataRoute.Sitemap = products.slice(0, 500).map((p) => ({
    url: `${SITE.url}/product/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [
    ...STATIC_PAGES.map((p) => ({ ...p, lastModified: now })),
    ...productUrls,
  ]
}

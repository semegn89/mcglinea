import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Clock, Shield, Package, ChevronRight } from "lucide-react"
import { getProductBySlug, getProducts } from "@/lib/products"
import { formatCurrency } from "@/lib/utils"
import { ProductSchema } from "@/components/seo/product-schema"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"
import { SITE } from "@/config/company"

export async function generateStaticParams() {
  const products = await getProducts()
  return products.slice(0, 100).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: "Part Not Found" }

  const brandName =
    product.brand && typeof product.brand !== "string" ? product.brand.name : product.brand ?? ""
  const oem = product.oemNumbers?.[0] ?? ""

  const title = product.name
  const description = `Wholesale inquiry for ${product.name}${brandName ? ` by ${brandName}` : ""}. SKU: ${product.sku}${oem ? `, OEM: ${oem}` : ""}. Request a formal B2B quote from MCG-LINEA S.R.L.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE.url}/product/${slug}` },
    openGraph: {
      title,
      description,
      images: product.images[0] ? [{ url: product.images[0] }] : [],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const brandName =
    product.brand && typeof product.brand !== "string" ? product.brand.name : product.brand ?? ""
  const categoryName =
    product.category && typeof product.category !== "string"
      ? product.category.name
      : product.category ?? ""
  const rfqHref = `/rfq?oem=${encodeURIComponent(product.oemNumbers?.[0] || product.sku)}`

  return (
    <>
      <ProductSchema product={product} />
      <BreadcrumbSchema
        items={[
          { name: "Catalog", href: "/catalog" },
          { name: categoryName || "Parts", href: "/catalog" },
          { name: product.name, href: `/product/${slug}` },
        ]}
      />

      <div className="container py-10 md:py-14">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/catalog" className="hover:text-foreground">Catalog</Link>
          {categoryName && (
            <>
              <ChevronRight className="h-3 w-3" />
              <span>{categoryName}</span>
            </>
          )}
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          {/* Image */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={product.images[0] || "/assets/parts-closeup.jpg"}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute left-3 top-3 flex gap-2">
                {product.isOriginal && (
                  <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                    OEM Original
                  </span>
                )}
                {!product.inStock && (
                  <span className="rounded-full bg-muted/90 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                    Available on Request
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div>
              {brandName && (
                <p className="mb-1 text-sm font-medium text-primary">{brandName}</p>
              )}
              <h1 className="text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                {product.name}
              </h1>
            </div>

            {/* Part details table */}
            <div className="rounded-xl border border-border divide-y divide-border">
              {[
                { label: "SKU", value: product.sku, mono: true },
                ...(product.oemNumbers?.length
                  ? product.oemNumbers.map((oem, i) => ({
                      label: i === 0 ? "OEM Number" : `OEM (alt ${i + 1})`,
                      value: oem,
                      mono: true,
                    }))
                  : []),
                ...(categoryName ? [{ label: "Category", value: categoryName, mono: false }] : []),
                ...(brandName ? [{ label: "Brand", value: brandName, mono: false }] : []),
                ...(product.isOriginal !== undefined
                  ? [{ label: "Part Type", value: product.isOriginal ? "OEM Original" : "OEM-Grade Equivalent", mono: false }]
                  : []),
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-4 px-4 py-3">
                  <span className="w-28 shrink-0 text-xs font-medium text-muted-foreground pt-0.5">
                    {row.label}
                  </span>
                  <span className={`text-sm break-all ${row.mono ? "font-mono" : ""}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Indicative pricing */}
            <div className="rounded-xl border border-border bg-muted/30 px-5 py-4">
              <p className="text-2xl font-bold">
                {formatCurrency(product.price)}
                <span className="ml-1.5 text-sm font-normal text-muted-foreground">/ unit</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground italic">
                Indicative price — confirmed in formal written quotation
              </p>
            </div>

            {/* Availability + logistics */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-sm">
                <Package className="h-4 w-4 shrink-0 text-muted-foreground" />
                <span>
                  {product.inStock ? (
                    <span className="text-green-600 font-medium">In Stock</span>
                  ) : (
                    <span className="text-muted-foreground">Available on Request</span>
                  )}
                </span>
              </div>
              {product.deliveryDays && (
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" />
                  <span>
                    Indicative lead time: {product.deliveryDays}{" "}
                    {product.deliveryDays === 1 ? "business day" : "business days"}
                  </span>
                </div>
              )}
              {product.isOriginal && (
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 shrink-0" />
                  <span>OEM documentation available on request</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="w-full">
                <Link href={rfqHref} className="flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  Request a Quote for This Part
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/rfq#oem">Submit Full OEM List</Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground">
              B2B only. Formal quotation includes final price, availability confirmation,
              and lead time. Payment by EUR bank transfer against invoice.
            </p>
          </div>
        </div>

        {/* Description */}
        {product.description && (
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-3 text-lg font-semibold">Product Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
        )}

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mt-10 max-w-3xl">
            <h2 className="mb-4 text-lg font-semibold">Specifications</h2>
            <div className="rounded-xl border border-border divide-y divide-border">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex gap-6 px-5 py-3 text-sm">
                  <span className="w-40 shrink-0 font-medium text-muted-foreground">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compatible vehicles */}
        {product.compatibleVehicles && product.compatibleVehicles.length > 0 && (
          <div className="mt-10 max-w-3xl">
            <h2 className="mb-4 text-lg font-semibold">Compatible Vehicles</h2>
            <div className="flex flex-wrap gap-2">
              {product.compatibleVehicles.map((v) => (
                <span
                  key={v}
                  className="rounded-md border border-border bg-muted px-3 py-1 text-xs"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

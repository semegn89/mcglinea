// ─── Product ────────────────────────────────────────────────────────────────

export interface Product {
  id: string
  sku: string
  name: string
  description?: string
  slug: string
  categoryId: string
  category?: Category
  brandId?: string
  brand?: Brand
  price: number
  priceTiers?: PriceTier[]
  oemNumbers?: string[]
  images: string[]
  specifications?: Record<string, string>
  inStock: boolean
  stockQuantity?: number
  deliveryDays?: number
  moq?: number          // minimum order quantity
  warranty?: string     // e.g. "12 months"
  isOriginal: boolean
  compatibleVehicles?: string[]
  shippingRegions?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  parentId?: string
  parent?: Category
  children?: Category[]
  image?: string
  order: number
}

export interface Brand {
  id: string
  name: string
  slug: string
  logo?: string
}

export interface PriceTier {
  id: string
  tier: string
  minQuantity: number
  price: number
}

// ─── RFQ (Request for Quote) ─────────────────────────────────────────────────

export interface RfqFormValues {
  companyName: string
  contactName: string
  email: string
  phone?: string
  country: string
  vatNumber?: string
  oemSkuList: string        // free-text OEM/SKU list, one per line
  quantity?: string
  message?: string
  // file upload handled separately via FormData
}

export interface RfqSubmission extends RfqFormValues {
  id: string
  submittedAt: Date
  source?: string           // e.g. "catalog-page", "product-page", "rfq-page"
  productSlug?: string      // if submitted from a specific product
}

export type RfqStatus = "pending" | "reviewed" | "quoted" | "closed"

// ─── Search ──────────────────────────────────────────────────────────────────

export interface SearchFilters {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  isOriginal?: boolean
  deliveryDays?: number
}

export interface SearchResult {
  products: Product[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

// ─── SEO / Structured Data ───────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string
  href: string
}

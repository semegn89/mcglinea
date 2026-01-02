// Product types
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
  isOriginal: boolean
  compatibleVehicles?: string[]
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

// Cart types
export interface CartItem {
  productId: string
  product?: Product
  quantity: number
  price: number
  selectedPriceTier?: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  total: number
  currency: string
}

// Order types
export interface Order {
  id: string
  orderNumber: string
  userId?: string
  user?: User
  status: OrderStatus
  items: OrderItem[]
  subtotal: number
  shippingCost: number
  total: number
  currency: string
  shippingAddress: Address
  billingAddress?: Address
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  invoiceNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  id: string
  productId: string
  product?: Product
  quantity: number
  price: number
  total: number
}

export type OrderStatus = 
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"

export type PaymentMethod = "bank_transfer" | "stripe" | "paypal"
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded"

// User types
export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  role: UserRole
  companyProfile?: CompanyProfile
  addresses?: Address[]
  createdAt: Date
  updatedAt: Date
}

export type UserRole = "customer" | "b2b" | "admin"

export interface CompanyProfile {
  id: string
  userId: string
  companyName: string
  vatNumber?: string
  taxId?: string
  registrationNumber?: string
  address?: Address
  contactPerson?: string
  priceTier?: string
}

export interface Address {
  id: string
  userId?: string
  type: "shipping" | "billing" | "both"
  firstName: string
  lastName: string
  company?: string
  addressLine1: string
  addressLine2?: string
  city: string
  state?: string
  postalCode: string
  country: string
  phone?: string
  isDefault?: boolean
}

// Search types
export interface SearchResult {
  products: Product[]
  categories: Category[]
  brands: Brand[]
  total: number
  page: number
  perPage: number
  totalPages: number
}

export interface SearchFilters {
  category?: string
  brand?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  isOriginal?: boolean
  deliveryDays?: number
}

// Invoice types
export interface Invoice {
  id: string
  invoiceNumber: string
  orderId: string
  order?: Order
  issueDate: Date
  dueDate: Date
  total: number
  currency: string
  pdfUrl?: string
  createdAt: Date
}


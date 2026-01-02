import type { Metadata } from "next"
import { CartContent } from "@/components/cart/cart-content"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your cart items",
}

export default function CartPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Shopping Cart</h1>
      <CartContent />
    </div>
  )
}


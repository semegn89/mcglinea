import type { Metadata } from "next"
import { CheckoutForm } from "@/components/checkout/checkout-form"

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order",
}

export default function CheckoutPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">Checkout</h1>
      <CheckoutForm />
    </div>
  )
}


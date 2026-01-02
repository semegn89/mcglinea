"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCart, getCartTotal, clearCart } from "@/lib/cart"
import { formatCurrency } from "@/lib/utils"
import { useRouter } from "next/navigation"
import Link from "next/link"

const checkoutSchema = z.object({
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  phone: z.string().min(1, "Phone is required"),
  addressLine1: z.string().min(1, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  notes: z.string().optional(),
})

type CheckoutFormData = z.infer<typeof checkoutSchema>

export function CheckoutForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const cartItems = getCart()
  const subtotal = getCartTotal(cartItems)
  const shipping = subtotal > 0 ? 15 : 0
  const total = subtotal + shipping

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true)
    
    // Generate order number
    const orderNumber = `MCG-${Date.now()}`
    
    // In production, this would send to API
    // For now, store in localStorage and redirect
    const order = {
      orderNumber,
      ...data,
      items: cartItems,
      subtotal,
      shipping,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    }
    
    localStorage.setItem(`order_${orderNumber}`, JSON.stringify(order))
    clearCart()
    
    router.push(`/checkout/success?order=${orderNumber}`)
  }

  if (cartItems.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="mb-4 text-lg text-muted-foreground">Your cart is empty</p>
        <Button asChild>
          <Link href="/catalog">Browse Catalog</Link>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && (
                <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" {...register("firstName")} />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-destructive">{errors.firstName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" {...register("lastName")} />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-destructive">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" {...register("company")} />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" type="tel" {...register("phone")} />
              {errors.phone && (
                <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Shipping Address */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="addressLine1">Address Line 1 *</Label>
              <Input id="addressLine1" {...register("addressLine1")} />
              {errors.addressLine1 && (
                <p className="mt-1 text-sm text-destructive">{errors.addressLine1.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="addressLine2">Address Line 2</Label>
              <Input id="addressLine2" {...register("addressLine2")} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input id="city" {...register("city")} />
                {errors.city && (
                  <p className="mt-1 text-sm text-destructive">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code *</Label>
                <Input id="postalCode" {...register("postalCode")} />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-destructive">{errors.postalCode.message}</p>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="country">Country *</Label>
              <Input id="country" {...register("country")} />
              {errors.country && (
                <p className="mt-1 text-sm text-destructive">{errors.country.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Order Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Order Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              {...register("notes")}
              placeholder="Any special instructions or notes for your order..."
              rows={4}
            />
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Items ({cartItems.length})</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Place Order"}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Payment will be processed via bank transfer. Invoice will be generated after order confirmation.
            </p>
          </CardFooter>
        </Card>
      </div>
    </form>
  )
}


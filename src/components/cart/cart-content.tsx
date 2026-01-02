"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getCart, removeFromCart, updateCartItemQuantity, getCartTotal } from "@/lib/cart"
import type { CartItem } from "@/types"
import { formatCurrency } from "@/lib/utils"

export function CartContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCartItems(getCart())
    setLoading(false)
  }, [])

  const handleRemove = (productId: string) => {
    const updated = removeFromCart(productId)
    setCartItems(updated)
  }

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    const updated = updateCartItemQuantity(productId, newQuantity)
    setCartItems(updated)
  }

  const subtotal = getCartTotal(cartItems)
  const shipping = subtotal > 0 ? 15 : 0 // Example shipping cost
  const total = subtotal + shipping

  if (loading) {
    return <div className="py-12 text-center text-muted-foreground">Loading cart...</div>
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="mb-4 text-lg text-muted-foreground">Your cart is empty</p>
        <Button asChild>
          <Link href="/catalog">Browse Catalog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map((item) => {
          const product = item.product
          if (!product) return null

          return (
            <Card key={item.productId}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Link href={`/product/${product.slug}`} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={product.images[0] || "/assets/parts-closeup.jpg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="mb-1 font-semibold hover:text-primary">{product.name}</h3>
                    </Link>
                    <p className="mb-2 text-sm text-muted-foreground">SKU: {product.sku}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => {
                            const qty = parseInt(e.target.value) || 1
                            handleQuantityChange(item.productId, qty)
                          }}
                          className="w-16 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                        <p className="text-sm text-muted-foreground">{formatCurrency(item.price)} each</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemove(item.productId)}
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping > 0 ? formatCurrency(shipping) : "—"}</span>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

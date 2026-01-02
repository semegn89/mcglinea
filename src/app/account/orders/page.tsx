import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCurrency, formatDate } from "@/lib/utils"
import Link from "next/link"

export const metadata: Metadata = {
  title: "My Orders",
  description: "View your order history",
}

// Mock orders - in production, load from API/database
function getOrders() {
  if (typeof window === "undefined") return []
  
  const orders: any[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith("order_")) {
      try {
        const order = JSON.parse(localStorage.getItem(key) || "{}")
        orders.push(order)
      } catch {
        // Ignore invalid entries
      }
    }
  }
  return orders.sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export default function OrdersPage() {
  // This is a client component in production, but for SSR we'll show empty state
  const orders: any[] = []

  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">My Orders</h1>
      
      {orders.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="mb-4 text-muted-foreground">You haven&apos;t placed any orders yet.</p>
            <Button asChild>
              <Link href="/catalog">Browse Catalog</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.orderNumber}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Order {order.orderNumber}</CardTitle>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatCurrency(order.total)}</p>
                    <p className="text-sm text-muted-foreground capitalize">{order.status}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {order.items?.length || 0} {order.items?.length === 1 ? "item" : "items"}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/account/orders/${order.orderNumber}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}


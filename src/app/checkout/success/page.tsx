import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Order Confirmed",
  description: "Your order has been confirmed",
}

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { order?: string }
}) {
  const orderNumber = searchParams.order || "N/A"

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="pt-12 pb-12">
            <div className="text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-4 text-3xl font-bold">Order Confirmed!</h1>
              <p className="mb-2 text-lg text-muted-foreground">
                Thank you for your order
              </p>
              <p className="mb-8 text-muted-foreground">
                Order Number: <span className="font-mono font-semibold">{orderNumber}</span>
              </p>
              
              <div className="mb-8 space-y-2 text-left">
                <p className="text-sm text-muted-foreground">
                  We&apos;ve received your order and will process it shortly. You will receive an
                  email confirmation with your order details and invoice.
                </p>
                <p className="text-sm text-muted-foreground">
                  Payment instructions and banking details are available on the invoice, which will
                  be sent to your email address.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link href="/account/orders">View Orders</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/catalog">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


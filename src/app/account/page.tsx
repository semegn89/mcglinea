import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, FileText, MapPin, User } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Account",
  description: "Your account dashboard",
}

export default function AccountPage() {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="mb-8 text-3xl font-bold md:text-4xl">My Account</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/account/orders" className="block transition-shadow hover:shadow-lg">
          <Card>
            <CardHeader>
              <Package className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">View your order history</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/account/profile" className="block transition-shadow hover:shadow-lg">
          <Card>
            <CardHeader>
              <User className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Manage your account information</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/account/addresses" className="block transition-shadow hover:shadow-lg">
          <Card>
            <CardHeader>
              <MapPin className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Addresses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Manage shipping addresses</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/account/invoices" className="block transition-shadow hover:shadow-lg">
          <Card>
            <CardHeader>
              <FileText className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Download your invoices</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}


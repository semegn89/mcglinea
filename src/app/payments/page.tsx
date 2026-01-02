import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export const metadata: Metadata = {
  title: "Payment Information",
  description: "Banking details for EUR payments to MCG-LINEA S.R.L.",
}

export default function PaymentsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Payment Information</h1>
        
        <div className="space-y-6">
          <section>
            <p className="mb-4 text-lg text-muted-foreground">
              Use the following banking details for EUR-denominated business payments.
              Information is provided for reference only.
            </p>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Banking Details (EUR)</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Account Holder</p>
                <p className="text-base">MCG-LINEA S.R.L.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bank Name</p>
                <p className="text-base">Banca Transilvania (BT)</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">IBAN</p>
                <div className="flex items-center gap-2">
                  <code className="rounded bg-muted px-2 py-1 text-sm">
                    RO90 BTRLEURCRT0DB7686301
                  </code>
                  <Button variant="ghost" size="icon" aria-label="Copy IBAN">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Currency</p>
                <p className="text-base">EUR</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">SWIFT/BIC</p>
                <div className="flex items-center gap-2">
                  <code className="rounded bg-muted px-2 py-1 text-sm">BTRLRO22</code>
                  <Button variant="ghost" size="icon" aria-label="Copy SWIFT">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Account Type</p>
                <p className="text-base">Business Current Account (EUR)</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Bank Address</p>
                <p className="text-base">
                  Banca Transilvania Head Office, Cluj-Napoca, Romania
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Payments are accepted in EUR only on this account.</li>
                <li>
                  Reference details (invoice number, contract reference) should be added
                  as instructed by MCG-LINEA S.R.L.
                </li>
                <li>
                  Any correspondent/intermediary bank fees are subject to your bank&apos;s
                  policies and are not controlled by MCG-LINEA S.R.L.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-destructive/50">
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This page is informational and does not constitute a public offer or
                guarantee of payment processing times. Final terms, including due dates
                and conditions, are governed by the specific agreements with your
                company.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


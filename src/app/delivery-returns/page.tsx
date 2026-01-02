import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Delivery & Returns",
  description: "Information about delivery and return policies for MCG-LINEA S.R.L.",
}

export default function DeliveryReturnsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Delivery & Returns</h1>
        
        <div className="space-y-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We deliver vehicle parts and accessories to business customers across the European
                  Union and beyond. Delivery terms, methods, and costs are agreed individually for
                  each order and specified in commercial agreements or order confirmations.
                </p>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Standard Delivery</h3>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Delivery times vary based on product availability and destination</li>
                    <li>In-stock items typically ship within 1-3 business days</li>
                    <li>Estimated delivery times are provided at checkout</li>
                    <li>Tracking information is provided for all shipments</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Shipping Methods</h3>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Standard ground shipping (most common)</li>
                    <li>Express shipping (available for urgent orders)</li>
                    <li>Freight shipping (for large or heavy items)</li>
                    <li>International shipping (subject to customs and import regulations)</li>
                  </ul>
                </div>
                <p>
                  <strong>Note:</strong> Delivery dates are estimates and not guaranteed. We are not
                  liable for delays caused by factors beyond our reasonable control, including
                  natural disasters, transportation disruptions, or supplier delays.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>Returns & Warranty</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Return and warranty policies are governed by individual commercial agreements and
                  applicable Romanian commercial law. Consumer return rights under consumer protection
                  regulations do not apply to B2B transactions.
                </p>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Return Authorization</h3>
                  <p>
                    All returns must be authorized in advance. To initiate a return:
                  </p>
                  <ol className="ml-6 list-decimal space-y-1">
                    <li>Contact us within the timeframe specified in your commercial agreement</li>
                    <li>Provide order number and reason for return</li>
                    <li>Obtain return authorization and instructions</li>
                    <li>Ship items back in original packaging when possible</li>
                  </ol>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Defective or Non-Conforming Products</h3>
                  <p>
                    Products that are defective or do not conform to specifications may be returned
                    subject to our return authorization process and within the timeframe specified in
                    your commercial agreement.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Warranty</h3>
                  <p>
                    Product warranties, if any, are provided by manufacturers and are subject to their
                    terms and conditions. We facilitate warranty claims but are not responsible for
                    manufacturer warranties.
                  </p>
                </div>
                <p>
                  <strong>Important:</strong> Unauthorized returns may be refused or subject to
                  restocking fees. Please contact us before returning any items.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>Contact for Delivery & Returns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  For questions about delivery, returns, or warranty claims, please contact us:
                </p>
                <p>
                  Email: <a href="mailto:mcglinea@gmail.com" className="text-primary hover:underline">mcglinea@gmail.com</a>
                  <br />
                  Phone: <a href="tel:+4073491244" className="text-primary hover:underline">+40 734 912 44</a>
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}


import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using MCG-LINEA S.R.L. services",
}

export default function TermsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Terms & Conditions</h1>
        
        <div className="space-y-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms and Conditions ("Terms") govern your use of the website and services
                  provided by MCG-LINEA S.R.L., a Romanian limited liability company registered
                  under CUI 52838400, with registered address at Jud. Vaslui, Municipiul Vaslui,
                  Strada Radu Negru, Bl. 274, Sc. C, Ap. B14, Romania ("Company", "we", "us", or "our").
                </p>
                <p>
                  By accessing or using our website (mcglinea.com) or placing an order with us, you
                  agree to be bound by these Terms. If you do not agree with any part of these Terms,
                  you must not use our website or services.
                </p>
                <p>
                  These Terms apply to all users of the website, including browsers, vendors, customers,
                  merchants, and contributors of content.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>2. Business to Business (B2B) Nature</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our services are primarily designed for business customers. By using our website and
                  placing orders, you confirm that you are acting in the course of your business,
                  trade, or profession and not as a consumer.
                </p>
                <p>
                  All transactions are subject to business-to-business terms, and consumer protection
                  regulations may not apply. Prices and terms are subject to individual commercial
                  agreements between MCG-LINEA S.R.L. and the customer.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>3. Products and Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We specialize in the wholesale trade of vehicle parts and accessories. Product
                  descriptions, specifications, images, and prices are provided for informational
                  purposes and are subject to change without notice.
                </p>
                <p>
                  We strive to ensure accuracy in product information, but we do not warrant that
                  product descriptions or other content on our website are accurate, complete, reliable,
                  current, or error-free.
                </p>
                <p>
                  Product availability is subject to stock levels. We reserve the right to limit the
                  quantity of products available for purchase and to discontinue any product at any time.
                </p>
                <p>
                  Prices are quoted in EUR and are exclusive of VAT, taxes, shipping, and handling
                  charges unless otherwise stated. Final prices and payment terms are confirmed in
                  individual commercial agreements or invoices.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>4. Orders and Acceptance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  When you place an order through our website, you are making an offer to purchase
                  products subject to these Terms. All orders are subject to acceptance by us.
                </p>
                <p>
                  We reserve the right to refuse or cancel any order for any reason, including but
                  not limited to: product availability, errors in pricing or product information,
                  suspected fraud, or violation of these Terms.
                </p>
                <p>
                  Order confirmation does not constitute acceptance of your order. A contract between
                  you and MCG-LINEA S.R.L. is formed only when we dispatch the products or confirm
                  acceptance of your order in writing.
                </p>
                <p>
                  For B2B transactions, specific terms, delivery dates, payment conditions, and
                  Incoterms are agreed individually and documented in separate commercial agreements
                  or purchase orders.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>5. Pricing and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Prices displayed on our website are indicative and subject to change. Final prices
                  are determined based on agreed pricing tiers, quantities, and commercial terms
                  applicable to your account.
                </p>
                <p>
                  Payment terms, including payment methods, due dates, and currency, are agreed
                  individually with each business customer and specified in commercial agreements
                  or invoices.
                </p>
                <p>
                  We accept payments by bank transfer to our EUR account. Payment details are
                  provided in invoices and on our Payments page. Online payment options may be
                  available for certain orders and customers.
                </p>
                <p>
                  Unless otherwise agreed, payment is due according to the terms specified in the
                  invoice. Late payments may incur interest charges as permitted by applicable law.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>6. Delivery and Shipping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Delivery terms, shipping methods, costs, and estimated delivery times are agreed
                  individually for each order and specified in commercial agreements or order
                  confirmations.
                </p>
                <p>
                  Delivery dates are estimates and not guaranteed. We are not liable for delays in
                  delivery caused by factors beyond our reasonable control, including but not limited
                  to natural disasters, transportation disruptions, or supplier delays.
                </p>
                <p>
                  Risk of loss and title to products pass to you upon delivery to the carrier or
                  collection point, unless otherwise agreed in writing.
                </p>
                <p>
                  You are responsible for inspecting products upon delivery and reporting any defects,
                  damages, or discrepancies within the timeframe specified in our return policy or
                  commercial agreement.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>7. Returns and Warranty</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Return and warranty policies are governed by individual commercial agreements and
                  applicable Romanian commercial law. Consumer return rights under consumer protection
                  regulations do not apply to B2B transactions.
                </p>
                <p>
                  Product warranties, if any, are provided by manufacturers and are subject to their
                  terms and conditions. We facilitate warranty claims but are not responsible for
                  manufacturer warranties.
                </p>
                <p>
                  Defective or non-conforming products may be returned subject to our return
                  authorization process and within the timeframe specified in your commercial agreement.
                </p>
                <p>
                  Returns must be authorized in advance. Unauthorized returns may be refused or
                  subject to restocking fees.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>8. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  All content on this website, including text, graphics, logos, images, software, and
                  other materials, is the property of MCG-LINEA S.R.L. or its content suppliers and
                  is protected by Romanian and international copyright and trademark laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly
                  display, or use our content without our prior written permission.
                </p>
                <p>
                  Product names, trademarks, and logos used on this website are the property of their
                  respective owners and are used for identification purposes only.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>9. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by applicable law, MCG-LINEA S.R.L. and its
                  directors, employees, and agents shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to loss of
                  profits, data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability to you for any claims arising from or related to these Terms
                  or our services shall not exceed the total amount paid by you to us in the twelve
                  (12) months preceding the claim.
                </p>
                <p>
                  Nothing in these Terms excludes or limits our liability for death or personal
                  injury caused by our negligence, fraud, or any other liability that cannot be
                  excluded or limited by applicable law.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>10. Data Protection and Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Your use of our website and services is also governed by our Privacy Policy,
                  which explains how we collect, use, and protect your personal data in accordance
                  with GDPR and applicable data protection laws.
                </p>
                <p>
                  By using our website, you consent to the collection and use of your information
                  as described in our Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>11. Governing Law and Jurisdiction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms are governed by and construed in accordance with the laws of Romania,
                  without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising from or relating to these Terms or our services shall be
                  subject to the exclusive jurisdiction of the competent courts of Romania, unless
                  mandatory provisions of law require otherwise.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective
                  immediately upon posting on our website. Your continued use of our website or
                  services after changes are posted constitutes acceptance of the modified Terms.
                </p>
                <p>
                  Material changes will be communicated to existing customers where required by law
                  or where we deem it appropriate.
                </p>
                <p>
                  For ongoing commercial relationships, specific terms agreed in commercial agreements
                  take precedence over these general Terms.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions about these Terms, please contact us:
                </p>
                <p>
                  <strong>MCG-LINEA S.R.L.</strong>
                  <br />
                  Jud. Vaslui, Municipiul Vaslui
                  <br />
                  Strada Radu Negru, Bl. 274, Sc. C, Ap. B14, Romania
                  <br />
                  CUI: 52838400
                </p>
                <p>
                  Email: <a href="mailto:mcglinea@gmail.com" className="text-primary hover:underline">mcglinea@gmail.com</a>
                  <br />
                  Phone: <a href="tel:+4073491244" className="text-primary hover:underline">+40 734 912 44</a>
                </p>
                <p className="text-sm">
                  <strong>Last updated:</strong> January 2025
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}


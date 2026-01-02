import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MCG-LINEA S.R.L. and our commitment to quality vehicle parts",
}

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">About MCG-LINEA S.R.L.</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
            <p className="mb-4 text-lg text-muted-foreground">
              MCG-LINEA S.R.L. specializes in the wholesale trade of vehicle parts and
              accessories, serving business customers across the EU and beyond.
            </p>
            <p className="text-lg text-muted-foreground">
              We are a registered Romanian limited liability company (SRL) focused on
              providing reliable sourcing, structured partner onboarding, and compliant
              cross-border settlements in EUR.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Company Information</h2>
            <Card>
              <CardHeader>
                <CardTitle>Legal Details</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Company Name</p>
                  <p className="text-base">MCG-LINEA S.R.L.</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">CUI</p>
                  <p className="text-base">52838400</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Legal Form</p>
                  <p className="text-base">SRL (Limited Liability Company)</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Director</p>
                  <p className="text-base">Bogdan Sună</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Registered Address</p>
                  <p className="text-base">
                    Jud. Vaslui, Municipiul Vaslui, Strada Radu Negru, Bl. 274, Sc. C, Ap. B14, Romania
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-sm font-medium text-muted-foreground">Legal Basis</p>
                  <p className="text-base">Applicable Romanian Commercial Law</p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold">Our Services</h2>
            <ul className="list-disc space-y-2 pl-6 text-lg text-muted-foreground">
              <li>B2B wholesale supply of vehicle parts and accessories</li>
              <li>Support for EU partner onboarding and documentation</li>
              <li>Export/import operations, including EUR-denominated settlements</li>
              <li>Reliable sourcing and quality assurance</li>
              <li>Compliant cross-border transactions</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}


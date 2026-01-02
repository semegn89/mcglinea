import { Search, ShoppingCart, FileText, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search & Browse",
    description: "Find the parts you need using our comprehensive catalog, search by SKU, OEM, or VIN",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "Add to Cart",
    description: "Select your items, check availability and pricing based on your account tier",
  },
  {
    number: "03",
    icon: FileText,
    title: "Place Order",
    description: "Review your order, provide delivery details, and confirm payment terms",
  },
  {
    number: "04",
    icon: Package,
    title: "Receive & Install",
    description: "Track your shipment and receive quality parts ready for installation",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Simple, transparent process from search to delivery
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card key={step.number} className="relative border-border/40">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-4xl font-bold text-muted-foreground/20">
                      {step.number}
                    </span>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


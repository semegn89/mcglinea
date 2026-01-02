import { Package, Shield, Truck, Euro } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Package,
    title: "Wide Product Range",
    description: "Extensive catalog of vehicle parts and accessories from leading manufacturers",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "All products meet EU quality standards with warranty and support",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Efficient logistics network across Europe with tracking and insurance",
  },
  {
    icon: Euro,
    title: "Competitive Pricing",
    description: "B2B pricing tiers with EUR settlements and flexible payment terms",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Why Choose MCG-LINEA
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Your trusted partner for wholesale vehicle parts and accessories across Europe
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-border/40">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
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


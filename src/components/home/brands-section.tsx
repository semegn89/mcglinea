export function BrandsSection() {
  // Placeholder brands - replace with actual brand data/logos
  const brands = [
    "Brand 1",
    "Brand 2",
    "Brand 3",
    "Brand 4",
    "Brand 5",
    "Brand 6",
  ]

  return (
    <section className="border-y border-border/40 bg-muted/30 py-16 md:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Trusted Brands
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We work with leading manufacturers and suppliers in the automotive industry
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex h-24 items-center justify-center rounded-xl border border-border/40 bg-background/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


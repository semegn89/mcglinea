export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MCG-LINEA S.R.L.",
    legalName: "MCG-LINEA S.R.L.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://mcglinea.com",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://mcglinea.com"}/assets/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40-734-912-44",
      contactType: "Customer Service",
      email: "mcglinea@gmail.com",
      areaServed: "EU",
      availableLanguage: ["en", "ro", "ru"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Strada Radu Negru, Bl. 274, Sc. C, Ap. B14",
      addressLocality: "Vaslui",
      addressRegion: "Vaslui",
      postalCode: "",
      addressCountry: "RO",
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}


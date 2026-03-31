import { COMPANY, SITE } from "@/config/company"

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    legalName: COMPANY.name,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo.png`,
    description: COMPANY.description,
    foundingDate: String(COMPANY.founded),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: COMPANY.contact.salesEmail,
      areaServed: "EU",
      availableLanguage: ["en"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: COMPANY.countryCode,
      addressLocality:
        COMPANY.address.city !== "TODO_REAL_DATA" ? COMPANY.address.city : undefined,
      postalCode:
        COMPANY.address.postalCode !== "TODO_REAL_DATA"
          ? COMPANY.address.postalCode
          : undefined,
    },
    sameAs: Object.values(COMPANY.social).filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

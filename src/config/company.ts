// Central source of truth for all company information.
// Import from here — never hardcode company data in components.

export const COMPANY = {
  name: "MCG-LINEA S.R.L.",
  shortName: "MCG-LINEA",
  legalForm: "S.R.L.",
  registrationNumber: "TODO_REAL_DATA", // e.g. Romanian CUI / registration no.
  vatNumber: "TODO_REAL_DATA",          // e.g. RO-XXXXXXXX
  country: "Romania",
  countryCode: "RO",
  address: {
    street: "TODO_REAL_DATA",
    city: "TODO_REAL_DATA",
    postalCode: "TODO_REAL_DATA",
    country: "Romania",
  },
  contact: {
    email: "office@mcglinea.com",
    salesEmail: "sales@mcglinea.com",
    phone: "TODO_REAL_DATA",
    whatsapp: "TODO_REAL_DATA", // optional
  },
  banking: {
    // Only partial/masked details are shown publicly.
    // Full details are sent only on confirmed invoice.
    bankName: "TODO_REAL_DATA",
    currency: "EUR",
    ibanMasked: "TODO_REAL_DATA", // e.g. "RO** **** **** **** **** **"
    swift: "TODO_REAL_DATA",
  },
  domain: "https://www.mcglinea.com",
  founded: 2024,
  description:
    "MCG-LINEA S.R.L. is a Romanian-registered wholesale supplier of vehicle parts and accessories, serving distributors, workshops, and fleet buyers across the EU.",
  social: {
    linkedin: "", // TODO_REAL_DATA
  },
} as const

export const SITE = {
  name: COMPANY.name,
  url: COMPANY.domain,
  defaultTitle: "MCG-LINEA S.R.L. — Wholesale Vehicle Parts & Accessories",
  defaultDescription:
    "B2B wholesale trade of vehicle parts and accessories. EU-focused, EUR settlements, structured partner onboarding. Request a quote or send your OEM list.",
  ogImage: "/assets/og-default.jpg",
} as const

export const NAV_LINKS = [
  { label: "Catalog", href: "/catalog" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contacts", href: "/contacts" },
] as const

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Contacts", href: "/contacts" },
  ],
  catalog: [
    { label: "Browse Catalog", href: "/catalog" },
    { label: "Request a Quote", href: "/rfq" },
    { label: "OEM/VIN Inquiry", href: "/rfq#oem" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Delivery & Returns", href: "/delivery-returns" },
    { label: "Payment Information", href: "/payments" },
  ],
} as const

export const BUYER_TYPES = [
  "Auto parts distributors",
  "Independent workshops & garages",
  "Fleet operators & leasing companies",
  "Procurement managers",
  "Export traders",
  "Retail chains (wholesale supply)",
] as const

export const VEHICLE_BRANDS_SERVED = [
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Volkswagen",
  "Volvo",
  "Ford",
  "Opel / Vauxhall",
  "Renault",
  "Peugeot",
  "Citroën",
] as const

export const PART_CATEGORIES = [
  "Engine Parts",
  "Brake System",
  "Suspension & Steering",
  "Transmission",
  "Electrical & Ignition",
  "Filters",
  "Cooling System",
  "Exhaust",
  "Body Parts",
  "Lighting",
  "Tyres & Wheels",
  "Interior & Accessories",
] as const

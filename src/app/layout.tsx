import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/styles/globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"
import { OrganizationSchema } from "@/components/seo/organization-schema"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "MCG-LINEA S.R.L. — Wholesale vehicle parts & accessories",
    template: "%s | MCG-LINEA S.R.L.",
  },
  description: "MCG-LINEA S.R.L. — wholesale trade of vehicle parts and accessories. B2B supply, EU partner onboarding, EUR payments supported.",
  keywords: ["vehicle parts", "auto parts", "wholesale", "B2B", "Romania", "EU"],
  authors: [{ name: "MCG-LINEA S.R.L." }],
  creator: "MCG-LINEA S.R.L.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mcglinea.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MCG-LINEA S.R.L.",
    title: "MCG-LINEA S.R.L. — Wholesale vehicle parts & accessories",
    description: "Wholesale trade of vehicle parts and accessories. B2B supply, EU partner onboarding, EUR payments supported.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}


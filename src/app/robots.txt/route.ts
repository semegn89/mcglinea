import { NextResponse } from "next/server"

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /account/
Disallow: /checkout/

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || "https://mcglinea.com"}/sitemap.xml
`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}


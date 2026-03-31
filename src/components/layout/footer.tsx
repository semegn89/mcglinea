import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { COMPANY, FOOTER_LINKS } from "@/config/company"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <p className="text-base font-bold tracking-tight">{COMPANY.name}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Wholesale supplier of vehicle parts and accessories. B2B partnerships,
              EUR settlements, EU-focused export.
            </p>
            <div className="space-y-1.5">
              <a
                href={`mailto:${COMPANY.contact.salesEmail}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0" />
                {COMPANY.contact.salesEmail}
              </a>
              {COMPANY.contact.phone !== "TODO_REAL_DATA" && (
                <a
                  href={`tel:${COMPANY.contact.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {COMPANY.contact.phone}
                </a>
              )}
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="mb-4 text-sm font-semibold">Company</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog links */}
          <div>
            <p className="mb-4 text-sm font-semibold">Catalog & Inquiries</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.catalog.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <p className="mb-4 text-sm font-semibold">Legal</p>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Registered in {COMPANY.country}
            {COMPANY.registrationNumber !== "TODO_REAL_DATA"
              ? ` · Reg. No. ${COMPANY.registrationNumber}`
              : ""}
          </p>
        </div>
      </div>
    </footer>
  )
}

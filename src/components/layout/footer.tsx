import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">MCG-LINEA S.R.L.</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Wholesale trade of vehicle parts and accessories
            </p>
            <p className="text-sm text-muted-foreground">
              CUI: 52838400
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog" className="text-muted-foreground hover:text-primary">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="text-muted-foreground hover:text-primary">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="/delivery-returns" className="text-muted-foreground hover:text-primary">
                  Delivery & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/payments" className="text-muted-foreground hover:text-primary">
                  Payment Information
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:mcglinea@gmail.com" className="hover:text-primary">
                  mcglinea@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+4073491244" className="hover:text-primary">
                  +40 734 912 44
                </a>
              </li>
              <li>
                Jud. Vaslui, Municipiul Vaslui
                <br />
                Strada Radu Negru, Bl. 274, Sc. C, Ap. B14
                <br />
                Romania
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MCG-LINEA S.R.L. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


import type { Metadata } from "next"
import { COMPANY, SITE } from "@/config/company"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for mcglinea.com — what cookies we use and why.",
  alternates: { canonical: `${SITE.url}/cookies` },
}

export default function CookiesPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Applicable to: {SITE.url} · Operator: {COMPANY.name}
        </p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website.
              They serve various purposes from ensuring the site functions correctly to
              tracking user behaviour for analytics.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">Cookies We Use</h2>
            <div className="rounded-xl border border-border divide-y divide-border">
              {[
                {
                  name: "cookie_consent",
                  type: "Strictly Necessary",
                  purpose: "Stores your cookie consent preference",
                  duration: "1 year",
                },
                {
                  name: "Session cookies",
                  type: "Strictly Necessary",
                  purpose: "Required for website functionality (form submissions, navigation)",
                  duration: "Session",
                },
              ].map((c) => (
                <div key={c.name} className="px-5 py-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-foreground">{c.name}</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs">{c.type}</span>
                  </div>
                  <p className="text-xs">{c.purpose}</p>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">Duration: {c.duration}</p>
                </div>
              ))}
            </div>
            <p className="mt-3">
              We do <strong className="text-foreground">not</strong> use advertising cookies,
              cross-site tracking cookies, or third-party analytics cookies that identify
              individual users.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">Managing Cookies</h2>
            <p>
              Strictly necessary cookies cannot be disabled as they are required for the
              website to function. You can delete cookies at any time via your browser
              settings. Clearing cookies will reset your consent preference and the banner
              will reappear on your next visit.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-foreground">Contact</h2>
            <p>
              Questions about our cookie practices:{" "}
              <a href={`mailto:${COMPANY.contact.email}`} className="text-primary hover:underline">
                {COMPANY.contact.email}
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

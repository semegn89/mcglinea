import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy and information about how MCG-LINEA S.R.L. uses cookies",
}

export default function CookiesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Cookie Policy</h1>
        
        <div className="space-y-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>1. What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when
                  you visit a website. They are widely used to make websites work more efficiently
                  and to provide information to website owners.
                </p>
                <p>
                  Cookies can be "persistent" (they remain on your device until they expire or are
                  deleted) or "session" cookies (they are deleted when you close your browser).
                </p>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing
                  experience, analyze website traffic, and understand user preferences.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use cookies for the following purposes:</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">2.1 Essential Cookies</h3>
                    <p>
                      These cookies are necessary for the website to function properly. They enable
                      core functionality such as security, network management, and accessibility.
                      These cookies cannot be switched off without affecting website functionality.
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Session management and authentication</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance</li>
                      <li>Cookie consent preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">2.2 Functional Cookies</h3>
                    <p>
                      These cookies enable enhanced functionality and personalization, such as
                      remembering your preferences, language selection, and region settings.
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>User preferences and settings</li>
                      <li>Language and region preferences</li>
                      <li>Shopping cart contents</li>
                      <li>Form data preservation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">2.3 Analytics Cookies</h3>
                    <p>
                      These cookies help us understand how visitors interact with our website by
                      collecting and reporting information anonymously. This helps us improve our
                      website's performance and user experience.
                    </p>
                    <ul className="ml-6 mt-2 list-disc space-y-1">
                      <li>Page views and navigation patterns</li>
                      <li>Time spent on pages</li>
                      <li>Error tracking and debugging</li>
                      <li>Traffic sources and referrals</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>3. Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">3.1 First-Party Cookies</h3>
                    <p>
                      These are cookies set by our website domain. They are essential for the website
                      to function and are typically used for session management, security, and basic
                      functionality.
                    </p>
                    <p className="mt-2 text-sm">
                      <strong>Examples:</strong> Session ID cookies, authentication tokens, cookie
                      consent preferences
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-foreground">3.2 Third-Party Cookies</h3>
                    <p>
                      These are cookies set by domains other than ours. We may use third-party
                      services that set their own cookies for analytics, security, or other purposes.
                    </p>
                    <p className="mt-2 text-sm">
                      <strong>Examples:</strong> Google Analytics, security services, payment processors
                      (if applicable)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>4. Specific Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="p-2 text-left font-semibold text-foreground">Cookie Name</th>
                        <th className="p-2 text-left font-semibold text-foreground">Purpose</th>
                        <th className="p-2 text-left font-semibold text-foreground">Duration</th>
                        <th className="p-2 text-left font-semibold text-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-mono text-xs">mcglinea_cookie_consent</td>
                        <td className="p-2">Stores your cookie consent preferences</td>
                        <td className="p-2">1 year</td>
                        <td className="p-2">Essential</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-mono text-xs">session_id</td>
                        <td className="p-2">Maintains your session while browsing</td>
                        <td className="p-2">Session</td>
                        <td className="p-2">Essential</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-2 font-mono text-xs">cart_items</td>
                        <td className="p-2">Stores items in your shopping cart</td>
                        <td className="p-2">30 days</td>
                        <td className="p-2">Functional</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm">
                  <strong>Note:</strong> Additional cookies may be set by third-party services we use.
                  We review and update this list regularly.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>5. Managing Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  You have the right to accept or reject cookies. Most web browsers automatically
                  accept cookies, but you can usually modify your browser settings to decline cookies
                  if you prefer.
                </p>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">5.1 Browser Settings</h3>
                  <p className="mb-2">
                    You can control cookies through your browser settings. Here are links to
                    instructions for popular browsers:
                  </p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">5.2 Cookie Consent Banner</h3>
                  <p>
                    When you first visit our website, you will see a cookie consent banner. You can
                    accept or reject non-essential cookies through this banner. Essential cookies
                    are required for the website to function and cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">5.3 Impact of Disabling Cookies</h3>
                  <p>
                    Please note that disabling certain cookies may affect the functionality of our
                    website. For example:
                  </p>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>You may need to re-enter information multiple times</li>
                    <li>Some features may not work as expected</li>
                    <li>Your shopping cart may not be saved</li>
                    <li>Personalized content may not be available</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>6. Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our website may use third-party services that set their own cookies. These services
                  have their own privacy and cookie policies. We recommend reviewing their policies:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Analytics Services:</strong> If we use services like Google Analytics,
                    they may set cookies to analyze website usage. You can opt-out of Google Analytics
                    tracking by installing the Google Analytics Opt-out Browser Add-on.
                  </li>
                  <li>
                    <strong>Payment Processors:</strong> If you make payments through our website,
                    payment processors may set cookies to process transactions securely.
                  </li>
                  <li>
                    <strong>Security Services:</strong> We may use security services that set cookies
                    to protect against fraud and ensure website security.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>7. Do Not Track Signals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites you
                  visit that you do not want to have your online activity tracked. Currently, there is
                  no standard for how DNT signals should be interpreted, and our website does not
                  currently respond to DNT signals.
                </p>
                <p>
                  However, you can still control cookies through your browser settings as described in
                  Section 5.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>8. Updates to This Cookie Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our
                  cookie practices, technology, or legal requirements. We will notify you of material
                  changes by posting the updated policy on our website and updating the "Last updated"
                  date.
                </p>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about
                  how we use cookies.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions about our use of cookies or this Cookie Policy, please
                  contact us:
                </p>
                <p>
                  <strong>MCG-LINEA S.R.L.</strong>
                  <br />
                  Jud. Vaslui, Municipiul Vaslui
                  <br />
                  Strada Radu Negru, Bl. 274, Sc. C, Ap. B14, Romania
                  <br />
                  CUI: 52838400
                </p>
                <p>
                  Email: <a href="mailto:mcglinea@gmail.com" className="text-primary hover:underline">mcglinea@gmail.com</a>
                  <br />
                  Phone: <a href="tel:+4073491244" className="text-primary hover:underline">+40 734 912 44</a>
                </p>
                <p className="text-sm">
                  <strong>Last updated:</strong> January 2025
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}


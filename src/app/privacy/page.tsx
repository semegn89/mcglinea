import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and data protection information for MCG-LINEA S.R.L.",
}

export default function PrivacyPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        
        <div className="space-y-8">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  MCG-LINEA S.R.L. ("we", "us", "our", or "Company") respects your privacy and is
                  committed to protecting your personal data. This Privacy Policy explains how we
                  collect, use, store, and protect your personal information when you use our website
                  (mcglinea.com) or our services.
                </p>
                <p>
                  This Privacy Policy applies to all users of our website and services, including
                  business customers, suppliers, and website visitors.
                </p>
                <p>
                  We are a Romanian limited liability company registered under CUI 52838400, with
                  registered address at Jud. Vaslui, Municipiul Vaslui, Strada Radu Negru, Bl. 274,
                  Sc. C, Ap. B14, Romania.
                </p>
                <p>
                  This Privacy Policy is designed to comply with the General Data Protection
                  Regulation (GDPR) (EU) 2016/679 and applicable Romanian data protection laws.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>2. Data Controller</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  MCG-LINEA S.R.L. is the data controller responsible for your personal data.
                </p>
                <p>
                  <strong>Contact Information:</strong>
                  <br />
                  MCG-LINEA S.R.L.
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
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>3. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">3.1 Information You Provide</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>Contact Information:</strong> Name, email address, phone number,
                      postal address, company name, job title
                    </li>
                    <li>
                      <strong>Business Information:</strong> Company registration number, VAT number,
                      tax ID, business address, payment information
                    </li>
                    <li>
                      <strong>Account Information:</strong> Username, password, account preferences,
                      delivery addresses
                    </li>
                    <li>
                      <strong>Order Information:</strong> Products ordered, quantities, order history,
                      payment details
                    </li>
                    <li>
                      <strong>Communications:</strong> Correspondence with us, feedback, inquiries,
                      support requests
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">3.2 Information We Collect Automatically</h3>
                  <ul className="ml-6 list-disc space-y-2">
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type and version, device
                      type, operating system, time zone setting
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages visited, time spent on pages, click paths,
                      search queries, referring websites
                    </li>
                    <li>
                      <strong>Cookies and Similar Technologies:</strong> See our Cookie Policy for
                      detailed information
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>4. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use your personal data for the following purposes:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Service Delivery:</strong> To process and fulfill orders, manage accounts,
                    provide customer support, and communicate about orders and services
                  </li>
                  <li>
                    <strong>Business Operations:</strong> To manage our business relationship with you,
                    process payments, manage invoices, and handle returns and warranty claims
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with legal obligations, including
                    tax, accounting, and regulatory requirements
                  </li>
                  <li>
                    <strong>Website Improvement:</strong> To analyze website usage, improve user
                    experience, and enhance our services
                  </li>
                  <li>
                    <strong>Marketing (with consent):</strong> To send promotional communications about
                    products, services, and special offers that may be of interest to you
                  </li>
                  <li>
                    <strong>Security:</strong> To protect against fraud, unauthorized access, and other
                    security threats
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>5. Legal Basis for Processing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We process your personal data based on the following legal grounds:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Contract Performance:</strong> To fulfill our contractual obligations to
                    you, including processing orders and providing services
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> To comply with legal requirements, such as tax
                    and accounting obligations
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> To operate our business, improve our services,
                    prevent fraud, and ensure security
                  </li>
                  <li>
                    <strong>Consent:</strong> Where you have given explicit consent, such as for
                    marketing communications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>6. Data Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We may share your personal data with:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party companies that perform services on
                    our behalf, such as payment processing, shipping, IT services, and analytics.
                    These providers are contractually obligated to protect your data.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Suppliers, manufacturers, and logistics partners
                    necessary to fulfill orders and provide services
                  </li>
                  <li>
                    <strong>Legal Authorities:</strong> When required by law, regulation, or legal
                    process, or to protect our rights and safety
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
                    sale of assets, where your data may be transferred to the new entity
                  </li>
                </ul>
                <p>
                  We do not sell your personal data to third parties for their marketing purposes.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Your personal data may be transferred to and processed in countries outside the
                  European Economic Area (EEA). When we transfer data outside the EEA, we ensure
                  appropriate safeguards are in place, such as:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Standard contractual clauses approved by the European Commission</li>
                  <li>Adequacy decisions by the European Commission</li>
                  <li>Other legally recognized transfer mechanisms</li>
                </ul>
                <p>
                  You can request information about the specific safeguards we use for international
                  transfers by contacting us.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>8. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes
                  for which it was collected, including:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>As required by law (e.g., accounting records for tax purposes)</li>
                  <li>For the duration of our business relationship</li>
                  <li>To resolve disputes and enforce agreements</li>
                  <li>For legitimate business purposes, such as improving our services</li>
                </ul>
                <p>
                  When personal data is no longer needed, we securely delete or anonymize it in
                  accordance with our data retention policies and applicable law.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>9. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Under GDPR and applicable data protection laws, you have the following rights:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong>Rectification:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Erasure:</strong> Request deletion of your personal data (right to be
                    forgotten) in certain circumstances
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of processing in certain
                    circumstances
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request transfer of your data to another
                    service provider
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing based on legitimate interests
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent where processing is based on
                    consent
                  </li>
                  <li>
                    <strong>Complain:</strong> Lodge a complaint with a data protection authority
                  </li>
                </ul>
                <p>
                  To exercise your rights, please contact us using the contact information provided
                  in Section 2. We will respond to your request within one month, or inform you if
                  we need more time.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>10. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal data against unauthorized access, alteration, disclosure, or destruction.
                  These measures include:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure authentication and access controls</li>
                  <li>Regular security assessments and updates</li>
                  <li>Staff training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet or electronic storage is
                  100% secure. While we strive to protect your data, we cannot guarantee absolute
                  security.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>11. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our website uses cookies and similar tracking technologies. For detailed information
                  about how we use cookies and how you can manage them, please see our Cookie Policy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>12. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our services are not directed to individuals under the age of 18. We do not
                  knowingly collect personal data from children. If you believe we have collected
                  data from a child, please contact us immediately.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>13. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices, services, or legal requirements. We will notify you of material changes
                  by posting the updated policy on our website and updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our website or services after changes become effective
                  constitutes acceptance of the updated Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </section>

          <section>
            <Card>
              <CardHeader>
                <CardTitle>14. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our
                  data practices, please contact us:
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


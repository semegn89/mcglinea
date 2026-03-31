"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, AlertCircle, Paperclip, X } from "lucide-react"

// ─── Validation schema ────────────────────────────────────────────────────────

const EU_COUNTRIES = [
  "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
  "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
  "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
  "Spain", "Sweden",
  // Common non-EU trading partners
  "United Kingdom", "Norway", "Switzerland", "Ukraine", "Turkey",
  "United Arab Emirates", "Other",
]

const rfqSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  email: z.string().email("Enter a valid business email"),
  phone: z.string().optional(),
  country: z.string().min(1, "Please select your country"),
  vatNumber: z.string().optional(),
  oemSkuList: z
    .string()
    .min(3, "Please provide at least one OEM number, SKU, or part description"),
  quantity: z.string().optional(),
  message: z.string().optional(),
})

type RfqFormValues = z.infer<typeof rfqSchema>

// ─── Props ────────────────────────────────────────────────────────────────────

interface RfqFormProps {
  /** Pre-filled context, e.g. from a product page */
  defaultOem?: string
  source?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export function RfqForm({ defaultOem, source }: RfqFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [attachedFile, setAttachedFile] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RfqFormValues>({
    resolver: zodResolver(rfqSchema),
    defaultValues: { oemSkuList: defaultOem ?? "" },
  })

  async function onSubmit(values: RfqFormValues) {
    setStatus("submitting")
    setErrorMessage("")

    try {
      const formData = new FormData()
      Object.entries(values).forEach(([k, v]) => {
        if (v) formData.append(k, v)
      })
      if (source) formData.append("source", source)
      if (attachedFile) formData.append("file", attachedFile)

      const res = await fetch("/api/rfq", { method: "POST", body: formData })
      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error || "Submission failed. Please try again or email us directly.")
        setStatus("error")
        return
      }

      setStatus("success")
      reset()
      setAttachedFile(null)
    } catch {
      setErrorMessage("Network error. Please try again or email us directly.")
      setStatus("error")
    }
  }

  // ─── Success state ──────────────────────────────────────────────────────────

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card px-8 py-14 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle2 className="h-7 w-7 text-green-500" />
        </div>
        <h2 className="text-xl font-bold">Inquiry Received</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you. We will review your request and send a formal quotation to
          your email within one business day.
        </p>
        <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  // ─── Form ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Company info */}
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Company Details
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="companyName">
              Company Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="companyName"
              placeholder="ACME Logistics GmbH"
              {...register("companyName")}
              aria-invalid={!!errors.companyName}
            />
            {errors.companyName && (
              <p className="text-xs text-destructive">{errors.companyName.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="contactName">
              Contact Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contactName"
              placeholder="John Smith"
              {...register("contactName")}
              aria-invalid={!!errors.contactName}
            />
            {errors.contactName && (
              <p className="text-xs text-destructive">{errors.contactName.message}</p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="email">
              Business Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="purchasing@company.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone / WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+49 30 000 0000"
              {...register("phone")}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="country">
              Country <span className="text-destructive">*</span>
            </Label>
            <select
              id="country"
              {...register("country")}
              aria-invalid={!!errors.country}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select country…</option>
              {EU_COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.country && (
              <p className="text-xs text-destructive">{errors.country.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="vatNumber">VAT Number</Label>
            <Input
              id="vatNumber"
              placeholder="DE123456789"
              {...register("vatNumber")}
            />
            <p className="text-xs text-muted-foreground">Required for EU intra-community supply</p>
          </div>
        </div>
      </fieldset>

      {/* Parts request */}
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Parts Inquiry
        </legend>

        <div className="space-y-1.5" id="oem">
          <Label htmlFor="oemSkuList">
            OEM Numbers / SKUs / Part Names <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="oemSkuList"
            rows={6}
            placeholder={`A0001502151\nB517473438 × 20\nValve cover gasket Mercedes W212 — qty 5\nOEM A4720101805 × 2`}
            {...register("oemSkuList")}
            aria-invalid={!!errors.oemSkuList}
            className="font-mono text-sm"
          />
          {errors.oemSkuList && (
            <p className="text-xs text-destructive">{errors.oemSkuList.message}</p>
          )}
          <p className="text-xs text-muted-foreground">
            One item per line. Include quantity if known. Or attach a file below.
          </p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="quantity">Total Estimated Order Volume</Label>
          <Input
            id="quantity"
            placeholder="e.g. 200 units/month, mixed SKUs"
            {...register("quantity")}
          />
        </div>

        {/* File attachment */}
        <div className="space-y-1.5">
          <Label>Attach File (optional)</Label>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={() => fileRef.current?.click()}
            >
              <Paperclip className="h-3.5 w-3.5" />
              {attachedFile ? "Change File" : "Attach CSV / Excel / PDF"}
            </Button>
            {attachedFile && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span>{attachedFile.name}</span>
                <button
                  type="button"
                  onClick={() => setAttachedFile(null)}
                  className="hover:text-destructive"
                  aria-label="Remove file"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept=".csv,.xlsx,.xls,.pdf,.txt"
            className="hidden"
            onChange={(e) => setAttachedFile(e.target.files?.[0] ?? null)}
          />
          <p className="text-xs text-muted-foreground">
            Accepted: CSV, Excel, PDF, TXT — max 10 MB
          </p>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message">Additional Notes</Label>
          <Textarea
            id="message"
            rows={3}
            placeholder="Delivery deadlines, preferred shipping terms (EXW / DAP / CIF), or other requirements…"
            {...register("message")}
          />
        </div>
      </fieldset>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-destructive/40 bg-destructive/5 p-4 text-sm">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <p className="text-destructive">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending Inquiry…
          </span>
        ) : (
          "Send Inquiry — Request Formal Quote"
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting you agree to our{" "}
        <a href="/terms" className="underline underline-offset-2 hover:text-foreground">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline underline-offset-2 hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  )
}

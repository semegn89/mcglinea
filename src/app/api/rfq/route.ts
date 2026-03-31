import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

// ─── Validation ───────────────────────────────────────────────────────────────

const rfqSchema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().min(1),
  vatNumber: z.string().optional(),
  oemSkuList: z.string().min(3),
  quantity: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
})

// ─── Rate limiting (simple in-memory, replace with Redis in production) ────────

const IP_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const IP_MAX_REQUESTS = 5
const ipLog = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipLog.get(ip)

  if (!entry || now > entry.resetAt) {
    ipLog.set(ip, { count: 1, resetAt: now + IP_WINDOW_MS })
    return false
  }

  if (entry.count >= IP_MAX_REQUESTS) return true

  entry.count++
  return false
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429 }
    )
  }

  // Parse multipart form data
  let formData: FormData
  try {
    formData = await req.formData()
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 })
  }

  // Extract text fields
  const raw = Object.fromEntries(
    Array.from(formData.entries()).filter(([, v]) => typeof v === "string")
  )

  // Validate
  const parsed = rfqSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    )
  }

  const data = parsed.data

  // File attachment (validation only — actual storage TODO_REAL_DATA)
  const file = formData.get("file")
  if (file instanceof File) {
    const MAX_SIZE = 10 * 1024 * 1024 // 10 MB
    const ALLOWED_TYPES = [
      "text/csv",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/pdf",
      "text/plain",
    ]
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File exceeds 10 MB limit." }, { status: 422 })
    }
    if (file.size > 0 && !ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: "Unsupported file type." }, { status: 422 })
    }
  }

  // ── Log submission (replace with email/CRM/DB in production) ─────────────

  const submissionId = crypto.randomUUID()
  const timestamp = new Date().toISOString()

  console.log("[RFQ SUBMISSION]", {
    id: submissionId,
    timestamp,
    company: data.companyName,
    contact: data.contactName,
    email: data.email,
    country: data.country,
    vatNumber: data.vatNumber || "(not provided)",
    source: data.source || "direct",
    oemLines: data.oemSkuList.split("\n").length,
    hasFile: file instanceof File && file.size > 0,
  })

  // TODO_REAL_DATA: Send email notification via Resend / SendGrid / Nodemailer
  // TODO_REAL_DATA: Create CRM lead via HubSpot / Pipedrive / custom API
  // TODO_REAL_DATA: Store submission in database (Postgres / Supabase / Planetscale)

  return NextResponse.json({ ok: true, id: submissionId }, { status: 200 })
}

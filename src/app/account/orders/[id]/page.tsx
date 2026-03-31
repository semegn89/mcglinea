import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Order Details",
  description: "View order details",
}

export default async function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  await params
  // In production, load from API/database
  // For now, return not found as this requires client-side localStorage
  notFound()
}


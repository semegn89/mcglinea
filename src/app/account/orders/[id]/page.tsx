import type { Metadata } from "next"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Order Details",
  description: "View order details",
}

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  // In production, load from API/database
  // For now, return not found as this requires client-side localStorage
  notFound()
}


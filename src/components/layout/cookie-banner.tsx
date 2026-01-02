"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const STORAGE_KEY = "mcglinea_cookie_consent"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage?.getItem(STORAGE_KEY) === "true"
    if (!accepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    try {
      localStorage?.setItem(STORAGE_KEY, "true")
    } catch (e) {
      // Ignore storage errors
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          This site uses basic cookies and similar technologies to improve
          reliability and security. By continuing to browse, you agree to their
          use.
        </p>
        <div className="flex items-center gap-2">
          <Button onClick={handleAccept} size="sm">
            Accept
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleAccept}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  )
}


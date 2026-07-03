"use client";

import { useCookieConsent } from "@/lib/cookie-consent-context";

export default function CookieSettingsButton() {
  const { reopen } = useCookieConsent();

  return (
    <button
      onClick={reopen}
      className="text-xs text-steel hover:text-ink underline underline-offset-2 transition-colors"
    >
      Cookie-beállítások
    </button>
  );
}

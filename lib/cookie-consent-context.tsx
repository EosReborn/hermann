"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Consent = "accepted" | "rejected" | null;

type ConsentContextValue = {
  /** null = no decision yet (or reopened for review) */
  consent: Consent;
  /** true once we've read localStorage on the client, to avoid a hydration flash */
  ready: boolean;
  accept: () => void;
  reject: () => void;
  /** Re-opens the banner so the visitor can change their mind later. */
  reopen: () => void;
};

const STORAGE_KEY = "hermann-cookie-consent";

const CookieConsentContext = createContext<ConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "rejected") {
        setConsent(stored);
      }
    } catch {
      // localStorage can be unavailable (private browsing etc.) — fail open,
      // the banner will simply show again on the next visit.
    }
    setReady(true);
  }, []);

  const persist = (value: Consent) => {
    setConsent(value);
    try {
      if (value) {
        window.localStorage.setItem(STORAGE_KEY, value);
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore
    }
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        ready,
        accept: () => persist("accepted"),
        reject: () => persist("rejected"),
        reopen: () => persist(null),
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return ctx;
}

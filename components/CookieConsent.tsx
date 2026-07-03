"use client";

import Link from "next/link";
import { useCookieConsent } from "@/lib/cookie-consent-context";

export default function CookieConsent() {
  const { consent, ready, accept, reject } = useCookieConsent();

  if (!ready || consent !== null) return null;

  return (
    <div className="fixed inset-x-0 z-[70] bottom-16 md:bottom-0">
      <div className="glass-light border-t border-ink/10 shadow-glass">
        <div className="container-page py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-steel leading-relaxed max-w-2xl">
            Az oldal a működéshez szükséges sütiket használ, a beágyazott Google
            Térkép megjelenítéséhez pedig – hozzájárulása esetén – a Google saját
            sütijei települnek. Bővebben az{" "}
            <Link
              href="/adatvedelem"
              className="underline underline-offset-2 text-ink hover:text-signal-dim transition-colors"
            >
              Adatvédelmi tájékoztatóban
            </Link>
            .
          </p>
          <div className="flex gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={reject}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-sm border border-ink/15 text-sm font-semibold text-steel hover:text-ink hover:border-ink/30 transition-colors"
            >
              Elutasítom
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-sm bg-signal text-ink text-sm font-semibold hover:bg-signal-glow transition-colors"
            >
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

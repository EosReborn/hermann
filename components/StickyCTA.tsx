"use client";

import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="border-t border-ink/10 glass-light">
        <a
          href={CONTACT.phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-ink bg-signal active:bg-signal-dim transition-colors"
        >
          <Phone size={18} strokeWidth={2.5} />
          Hívjon most – {CONTACT.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

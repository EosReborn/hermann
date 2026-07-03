"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/data";

// Kept short and to the point — a long link list crowds the bar and starts
// competing with the two real conversion actions (call / WhatsApp).
const LINKS = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#referenciak", label: "Referenciák" },
  { href: "#velemenyek", label: "Vélemények" },
  { href: "#gyik", label: "GYIK" },
  { href: "#kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Header sits over the hero photo when not scrolled; once scrolled past
  // the hero it switches to a light glass bar with dark text.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "glass-light shadow-glass" : "bg-transparent"
      }`}
    >
      {/* Scrim guarantees nav legibility over any photo, independent of the
          hero's own gradient — without it, light patches in a photo can
          wash out light-colored nav text. */}
      {!solid && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/25 to-transparent pointer-events-none" />
      )}

      <div className="container-page">
        <div className="flex items-center justify-between h-20">
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative w-8 h-8 rounded-sm border border-signal/60 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-signal group-hover:animate-pulseDot" />
            </span>
            <span
              className={`font-display font-semibold text-lg tracking-tight transition-colors ${
                solid ? "text-ink" : "text-porcelain"
              }`}
            >
              Hermann <span className="text-signal">Automatika</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-display text-[15px] font-medium whitespace-nowrap transition-colors ${
                  solid ? "text-steel hover:text-ink" : "text-porcelain hover:text-signal-glow"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border text-sm font-semibold transition-colors ${
                solid
                  ? "border-whatsapp/40 text-whatsapp hover:bg-whatsapp/10"
                  : "border-whatsapp/60 text-porcelain hover:text-whatsapp hover:bg-whatsapp/10"
              }`}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-signal text-ink text-sm font-semibold hover:bg-signal-glow hover:shadow-glow-signal transition-all"
            >
              <Phone size={16} strokeWidth={2.5} />
              Hívjon most
            </a>
          </div>

          <button
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            className={`lg:hidden p-2 transition-colors ${solid ? "text-ink" : "text-porcelain"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-light border-t border-ink/10">
          <div className="container-page py-6 flex flex-col gap-5">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-ink font-medium text-base"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-sm border border-whatsapp/40 text-whatsapp text-sm font-semibold"
              >
                WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex-1 text-center py-3 rounded-sm bg-signal text-ink text-sm font-semibold"
              >
                Hívjon most
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

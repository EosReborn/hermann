"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/data";

const LINKS = [
  { href: "#szolgaltatasok", label: "Szolgáltatások" },
  { href: "#referenciak", label: "Referenciák" },
  { href: "#miert-minket", label: "Miért minket" },
  { href: "#folyamat", label: "Folyamat" },
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

  // Header sits over the dark hero photo when not scrolled, so it stays light
  // text there; once scrolled past the hero it switches to a light glass bar.
  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid ? "glass-light shadow-glass" : "bg-transparent"
      }`}
    >
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

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-mono text-[11px] font-medium uppercase tracking-[0.14em] whitespace-nowrap transition-colors ${
                  solid ? "text-steel hover:text-ink" : "text-porcelain/80 hover:text-porcelain"
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
                  : "border-whatsapp/50 text-porcelain hover:text-whatsapp hover:bg-whatsapp/10"
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
                className="text-ink font-medium text-base"
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

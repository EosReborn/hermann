"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { CONTACT } from "@/lib/data";

// Kept short and to the point — a long link list crowds the bar and starts
// competing with the one real conversion action (call).
const LINKS = [
  { href: "/#szolgaltatasok", label: "Szolgáltatások" },
  { href: "/#referenciak", label: "Referenciák" },
  { href: "/#velemenyek", label: "Vélemények" },
  { href: "/#gyik", label: "GYIK" },
  { href: "/#kapcsolat", label: "Kapcsolat" },
];

export default function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  // On the homepage the header starts transparent over the hero photo and
  // solidifies on scroll. Pages without a hero (legal pages) always use the
  // solid, light-glass look — there's no photo for it to sit over.
  const solid = !overHero || scrolled || open;

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
          <a href="/#top" className="flex items-center gap-3 group">
            <span className="relative w-11 h-11 rounded-sm overflow-hidden bg-black shrink-0">
              <Image
                src="/images/logo-mark.jpg"
                alt="Hermann Automatika logó"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
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

          <div className="hidden lg:flex items-center">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-signal text-ink text-sm font-semibold hover:bg-signal-glow hover:shadow-glow-signal transition-all"
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
            <a
              href={CONTACT.phoneHref}
              className="mt-2 text-center py-3 rounded-sm bg-signal text-ink text-sm font-semibold"
            >
              Hívjon most
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { motion } from "framer-motion";
import { Phone, Facebook, MapPin, Clock, Mail, MapPinned } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { useCookieConsent } from "@/lib/cookie-consent-context";

export default function Contact() {
  const { consent, ready, accept } = useCookieConsent();
  const mapAllowed = ready && consent === "accepted";

  return (
    <section id="kapcsolat" className="relative bg-mist py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_20%,#FF6A00,transparent_45%)]" />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-signal-dim mb-4">Kapcsolat</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Hívjon most, és még ma egyeztetünk időpontot
          </h2>
          <p className="mt-5 text-steel text-lg leading-relaxed">
            Készen állunk, hogy megbeszéljük a kapuja automatizálását – egy hívás,
            és pontosítjuk a részleteket.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-sm bg-signal text-ink font-semibold text-lg hover:bg-signal-glow hover:shadow-glow-signal transition-all"
          >
            <Phone size={22} strokeWidth={2.5} />
            {CONTACT.phoneDisplay}
          </a>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a
            href={CONTACT.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-steel hover:text-ink transition-colors text-sm"
          >
            <Facebook size={18} />
            Kövessen minket Facebookon
          </a>
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-md border border-ink/10 bg-porcelain">
              <div className="flex items-center gap-3 text-signal-dim mb-4">
                <MapPin size={20} />
                <h3 className="font-display font-semibold text-ink">Cím</h3>
              </div>
              <p className="text-steel leading-relaxed">{CONTACT.address}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm text-steel hover:text-signal-dim transition-colors"
              >
                <Mail size={16} />
                {CONTACT.email}
              </a>
            </div>
            <div className="p-8 rounded-md border border-ink/10 bg-porcelain">
              <div className="flex items-center gap-3 text-signal-dim mb-4">
                <Clock size={20} />
                <h3 className="font-display font-semibold text-ink">Nyitvatartás</h3>
              </div>
              <ul className="space-y-2">
                {CONTACT.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm text-steel">
                    <span>{h.day}</span>
                    <span className="text-ink font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-md overflow-hidden border border-ink/10 min-h-[320px] bg-porcelain">
            {mapAllowed ? (
              <iframe
                title="Hermann Automatika – térkép"
                src={CONTACT.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center text-center p-8">
                <MapPinned className="text-signal-dim mb-4" size={28} />
                <p className="text-steel text-sm leading-relaxed max-w-xs">
                  A térkép megjelenítéséhez a Google saját sütijeire van szükség.
                </p>
                <button
                  onClick={accept}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-signal text-ink text-sm font-semibold hover:bg-signal-glow transition-colors"
                >
                  Sütik elfogadása és térkép betöltése
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

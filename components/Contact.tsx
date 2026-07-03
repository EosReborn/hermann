"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function Contact() {
  return (
    <section id="kapcsolat" className="relative bg-ink py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,#FF6A00,transparent_45%)]" />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow text-signal mb-4">Kapcsolat</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-porcelain text-balance">
            Hívjon most, és még ma egyeztetünk időpontot
          </h2>
          <p className="mt-5 text-steel-light text-lg leading-relaxed">
            Készen állunk, hogy megbeszéljük a kapuja automatizálását. Válassza a
            leggyorsabb utat: telefon vagy WhatsApp.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto"
        >
          <a
            href={CONTACT.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-sm bg-signal text-ink font-semibold text-lg hover:bg-signal-glow hover:shadow-glow-signal transition-all"
          >
            <Phone size={22} strokeWidth={2.5} />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-sm border border-whatsapp/40 text-whatsapp font-semibold text-lg hover:bg-whatsapp/10 transition-colors"
          >
            <MessageCircle size={22} />
            WhatsApp üzenet
          </a>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a
            href={CONTACT.facebookHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-steel-light hover:text-porcelain transition-colors text-sm"
          >
            <Facebook size={18} />
            Kövessen minket Facebookon
          </a>
        </div>

        <div className="mt-20 grid lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="flex flex-col gap-6">
            <div className="p-8 rounded-md border border-white/10 glass">
              <div className="flex items-center gap-3 text-signal mb-4">
                <MapPin size={20} />
                <h3 className="font-display font-semibold text-porcelain">Cím</h3>
              </div>
              <p className="text-steel-light leading-relaxed">{CONTACT.address}</p>
            </div>
            <div className="p-8 rounded-md border border-white/10 glass">
              <div className="flex items-center gap-3 text-signal mb-4">
                <Clock size={20} />
                <h3 className="font-display font-semibold text-porcelain">Nyitvatartás</h3>
              </div>
              <ul className="space-y-2">
                {CONTACT.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-sm text-steel-light">
                    <span>{h.day}</span>
                    <span className="text-porcelain">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-md overflow-hidden border border-white/10 min-h-[320px]">
            <iframe
              title="Hermann Automatika – térkép"
              src={CONTACT.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

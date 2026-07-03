"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { CONTACT } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2400&auto=format&fit=crop"
          alt="Modern motoros tolókapu családi ház előtt"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </div>

      <div className="relative container-page pb-24 pt-40 md:pb-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow flex items-center gap-3 text-signal mb-6"
        >
          <span className="w-8 h-px bg-signal" />
          Győr-Moson-Sopron megye
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-porcelain leading-[1.05] text-balance max-w-4xl"
        >
          Automatizáljuk kapuját.
          <br />
          <span className="text-signal">Egyszerűen.</span> Biztonságosan.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-steel-light max-w-xl leading-relaxed"
        >
          Motoros kapunyitók, garázskapu automatizálás, kaputelefonok, kamerarendszerek
          és okosotthon megoldások Győr-Moson-Sopron megyében.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm bg-signal text-ink font-semibold text-base hover:bg-signal-glow hover:shadow-glow-signal transition-all"
          >
            <Phone size={19} strokeWidth={2.5} />
            Hívjon most
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-sm glass text-porcelain font-semibold text-base border-whatsapp/30 hover:border-whatsapp/60 hover:text-whatsapp transition-colors"
          >
            <MessageCircle size={19} />
            WhatsApp
          </a>
        </motion.div>

        {/* Signature rail motif: a moving roller suggesting the gate sliding open on load */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 hidden sm:block max-w-md"
        >
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ x: -8 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="rail-roller shrink-0"
            />
            <div className="rail-track flex-1" />
            <span className="eyebrow text-steel-light shrink-0">Halkan. Precízen.</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#szolgaltatasok"
        aria-label="Görgessen lejjebb"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 right-8 items-center justify-center w-11 h-11 rounded-full border border-white/15 text-steel-light hover:text-signal hover:border-signal/50 transition-colors animate-[bounce_2.4s_ease-in-out_infinite]"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
}

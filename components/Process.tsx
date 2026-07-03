"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";
import { CONTACT } from "@/lib/data";

export default function Process() {
  return (
    <section id="folyamat" className="relative bg-porcelain text-ink py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal-dim mb-4">Hogyan dolgozunk?</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Hat állomás, egy sínen
          </h2>
          <p className="mt-5 text-steel text-lg leading-relaxed">
            Ugyanolyan kiszámítható folyamattal dolgozunk, mint amilyen egyenletesen
            fut az Ön leendő kapuja.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* vertical rail on mobile, horizontal on desktop */}
          <div className="hidden lg:block absolute top-[27px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel/40 to-transparent" />
          <div className="lg:hidden absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-transparent via-steel/40 to-transparent" />

          <div className="grid lg:grid-cols-6 gap-10 lg:gap-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-16 lg:pl-0"
              >
                <div className="absolute left-0 top-0 lg:static lg:mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-signal bg-porcelain flex items-center justify-center font-display font-semibold text-signal-dim relative z-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-steel leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-signal text-ink font-semibold hover:bg-signal-glow hover:shadow-glow-signal transition-all"
          >
            Kezdjük az első lépéssel – hívjon
          </a>
        </div>
      </div>
    </section>
  );
}

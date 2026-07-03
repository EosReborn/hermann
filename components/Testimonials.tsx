"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="velemenyek" className="relative bg-mist py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal-dim mb-4">Vélemények</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Amit az ügyfeleink mondanak
          </h2>
          <p className="mt-5 text-steel text-lg leading-relaxed">
            Hitelesített, valós ajánlatkérői visszajelzések – nem szerkesztett vagy
            kitalált szövegek.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="relative p-8 rounded-md border border-ink/10 bg-porcelain hover:border-signal/40 hover:shadow-lg transition-all"
            >
              <Quote className="absolute top-6 right-6 text-ink/5" size={44} strokeWidth={1.5} />
              <div className="flex gap-1 text-signal mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="text-ink text-base leading-relaxed relative z-10">
                „{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-ink">{t.name}</span>
                <span className="text-steel"> — {t.meta}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

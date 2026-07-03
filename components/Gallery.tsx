"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { GALLERY_IMAGES } from "@/lib/data";

// Varying spans create the masonry rhythm without external libraries.
const SPANS = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, prev, next]);

  return (
    <section id="referenciak" className="relative bg-mist text-ink py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal-dim mb-4">Referenciák</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Elkészült munkáink
          </h2>
          <p className="mt-5 text-steel text-lg leading-relaxed">
            Válogatás a legutóbbi telepítéseinkből – tolókapuktól a garázskapukig.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] gap-3">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.button
              key={src + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setActiveIndex(i)}
              className={`group relative overflow-hidden rounded-md ${SPANS[i] ?? ""}`}
              aria-label={`Referenciakép ${i + 1} megnyitása`}
            >
              <Image
                src={src}
                alt={`Hermann Automatika referencia ${i + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-10 h-10 rounded-full glass flex items-center justify-center text-porcelain">
                  <Expand size={16} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-4 md:p-10"
            onClick={close}
          >
            <button
              aria-label="Bezárás"
              onClick={close}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-porcelain/70 hover:text-signal transition-colors"
            >
              <X size={30} />
            </button>
            <button
              aria-label="Előző kép"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-porcelain/70 hover:text-signal transition-colors"
            >
              <ChevronLeft size={36} />
            </button>
            <button
              aria-label="Következő kép"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-porcelain/70 hover:text-signal transition-colors"
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[activeIndex]}
                alt={`Hermann Automatika referencia ${activeIndex + 1}, nagyított nézet`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

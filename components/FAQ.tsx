"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="gyik" className="relative bg-porcelain text-ink py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <p className="eyebrow text-signal-dim mb-4">GYIK</p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
              Gyakori kérdések
            </h2>
            <p className="mt-5 text-steel text-lg leading-relaxed max-w-sm">
              Nem találja a választ? Hívjon, és személyesen válaszolunk minden
              kérdésére.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
            {FAQ.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-display font-medium text-base md:text-lg text-ink group-hover:text-signal-dim transition-colors">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-1 text-signal-dim"
                    >
                      <Plus size={20} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-steel leading-relaxed pr-10">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Zap, FileCheck, Wrench, HandshakeIcon } from "lucide-react";
import { WHY_US } from "@/lib/data";
import { CONTACT } from "@/lib/data";

const ICONS = [BadgeCheck, ShieldCheck, Zap, FileCheck, Wrench, HandshakeIcon];

export default function WhyUs() {
  return (
    <section id="miert-minket" className="relative bg-porcelain py-24 md:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-start">
          <div>
            <p className="eyebrow text-signal-dim mb-4">Miért minket válasszon?</p>
            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
              Olyan automatika, amire évekig számíthat
            </h2>
            <p className="mt-5 text-steel text-lg leading-relaxed max-w-md">
              Nem csak beépítjük a motort – felelősséget vállalunk azért, hogy évekig
              gond nélkül működjön.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="mt-8 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-signal text-ink font-semibold hover:bg-signal-glow hover:shadow-glow-signal transition-all"
            >
              Hívjon most
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {WHY_US.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-11 h-11 rounded-sm border border-signal/40 bg-mist text-signal-dim flex items-center justify-center">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-steel leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

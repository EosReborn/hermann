"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MoveHorizontal,
  DoorOpen,
  Warehouse,
  PhoneCall,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";
import { CONTACT } from "@/lib/data";
import Rail from "./Rail";

const ICONS: Record<string, React.ElementType> = {
  tolokapu: MoveHorizontal,
  szarnyaskapu: DoorOpen,
  garazskapu: Warehouse,
  kaputelefon: PhoneCall,
  szerviz: Wrench,
};

export default function Services() {
  return (
    <section id="szolgaltatasok" className="relative bg-porcelain py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow text-signal-dim mb-4">Szolgáltatások</p>
          <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink text-balance">
            Teljes körű megoldás a bejárattól a beállóig
          </h2>
          <p className="mt-5 text-steel text-lg leading-relaxed">
            A felméréstől a beüzemelésig egy kézben tartjuk a folyamatot – minden
            szolgáltatásunkat egyedileg, az Ön kapujára és otthonára szabjuk.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id] ?? Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-md border border-ink/10 bg-mist hover:border-signal/50 hover:shadow-lg transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-sm glass-light flex items-center justify-center text-signal-dim">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-steel leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href={CONTACT.phoneHref}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-dim opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all"
                  >
                    Érdeklődöm
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-md border border-ink/10 bg-mist p-8">
          <p className="text-ink text-lg font-medium max-w-md">
            Nem biztos benne, melyik megoldás illik a kapujához? Hívjon, és pár perc
            alatt átbeszéljük.
          </p>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-signal text-ink font-semibold whitespace-nowrap hover:bg-signal-glow hover:shadow-glow-signal transition-all"
          >
            Hívjon most
          </a>
        </div>
      </div>
      <div className="mt-24">
        <Rail />
      </div>
    </section>
  );
}

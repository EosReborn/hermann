"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/data";
import Rail from "./Rail";

export default function Brands() {
  return (
    <section className="relative bg-mist py-20 md:py-24">
      <Rail label="Márkák, amelyekkel dolgozunk" />
      <div className="container-page mt-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-ink/10 border border-ink/10">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-mist flex items-center justify-center py-10 px-6 group"
            >
              <span className="font-display font-semibold text-xl md:text-2xl tracking-tight text-steel group-hover:text-ink transition-colors duration-300">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

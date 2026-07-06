"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { PHOTOS } from "@/lib/wedding-data";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const gallery = PHOTOS.slice(1); // Skip hero photo (DSC09344)

  function prev() { setActive((a) => (a === null ? null : (a - 1 + gallery.length) % gallery.length)); }
  function next() { setActive((a) => (a === null ? null : (a + 1) % gallery.length)); }

  return (
    <section className="bg-sage-bg py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Khoảnh Khắc" title="Ảnh Cưới" />

        {/* Grid */}
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {gallery.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(i)}
              className="relative aspect-[2/3] overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 480px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-sage-panel/0 group-hover:bg-sage-panel/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage-panel">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
            onClick={() => setActive(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl p-2 leading-none z-10"
              onClick={() => setActive(null)}
              aria-label="Đóng"
            >
              ✕
            </button>

            {/* Image */}
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[85vh] max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
              />
            </motion.div>

            {/* Prev / Next */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Ảnh trước"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Ảnh tiếp theo"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>

            {/* Counter */}
            <p className="absolute bottom-4 inset-x-0 text-center text-white/50 text-sm">
              {active + 1} / {gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

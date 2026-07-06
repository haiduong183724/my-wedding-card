import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroStrip() {
  return (
    <div className="relative h-[70vh] min-h-[380px] max-h-[600px] overflow-hidden">
      <Image
        src="/resource/DSC09344.jpg"
        alt="Hải Dương & Trà My"
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-sage-panel/70 via-transparent to-transparent" />

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9 }}
        className="absolute bottom-10 inset-x-0 text-center text-white"
      >
        <p className="font-display text-3xl sm:text-4xl font-light tracking-widest">
          Hải Dương <span className="text-champagne mx-1">&amp;</span> Trà My
        </p>
        <p className="text-xs tracking-[0.25em] opacity-75 mt-2">
          25 · 07 · 2026 &nbsp;·&nbsp; Ngày 12/6 Bính Ngọ
        </p>
      </motion.div>
    </div>
  );
}

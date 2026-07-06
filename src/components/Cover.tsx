"use client";

import { motion, AnimatePresence } from "framer-motion";
import BotanicalCanvas from "./BotanicalCanvas";
import FloatingPetals from "./FloatingPetals";

type Props = {
  onOpen: () => void;
  isOpen: boolean;
  onExitComplete?: () => void;
};

export default function Cover({ onOpen, isOpen, onExitComplete }: Props) {
  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {!isOpen && (
        <motion.div
          key="cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6 } }}
          exit={{
            opacity: 0,
            y: -60,
            scale: 0.97,
            transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream overflow-hidden"
        >
          {/* Floating petals */}
          <FloatingPetals count={10} />

          {/* Top botanical art */}
          <div className="absolute top-0 left-0 right-0">
            <BotanicalCanvas height={170} />
          </div>

          {/* Corner ornaments */}
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-sage-pale opacity-60" />
          <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-sage-pale opacity-60" />
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-sage-pale opacity-60" />
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-sage-pale opacity-60" />

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 text-center px-8 py-6"
          >
            {/* Decorative border box */}
            <div className="relative border border-sage-pale/60 px-10 py-8 sm:px-16 sm:py-10">
              {/* Corner accent dots */}
              {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((pos) => (
                <span key={pos} className={`absolute ${pos} w-2 h-2 bg-champagne rotate-45`} />
              ))}

              <motion.p
                initial={{ opacity: 0, letterSpacing: "0.15em" }}
                animate={{ opacity: 1, letterSpacing: "0.35em" }}
                transition={{ delay: 0.6, duration: 1 }}
                className="font-display text-[0.65rem] tracking-[0.35em] uppercase text-sage mb-6"
              >
                Trân Trọng Kính Mời
              </motion.p>

              {/* Names */}
              <div className="mb-5">
                <motion.h1
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-display text-4xl sm:text-5xl font-light text-w-text tracking-wide leading-none"
                >
                  Hải Dương
                </motion.h1>
                <motion.p
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="font-display text-2xl text-champagne my-2 tracking-widest"
                >
                  ❦
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.8 }}
                  className="font-display text-4xl sm:text-5xl font-light text-w-text tracking-wide leading-none"
                >
                  Trà My
                </motion.h1>
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="flex items-center gap-3 my-5 max-w-[160px] mx-auto"
              >
                <div className="flex-1 h-px bg-sage-pale" />
                <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
                <div className="flex-1 h-px bg-sage-pale" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.7 }}
              >
                <p className="font-display text-xl text-sage-deep tracking-[0.18em] mb-1">25 · 07 · 2026</p>
                <p className="text-[0.72rem] text-w-muted tracking-wide mb-5">
                  Ngày 12 tháng 6 năm Bính Ngọ
                </p>
                <p className="font-display italic text-sm text-w-muted mb-6">
                  Thân mời quý khách đến dự lễ thành hôn
                </p>
              </motion.div>

              {/* Open button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpen}
                className="group inline-flex items-center gap-2.5 bg-sage-panel text-white px-8 py-3 text-[0.68rem] tracking-[0.22em] uppercase hover:bg-w-text transition-colors duration-200"
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.8"
                  className="group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Mở Thiệp
              </motion.button>

              {/* Scroll hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-6 flex flex-col items-center gap-1.5"
              >
                <div className="w-px h-8 bg-sage-deep animate-scroll-bar origin-top" />
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-sage-deep">Cuộn xem</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom botanical art */}
          <div className="absolute bottom-0 left-0 right-0">
            <BotanicalCanvas flip height={130} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

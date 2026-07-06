"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { WEDDING } from "@/lib/wedding-data";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function pad(n: number) { return String(n).padStart(2, "0"); }

function getTimeLeft(): TimeLeft {
  const target = new Date(WEDDING.date.iso).getTime();
  const diff = Math.max(0, target - Date.now());
  return {
    days:    Math.floor(diff / 86_400_000),
    hours:   Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000)  / 60_000),
    seconds: Math.floor((diff % 60_000)      / 1_000),
  };
}

function Digit({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <motion.div
        key={value}
        initial={{ rotateX: -90, opacity: 0 }}
        animate={{ rotateX: 0,   opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="font-display text-5xl sm:text-6xl font-light text-sage-deep tabular-nums"
        style={{ perspective: 500 }}
      >
        {value}
      </motion.div>
      <p className="text-[0.6rem] tracking-[0.22em] uppercase text-w-muted mt-2">{label}</p>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = time
    ? [
        { value: pad(time.days),    label: "Ngày"  },
        { value: pad(time.hours),   label: "Giờ"   },
        { value: pad(time.minutes), label: "Phút"  },
        { value: pad(time.seconds), label: "Giây"  },
      ]
    : [
        { value: "--", label: "Ngày"  },
        { value: "--", label: "Giờ"   },
        { value: "--", label: "Phút"  },
        { value: "--", label: "Giây"  },
      ];

  return (
    <section className="bg-sage-bg py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Đếm ngược đến ngày vui" title="Còn Bao Lâu Nữa?" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center items-start gap-4 sm:gap-8 flex-wrap"
        >
          {items.map((item, i) => (
            <div key={item.label} className="flex items-start gap-4 sm:gap-8">
              <Digit value={item.value} label={item.label} />
              {i < items.length - 1 && (
                <span className="font-display text-4xl text-champagne mt-1 animate-shimmer select-none">·</span>
              )}
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center font-display italic text-w-muted mt-8 text-sm"
        >
          {WEDDING.date.full}
        </motion.p>
      </div>
    </section>
  );
}

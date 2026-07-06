import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const WEEKDAYS = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

// July 2026: July 1 = Wednesday (index 2 in Mon-based week)
const OFFSET = 2;
const TOTAL_DAYS = 31;
const WEDDING_DAY = 25;

function buildGrid() {
  const cells: (number | null)[] = Array(OFFSET).fill(null);
  for (let d = 1; d <= TOTAL_DAYS; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const rows: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

const ROWS = buildGrid();

export default function WeddingCalendar() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-sm mx-auto">
        <SectionHeader eyebrow="Ngày Trọng Đại" title="Tháng 7 · 2026" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white shadow-[0_4px_32px_rgba(43,58,36,0.1)] overflow-hidden"
        >
          {/* Month banner */}
          <div className="bg-sage-panel px-6 py-4 text-center">
            <p className="font-display text-white text-lg tracking-[0.18em] font-light">
              Tháng 7 năm 2026
            </p>
            <p className="text-sage-pale/70 text-[0.62rem] tracking-[0.22em] uppercase mt-0.5">
              Tháng 6 năm Bính Ngọ
            </p>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 border-b border-sage-pale/30">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className={`py-2.5 text-center text-[0.62rem] font-semibold tracking-wider ${
                  d === "CN" || d === "T7" ? "text-champagne" : "text-w-muted"
                }`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day grid */}
          <div className="px-2 py-2">
            {ROWS.map((row, ri) => (
              <div key={ri} className="grid grid-cols-7">
                {row.map((day, ci) => {
                  const isWedding = day === WEDDING_DAY;
                  const isSunday = ci === 6;
                  const isSaturday = ci === 5;

                  if (!day) {
                    return <div key={`e-${ci}`} className="aspect-square" />;
                  }

                  if (isWedding) {
                    return (
                      <div key={day} className="aspect-square flex flex-col items-center justify-center relative">
                        {/* Pulse ring */}
                        <span className="absolute inset-0 m-auto w-9 h-9 rounded-full border border-sage animate-[pulse-ring_2s_ease-out_infinite]" />
                        <span className="relative z-10 w-9 h-9 rounded-full bg-sage-panel flex flex-col items-center justify-center shadow-md">
                          <span className="font-display text-white text-sm font-medium leading-none">{day}</span>
                          <span className="text-sage-pale/80 text-[0.45rem] leading-none mt-0.5">❦</span>
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={day}
                      className={`aspect-square flex items-center justify-center text-sm font-light ${
                        isSunday ? "text-red-400/70" : isSaturday ? "text-champagne/80" : "text-w-text/70"
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer legend */}
          <div className="border-t border-sage-pale/30 px-5 py-3 flex items-center justify-center gap-2">
            <span className="w-3 h-3 rounded-full bg-sage-panel inline-block" />
            <p className="text-[0.65rem] text-w-muted tracking-wide">
              25/07/2026 · Ngày 12 tháng 6 Bính Ngọ · Lễ Thành Hôn
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

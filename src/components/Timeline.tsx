import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { TIMELINE_BRIDE, TIMELINE_GROOM, WEDDING } from "@/lib/wedding-data";

type TlItem = { time: string; desc: string; sub?: string; highlight?: boolean };

function TimelineCard({ title, family, items }: { title: string; family: string; items: TlItem[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="bg-white shadow-[0_2px_24px_rgba(43,58,36,0.08)] border-t-[3px] border-sage p-6 sm:p-8"
    >
      {/* Header */}
      <div className="mb-6">
        <span className="text-[0.58rem] tracking-[0.26em] uppercase text-sage font-semibold">{family}</span>
        <h3 className="font-display text-lg font-light text-w-text mt-0.5">{title}</h3>
      </div>

      {/* Items */}
      <div>
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            {/* Marker column */}
            <div className="flex flex-col items-center pt-1 flex-shrink-0">
              <div
                className={`w-[11px] h-[11px] rounded-full border-2 border-white shrink-0 ${item.highlight ? "bg-champagne shadow-[0_0_0_2px_theme(colors.champagne)]" : "bg-sage shadow-[0_0_0_2px_theme(colors.sage)]"}`}
              />
              {i < items.length - 1 && <div className="w-px flex-1 bg-sage-pale mt-1 min-h-[22px]" />}
            </div>

            {/* Content */}
            <div className="pb-5">
              <p className={`text-[0.67rem] font-bold tracking-[0.12em] mb-0.5 ${item.highlight ? "text-champagne" : "text-sage-deep"}`}>
                {item.time}
              </p>
              <p className={`text-sm leading-snug ${item.highlight ? "font-semibold text-w-text" : "text-w-text/80"}`}>
                {item.desc}
              </p>
              {item.sub && (
                <p className="text-xs text-w-muted mt-0.5">{item.sub}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Chương Trình" title="Lịch Trình Ngày Cưới" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TimelineCard
            family="Nhà Trai"
            title={WEDDING.groom.fullName}
            items={TIMELINE_GROOM}
          />
          <TimelineCard
            family="Nhà Gái"
            title={WEDDING.bride.fullName}
            items={TIMELINE_BRIDE}
          />
        </div>
      </div>
    </section>
  );
}

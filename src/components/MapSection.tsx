import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { WEDDING } from "@/lib/wedding-data";

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function VenueCard({ venue, delay }: { venue: (typeof WEDDING.venues)["groom"]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="text-center"
    >
      <p className="text-[0.6rem] tracking-[0.24em] uppercase text-champagne font-semibold mb-2">
        {venue.label}
      </p>
      <p className="font-display text-lg text-white/80 italic mb-2">{venue.name}</p>
      <p className="text-white/60 text-sm mb-6">{venue.address}</p>

      {venue.embedUrl ? (
        <div className="relative overflow-hidden border border-white/10 mb-6" style={{ paddingBottom: "75%", minHeight: 220 }}>
          <iframe
            src={venue.embedUrl}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title={`Bản đồ ${venue.label}`}
          />
        </div>
      ) : (
        /* Map preview placeholder — sẽ thay bằng iframe khi có link "Embed a map" từ Google Maps */
        <div className="relative overflow-hidden bg-sage-deep/40 border border-white/10 mb-6" style={{ paddingBottom: "46%", minHeight: 160 }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-sage/20 border border-sage flex items-center justify-center text-sage">
              <MapIcon />
            </div>
            <p className="text-white/50 text-sm font-light tracking-wide">
              Nhấn bên dưới để mở bản đồ
            </p>
          </div>
        </div>
      )}

      <a
        href={venue.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-champagne text-champagne px-7 py-3 text-sm tracking-[0.14em] uppercase hover:bg-champagne hover:text-sage-panel transition-colors duration-300 font-light"
      >
        <MapIcon />
        Xem Bản Đồ Google Maps
      </a>
    </motion.div>
  );
}

export default function MapSection() {
  return (
    <section className="bg-sage-panel py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Địa Điểm" title="Đường Đến Ngày Vui" light />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6">
          <VenueCard venue={WEDDING.venues.groom} delay={0} />
          <VenueCard venue={WEDDING.venues.bride} delay={0.15} />
        </div>
      </div>
    </section>
  );
}

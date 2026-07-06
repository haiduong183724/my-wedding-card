import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { WEDDING } from "@/lib/wedding-data";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.1 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013 1.28h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function ContactCard({ family, name, phone }: { family: string; name: string; phone: string }) {
  const formatted = phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white shadow-[0_2px_20px_rgba(43,58,36,0.08)] p-8 text-center relative overflow-hidden"
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sage to-champagne" />

      {/* Background botanical watermark */}
      <div className="absolute bottom-2 right-2 opacity-[0.04] text-[80px] select-none leading-none font-display" aria-hidden="true">
        ❧
      </div>

      <p className="text-[0.6rem] tracking-[0.24em] uppercase text-sage font-semibold mb-3">{family}</p>
      <h3 className="font-display text-2xl font-light text-w-text mb-4">{name}</h3>
      <a
        href={`tel:${phone}`}
        className="inline-flex items-center gap-2 font-display text-xl text-sage-deep hover:text-champagne transition-colors duration-200"
      >
        <PhoneIcon />
        {formatted}
      </a>
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Thông Tin" title="Liên Hệ" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[560px] mx-auto">
          <ContactCard family="Nhà Trai" name={WEDDING.groom.name} phone={WEDDING.groom.phone} />
          <ContactCard family="Nhà Gái"  name={WEDDING.bride.name}  phone={WEDDING.bride.phone}  />
        </div>
      </div>
    </section>
  );
}

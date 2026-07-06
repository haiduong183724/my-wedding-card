import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { WEDDING } from "@/lib/wedding-data";

function QRIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z" />
    </svg>
  );
}

function GiftCard({ family, name }: { family: string; name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white shadow-[0_2px_20px_rgba(43,58,36,0.08)] p-8 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sage to-champagne" />

      <p className="text-[0.6rem] tracking-[0.24em] uppercase text-sage font-semibold mb-3">{family}</p>
      <h3 className="font-display text-xl font-light text-w-text mb-6">{name}</h3>

      <div className="mx-auto w-40 h-40 border-2 border-dashed border-sage-pale flex flex-col items-center justify-center gap-2 text-w-muted/50">
        <QRIcon />
        <span className="text-[0.6rem] tracking-wide text-center px-2">QR code sẽ được cập nhật sau</span>
      </div>
    </motion.div>
  );
}

export default function GiftSection() {
  return (
    <section className="bg-sage-bg py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader eyebrow="Gửi Yêu Thương" title="Mừng Cưới" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display italic text-w-muted text-sm mb-10 max-w-md mx-auto leading-relaxed"
        >
          Với những khách quý ở xa không thể trực tiếp trao quà, gia đình xin
          gửi thông tin chuyển khoản mừng cưới.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[560px] mx-auto">
          <GiftCard family="Nhà Trai" name={WEDDING.groom.name} />
          <GiftCard family="Nhà Gái" name={WEDDING.bride.name} />
        </div>
      </div>
    </section>
  );
}

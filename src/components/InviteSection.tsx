import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import BotanicalCanvas from "./BotanicalCanvas";

export default function InviteSection() {
  return (
    <section className="bg-cream overflow-hidden">
      <BotanicalCanvas height={100} />

      <div className="px-6 pb-16 pt-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeader eyebrow="Trân trọng kính mời" title="Lời Ngỏ" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            {/* Big decorative quote */}
            <div className="font-display text-8xl text-sage-pale/60 leading-none mb-2 select-none" aria-hidden="true">
              "
            </div>

            <p className="font-display italic text-lg text-w-text/70 leading-relaxed -mt-10 mb-6">
              Kính thưa Quý khách,
              <br /><br />
              Trong niềm hạnh phúc vô bờ, gia đình chúng tôi trân trọng
              thông báo và kính mời Quý khách đến tham dự Lễ Thành Hôn của
            </p>

            {/* Names */}
            <p className="font-display text-2xl sm:text-3xl text-sage-deep tracking-wider my-6 leading-relaxed">
              Nguyễn Đình Hải Dương
              <span className="text-champagne mx-3">&amp;</span>
              Phạm Thị Trà My
            </p>

            <p className="font-display italic text-lg text-w-text/70 leading-relaxed mb-8">
              Sự hiện diện của Quý khách là niềm vinh hạnh
              và là món quà quý giá nhất đối với hai gia đình chúng tôi.
            </p>

            {/* Badge */}
            <div className="inline-block border border-sage-pale text-sage-deep text-[0.62rem] tracking-[0.28em] uppercase px-6 py-2">
              Lễ Thành Hôn · 25 tháng 07 năm 2026
            </div>
          </motion.div>
        </div>
      </div>

      <BotanicalCanvas flip height={100} />
    </section>
  );
}

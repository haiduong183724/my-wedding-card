import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { PHOTOS } from "@/lib/wedding-data";

export default function OurStory() {
  const photos = [PHOTOS[1], PHOTOS[2], PHOTOS[3]];

  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Yêu Thương" title="Câu Chuyện Của Chúng Tôi" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display italic text-w-muted text-sm mb-10 max-w-md mx-auto leading-relaxed"
        >
          Câu chuyện tình yêu của chúng tôi sẽ được cập nhật trong thời gian tới.
          Trước hết, xin gửi Quý khách vài khoảnh khắc của hai đứa.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

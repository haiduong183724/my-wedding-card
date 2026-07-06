import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  light?: boolean;
};

export default function SectionHeader({ eyebrow, title, light }: Props) {
  const textColor  = light ? "text-white/70" : "text-champagne";
  const titleColor = light ? "text-white" : "text-w-text";
  const lineColor  = light ? "bg-white/20" : "bg-sage-pale";
  const gemColor   = light ? "bg-white/60" : "bg-champagne";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center mb-12"
    >
      <span className={`block font-display text-xs tracking-[0.32em] uppercase mb-3 ${textColor}`}>
        {eyebrow}
      </span>
      <h2 className={`font-display text-3xl sm:text-4xl font-light tracking-wide ${titleColor}`}>
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-4 max-w-[180px] mx-auto">
        <div className={`flex-1 h-px ${lineColor}`} />
        <div className={`w-2 h-2 rotate-45 shrink-0 ${gemColor}`} />
        <div className={`flex-1 h-px ${lineColor}`} />
      </div>
    </motion.div>
  );
}

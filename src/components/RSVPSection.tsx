"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

type FormState = { name: string; phone: string; side: "groom" | "bride" | ""; count: string };

export default function RSVPSection() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", phone: "", side: "", count: "1" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setTimeout(() => { setOpen(false); setSent(false); setForm({ name: "", phone: "", side: "", count: "1" }); }, 3500);
    } catch {
      setError("Gửi thất bại, vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="bg-cream py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <SectionHeader eyebrow="Xác Nhận Tham Dự" title="RSVP" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display italic text-w-muted text-base mb-8 leading-relaxed"
        >
          Sự có mặt của bạn là niềm vui lớn nhất của chúng tôi.
          <br />Vui lòng xác nhận trước ngày <strong className="text-sage-deep not-italic">18/07/2026</strong>.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-3 bg-sage-deep text-white px-10 py-4 text-sm tracking-[0.18em] uppercase hover:bg-sage transition-colors duration-300 font-light"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          Xác Nhận Tham Dự
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="rsvp-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/60 flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="bg-cream w-full max-w-md relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent */}
              <div className="h-[3px] bg-gradient-to-r from-sage to-champagne" />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[0.6rem] tracking-[0.24em] uppercase text-sage font-semibold mb-1">Xác Nhận Tham Dự</p>
                    <h3 className="font-display text-2xl text-w-text font-light">RSVP</h3>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-w-muted hover:text-w-text text-xl leading-none mt-1 p-1"
                    aria-label="Đóng"
                  >
                    ✕
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-8 text-center"
                    >
                      <div className="text-5xl mb-4">🌿</div>
                      <p className="font-display text-xl text-sage-deep font-light mb-2">Cảm ơn bạn!</p>
                      <p className="text-w-muted text-sm">Chúng tôi rất mong được gặp bạn trong ngày vui.</p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                      {/* Name */}
                      <div>
                        <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-w-muted mb-1.5">
                          Họ và tên *
                        </label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Nguyễn Văn An"
                          className="w-full border border-sage-pale bg-white px-4 py-2.5 text-w-text text-sm focus:outline-none focus:border-sage placeholder-w-text/30"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-w-muted mb-1.5">
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="0912 345 678"
                          className="w-full border border-sage-pale bg-white px-4 py-2.5 text-w-text text-sm focus:outline-none focus:border-sage placeholder-w-text/30"
                        />
                      </div>

                      {/* Side */}
                      <div>
                        <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-w-muted mb-1.5">
                          Khách mời của *
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {(["groom", "bride"] as const).map((s) => (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setForm({ ...form, side: s })}
                              className={`py-2.5 text-sm border transition-colors duration-200 ${
                                form.side === s
                                  ? "border-sage bg-sage text-white"
                                  : "border-sage-pale text-w-muted hover:border-sage"
                              }`}
                            >
                              {s === "groom" ? "Nhà Trai" : "Nhà Gái"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Count */}
                      <div>
                        <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-w-muted mb-1.5">
                          Số người tham dự
                        </label>
                        <select
                          value={form.count}
                          onChange={(e) => setForm({ ...form, count: e.target.value })}
                          className="w-full border border-sage-pale bg-white px-4 py-2.5 text-w-text text-sm focus:outline-none focus:border-sage"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>{n} người</option>
                          ))}
                        </select>
                      </div>

                      {/* Error */}
                      {error && (
                        <p className="text-red-500 text-xs text-center">{error}</p>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={!form.name || !form.side || submitting}
                        className="w-full bg-sage-deep text-white py-3.5 text-sm tracking-[0.16em] uppercase hover:bg-sage transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                      >
                        {submitting ? "Đang gửi..." : "Xác Nhận"}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

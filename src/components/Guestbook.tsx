"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Message = { id: string; name: string; text: string };

export default function Guestbook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const idPrefix = useId();
  const [counter, setCounter] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setMessages((m) => [{ id: `${idPrefix}-${counter}`, name: name.trim(), text: text.trim() }, ...m]);
    setCounter((c) => c + 1);
    setName("");
    setText("");
  }

  return (
    <section className="bg-sage-bg py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionHeader eyebrow="Gửi Lời Yêu Thương" title="Lời Chúc" />

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-[0_2px_20px_rgba(43,58,36,0.08)] p-6 sm:p-8 space-y-4 mb-10"
        >
          <div>
            <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-w-muted mb-1.5">
              Họ và tên *
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn An"
              className="w-full border border-sage-pale bg-white px-4 py-2.5 text-w-text text-sm focus:outline-none focus:border-sage placeholder-w-text/30"
            />
          </div>

          <div>
            <label className="block text-[0.65rem] tracking-[0.16em] uppercase text-w-muted mb-1.5">
              Lời chúc *
            </label>
            <textarea
              required
              rows={3}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Chúc hai bạn trăm năm hạnh phúc..."
              className="w-full border border-sage-pale bg-white px-4 py-2.5 text-w-text text-sm focus:outline-none focus:border-sage placeholder-w-text/30 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim() || !text.trim()}
            className="w-full bg-sage-deep text-white py-3.5 text-sm tracking-[0.16em] uppercase hover:bg-sage transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Gửi Lời Chúc
          </button>
        </motion.form>

        <div className="space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-5 shadow-[0_2px_16px_rgba(43,58,36,0.06)] border-l-[3px] border-champagne"
              >
                <p className="text-sm text-w-text/80 leading-relaxed italic">&ldquo;{m.text}&rdquo;</p>
                <p className="text-[0.68rem] tracking-wide uppercase text-sage-deep mt-2 font-semibold">
                  — {m.name}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {messages.length === 0 && (
            <p className="text-center text-w-muted text-sm italic">
              Hãy là người đầu tiên gửi lời chúc!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

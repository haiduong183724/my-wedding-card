import { NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, text } = body ?? {};

  if (typeof name !== "string" || !name.trim() || typeof text !== "string" || !text.trim()) {
    return NextResponse.json({ error: "Thiếu thông tin bắt buộc" }, { status: 400 });
  }

  try {
    await appendRow("LoiChuc", [new Date().toISOString(), name.trim(), text.trim()]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Guestbook sheet append failed:", err);
    return NextResponse.json({ error: "Không thể lưu, vui lòng thử lại sau" }, { status: 500 });
  }
}

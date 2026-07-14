import { NextResponse } from "next/server";
import { appendRow } from "@/lib/google-sheets";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, side, count } = body ?? {};

  if (typeof name !== "string" || !name.trim() || (side !== "groom" && side !== "bride")) {
    return NextResponse.json({ error: "Thiếu thông tin bắt buộc" }, { status: 400 });
  }

  try {
    await appendRow("RSVP", [
      new Date().toISOString(),
      name.trim(),
      typeof phone === "string" ? phone.trim() : "",
      side === "groom" ? "Nhà Trai" : "Nhà Gái",
      typeof count === "string" || typeof count === "number" ? count : "1",
    ]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("RSVP sheet append failed:", err);
    return NextResponse.json({ error: "Không thể lưu, vui lòng thử lại sau" }, { status: 500 });
  }
}

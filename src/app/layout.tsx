import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Thiệp Cưới · Hải Dương & Trà My",
  description: "Trân trọng kính mời Quý khách đến dự Lễ Thành Hôn của Nguyễn Đình Hải Dương và Phạm Thị Trà My ngày 25 tháng 07 năm 2026.",
  openGraph: {
    title: "Thiệp Cưới · Hải Dương & Trà My",
    description: "25 · 07 · 2026 — Lễ Thành Hôn",
    images: ["/resource/DSC08672.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${cormorant.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

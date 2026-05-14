import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  weight: ["400", "500", "600"],
  display: "swap",
  // next/font は日本語グリフを subsets に列挙できないため、preload 必須エラーを避ける
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "株式会社DEMO | 建設業向けコーポレートサイト",
  description:
    "建設資材の調達・施工支援・安全管理をワンストップで。実績・技術・CSRを公開し、お問い合わせから最短でご提案します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable} h-full`}>
      <body className="font-sans min-h-full flex flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

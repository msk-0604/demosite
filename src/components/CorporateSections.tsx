"use client";

import Link from "next/link";
import { RevealOnView } from "@/components/RevealOnView";

const works = [
  "物流施設新築工事（愛知県）",
  "都市再開発複合ビル（東京都）",
  "環境配慮型公共インフラ整備（関西）",
];

const technologies = [
  "配筋検査AR支援システム",
  "映像による点検支援システム",
  "クレーン安全監視システム",
  "コンクリート打設管理装置",
];

const csrItems = [
  "地域の小学校向け現場見学会",
  "建設現場周辺の清掃ボランティア",
  "環境保全を目的とした植樹活動",
];

export function CorporateSections() {
  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <RevealOnView className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
            <div>
              <p className="mb-3 text-xs tracking-[0.26em] text-[#8b7355]">INFORMATION</p>
              <h2 className="font-serif text-[clamp(1.3rem,3vw,2.1rem)] text-[#333333]">
                お知らせ
              </h2>
            </div>
            <div className="space-y-3 rounded-xl border border-[#ece7df] p-5">
              <p className="text-sm text-[#444444]">2026.04.28 ゴールデンウィーク期間中の対応について</p>
              <p className="text-sm text-[#444444]">2026.04.01 令和8年度入社式を実施しました</p>
              <p className="text-sm text-[#444444]">2026.02.02 安全衛生方針の改定について</p>
              <Link href="/news" className="inline-block pt-2 text-xs tracking-[0.14em] text-[#8b7355]">
                お知らせ一覧を見る
              </Link>
            </div>
          </RevealOnView>
        </div>
      </section>

      <section className="bg-[#f9f7f4] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <RevealOnView className="mb-8">
            <p className="mb-3 text-xs tracking-[0.26em] text-[#8b7355]">COMPANY</p>
            <h2 className="font-serif text-[clamp(1.3rem,3vw,2.1rem)] text-[#333333]">株式会社DEMOについて</h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[#555555]">
              創業以来、私たちは建設現場の一員として品質・安全・誠実を重ね、持続可能な社会づくりに取り組んでいます。
            </p>
          </RevealOnView>
          <Link href="/about" className="text-xs tracking-[0.14em] text-[#8b7355]">
            詳しくみる
          </Link>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <RevealOnView className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.26em] text-[#8b7355]">WORKS</p>
              <h2 className="font-serif text-[clamp(1.3rem,3vw,2.1rem)] text-[#333333]">実績・プロジェクト</h2>
            </div>
            <Link href="/works" className="text-xs tracking-[0.14em] text-[#8b7355]">
              もっと見る
            </Link>
          </RevealOnView>
          <div className="grid gap-4 md:grid-cols-3">
            {works.map((item, idx) => (
              <RevealOnView key={item} delay={idx * 0.05} className="rounded-xl border border-[#ece7df] p-5">
                <p className="text-sm leading-relaxed text-[#444444]">{item}</p>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f4] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <RevealOnView className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.26em] text-[#8b7355]">TECHNOLOGY</p>
              <h2 className="font-serif text-[clamp(1.3rem,3vw,2.1rem)] text-[#333333]">技術・サービス</h2>
            </div>
            <Link href="/technology" className="text-xs tracking-[0.14em] text-[#8b7355]">
              もっと見る
            </Link>
          </RevealOnView>
          <div className="grid gap-3 md:grid-cols-2">
            {technologies.map((item, idx) => (
              <RevealOnView
                key={item}
                delay={idx * 0.04}
                className="rounded-lg border border-[#e5ddd2] bg-white px-4 py-3 text-sm text-[#444444]"
              >
                {item}
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <RevealOnView className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.26em] text-[#8b7355]">CSR REPORT</p>
              <h2 className="font-serif text-[clamp(1.3rem,3vw,2.1rem)] text-[#333333]">社会貢献活動</h2>
            </div>
            <Link href="/csr" className="text-xs tracking-[0.14em] text-[#8b7355]">
              もっと見る
            </Link>
          </RevealOnView>
          <div className="space-y-3">
            {csrItems.map((item, idx) => (
              <RevealOnView key={item} delay={idx * 0.04} className="rounded-lg border border-[#ece7df] p-4">
                <p className="text-sm text-[#444444]">{item}</p>
              </RevealOnView>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f7f4] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <RevealOnView className="mb-8">
            <p className="mb-3 text-xs tracking-[0.26em] text-[#8b7355]">PICKUP CONTENTS</p>
            <h2 className="font-serif text-[clamp(1.3rem,3vw,2.1rem)] text-[#333333]">ピックアップコンテンツ</h2>
          </RevealOnView>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/story" className="rounded-xl border border-[#ece7df] bg-white p-5 text-sm text-[#444444]">
              愛をもっと DEMO
            </Link>
            <Link href="/recruit" className="rounded-xl border border-[#ece7df] bg-white p-5 text-sm text-[#444444]">
              新卒採用
            </Link>
            <Link href="/recruit" className="rounded-xl border border-[#ece7df] bg-white p-5 text-sm text-[#444444]">
              キャリア採用 / 障がい者採用
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

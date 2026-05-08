"use client";

import { RevealOnView } from "@/components/RevealOnView";

const newsItems = [
  { date: "2026.04.24", title: "大型物流施設新築工事への資材供給を開始しました。" },
  { date: "2026.03.11", title: "安全管理強化のため現場巡回体制を拡充しました。" },
  { date: "2026.01.20", title: "年次サステナビリティレポートを公開しました。" },
];

export function NewsSection() {
  return (
    <section id="news" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
        <RevealOnView className="mb-10 md:mb-14">
          <p className="mb-3 text-xs tracking-[0.28em] text-[#8b7355]">NEWS</p>
          <h2 className="font-serif text-[clamp(1.35rem,2.8vw,2rem)] text-[#333333]">
            お知らせ
          </h2>
        </RevealOnView>

        <div className="divide-y divide-[#ece7df] rounded-xl border border-[#ece7df]">
          {newsItems.map((item, index) => (
            <RevealOnView key={item.date + item.title} delay={0.05 * index}>
              <article className="grid gap-2 p-5 md:grid-cols-[140px_1fr] md:items-center md:px-8">
                <time className="text-xs tracking-[0.14em] text-[#8b7355]">{item.date}</time>
                <p className="text-sm leading-relaxed text-[#444444]">{item.title}</p>
              </article>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

import { PageIntro } from "@/components/PageIntro";

const allNews = [
  {
    date: "2026.05.01",
    category: "お知らせ",
    title: "夏季休業および休業中の緊急連絡体制についてご案内します。",
  },
  {
    date: "2026.04.24",
    category: "実績",
    title: "大型物流施設新築工事への資材供給を開始しました。",
  },
  {
    date: "2026.03.11",
    category: "安全",
    title: "安全管理強化のため現場巡回体制を拡充しました。",
  },
  {
    date: "2026.01.20",
    category: "IR",
    title: "年次サステナビリティレポートを公開しました。",
  },
  {
    date: "2025.12.09",
    category: "採用",
    title: "施工管理職向けオンライン会社説明会を開催します。",
  },
  {
    date: "2025.11.18",
    category: "技術",
    title: "現場点検支援クラウドのバージョンアップに伴うメンテナンスを実施しました。",
  },
  {
    date: "2025.09.30",
    category: "CSR",
    title: "地域清掃ボランティア（第18回）を実施し、参加者42名を集めました。",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageIntro
        title="お知らせ"
        enTitle="NEWS"
        description="株式会社DEMOの最新情報、実績、取り組みについてお知らせします。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <div className="divide-y divide-[#ece7df] rounded-xl border border-[#ece7df]">
            {allNews.map((item) => (
              <article
                key={item.date + item.title}
                className="grid gap-3 p-5 md:grid-cols-[130px_100px_1fr] md:items-center md:px-8"
              >
                <time className="text-xs tracking-[0.12em] text-[#8b7355]">{item.date}</time>
                <p className="inline-flex w-fit rounded-full bg-[#f3efe9] px-3 py-1 text-xs text-[#6a5a46]">
                  {item.category}
                </p>
                <p className="text-sm leading-relaxed text-[#444444]">{item.title}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

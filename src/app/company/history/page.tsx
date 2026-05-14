import { PageIntro } from "@/components/PageIntro";

const milestones = [
  ["2001年4月", "東京都内で建設資材商社として創業"],
  ["2006年10月", "大阪支店開設、近畿エリアの物流網を構築"],
  ["2012年4月", "施工支援部門を新設、資材＋現場支援のワンストップ体制へ"],
  ["2016年7月", "安全管理センター開設、専任スタッフによる巡回体制を開始"],
  ["2020年1月", "品質・安全・環境の統合マネジメント方針を改定"],
  ["2023年4月", "デジタル点検プラットフォームを本格導入"],
  ["2026年4月", "従業員120名規模へ拡大、首都圏・近畿の二極体制を強化"],
];

export default function CompanyHistoryPage() {
  return (
    <>
      <PageIntro
        title="会社概要 / 沿革"
        enTitle="PROFILE / HISTORY"
        description="設立から現在までの主な沿革です。詳細な会社概要は会社情報ページもご覧ください。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <ol className="relative border-l border-[#e0d8ce] pl-6">
            {milestones.map(([date, text]) => (
              <li key={date} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-[#8b7355]" aria-hidden />
                <p className="text-sm font-medium text-[#8b7355]">{date}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#444444]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

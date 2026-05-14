import { PageIntro } from "@/components/PageIntro";

const profileRows = [
  ["会社名", "株式会社DEMO"],
  ["代表者", "代表取締役 山田 太郎"],
  ["本社所在地", "〒100-0001 東京都千代田区千代田1-1-1"],
  ["設立", "2001年4月1日"],
  ["資本金", "5,000万円"],
  ["従業員数", "120名（2026年4月1日現在）"],
  ["事業内容", "建設資材の企画・調達・販売、施工支援、安全管理支援、物流コンサルティング"],
  ["主要取引先", "ゼネコン・サブコン・設備工事会社・地方公共団体（詳細はNDAのうえ開示）"],
  ["許認可", "建設業（東京都知事許可（特-1）第56789号）"],
];

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        title="会社情報"
        enTitle="COMPANY"
        description="会社概要、所在地、事業内容、資本金等の基本情報を掲載しています。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <div className="overflow-hidden rounded-xl border border-[#ece7df]">
            {profileRows.map(([label, value]) => (
              <div
                key={label}
                className="grid border-b border-[#ece7df] last:border-b-0 md:grid-cols-[220px_1fr]"
              >
                <p className="bg-[#f9f7f4] px-5 py-4 text-sm text-[#6f665c] md:px-7">{label}</p>
                <p className="px-5 py-4 text-sm text-[#444444] md:px-7">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import { PageIntro } from "@/components/PageIntro";

const profileRows = [
  ["会社名", "株式会社DEMO"],
  ["代表者", "代表取締役 山田 太郎"],
  ["所在地", "東京都千代田区千代田1-1-1"],
  ["設立", "2001年4月"],
  ["事業内容", "建設資材供給、施工支援、安全管理、物流管理"],
  ["従業員数", "120名（2026年4月時点）"],
];

export default function CompanyPage() {
  return (
    <>
      <PageIntro
        title="会社情報"
        enTitle="COMPANY"
        description="企業概要と沿革、組織情報を掲載しています。実データへの差し替えを想定したデモ構成です。"
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

import { PageIntro } from "@/components/PageIntro";
import Link from "next/link";

const graduateHighlights = [
  "入社後3年間の現場ローテーション（資材管理・施工管理支援・本社購買）",
  "内定者インターン・OJTメンター制度",
  "建設系資格取得支援（費用補助・学習時間の確保）",
];

const careerPositions = [
  { title: "施工管理（建築）", detail: "資材調達と工程管理の連携経験歓迎。一級建築施工管理技士尚可。" },
  { title: "購買・資材調達", detail: "メーカー・商社との折衝経験。Excel・基幹システム操作に抵抗がない方。" },
  { title: "安全管理担当", detail: "現場巡回と教育計画の立案。安全衛生推進者など資格保有者歓迎。" },
];

const disabilityPolicy = [
  "障がいのある方も能力を最大限発揮できるよう、職種・勤務地・勤務時間を個別に設計します。",
  "採用後は職場定着支援（配慮事項のヒアリング、関係各所との調整）を人事・総務が伴走します。",
  "応募から面接・配属まで、個人情報と配慮事項は厳重に管理します。",
];

export default function RecruitPage() {
  return (
    <>
      <PageIntro
        title="採用情報"
        enTitle="RECRUIT"
        description="新卒・中途・障がい者採用の方針と募集職種を掲載しています。エントリーはお問い合わせフォームまたは採用専用メールにて受け付けています。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-14 px-4 md:px-8 lg:px-10">
          <div className="grid gap-8 md:grid-cols-3">
            <article className="rounded-xl border border-[#ece7df] p-6 md:col-span-1">
              <h2 className="font-serif text-xl text-[#333333]">新卒採用</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                毎年4月に建設・土木・購買を志望する新卒を数名採用。配属は本人適性と会社ニーズを踏まえて決定します。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-[#444444]">
                {graduateHighlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#777777]">説明会日程：毎年2月・3月にオンライン開催（詳細はお知らせに掲載）</p>
            </article>

            <article className="rounded-xl border border-[#ece7df] p-6 md:col-span-1">
              <h2 className="font-serif text-xl text-[#333333]">キャリア採用</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                経験を活かし即戦力としてご活躍いただける方を随時募集しています。年収・勤務地は経験・スキルに応じ個別にご提示します。
              </p>
              <ul className="mt-4 space-y-4">
                {careerPositions.map((p) => (
                  <li key={p.title} className="text-sm">
                    <p className="font-medium text-[#333333]">{p.title}</p>
                    <p className="mt-1 text-[#555555]">{p.detail}</p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-xl border border-[#ece7df] p-6 md:col-span-1">
              <h2 className="font-serif text-xl text-[#333333]">障がい者採用</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                法定雇用率の達成にとどまらず、多様な人材が長く働ける環境づくりを進めています。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-[#444444]">
                {disabilityPolicy.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="rounded-xl border border-[#e6dfd4] bg-[#f9f7f4] p-6">
            <h2 className="font-serif text-lg text-[#333333]">エントリー方法</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[#444444]">
              <li>お問い合わせフォームから「その他」を選び、志望区分（新卒／中途／障がい者採用）を本文に記載</li>
              <li>または採用窓口メール recruit@example.co.jp（本番ドメインに差し替え）へ履歴書・職務経歴書を送付</li>
              <li>書類選考のうえ、オンラインまたは対面で面接（2〜3回程度）</li>
            </ol>
            <Link href="/contact#lead" className="mt-4 inline-block text-sm font-medium text-[#8b7355] underline-offset-2 hover:underline">
              エントリーはお問い合わせフォームから
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { PageIntro } from "@/components/PageIntro";

const sdgRows = [
  ["SDGs 8", "働きがいと経済成長", "多様な雇用、資格取得支援、公正な評価制度の整備"],
  ["SDGs 9", "産業と技術革新の基盤", "建設DX・安全技術への投資、中小協力会社との共同開発"],
  ["SDGs 11", "住み続けられるまちづくり", "公共インフラ案件への参画、災害時資材供給体制の強化"],
  ["SDGs 12", "つくる責任つかう責任", "廃材削減・リサイクル材の積極提案、グリーン調達ガイドライン"],
  ["SDGs 13", "気候変動に具体的な対策", "カーボンフットプリント試算、低炭素材の調達比率向上"],
];

export default function CsrSdgsPage() {
  return (
    <>
      <PageIntro
        title="CSR / SDGs"
        enTitle="CSR / SDGS"
        description="持続可能な開発目標（SDGs）に照らした、当社の重点取り組みを公開しています。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <p className="max-w-3xl text-sm leading-relaxed text-[#555555]">
            事業を通じて社会課題の解決に貢献するため、経営会議でKPIを設定し四半期ごとに進捗をレビューしています。
          </p>
          <div className="mt-8 overflow-hidden rounded-xl border border-[#ece7df]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#f9f7f4] text-xs tracking-wide text-[#6a5a46]">
                <tr>
                  <th className="px-4 py-3 font-medium">目標</th>
                  <th className="px-4 py-3 font-medium">テーマ</th>
                  <th className="px-4 py-3 font-medium">主な取り組み</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ece7df] text-[#444444]">
                {sdgRows.map((row) => (
                  <tr key={row[0]}>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-[#8b7355]">{row[0]}</td>
                    <td className="px-4 py-3">{row[1]}</td>
                    <td className="px-4 py-3">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

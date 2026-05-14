import { PageIntro } from "@/components/PageIntro";

const rows = [
  ["2026.02", "愛知県一宮市", "物流センター新築", "資材一括供給・現場物流"],
  ["2025.11", "東京都港区", "高層集合住宅建替", "躯体材・内装材・短工期搬入"],
  ["2025.08", "大阪府大阪市", "都市再開発に伴う仮設・本設", "仮設材・鉄骨周辺資材"],
  ["2025.05", "神奈川県横浜市", "港湾関連倉庫", "耐食仕様材・防錆管理"],
  ["2025.03", "埼玉県さいたま市", "公共施設改修", "指定品目・検査立会対応"],
  ["2024.12", "京都府京都市", "歴史建築保全工事", "既存調査連携・特注材手配"],
  ["2024.09", "奈良県生駒郡", "河川護岸・調整池", "公共規格材・安全管理文書"],
  ["2024.06", "兵庫県神戸市", "製造工場増築", "工場規格・重量物搬入計画"],
];

export default function WorksListPage() {
  return (
    <>
      <PageIntro
        title="実績紹介"
        enTitle="WORKS LIST"
        description="竣工時期・エリア・用途別に代表的なプロジェクトを一覧しています。詳細条件に合わせた事例紹介はお問い合わせください。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 md:px-8">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#e0d8ce] bg-[#f9f7f4] text-xs tracking-wide text-[#6a5a46]">
                <th className="px-4 py-3 font-medium">竣工</th>
                <th className="px-4 py-3 font-medium">エリア</th>
                <th className="px-4 py-3 font-medium">案件概要</th>
                <th className="px-4 py-3 font-medium">当社の関与</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#ece7df] text-[#444444]">
              {rows.map((row) => (
                <tr key={row[0] + row[1] + row[2]} className="hover:bg-[#faf9f7]">
                  <td className="whitespace-nowrap px-4 py-3 text-[#8b7355]">{row[0]}</td>
                  <td className="px-4 py-3">{row[1]}</td>
                  <td className="px-4 py-3">{row[2]}</td>
                  <td className="px-4 py-3">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-xs leading-relaxed text-[#777777]">
            記載は一部抜粋です。機密保持契約に基づき非公表の案件が多数ございます。同種案件の参考事例が必要な場合は、NDAのうえ詳細をご説明いたします。
          </p>
        </div>
      </section>
    </>
  );
}

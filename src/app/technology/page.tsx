import { PageIntro } from "@/components/PageIntro";
import Link from "next/link";

const techList = [
  {
    name: "配筋検査ARシステム",
    summary: "設計データと現場を重ね合わせ、施工前の差異を可視化します。",
  },
  {
    name: "映像による点検支援システム",
    summary: "高所・狭所の定点観測をクラウドで共有し、報告工数を削減します。",
  },
  {
    name: "クレーン乱巻き監視システム",
    summary: "ワイヤ巻取り状態を記録し、異常時に監督へ即時通知します。",
  },
  {
    name: "コンクリート打設管理装置",
    summary: "打設間隔・養生時間を自動記録し、品質トレーサビリティを強化します。",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        title="技術・サービス"
        enTitle="TECHNOLOGY"
        description="豊富な実績をもとに、現場の安全性・生産性を高める技術群をラインアップしています。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <p className="mb-8 max-w-2xl text-sm text-[#555555]">
            各ソリューションの詳細仕様・導入事例は「技術・サービス詳細」ページにまとめています。
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {techList.map((item) => (
              <article key={item.name} className="rounded-xl border border-[#ece7df] p-5">
                <h2 className="font-serif text-lg text-[#333333]">{item.name}</h2>
                <p className="mt-2 text-sm text-[#555555]">{item.summary}</p>
              </article>
            ))}
          </div>
          <Link
            href="/technology/services"
            className="mt-8 inline-block text-sm font-medium text-[#8b7355] underline-offset-2 hover:underline"
          >
            技術・サービス詳細を見る
          </Link>
        </div>
      </section>
    </>
  );
}

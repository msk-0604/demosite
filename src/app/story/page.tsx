import { PageIntro } from "@/components/PageIntro";

const episodes = [
  {
    category: "建築編",
    title: "限られた工期で品質を守り抜いた改修プロジェクト",
    body: "狭小地での解体から躯体補強まで、近隣配慮と騒音規制が厳しい条件下でした。資材の段取りを週単位で逆算し、夜間搬入と検査工程を一本化。設計変更が発生した際も、代替材の即日手配で工程遅延を回避しました。",
  },
  {
    category: "土木編",
    title: "地域の安全を支える河川整備工事の挑戦",
    body: "増水期を避けた施工計画と、地元説明会での質疑に即答できる技術資料の整備が鍵でした。現場代理人と資材担当が日次で情報共有し、天候リスク時の予備ラインを常に確保。公共工事特有の検査体制にも対応したトレーサビリティを構築しました。",
  },
  {
    category: "営業編",
    title: "課題の本質を共有し、最適解を提案する姿勢",
    body: "初回訪問では「何を安くするか」ではなく「何を止めたくないか」をヒアリング。コストだけでなく、安全在庫・検収工数・支払サイトまで含めた総合提案に切り替えたことで、継続取引につながりました。",
  },
  {
    category: "事務編",
    title: "現場が動きやすい仕組みをつくるバックオフィス",
    body: "請求書と納品書の突合せを半自動化し、現場監督の事務負荷を削減。購買・経理・現場の三者で月次レビューを行い、ボトルネックを数値で可視化しています。",
  },
];

export default function StoryPage() {
  return (
    <>
      <PageIntro
        title="愛をもっと DEMO"
        enTitle="EPISODE"
        description="現場に立つ社員の視点から、建設の仕事に込めた想いと工夫を紹介します。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-8 lg:px-10">
          {episodes.map((episode) => (
            <article key={episode.title} className="rounded-xl border border-[#ece7df] p-5 md:p-6">
              <p className="text-xs tracking-[0.16em] text-[#8b7355]">{episode.category}</p>
              <h2 className="mt-2 font-serif text-xl text-[#333333]">{episode.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#555555]">{episode.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

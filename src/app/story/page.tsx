import { PageIntro } from "@/components/PageIntro";

const episodes = [
  { category: "建築編", title: "限られた工期で品質を守り抜いた改修プロジェクト" },
  { category: "土木編", title: "地域の安全を支える河川整備工事の挑戦" },
  { category: "営業編", title: "課題の本質を共有し、最適解を提案する姿勢" },
  { category: "事務編", title: "現場が動きやすい仕組みをつくるバックオフィス" },
];

export default function StoryPage() {
  return (
    <>
      <PageIntro
        title="愛をもっと DEMO"
        enTitle="EPISODE"
        description="ものづくりへの想いを、建築・土木・営業・事務それぞれの視点で紹介するストーリーコンテンツです。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-8 lg:px-10">
          {episodes.map((episode) => (
            <article key={episode.title} className="rounded-xl border border-[#ece7df] p-5 md:p-6">
              <p className="text-xs tracking-[0.16em] text-[#8b7355]">{episode.category}</p>
              <h2 className="mt-2 font-serif text-xl text-[#333333]">{episode.title}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

import { PageIntro } from "@/components/PageIntro";

const techList = [
  "配筋検査ARシステム",
  "映像による点検支援システム",
  "クレーン乱巻き監視システム",
  "コンクリート打設管理装置",
];

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        title="技術・サービス"
        enTitle="TECHNOLOGY"
        description="豊富な実績と研究成果をもとに、現場の安全性・生産性を高める技術を開発しています。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl grid gap-4 px-4 md:grid-cols-2 md:px-8 lg:px-10">
          {techList.map((item) => (
            <article key={item} className="rounded-xl border border-[#ece7df] p-5">
              <h2 className="font-serif text-lg text-[#333333]">{item}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

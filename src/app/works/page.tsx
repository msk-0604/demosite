import { PageIntro } from "@/components/PageIntro";

const works = [
  { name: "DEMOロジスティクスセンター一宮", usage: "倉庫・工場", location: "愛知県一宮市", date: "2026年02月" },
  { name: "グランドレジデンス北青山", usage: "集合住宅", location: "東京都港区", date: "2025年05月" },
  { name: "大阪ベイサイド都市基盤整備（南工区）", usage: "土木・インフラ", location: "大阪府大阪市", date: "2025年04月" },
];

export default function WorksPage() {
  return (
    <>
      <PageIntro
        title="実績・プロジェクト"
        enTitle="WORKS"
        description="物流、住宅、インフラなど、当社が資材・施工支援で関与した代表的なプロジェクトをご紹介します。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-8 lg:px-10">
          {works.map((work) => (
            <article key={work.name} className="rounded-xl border border-[#ece7df] p-5 md:p-6">
              <h2 className="font-serif text-xl text-[#333333]">{work.name}</h2>
              <p className="mt-3 text-sm text-[#555555]">用途: {work.usage}</p>
              <p className="mt-1 text-sm text-[#555555]">所在地: {work.location}</p>
              <p className="mt-1 text-sm text-[#555555]">竣工年月: {work.date}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

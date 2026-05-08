import { PageIntro } from "@/components/PageIntro";

const works = [
  { name: "CPD一宮（仮）", usage: "倉庫・工場", location: "愛知県一宮市", date: "2026年02月" },
  { name: "パークレジデンス北青山（仮）", usage: "住宅", location: "東京都港区", date: "2025年05月" },
  { name: "都市高速更新プロジェクト（仮）", usage: "インフラ", location: "大阪府大阪市", date: "2025年04月" },
];

export default function WorksPage() {
  return (
    <>
      <PageIntro
        title="実績・プロジェクト"
        enTitle="WORKS"
        description="物流施設、住宅、インフラなど幅広い施工実績を掲載しています。"
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

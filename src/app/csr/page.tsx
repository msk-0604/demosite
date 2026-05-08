import { PageIntro } from "@/components/PageIntro";

const csrPosts = [
  "地域小学校での現場見学会を開催",
  "第18回 町内清掃ボランティアを実施",
  "校舎の木材活用に関する出前授業を実施",
];

export default function CsrPage() {
  return (
    <>
      <PageIntro
        title="CSR"
        enTitle="CSR / SDGs"
        description="企業活動を通して新しい価値を創造し、地域社会と環境へ貢献する取り組みを紹介します。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-4 px-4 md:px-8 lg:px-10">
          {csrPosts.map((post) => (
            <article key={post} className="rounded-xl border border-[#ece7df] p-5">
              <p className="text-sm text-[#444444]">{post}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

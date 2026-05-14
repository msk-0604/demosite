import { PageIntro } from "@/components/PageIntro";

export default function AboutGreetingPage() {
  return (
    <>
      <PageIntro
        title="ごあいさつ・理念"
        enTitle="MESSAGE / PHILOSOPHY"
        description="代表からのメッセージと、経営の根幹となる理念・行動指針をご紹介します。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-4 md:px-8">
          <article className="rounded-xl border border-[#ece7df] p-6 md:p-8">
            <p className="text-xs tracking-[0.2em] text-[#8b7355]">MESSAGE</p>
            <h2 className="mt-2 font-serif text-xl text-[#333333]">お客様の現場が、私たちの品質基準です</h2>
            <p className="mt-6 text-sm leading-[2] text-[#555555]">
              建設業界は今、人材不足と工期短縮、そして安全への要求高度化が同時に進んでいます。その中で資材パートナーに求められるのは、単に「安く届ける」ことではなく、工程全体のリスクを下げる提案力だと私たちは考えています。
            </p>
            <p className="mt-4 text-sm leading-[2] text-[#555555]">
              株式会社DEMOは、調達のスピードと現場の声に真摯に向き合い、元請・協力会社の皆様と同じ目線でプロジェクトの成功を支えてまいります。
            </p>
            <p className="mt-8 text-right text-sm text-[#444444]">代表取締役　山田 太郎</p>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-[#ece7df] p-6">
              <h3 className="font-serif text-lg text-[#333333]">経営理念</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                「誠実なものづくりで、社会基盤の未来を支える」— 安全・品質・コンプライアンスを最優先し、すべての利害関係者にとって価値あるパートナーシップを築きます。
              </p>
            </div>
            <div className="rounded-xl border border-[#ece7df] p-6">
              <h3 className="font-serif text-lg text-[#333333]">行動指針</h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[#555555]">
                <li>現場の事実に基づき、迅速に判断する</li>
                <li>約束した納期と品質を守り抜く</li>
                <li>法令と社会規範を遵守し、透明性の高い企業活動を行う</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

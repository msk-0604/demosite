import { PageIntro } from "@/components/PageIntro";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="私たちについて"
        enTitle="ABOUT US"
        description="株式会社DEMOは、建設資材の調達から施工支援・安全管理までを一貫して担い、全国規模のプロジェクトを支えるパートナーです。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-8 lg:px-10">
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-2xl text-[#333333]">企業理念</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              誠実なものづくりで社会基盤の未来を支える。私たちは、現場の声に耳を傾け、約束した品質と納期を守ることを何より重視します。
            </p>
          </article>
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-2xl text-[#333333]">品質・安全方針</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              調達・搬入・施工支援の各工程でKPIを設定し、PDCAを回します。労働安全衛生法令の遵守はもちろん、協力会社様との安全パトロールを四半期ごとに実施しています。
            </p>
          </article>
          <article className="rounded-xl border border-[#ece7df] p-6 md:col-span-2">
            <h2 className="font-serif text-2xl text-[#333333]">コンプライアンス</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              贈収賄防止・下請法遵守・個人情報保護について、全社員向けeラーニングと年1回の宣誓を実施しています。内部通報窓口は社外弁護士事務所を窓口として設置しています（連絡先は社内規程に記載）。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

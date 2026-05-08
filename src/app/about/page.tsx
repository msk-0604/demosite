import { PageIntro } from "@/components/PageIntro";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="私たちについて"
        enTitle="ABOUT US"
        description="株式会社DEMOは、建設資材供給と施工支援を軸に、確かな品質と安全で現場を支えるパートナーです。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8 lg:px-10">
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-2xl text-[#333333]">企業理念</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              現場の課題を最短で解決するために、迅速な判断と誠実な対応を徹底します。
            </p>
          </article>
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-2xl text-[#333333]">品質方針</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              調達・搬入・施工支援の各工程に品質基準を設け、安定した成果を提供します。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

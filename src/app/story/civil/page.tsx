import { PageIntro } from "@/components/PageIntro";

export default function StoryCivilPage() {
  return (
    <>
      <PageIntro
        title="愛あるエピソード 土木編"
        enTitle="EPISODE / CIVIL"
        description="インフラ・土木分野における安全管理と資材供給の取り組みをご紹介します。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-8">
          <article className="rounded-xl border border-[#ece7df] p-6 text-sm leading-[1.9] text-[#555555]">
            <p>
              河川護岸工事では、増水リスクと交通規制の両立が課題でした。現場事務所に資材担当を常駐させ、気象データと水位情報に基づき搬入計画を日次更新。予備ストックヤードを二箇所確保し、緊急時の切替えにも対応できる体制を整えました。
            </p>
            <p className="mt-4">
              地域住民向け説明会では、使用材料の環境負荷と騒音対策について図面付きで説明し、理解を得たうえで工程を進行。公共工事ならではの透明性と、現場の機動力の両立を目指しています。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

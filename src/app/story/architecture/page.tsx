import { PageIntro } from "@/components/PageIntro";

export default function StoryArchitecturePage() {
  return (
    <>
      <PageIntro
        title="愛あるエピソード 建築編"
        enTitle="EPISODE / ARCHITECTURE"
        description="建築現場における品質管理と資材調整の実例をご紹介します。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-8">
          <article className="rounded-xl border border-[#ece7df] p-6 text-sm leading-[1.9] text-[#555555]">
            <p>
              都心部の建替え案件では、搬入路の制限と騒音規制により、資材のロットサイズと搬入時間帯の設計が成果を左右します。当案件では、鉄骨二次部材と外装パネルの納期を半日単位で同期させ、クレーン占有時間を15％削減しました。
            </p>
            <p className="mt-4">
              また、設計変更による仕様差し替えが発生した際、代替メーカーとの即日交渉とサンプル手配を行い、監理の承認取得までのリードタイムを短縮。施主様の内覧スケジュールに影響が出ないよう、現場代理人と連日の定例を継続しました。
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

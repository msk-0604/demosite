import { PageIntro } from "@/components/PageIntro";

export default function PartnerPage() {
  return (
    <>
      <PageIntro
        title="パートナーの皆様へ"
        enTitle="PARTNER"
        description="協力会社様向けの各種申請、購買関連情報、現場運用ガイドラインを掲載するためのページです。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
          <div className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-xl text-[#333333]">掲載予定コンテンツ</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#555555]">
              <li>・提出書類ダウンロード</li>
              <li>・安全協議会資料</li>
              <li>・購買/見積依頼フロー</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

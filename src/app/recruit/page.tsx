import { PageIntro } from "@/components/PageIntro";

export default function RecruitPage() {
  return (
    <>
      <PageIntro
        title="採用情報"
        enTitle="RECRUIT"
        description="新卒採用・キャリア採用・障がい者採用の情報を掲載するための採用ページです。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-3 md:px-8 lg:px-10">
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-xl text-[#333333]">新卒採用</h2>
            <p className="mt-3 text-sm text-[#555555]">若手育成プログラムと募集要項を掲載予定。</p>
          </article>
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-xl text-[#333333]">キャリア採用</h2>
            <p className="mt-3 text-sm text-[#555555]">中途採用のポジション一覧を掲載予定。</p>
          </article>
          <article className="rounded-xl border border-[#ece7df] p-6">
            <h2 className="font-serif text-xl text-[#333333]">障がい者採用</h2>
            <p className="mt-3 text-sm text-[#555555]">雇用環境・配慮事項を掲載予定。</p>
          </article>
        </div>
      </section>
    </>
  );
}

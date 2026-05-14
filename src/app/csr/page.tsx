import { PageIntro } from "@/components/PageIntro";
import Link from "next/link";

const csrPosts = [
  {
    date: "2026.03.15",
    title: "地域小学校での現場見学会を開催（参加者38名）",
    body: "児童向けにヘルメット体験とクレーン見学を実施。進路選択の一助となるよう、社員の仕事紹介も行いました。",
  },
  {
    date: "2026.02.08",
    title: "第18回 町内清掃ボランティアを実施",
    body: "本社周辺1kmのごみ拾いと排水溝の清掃。地域商店会と合同で実施し、毎年定着化しています。",
  },
  {
    date: "2025.11.22",
    title: "小学校にて「校舎の木材」出前授業",
    body: "材種と強度、耐火処理についてワークショップ形式で学びました。教材は教員向けにデータ配布済みです。",
  },
];

export default function CsrPage() {
  return (
    <>
      <PageIntro
        title="CSR"
        enTitle="CSR / SDGs"
        description="地域社会・環境・次世代育成に向けた活動を、事業と連動して推進しています。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-8 lg:px-10">
          {csrPosts.map((post) => (
            <article key={post.title} className="rounded-xl border border-[#ece7df] p-5 md:p-6">
              <time className="text-xs tracking-[0.12em] text-[#8b7355]">{post.date}</time>
              <h2 className="mt-2 font-serif text-lg text-[#333333]">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">{post.body}</p>
            </article>
          ))}
          <Link href="/csr/sdgs" className="inline-block text-sm font-medium text-[#8b7355] underline-offset-2 hover:underline">
            SDGs対応の取り組み一覧へ
          </Link>
        </div>
      </section>
    </>
  );
}

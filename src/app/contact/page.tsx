import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="お問い合わせ"
        enTitle="CONTACT"
        description="DM・メール・お電話からのご相談を歓迎します。初回はヒアリング中心で、無理な営業はいたしません。フォーム送信後、画面上に受付完了メッセージが表示されます。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:px-8 lg:px-10">
          <ContactForm />
          <aside className="space-y-6">
            <div className="rounded-2xl border border-[#ece7df] bg-[#f9f7f4] p-6">
              <h2 className="font-serif text-xl text-[#333333]">お問い合わせ窓口</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#555555]">
                お急ぎの場合はお電話ください。URLだけ送った相手にも、そのまま読めるよう電話番号を掲載しています。
              </p>
              <p className="mt-4 text-sm text-[#444444]">
                TEL: 03-1234-5678
                <br />
                受付時間: 平日 9:00 - 18:00
              </p>
              <div className="mt-6 rounded-lg border border-[#ddd4c8] bg-white p-4 text-xs leading-relaxed text-[#666666]">
                ※ 個人情報・案件情報は、お問い合わせ対応およびご提案の目的にのみ利用します。
              </div>
            </div>

            <div id="docs" className="scroll-mt-28 rounded-2xl border border-[#e6dfd4] bg-white p-6">
              <h2 className="font-serif text-lg text-[#333333]">資料・稟議用</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                会社概要・事業概要・主要実績を1ページにまとめた「印刷用プロフィール」をご用意しています。ブラウザの印刷ダイアログからPDFとして保存できます。
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/download/profile"
                    className="font-medium text-[#8b7355] underline-offset-2 hover:underline"
                  >
                    会社概要・事業概要（印刷用ページ）を開く
                  </Link>
                </li>
                <li>
                  <Link href="/business" className="text-[#8b7355] underline-offset-2 hover:underline">
                    事業案内（Web）
                  </Link>
                </li>
                <li>
                  <Link href="/works/list" className="text-[#8b7355] underline-offset-2 hover:underline">
                    実績一覧（Web）
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

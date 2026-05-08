import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        title="お問い合わせ"
        enTitle="CONTACT"
        description="ご相談内容に応じて担当より折り返しご連絡いたします。デモサイトのため送信先は未接続です。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:px-8 lg:px-10">
          <ContactForm />
          <aside className="rounded-2xl border border-[#ece7df] bg-[#f9f7f4] p-6">
            <h2 className="font-serif text-xl text-[#333333]">お問い合わせ窓口</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#555555]">
              お急ぎの場合はお電話にてご連絡ください。
            </p>
            <p className="mt-4 text-sm text-[#444444]">
              TEL: 03-1234-5678
              <br />
              受付時間: 平日 9:00 - 18:00
            </p>
            <div className="mt-6 rounded-lg border border-[#ddd4c8] bg-white p-4 text-xs leading-relaxed text-[#666666]">
              ※ 個人情報はお問い合わせ対応の目的にのみ利用します。
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

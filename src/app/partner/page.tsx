import { PageIntro } from "@/components/PageIntro";
import Link from "next/link";

const documents = [
  { name: "協力会社登録申請書（PDF）", note: "初回取引前にご提出ください。捺印後のスキャン送付可。" },
  { name: "会社概要・業種・保険加入状況（様式）", note: "購買審査・安全書類とあわせてご利用ください。" },
  { name: "下請負通知書・個別契約条項（ひな形）", note: "案件ごとに担当より送付します。ひな形のダウンロードは窓口へご連絡ください。" },
];

const safetyItems = [
  "安全衛生管理体制の説明資料（年度更新）",
  "熱中症・墜落制止等の重点対策チェックリスト",
  "朝礼・KY活動の記録様式（任意利用）",
];

const flow = [
  { step: "1", title: "事前登録", body: "申請書・会社情報を提出。審査後、協力会社コードを発行します。" },
  { step: "2", title: "見積・発注", body: "案件ごとに担当が仕様書を共有。見積回答後、発注書にて正式決定します。" },
  { step: "3", title: "現場運用", body: "搬入計画・安全協議会への参加は担当と調整。変更は必ず書面または指定ツールで連絡ください。" },
];

export default function PartnerPage() {
  return (
    <>
      <PageIntro
        title="パートナーの皆様へ"
        enTitle="PARTNER"
        description="協力会社様向けの手続き・安全・購買に関する情報をまとめています。不明点は購買窓口までお問い合わせください。"
      />
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8 lg:px-10">
          <div>
            <h2 className="font-serif text-xl text-[#333333]">提出書類・ダウンロード</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#555555]">
              各書類は本番環境ではPDFをサーバに配置し、ここから直接ダウンロードできるようにしてください。以下は必要な項目の一覧です。
            </p>
            <ul className="mt-6 space-y-4">
              {documents.map((doc) => (
                <li
                  key={doc.name}
                  className="flex flex-col gap-1 rounded-xl border border-[#ece7df] bg-[#faf9f7] px-5 py-4 md:flex-row md:items-center md:justify-between"
                >
                  <span className="text-sm font-medium text-[#333333]">{doc.name}</span>
                  <span className="text-xs text-[#666666] md:max-w-md md:text-right">{doc.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#333333]">安全協議会・現場ルール</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#555555]">
              {safetyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#555555]">
              現場ごとの安全衛生協議会日程は、発注担当より個別にご連絡します。持参書類の期限は必ず遵守ください。
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-[#333333]">購買・見積依頼の流れ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {flow.map((f) => (
                <article key={f.step} className="rounded-xl border border-[#ece7df] p-5">
                  <p className="text-xs tracking-[0.2em] text-[#8b7355]">STEP {f.step}</p>
                  <h3 className="mt-2 font-serif text-lg text-[#333333]">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#555555]">{f.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-[#e6dfd4] bg-[#f9f7f4] p-6">
            <h2 className="font-serif text-lg text-[#333333]">お問い合わせ（協力会社窓口）</h2>
            <p className="mt-3 text-sm text-[#555555]">
              購買・契約・安全に関するご質問は、お問い合わせフォームの「協業・取引先登録」を選択のうえ送信してください。
            </p>
            <Link
              href="/contact#lead"
              className="mt-4 inline-block text-sm font-medium text-[#8b7355] underline-offset-2 hover:underline"
            >
              お問い合わせフォームへ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

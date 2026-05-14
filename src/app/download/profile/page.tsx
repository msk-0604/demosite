import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会社概要・事業概要（印刷用） | 株式会社DEMO",
  description:
    "稟議・社内共有用の会社概要・事業概要です。ブラウザの印刷機能からPDFとして保存できます。",
};

export default function DownloadProfilePage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="mx-auto max-w-3xl px-6 py-10 print:py-6">
        <p className="text-xs text-[#888888] print:hidden">
          このページを開いた状態で「印刷」→「PDFに保存」で稟議用資料としてご利用ください。{" "}
          <Link href="/contact" className="text-[#8b7355] underline">
            お問い合わせはこちら
          </Link>
        </p>
        <header className="mt-6 border-b border-[#ddd] pb-6">
          <h1 className="font-serif text-2xl tracking-wide">株式会社DEMO</h1>
          <p className="mt-2 text-sm text-[#555555]">建設資材の供給および施工支援・安全管理を行う総合パートナー</p>
          <p className="mt-4 text-xs leading-relaxed text-[#666666]">
            〒100-0001 東京都千代田区千代田1-1-1
            <br />
            TEL 03-1234-5678（平日 9:00–18:00）／WebサイトのURLは貴社ドメインに差し替えてご利用ください
          </p>
        </header>

        <section className="mt-8">
          <h2 className="font-serif text-lg border-b border-[#eee] pb-2">会社概要</h2>
          <table className="mt-4 w-full text-sm">
            <tbody className="divide-y divide-[#eee]">
              <tr>
                <th className="w-36 py-2 text-left font-normal text-[#666666]">会社名</th>
                <td className="py-2">株式会社DEMO</td>
              </tr>
              <tr>
                <th className="py-2 text-left font-normal text-[#666666]">代表者</th>
                <td className="py-2">代表取締役 山田 太郎</td>
              </tr>
              <tr>
                <th className="py-2 text-left font-normal text-[#666666]">設立</th>
                <td className="py-2">2001年4月</td>
              </tr>
              <tr>
                <th className="py-2 text-left font-normal text-[#666666]">従業員数</th>
                <td className="py-2">120名（2026年4月現在）</td>
              </tr>
              <tr>
                <th className="py-2 text-left font-normal text-[#666666] align-top">事業内容</th>
                <td className="py-2 leading-relaxed">
                  建築・土木向け資材の企画・調達・配送、施工支援、安全管理支援、物流コンサルティング
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-lg border-b border-[#eee] pb-2">強み・提供価値</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#444444]">
            <li>資材ポートフォリオと全国ネットワークにより、納期リスクを抑えた安定供給が可能です。</li>
            <li>現場監督・元請様双方の視点で、工程に合わせた搬入計画と安全衛生連携をワンストップで支援します。</li>
            <li>デジタル点検・施工記録の整備など、品質とトレーサビリティ向上に資するソリューションを併せてご提案します。</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-lg border-b border-[#eee] pb-2">主要実績（抜粋）</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#444444]">
            <li>関東圏 大規模物流センター新築（資材一括供給・現場物流）</li>
            <li>都心部 高層マンション建替え（躯体・内装材、短工期対応）</li>
            <li>近畿圏 河川護岸・調整池関連（公共インフラ、安全管理体制構築支援）</li>
          </ul>
          <p className="mt-3 text-xs text-[#777777]">詳細は Web サイト「実績紹介」をご参照ください。</p>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-lg border-b border-[#eee] pb-2">お問い合わせ</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#444444]">
            資材見積、協業、施工支援のご相談は Web のお問い合わせフォームまたは上記電話にて承ります。初回ヒアリングは無料です。
          </p>
        </section>

        <footer className="mt-12 border-t border-[#eee] pt-4 text-center text-xs text-[#999999]">
          © {new Date().getFullYear()} 株式会社DEMO — 印刷用プロフィール
        </footer>
      </div>
    </div>
  );
}

import Link from "next/link";

const footerGroups = [
  {
    title: "愛をもっと DEMO",
    links: [
      { href: "/story", label: "愛あるエピソード" },
      { href: "/story/architecture", label: "建築編" },
      { href: "/story/civil", label: "土木編" },
    ],
  },
  {
    title: "会社情報",
    links: [
      { href: "/about/greeting", label: "ごあいさつ・理念" },
      { href: "/company/history", label: "会社概要 / 沿革" },
      { href: "/business", label: "事業内容" },
    ],
  },
  {
    title: "実績・技術",
    links: [
      { href: "/works/list", label: "実績紹介" },
      { href: "/technology/services", label: "技術・サービス" },
      { href: "/csr/sdgs", label: "CSR / SDGs" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1f2b3a] py-12 text-[#e6e0d8]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr_1.8fr] md:px-8 lg:px-10">
        <div>
          <p className="font-serif text-xl tracking-[0.08em]">株式会社DEMO</p>
          <p className="mt-3 text-sm leading-relaxed text-[#c8c1b8]">
            〒100-0001 東京都千代田区千代田1-1-1
            <br />
            TEL: 03-1234-5678
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-xs tracking-[0.18em] text-[#b5ada3]">{group.title}</p>
              <div className="mt-3 flex flex-col gap-1.5">
                {group.links.map((link) => (
                  <Link key={link.href + link.label} href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className="text-xs tracking-[0.18em] text-[#b5ada3]">その他</p>
            <div className="mt-3 flex flex-col gap-1.5">
              <Link href="/partner" className="text-sm hover:text-white">
                パートナーの皆様へ
              </Link>
              <Link href="/recruit" className="text-sm hover:text-white">
                採用情報
              </Link>
              <Link href="/contact" className="text-sm hover:text-white">
                お問い合わせ
              </Link>
              <Link href="/download/profile" className="text-sm hover:text-white">
                会社概要（印刷用）
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-white/15 px-4 pt-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-[#d8d2c9]">
            DM・メール営業の方：トップの「無料相談」またはこちらから最短でご返信します。
          </p>
          <Link
            href="/contact#lead"
            className="inline-flex shrink-0 rounded-md bg-[#e36f4a] px-4 py-2 text-xs font-semibold text-white hover:bg-[#d5603d]"
          >
            お問い合わせ（フォーム）
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl border-t border-white/20 px-4 pt-5 text-xs text-[#a59d92] md:px-8 lg:px-10">
        © {new Date().getFullYear()} DEMO Co., Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

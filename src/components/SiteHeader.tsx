"use client";

import { Building2, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mainNavItems = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "会社案内" },
  { href: "/business", label: "事業案内" },
  { href: "/news", label: "情報公開" },
  { href: "/csr", label: "CSR" },
  { href: "/company", label: "アクセス" },
];

const utilityNavItems = [
  { href: "/story", label: "愛をもっと DEMO" },
  { href: "/partner", label: "パートナーの皆様へ" },
  { href: "/recruit", label: "採用情報" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isItemActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-[#ebebeb] bg-white">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 md:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-[15px] tracking-[0.08em] text-[#333333]"
        >
          <Building2 size={16} className="text-[#2d2d2d]" />
          <span>株式会社DEMO</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#333333]"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="メニューを開閉"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="mx-auto hidden h-14 max-w-7xl items-stretch px-2 md:flex">
        <Link
          href="/"
          className="flex min-w-[240px] items-center gap-2 border-r border-[#ececec] px-4"
        >
          <Building2 size={16} className="text-[#2d2d2d]" />
          <span className="font-serif text-[17px] tracking-[0.08em] text-[#2d2d2d]">株式会社DEMO</span>
        </Link>

        <nav className="grid flex-1 grid-cols-6">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-center border-r border-[#ececec] px-1 text-[11px] font-normal tracking-[0.01em] transition-colors ${
                isItemActive(item.href)
                  ? "bg-[#f7f7f7] text-[#222222]"
                  : "text-[#2f2f2f] hover:bg-[#fafafa]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link href="/contact" className="flex h-full min-w-[128px] items-center justify-center gap-1.5 bg-[#e36f4a] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#d5603d]">
            <Phone size={13} />
            お問い合わせ
          </Link>
        </div>
      </div>

      {isOpen ? (
        <nav className="border-t border-[#eae5df] bg-white px-4 py-4 md:hidden">
          <div className="mb-3">
            <p className="text-[10px] tracking-[0.18em] text-[#8b7355]">MAIN MENU</p>
          </div>
          <div className="mb-5 grid grid-cols-2 gap-3">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md border px-3 py-2 text-xs tracking-[0.12em] ${
                  isItemActive(item.href)
                    ? "border-[#c8b8a2] bg-[#f9f5ef] text-[#8b7355]"
                    : "border-[#ebe4da] text-[#444444]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mb-3">
            <p className="text-[10px] tracking-[0.18em] text-[#8b7355]">GUIDE</p>
          </div>
          <div className="flex flex-col gap-3">
            {[...utilityNavItems, { href: "/contact", label: "お問い合わせ" }].map((item) => (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`font-sans text-xs tracking-[0.12em] ${
                  isItemActive(item.href) ? "text-[#8b7355]" : "text-[#444444]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}

    </header>
  );
}

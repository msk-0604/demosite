"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/story", label: "愛をもっと DEMO" },
  { href: "/about", label: "私たちについて" },
  { href: "/works", label: "実績・プロジェクト" },
  { href: "/technology", label: "技術・サービス" },
  { href: "/csr", label: "CSR" },
  { href: "/partner", label: "パートナーの皆様へ" },
  { href: "/recruit", label: "採用情報" },
  { href: "/business", label: "事業内容" },
  { href: "/news", label: "お知らせ" },
  { href: "/company", label: "会社情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#eae5df] bg-[#ffffff]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-8 lg:px-10">
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.12em] text-[#333333] md:text-xl"
        >
          株式会社DEMO
          <span className="ml-2 font-sans text-[10px] font-medium tracking-[0.2em] text-[#666666] md:text-[11px]">
            DEMO CONSTRUCTION
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#333333] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="メニューを開閉"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className="hidden gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-sans text-xs tracking-[0.14em] transition-colors hover:text-[#8b7355] ${
                pathname === item.href ? "text-[#8b7355]" : "text-[#444444]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {isOpen ? (
        <nav className="border-t border-[#eae5df] bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-xs tracking-[0.12em] ${
                  pathname === item.href ? "text-[#8b7355]" : "text-[#444444]"
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

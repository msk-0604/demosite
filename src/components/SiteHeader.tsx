"use client";

import { Building2, ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

type NavChild = { href: string; label: string };

type NavItem = {
  href: string;
  label: string;
  /** PC: ホバー／キーボードで開くサブメニュー */
  children?: NavChild[];
};

const mainNavItems: NavItem[] = [
  { href: "/", label: "トップ" },
  {
    href: "/about",
    label: "会社案内",
    children: [
      { href: "/about", label: "会社案内トップ" },
      { href: "/about/greeting", label: "ごあいさつ・理念" },
      { href: "/company/history", label: "会社概要・沿革" },
    ],
  },
  { href: "/business", label: "事業案内" },
  {
    href: "/works",
    label: "実績・技術",
    children: [
      { href: "/works", label: "施工実績トップ" },
      { href: "/works/list", label: "実績一覧" },
      { href: "/technology", label: "技術・設備" },
      { href: "/technology/services", label: "サービス紹介" },
    ],
  },
  { href: "/news", label: "情報公開" },
  {
    href: "/csr",
    label: "CSR",
    children: [
      { href: "/csr", label: "CSR" },
      { href: "/csr/sdgs", label: "SDGsへの取り組み" },
    ],
  },
  { href: "/company", label: "アクセス" },
];

const utilityNavItems: NavChild[] = [
  { href: "/story", label: "愛をもっと DEMO" },
  { href: "/partner", label: "パートナーの皆様へ" },
  { href: "/recruit", label: "採用情報" },
];

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isNavItemActive(pathname: string, item: NavItem) {
  if (isPathActive(pathname, item.href)) return true;
  return item.children?.some((c) => isPathActive(pathname, c.href)) ?? false;
}

function isUtilityActive(pathname: string) {
  return utilityNavItems.some((u) => isPathActive(pathname, u.href));
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e6e3] bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      {/* モバイル: 1行バー */}
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 md:hidden">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 font-serif text-[15px] tracking-[0.08em] text-[#333333]"
          onClick={closeMenu}
        >
          <Building2 size={18} className="shrink-0 text-[#2d2d2d]" aria-hidden />
          <span className="truncate">株式会社DEMO</span>
        </Link>
        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#e5e5e5] bg-white p-2.5 text-[#333333] transition-colors hover:bg-[#fafafa]"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      {/* PC: 上段ユーティリティ + 下段ロゴ・メイン・CTA（横スクロールなし） */}
      <div className="mx-auto hidden max-w-7xl md:block md:px-4 lg:px-6">
        <div className="flex h-9 items-center justify-end gap-x-5 border-b border-[#ececec] bg-[#fafafa] px-2 text-[12px] text-[#5c5c5c] lg:gap-x-8 lg:px-3">
          {utilityNavItems.map((u) => (
            <Link
              key={u.href}
              href={u.href}
              className={`shrink-0 transition-colors hover:text-[#111] ${
                isPathActive(pathname, u.href) ? "font-semibold text-[#7a5c20]" : ""
              }`}
            >
              {u.label}
            </Link>
          ))}
        </div>

        <div className="flex h-[56px] min-h-[56px] items-stretch">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 border-r border-[#ececec] py-2 pr-4 lg:min-w-[200px] lg:pr-5"
          >
            <Building2 size={18} className="text-[#2d2d2d]" aria-hidden />
            <span className="font-serif text-[16px] tracking-[0.08em] text-[#2d2d2d] lg:text-[17px]">株式会社DEMO</span>
          </Link>

          <nav
            className="flex min-w-0 flex-1 items-stretch px-1 lg:px-2"
            aria-label="メインメニュー"
          >
            <div className="flex w-full min-w-0 items-stretch justify-between gap-0.5 lg:gap-1 xl:mx-auto xl:max-w-4xl xl:justify-center xl:gap-0">
              {mainNavItems.map((item) => {
                const active = isNavItemActive(pathname, item);
                if (!item.children?.length) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex min-w-0 flex-1 items-center justify-center px-0.5 text-center text-[12px] font-medium leading-tight tracking-wide transition-colors lg:px-1 lg:text-[13px] xl:max-w-[8.5rem] xl:flex-none xl:px-3 xl:text-[14px] ${
                        active ? "bg-[#f3f3f3] text-[#111]" : "text-[#2a2a2a] hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className="line-clamp-2 xl:line-clamp-none">{item.label}</span>
                    </Link>
                  );
                }
                return (
                  <div key={item.href} className="group relative flex min-w-0 flex-1 xl:flex-none">
                    <Link
                      href={item.href}
                      aria-haspopup="menu"
                      className={`flex w-full min-w-0 items-center justify-center gap-0.5 px-0.5 text-center text-[12px] font-medium leading-tight tracking-wide transition-colors lg:px-1 lg:text-[13px] xl:px-3 xl:text-[14px] ${
                        active ? "bg-[#f3f3f3] text-[#111]" : "text-[#2a2a2a] hover:bg-[#fafafa]"
                      }`}
                    >
                      <span className="line-clamp-2 text-center xl:line-clamp-none">{item.label}</span>
                      <ChevronDown
                        size={13}
                        className="hidden shrink-0 opacity-55 transition-transform group-hover:rotate-180 sm:block"
                        aria-hidden
                      />
                    </Link>
                    <div
                      className="pointer-events-none invisible absolute left-1/2 top-full z-[60] min-w-[220px] -translate-x-1/2 pt-1.5 opacity-0 transition-[opacity,visibility] duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 xl:left-0 xl:translate-x-0"
                      role="presentation"
                    >
                      <div
                        className="rounded-md border border-[#e4e4e4] bg-white py-1.5 shadow-md"
                        role="menu"
                        aria-label={`${item.label}のサブメニュー`}
                      >
                        {item.children.map((child) => {
                          const childActive = isPathActive(pathname, child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={`block px-4 py-2.5 text-left text-[13px] transition-colors ${
                                childActive
                                  ? "bg-[#f9f6f2] font-medium text-[#5c4a38]"
                                  : "text-[#333] hover:bg-[#fafafa]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>

          <div className="flex shrink-0 items-stretch border-l border-[#ececec]">
            <Link
              href="/contact"
              className="flex min-w-[112px] items-center justify-center gap-1.5 bg-[#e36f4a] px-3 text-[12px] font-semibold text-white transition-colors hover:bg-[#d5603d] lg:min-w-[128px] lg:px-4 lg:text-[13px]"
            >
              <Phone size={14} aria-hidden />
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* モバイル: ドロワー（一覧で統一したフォーメーション） */}
      {isOpen ? (
        <div
          id={menuId}
          className="fixed inset-0 top-14 z-[100] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="サイトメニュー"
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/45"
            aria-label="メニューを閉じる"
            onClick={closeMenu}
          />
          <div className="absolute inset-y-0 right-0 z-10 flex w-[min(100%,20rem)] flex-col border-l border-[#e4e0da] bg-white shadow-[-12px_0_40px_rgba(0,0,0,0.14)] sm:w-[min(100%,22rem)]">
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <div className="border-b border-[#ececec] px-4 py-3.5">
                <p className="text-[15px] font-semibold tracking-wide text-[#222]">メニュー</p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pb-8 pt-1">
                <div className="space-y-2 border-b border-[#eee] pb-4">
                  <Link
                    href="/contact"
                    className="flex min-h-[48px] items-center justify-center rounded-md bg-[#e36f4a] text-[14px] font-semibold text-white hover:bg-[#d5603d]"
                    onClick={closeMenu}
                  >
                    お問い合わせ
                  </Link>
                  <Link
                    href="/download/profile"
                    className="flex min-h-[46px] items-center justify-center rounded-md border border-[#d8d0c6] bg-[#faf9f7] text-[14px] font-medium text-[#333] hover:bg-[#f3f1ed]"
                    onClick={closeMenu}
                  >
                    会社概要（印刷用）
                  </Link>
                </div>

                <p className="mb-1 mt-5 px-1 text-[11px] font-semibold tracking-[0.14em] text-[#7a6a5a]">ページ一覧</p>
                <nav className="rounded-lg border border-[#ebe8e4] bg-[#fdfcfa]">
                  {mainNavItems.map((item) => {
                    const active = isNavItemActive(pathname, item);
                    return (
                      <div key={item.href} className="border-b border-[#ebe8e4] last:border-b-0">
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex min-h-[48px] items-center px-3.5 text-[15px] font-medium ${
                            active && !item.children?.length
                              ? "bg-[#f4efe6] text-[#5c4a38]"
                              : active
                                ? "bg-[#faf6f0] text-[#3d3d3d]"
                                : "text-[#222] active:bg-[#f0f0f0]"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {item.children?.length ? (
                          <ul className="border-t border-[#f0ebe4] bg-white py-1">
                            {item.children.map((child) => {
                              const childActive = isPathActive(pathname, child.href);
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={`flex min-h-[44px] items-center border-l-[3px] py-2 pl-4 pr-3 text-[14px] leading-snug ${
                                      childActive
                                        ? "border-[#c9a227] bg-[#fffdf8] font-medium text-[#5c4a38]"
                                        : "border-transparent text-[#444] active:bg-[#fafafa]"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        ) : null}
                      </div>
                    );
                  })}
                </nav>

                <p className="mb-1 mt-6 px-1 text-[11px] font-semibold tracking-[0.14em] text-[#7a6a5a]">サイトガイド</p>
                <ul className="overflow-hidden rounded-lg border border-[#ebe8e4] bg-white">
                  {utilityNavItems.map((link) => {
                    const active = isPathActive(pathname, link.href);
                    return (
                      <li key={link.href} className="border-b border-[#f0f0f0] last:border-b-0">
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`flex min-h-[48px] items-center px-3.5 text-[14px] ${
                            active ? "bg-[#f9f5ef] font-medium text-[#5c4a38]" : "text-[#222] active:bg-[#fafafa]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

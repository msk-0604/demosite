"use client";

import Link from "next/link";
import { ArrowRight, Clock, FileText, ShieldCheck } from "lucide-react";
import { RevealOnView } from "@/components/RevealOnView";

export function DmLeadSection() {
  return (
    <section className="border-b border-[#ece7df] bg-[#faf8f5] py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
        <RevealOnView className="mb-10 text-center md:text-left">
          <p className="mb-2 text-xs tracking-[0.22em] text-[#8b7355]">B2B / DMからのお問い合わせ歓迎</p>
          <h2 className="font-serif text-[clamp(1.25rem,2.6vw,1.85rem)] text-[#333333]">
            まずは「誰が・何を・いつまでに」が一目でわかるサイトに
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#555555] md:mx-0">
            DM営業で送ったあと、相手がURLを開いた瞬間に判断材料が揃うよう整理しています。お問い合わせは無料・秘密保持前提です。
          </p>
        </RevealOnView>

        <div className="grid gap-4 md:grid-cols-3">
          <RevealOnView delay={0.05} className="rounded-xl border border-[#e8e0d6] bg-white p-5">
            <ShieldCheck className="h-5 w-5 text-[#8b7355]" aria-hidden />
            <h3 className="mt-3 font-serif text-base text-[#333333]">頼めること</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#666666]">
              資材調達・納期調整・施工支援・安全衛生連携まで、窓口一本で相談可能です。
            </p>
            <Link href="/business" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8b7355]">
              事業内容を見る <ArrowRight className="h-3 w-3" />
            </Link>
          </RevealOnView>
          <RevealOnView delay={0.1} className="rounded-xl border border-[#e8e0d6] bg-white p-5">
            <Clock className="h-5 w-5 text-[#8b7355]" aria-hidden />
            <h3 className="mt-3 font-serif text-base text-[#333333]">返信の目安</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#666666]">
              平日は原則1営業日以内に担当よりご連絡します（混雑時は翌営業日）。
            </p>
            <Link href="/contact" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8b7355]">
              お問い合わせフォーム <ArrowRight className="h-3 w-3" />
            </Link>
          </RevealOnView>
          <RevealOnView delay={0.15} className="rounded-xl border border-[#e8e0d6] bg-white p-5">
            <FileText className="h-5 w-5 text-[#8b7355]" aria-hidden />
            <h3 className="mt-3 font-serif text-base text-[#333333]">実績の入口</h3>
            <p className="mt-2 text-xs leading-relaxed text-[#666666]">
              用途・エリア別の事例一覧から、社内稟議に使える情報にたどれます。
            </p>
            <Link href="/works/list" className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8b7355]">
              実績一覧へ <ArrowRight className="h-3 w-3" />
            </Link>
          </RevealOnView>
        </div>

        <RevealOnView delay={0.12} className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:justify-center md:justify-start">
          <Link
            href="/contact#lead"
            className="inline-flex items-center justify-center rounded-md bg-[#e36f4a] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-[#d5603d]"
          >
            無料で相談する（フォーム）
          </Link>
          <Link
            href="/download/profile"
            className="inline-flex items-center justify-center rounded-md border border-[#cfc4b6] bg-white px-6 py-3 text-sm font-medium text-[#333333] transition hover:bg-[#f7f4ef]"
          >
            会社概要・事業概要（印刷用）
          </Link>
        </RevealOnView>
        <p className="mt-4 text-center text-[11px] text-[#888888] md:text-left">
          DMで「URLだけ送る」運用向け：トップ → 事業案内 → 実績 → お問い合わせ の順で読める構成です。
        </p>
      </div>
    </section>
  );
}

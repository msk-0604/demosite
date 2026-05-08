"use client";

import { RevealOnView } from "@/components/RevealOnView";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="scroll-mt-20 bg-[#ffffff] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <RevealOnView className="mb-16 md:mb-20">
          <p className="mb-4 font-sans text-xs tracking-[0.28em] text-[#8b7355]">
            CONCEPT
          </p>
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-snug tracking-[0.06em] text-[#333333]">
            現場に寄り添う技術で、
            <br className="hidden md:block" />
            社会インフラの明日を築く。
          </h2>
        </RevealOnView>

        <div className="grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <RevealOnView className="md:col-span-5" delay={0.08}>
            <div className="h-px w-12 bg-[#c4b7a6]" aria-hidden />
            <p className="mt-8 font-sans text-sm leading-[2] tracking-wide text-[#555555] md:text-[15px]">
              株式会社DEMOは、建設資材の供給、施工計画支援、安全管理までをワンストップで対応。公共・民間を問わず、幅広い建設プロジェクトを支えます。
            </p>
          </RevealOnView>

          <RevealOnView className="md:col-span-7 md:pt-14" delay={0.18}>
            <p className="font-serif text-lg leading-loose tracking-wide text-[#333333] md:text-xl">
              「迅速で、正確で、誠実に。」
              <br />
              工期・品質・安全のすべてを高い水準で両立し、信頼される現場づくりを実現します。
            </p>
            <p className="mt-10 font-sans text-sm leading-[2] text-[#555555] md:text-[15px]">
              調達ネットワークと現場知見を生かし、工程ごとの課題を先回りで解決。長期的なパートナーとして、地域の建設基盤に貢献します。
            </p>
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}

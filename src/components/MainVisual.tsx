"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/hero/slide-01.png",
    alt: "建設現場で設計図を持つ作業員",
  },
  {
    src: "/images/hero/slide-02.png",
    alt: "都市部の再開発現場を見守る作業員",
  },
  {
    src: "/images/hero/slide-03.png",
    alt: "上空から見た建設チームの打ち合わせ",
  },
  {
    src: "/images/hero/slide-04.png",
    alt: "高層建築の工事現場とクレーン",
  },
];

export function MainVisual() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6200);
    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#f7f5f2]">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === activeIndex ? 1 : 0,
              scale: index === activeIndex ? 1.035 : 1.015,
            }}
            transition={{
              opacity: { duration: 1.9, ease: [0.4, 0.12, 0.12, 1] },
              scale: { duration: 6.2, ease: "linear" },
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </motion.div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#fdfcfa]/65 via-transparent to-[#2c3544]/55"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pl-5 pr-5 pt-28 md:pb-28 md:pl-14 md:pr-8 lg:pb-36 lg:pl-20 lg:pr-24">
        <motion.p
          className="mb-5 font-serif text-sm tracking-[0.35em] text-[#fdfcfa] md:text-base"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          建設の未来を、確かな品質で。
        </motion.p>
        <motion.h1
          className="max-w-xl font-serif text-[clamp(1.6rem,4.2vw,3rem)] font-medium leading-snug tracking-[0.04em] text-[#ffffff] drop-shadow-sm md:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          信頼される建設品質で、
          <br className="hidden sm:block" />
          街と暮らしを支える。
        </motion.h1>
        <motion.p
          className="mt-7 max-w-md font-sans text-sm leading-relaxed tracking-wide text-[#f0ebe4] md:text-[15px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          建築資材の調達から施工支援までを一貫してサポート。
          <br />
          株式会社DEMOは、現場第一の体制で確かな安全と品質を提供します。
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact#lead"
              className="inline-flex items-center justify-center rounded-md bg-[#e36f4a] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#d5603d]"
            >
              無料相談・お問い合わせ
            </Link>
            <Link
              href="/download/profile"
              className="inline-flex items-center justify-center rounded-md border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              資料・会社概要（印刷用）
            </Link>
          </div>
          <p className="w-full max-w-lg text-[12px] leading-relaxed text-[#ebe6df] sm:text-[13px]">
            会社概要は印刷用ページを開き、ブラウザの印刷（PDF保存）でご共有いただけます。
          </p>
        </motion.div>
        <div className="mt-8 flex gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              aria-label={`スライド${index + 1}を表示`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

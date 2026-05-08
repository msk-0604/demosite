"use client";

import { Building2, HardHat, Truck } from "lucide-react";
import { RevealOnView } from "@/components/RevealOnView";

const services = [
  {
    icon: Building2,
    title: "建築資材供給",
    description:
      "大規模建築からリニューアル工事まで、必要な資材を安定供給します。",
  },
  {
    icon: HardHat,
    title: "施工支援・安全管理",
    description:
      "現場ごとの条件を踏まえ、施工計画と安全面の最適化をサポートします。",
  },
  {
    icon: Truck,
    title: "物流・納期管理",
    description:
      "工程に合わせた配送計画で、無駄のない納品と工期遵守を実現します。",
  },
];

export function BusinessSection() {
  return (
    <section id="products" className="scroll-mt-24 bg-[#f9f7f4] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-10">
        <RevealOnView className="mb-10 md:mb-14">
          <p className="mb-3 text-xs tracking-[0.28em] text-[#8b7355]">BUSINESS</p>
          <h2 className="font-serif text-[clamp(1.35rem,2.8vw,2rem)] leading-snug text-[#333333]">
            建設業の課題に、総合力で応える
          </h2>
        </RevealOnView>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealOnView
              key={service.title}
              delay={0.05 * index}
              className="group rounded-2xl border border-[#e7e1d9] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <service.icon className="h-6 w-6 text-[#8b7355]" />
              <h3 className="mt-4 font-serif text-xl text-[#333333]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#555555]">
                {service.description}
              </p>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

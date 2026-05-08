"use client";

import { ContactForm } from "@/components/ContactForm";
import { RevealOnView } from "@/components/RevealOnView";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#f9f7f4] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <RevealOnView className="mb-10 md:mb-14">
          <p className="mb-3 text-xs tracking-[0.28em] text-[#8b7355]">CONTACT</p>
          <h2 className="font-serif text-[clamp(1.35rem,2.8vw,2rem)] text-[#333333]">
            お問い合わせ
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#555555]">
            資材調達、施工支援、協業のご相談などお気軽にお問い合わせください。
          </p>
        </RevealOnView>

        <RevealOnView>
          <ContactForm />
        </RevealOnView>
      </div>
    </section>
  );
}

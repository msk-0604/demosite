"use client";

export function ContactForm() {
  return (
    <form className="space-y-4 rounded-2xl border border-[#e6dfd4] bg-white p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#444444]">
          会社名
          <input
            type="text"
            name="company"
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="株式会社〇〇"
          />
        </label>
        <label className="space-y-2 text-sm text-[#444444]">
          ご担当者名
          <input
            type="text"
            name="name"
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="山田 太郎"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#444444]">
          メールアドレス
          <input
            type="email"
            name="email"
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="demo@example.com"
          />
        </label>
        <label className="space-y-2 text-sm text-[#444444]">
          電話番号
          <input
            type="tel"
            name="tel"
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="03-1234-5678"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-[#444444]">
        お問い合わせ内容
        <textarea
          name="message"
          rows={6}
          className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
          placeholder="ご相談内容をご記入ください。"
        />
      </label>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full rounded-md bg-[#233246] px-5 py-3 text-sm tracking-[0.15em] text-white transition hover:bg-[#192435] md:w-auto"
        >
          送信する
        </button>
      </div>
    </form>
  );
}

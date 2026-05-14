"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setFeedback("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok?: boolean; message?: string; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? "送信に失敗しました。しばらくしてから再度お試しください。");
      }
      setStatus("success");
      setFeedback(json.message ?? "送信が完了しました。");
      form.reset();
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  return (
    <form id="lead" className="space-y-4 rounded-2xl border border-[#e6dfd4] bg-white p-5 md:p-8" onSubmit={handleSubmit}>
      <p className="rounded-md bg-[#f9f5ef] px-3 py-2 text-xs leading-relaxed text-[#5c4f3f]">
        <strong>DMでご連絡の方へ：</strong>
        会社名・ご担当・ご用件・希望時期が分かると、初回返信で具体的にお答えしやすくなります。送信後は画面に受付完了が表示されます。
      </p>

      {status === "success" ? (
        <p className="rounded-md border border-[#c8d9c4] bg-[#f4faf3] px-4 py-3 text-sm text-[#2d4a2d]" role="status">
          {feedback}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-[#e0c4c4] bg-[#fdf4f4] px-4 py-3 text-sm text-[#6b2d2d]" role="alert">
          {feedback}
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#444444]">
          会社名 <span className="text-[#c45c3e]">*</span>
          <input
            type="text"
            name="company"
            required
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="株式会社〇〇"
          />
        </label>
        <label className="space-y-2 text-sm text-[#444444]">
          ご担当者名 <span className="text-[#c45c3e]">*</span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="山田 太郎"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#444444]">
          役職・部署
          <input
            type="text"
            name="role"
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="調達部 課長"
          />
        </label>
        <label className="space-y-2 text-sm text-[#444444]">
          ご用件
          <select
            name="topic"
            className="w-full rounded-md border border-[#dcd4c8] bg-white px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            defaultValue=""
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="estimate">資材・見積の相談</option>
            <option value="construction">施工支援・工程相談</option>
            <option value="partner">協業・取引先登録</option>
            <option value="dm">DMを見て問い合わせ</option>
            <option value="other">その他</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[#444444]">
          メールアドレス <span className="text-[#c45c3e]">*</span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
            placeholder="contact@example.co.jp"
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
        ご希望の対応時期
        <input
          type="text"
          name="timeline"
          className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
          placeholder="例：6月中に概算見積／来週火曜以降に電話希望 など"
        />
      </label>

      <label className="space-y-2 text-sm text-[#444444]">
        お問い合わせ内容 <span className="text-[#c45c3e]">*</span>
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-md border border-[#dcd4c8] px-3 py-2 text-sm outline-none transition focus:border-[#8b7355]"
          placeholder="工事種別・規模・エリア・既存の発注スケジュールなど、分かる範囲でご記入ください。"
        />
      </label>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-md bg-[#233246] px-5 py-3 text-sm tracking-[0.12em] text-white transition hover:bg-[#192435] disabled:opacity-60 md:w-auto"
        >
          {status === "loading" ? "送信中…" : "送信する（無料）"}
        </button>
      </div>
    </form>
  );
}

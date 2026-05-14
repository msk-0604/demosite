import { NextResponse } from "next/server";

type ContactBody = {
  company?: string;
  name?: string;
  role?: string;
  topic?: string;
  email?: string;
  tel?: string;
  timeline?: string;
  message?: string;
};

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { ok: false, error: "Content-Type は application/json を指定してください。" },
      { status: 400 },
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON の形式が正しくありません。" }, { status: 400 });
  }

  const company = typeof body.company === "string" ? body.company.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!company || !name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "会社名・ご担当者名・メールアドレス・お問い合わせ内容は必須です。" },
      { status: 422 },
    );
  }

  // 本番環境ではここでメール送信・CRM・スプレッドシート連携などを行う
  return NextResponse.json({
    ok: true,
    message:
      "お問い合わせを受け付けました。内容を確認のうえ、担当より1営業日以内（混雑時は翌営業日）にご連絡いたします。",
  });
}

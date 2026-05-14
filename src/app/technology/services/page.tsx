import { PageIntro } from "@/components/PageIntro";

const services = [
  {
    title: "配筋検査AR支援",
    body: "タブレットで配筋状態を重ね合わせ表示し、施工前の不整合を低減。監理・施工双方で同じ画面を共有できます。",
  },
  {
    title: "映像による点検支援",
    body: "ドローン・固定カメラの映像をクラウド保管し、高所・危険区域の定点観測を遠隔で実施。報告書テンプレートまで一括出力します。",
  },
  {
    title: "クレーン安全監視",
    body: "ワイヤ巻取り状態や風速連動アラートを記録。異常検知時は現場監督へ即時通知し、再発防止ログを自動蓄積します。",
  },
  {
    title: "コンクリート打設管理",
    body: "打設高さ・間隔・養生時間をIoTセンサで計測。温度履歴とあわせて品質トレーサビリティを担保します。",
  },
];

export default function TechnologyServicesPage() {
  return (
    <>
      <PageIntro
        title="技術・サービス"
        enTitle="TECHNOLOGY SERVICES"
        description="品質・安全・省力化を支える自社開発およびパートナー連携のソリューションをご紹介します。"
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-8">
          <p className="max-w-3xl text-sm leading-relaxed text-[#555555]">
            現場の課題をITと運用設計の両面から解決します。導入支援から定着化まで、資材・施工の両チームが伴走します。
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="rounded-xl border border-[#ece7df] p-6">
                <h2 className="font-serif text-lg text-[#333333]">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#555555]">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

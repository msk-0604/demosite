import { BusinessSection } from "@/components/BusinessSection";
import { PageIntro } from "@/components/PageIntro";

export default function BusinessPage() {
  return (
    <>
      <PageIntro
        title="事業内容"
        enTitle="BUSINESS"
        description="資材供給・施工支援・安全管理・物流調整を一体化し、建設現場の生産性と品質向上に貢献します。"
      />
      <BusinessSection />
    </>
  );
}

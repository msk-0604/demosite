import { CorporateSections } from "@/components/CorporateSections";
import { DmLeadSection } from "@/components/DmLeadSection";
import { MainVisual } from "@/components/MainVisual";

export default function Home() {
  return (
    <>
      <MainVisual />
      <DmLeadSection />
      <CorporateSections />
    </>
  );
}

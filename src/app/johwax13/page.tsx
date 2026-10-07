import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_13_SCANS } from "@/data/johwax13Scans";

export const metadata: Metadata = {
  title: "Article: Three Screens Full of Happiness — Johnson Wax — nywf64.com",
  description: "Article: Three Screens Full of Happiness — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax13Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax13-title"
      title="Article: Three Screens Full of Happiness"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax12"
      overviewHref="/johwaxoverview"
      nextHref="/johwax14"
      columns={3}
      scans={[...JOHWAX_13_SCANS]}
      source={
        <>
          Source: Business Screen Magazine, Vol. 25, No. 2, March, 1964
        </>
      }
    />
  );
}

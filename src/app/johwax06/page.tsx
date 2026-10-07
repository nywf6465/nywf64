import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_06_SCANS } from "@/data/johwax06Scans";

export const metadata: Metadata = {
  title: "Johnson Wax Gallery of Photographs — Johnson Wax — nywf64.com",
  description:
    "Johnson Wax Gallery of Photographs — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax06Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax06-title"
      title="Johnson Wax Gallery of Photographs"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax05"
      overviewHref="/johwaxoverview"
      nextHref="/johwax07"
      columns={3}
      scans={JOHWAX_06_SCANS}
    />
  );
}

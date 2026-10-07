import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_07_SCANS } from "@/data/johwax07Scans";

export const metadata: Metadata = {
  title: "Pamphlet: Groundbreaking — Johnson Wax — nywf64.com",
  description: "Pamphlet: Groundbreaking — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax07Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax07-title"
      title="Pamphlet: Groundbreaking"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax06"
      overviewHref="/johwaxoverview"
      nextHref="/johwax08"
      columns={3}
      scans={[...JOHWAX_07_SCANS]}
    />
  );
}

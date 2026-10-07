import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_09_SCANS } from "@/data/johwax09Scans";

export const metadata: Metadata = {
  title: "Brochure: Golden Rondelle — Johnson Wax — nywf64.com",
  description: "Brochure: Golden Rondelle — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax09Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax09-title"
      title="Brochure: Golden Rondelle"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax08"
      overviewHref="/johwaxoverview"
      nextHref="/johwax10"
      columns={3}
      scans={[...JOHWAX_09_SCANS]}
    />
  );
}

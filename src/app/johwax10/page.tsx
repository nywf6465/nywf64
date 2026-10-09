import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_10_SCANS } from "@/data/johwax10Scans";

export const metadata: Metadata = {
  title: "Map — Johnson Wax — nywf64.com",
  description: "Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Map brochure pages stitched from legacy tile strips into single composites. */
export default function Johwax10Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax10-title"
      title="Map"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax09"
      overviewHref="/johwaxoverview"
      nextHref="/johwax11"
      columns={1}
      scans={[...JOHWAX_10_SCANS]}
    />
  );
}

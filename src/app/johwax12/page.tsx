import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_12_SCANS } from "@/data/johwax12Scans";

export const metadata: Metadata = {
  title: "Johnson Magazine — Johnson Wax — nywf64.com",
  description: "Johnson Magazine — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax12Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax12-title"
      title="Johnson Magazine"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax11"
      overviewHref="/johwaxoverview"
      nextHref="/johwax13"
      columns={3}
      scans={[...JOHWAX_12_SCANS]}
    />
  );
}

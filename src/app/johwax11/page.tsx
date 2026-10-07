import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_11_SCANS } from "@/data/johwax11Scans";

export const metadata: Metadata = {
  title: "Souvenir Question & Answer Card — Johnson Wax — nywf64.com",
  description: "Souvenir Question & Answer Card — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Johwax11Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax11-title"
      title="Souvenir Question & Answer Card"
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax10"
      overviewHref="/johwaxoverview"
      nextHref="/johwax12"
      columns={3}
      scans={[...JOHWAX_11_SCANS]}
    />
  );
}

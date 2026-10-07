import type { Metadata } from "next";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_14_SCANS } from "@/data/johwax14Scans";

export const metadata: Metadata = {
  title: 'Article: It\'s Great "To Be Alive!" — Johnson Wax — nywf64.com',
  description:
    'Article: It\'s Great "To Be Alive!" — 1964/1965 New York World’s Fair on nywf64.com.',
};

export default function Johwax14Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax14-title"
      title={'Article: It\'s Great "To Be Alive!"'}
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax13"
      overviewHref="/johwaxoverview"
      nextHref="/johwax15"
      columns={3}
      scans={[...JOHWAX_14_SCANS]}
      source={
        <>
          Source: Business Screen Magazine, Vol. 25, No. 3, May, 1964
        </>
      }
    />
  );
}

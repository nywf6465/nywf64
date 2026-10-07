import type { Metadata } from "next";
import Image from "next/image";
import { JohwaxNavChrome } from "@/components/JohwaxNavChrome";
import { JohwaxSequencePage } from "@/components/JohwaxSequencePage";
import { JOHWAX_HERO } from "@/data/johwaxHero";
import { JOHWAX_15_SCANS } from "@/data/johwax15Scans";
import seqStyles from "@/styles/johwaxSequencePage.module.css";

export const metadata: Metadata = {
  title: "to be alive! — Johnson Wax — nywf64.com",
  description:
    "Film stills from Johnson Wax’s “to be alive!” — 1964/1965 New York World’s Fair on nywf64.com.",
};

/** Film stills stitched from legacy tile strips into single composites. */
export default function Johwax15Page() {
  return (
    <JohwaxSequencePage
      heroLabel="Johnson Wax Pavilion"
      titleId="johwax15-title"
      title={<em>to be alive!</em>}
      hero={JOHWAX_HERO}
      nav={<JohwaxNavChrome />}
      previousHref="/johwax14"
      overviewHref="/johwaxoverview"
      nextHref="/johwax16"
      columns={1}
      scans={[...JOHWAX_15_SCANS]}
      intro={
        <div className={seqStyles.introRow}>
          <Image
            src="/images/johwax15/johwax35.jpg"
            alt=""
            width={250}
            height={378}
            className={seqStyles.introPortrait}
            unoptimized
          />
          <div className={seqStyles.introCopy}>
            <p>
              More than five million people stood and waited, sometimes in the
              pouring rain, sometimes for as long as two hours. Many of these
              returned to stand in line again and again. &quot;to be alive!&quot;
              was universally acclaimed as the outstanding attraction at the New
              York World&apos;s Fair.
            </p>
            <p>
              The directors, Francis Thompson and Alexander Hammid, had succeeded
              in capturing the essence of life&apos;s magnificent simplicity - a
              leaf falls, a child laughs - and vividly conveying it to the
              viewer, creating through lyrical images a sense of joy, a feeling of
              great exhilaration. And a sense of sharing - the audience is caught
              up in the sensual experience of seeing, transcending all barriers of
              language, race, geography. What does the audience see? That the
              miracle of a spider web, the ecstasy of speed, the rapturous excess
              of a wedding feast are always truly wonderful, wherever, whenever
              they happen.
            </p>
          </div>
        </div>
      }
    />
  );
}

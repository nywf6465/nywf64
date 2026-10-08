import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { WfpavNavChrome } from "@/components/WfpavNavChrome";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — World's Fair Pavilion — nywf64.com",
  description:
    "World's Fair Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Pavilion Information Manual page.
 * Body from legacy wfpav02.html. Layout: InformationManualPage (/bell02).
 */
export default function Wfpav02Page() {
  return (
    <InformationManualPage
      heroLabel="World's Fair Pavilion"
      titleId="wfpav02-title"
      hero={{
        src: "/images/wfpavoverview/hero-banner.jpg",
        alt: "World's Fair Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfpavNavChrome />}
      previousHref="/wfpav01"
      overviewHref="/wfpavoverview"
      nextHref="/wfpav03"
      factsLeft={[
        {
          label: "WORLD'S FAIR ASSEMBLY AREA",
          lines: ["The Pavilion"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Walter Giebelhaus",
            "Program Manager",
            "New York World's Fair 1964-1965 Corp.",
            "Flushing Meadow Park",
            "Flushing, New York, 11380",
            "WF 4-2313",
          ],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "RENTAL CHARGE",
          lines: ["Information upon request"],
        },
        {
          label: "CONTRACTOR",
          lines: ["James King and Son, Inc."],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 18; Lot 8", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["80,506 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Eggers and Higgins",
            "100 East 42nd Street",
            "New York 17, New York",
            "OX 7-3780",
          ],
        },
        {
          label: "GEODESIC DOME",
          lines: [
            "Synergetics, incorporated",
            "226 Hillsboro Street",
            "Raleigh, North Carolina",
            "919 833-3841",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/wfpav02/chucen03.jpg",
        width: 600,
        height: 249,
        alt: "The World's Fair Pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Pavilion is a covered, louver-sided, geodesic domed structure
              containing 2,100 seats. It has a convex stage area 51 feet by 84
              feet with a playing area 40 feet by 40 feet. Dressing rooms are
              provided for approximately 200 people.
            </>
          ),
        },
        {
          body: (
            <>
              The Pavilion is equipped with a public address system and
              sufficient stage lighting for color TV and theatrical type
              performances.
            </>
          ),
        },
        {
          body: (
            <>
              Facilities for larger roups are availalbe in the Singer Bowl.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/wfpav02/chucen02.jpg",
        width: 600,
        height: 341,
        alt: "The World's Fair Pavilion",
        bordered: true,
        title: "The World's Fair Pavilion",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <i>For Those Who Produced the New York World&apos;s Fair 1964-1965</i>
          </>
        ),
      }}
    />
  );
}

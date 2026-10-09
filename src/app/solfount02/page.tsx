import type { Metadata } from "next";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Solar Fountain — nywf64.com",
  description:
    "Solar Fountain entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Solar Fountain Information Manual page — “manual” standard.
 * Body from legacy solfount02.html. Layout: InformationManualPage (/bell02).
 */
export default function Solfount02Page() {
  return (
    <InformationManualPage
      heroLabel="Solar Fountain"
      titleId="solfount02-title"
      hero={{
        src: "/images/solfountoverview/hero-banner.jpg",
        alt: "Solar Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SolfountNavChrome />}
      previousHref="/solfount01"
      overviewHref="/solfountoverview"
      nextHref="/solfount03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Solar Fountain"],
        },
        {
          label: "CONSULTANTS",
          lines: [
            "Hamel and Langer",
            "652 First Avenue",
            "New York, New York 10016",
            "OR 9-9140",
          ],
        },
        {
          label: "CONTRACTORS",
          lines: [
            "Julius Auserehl &\u00a0Son - General",
            "Metropolitan Electric Construction Comapny - Electrical",
            "J. L. Murphy - Mechanical",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Avenue of Europe, south of Promenade"],
        },
        {
          label: "AREA",
          lines: ["Pool basin 120 feet in diameter"],
        },
        {
          label: "DESIGNERS",
          lines: ["J. S. Hamel", "Gilmore D. Clarke", "Donald Oenslager"],
        },
      ]}
      primaryFigure={{
        src: "/images/solfount02/fount18.jpg",
        width: 600,
        height: 265,
        alt: "Solar Fountain",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The central dome, 30 feet in diameter, has colored-light ports
              illuminated from the interior, and supports a column of water, 30
              feet high, with 30 nozzles on a 4 foot diameter circle. Above the
              central column, a star burst 6 feet in diameter circles around the
              dome, wobbling jets of water simulate the sun&apos;s flaming
              gasses. The whole composition typifies the beauty and agitation at
              the center of our solar system.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/solfount02/fount104.jpg",
        width: 600,
        height: 360,
        alt: "Solar Fountain",
        bordered: true,
        title: "Solar Fountain",
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>
              For Those Who Produced the New York World&apos;s Fair 1964-1965
            </em>
          </>
        ),
      }}
    />
  );
}

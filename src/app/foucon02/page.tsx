import type { Metadata } from "next";
import { FouconNavChrome } from "@/components/FouconNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Fountain of the Continents — nywf64.com",
  description:
    "Fountain of the Continents entry from the Operations Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of the Continents Information Manual page — “manual” standard.
 * Body from legacy foucon02.html. Layout: InformationManualPage (/bell02).
 */
export default function Foucon02Page() {
  return (
    <InformationManualPage
      heroLabel="Fountain of the Continents"
      titleId="foucon02-title"
      hero={{
        src: "/images/fouconoverview/hero-banner.jpg",
        alt: "Fountain of the Continents at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FouconNavChrome />}
      previousHref="/foucon01"
      overviewHref="/fouconoverview"
      nextHref="/foucon03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Fountain of the Continents"],
        },
        {
          label: "CONSULTANTS",
          lines: [
            "Hamel and Langer",
            "652 First Avenue",
            "New York 16, New York",
            "OR9-9140",
            "and",
            "Clarke and Rapuano, Inc.",
            "830 Third Avenue",
            "New York 22, New York",
            "PL4-1030",
          ],
        },
        {
          label: "CONTRACTORS",
          lines: [
            "D. Fortunato, Inc.-General",
            "Hatzel & Buehler-Electrical",
            "T.F. Mulligan-Mechanical",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Theme Center, under Unisphere,",
            "main axis south end of promenade",
          ],
        },
        {
          label: "AREA",
          lines: ["Diameter of Pool Basin - 300 feet"],
        },
      ]}
      primaryFigure={{
        src: "/images/foucon02/fount01.gif",
        width: 460,
        height: 185,
        alt: "Line Drawing",
      }}
      features={[
        {
          body: (
            <>
              The Fountain surrounding the Unisphere features a double ring of
              water jets, projecting vertical streams of water from 8 to 40 feet
              in height, simulating an advancing wave action. The globe seemingly
              floats in space, on a number of water sprays. The rising and
              falling motion of the advancing wave pattern suggests a rotation of
              the Unisphere. There are 96 streams in all, propelled by motors
              totalling 400 horsepower, delivering over 15,000 gallons of water
              per minute. A modified form of this fountain will be retained for
              the post-fair park.
            </>
          ),
        },
      ]}
      featuresSource="Source: Operations Manual - New York World's Fair 1964-1965 Corporation"
    />
  );
}

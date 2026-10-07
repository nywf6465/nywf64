import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { SprogfountNavChrome } from "@/components/SprogfountNavChrome";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Fountain of Progress South — nywf64.com",
  description:
    "Fountain of Progress South entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress South Information Manual page — “manual” standard.
 * Body from legacy sprogfount02.html. Layout: InformationManualPage (/bell02).
 * Preserve legacy comma after Progress-South in FEATURES.
 */
export default function Sprogfount02Page() {
  return (
    <InformationManualPage
      heroLabel="Fountain of Progress South"
      titleId="sprogfount02-title"
      hero={{
        src: "/images/sprogfountoverview/hero-banner.jpg",
        alt: "Fountain of Progress South at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SprogfountNavChrome />}
      previousHref="/sprogfount01"
      overviewHref="/sprogfountoverview"
      nextHref="/sprogfount03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Fountain of Progress-South"],
        },
        {
          label: "CONSULTANTS",
          lines: [
            "Clarke & Rapuano, Inc.",
            "830 Third Avenue",
            "New York 22, New York",
            "PL 4-1030",
            "and",
            "Hamel and Langer",
            "652 First Avenue",
            "New York 16, New York",
            "OR 9-9140",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Transportation Area, south of center"],
        },
        {
          label: "AREA",
          lines: ["Diameter of pool basin-80 feet"],
        },
        {
          label: "CONTRACTORS",
          lines: [
            "Julius Auserehl & Sons-General",
            "Metropolitan Electrical Construction Co. -Electrical",
            "J. L. Murphy-Mechanical",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/sprogfount02/fount02.jpg",
        width: 600,
        height: 196,
        alt: "Fountain of Progress South",
      }}
      features={[
        {
          body: (
            <>
              The Fountain of Progress-South, displays a five-point star layout
              of jets, with a sunken basin in the center and a series of
              parabolic streams in the outer area. The seemingly boiling and
              bubbling water in the center rises and falls in a cascading action
              over the sides of the stepped structure, while the outer parabolic
              jets vary in crown of elevation from 5 to 16 feet in height with a
              horizontal throw of from 15 to 27 feet. Two motor driven pumps keep
              2,600 gallons of water in circulation every minute to create this
              delightful effect.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
    />
  );
}

import type { Metadata } from "next";
import { InformationManualPage } from "@/components/InformationManualPage";
import { NprogfountNavChrome } from "@/components/NprogfountNavChrome";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Fountain of Progress North — nywf64.com",
  description:
    "Fountain of Progress North entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress North Information Manual page — “manual” standard.
 * Body from legacy nprogfount02.html. Layout: InformationManualPage (/bell02).
 */
export default function Nprogfount02Page() {
  return (
    <InformationManualPage
      heroLabel="Fountain of Progress North"
      titleId="nprogfount02-title"
      hero={{
        src: "/images/nprogfountoverview/hero-banner.jpg",
        alt: "Fountain of Progress North at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<NprogfountNavChrome />}
      previousHref="/nprogfount01"
      overviewHref="/nprogfountoverview"
      nextHref="/nprogfount03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Fountain of Progress-North"],
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
          lines: ["Transportation Area, north of center"],
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
        src: "/images/nprogfount02/fount16.jpg",
        width: 600,
        height: 156,
        alt: "Fountain of Progress North",
      }}
      features={[
        {
          body: (
            <>
              The Fountain of Progress-North has a spiral layout of a series of
              jets featuring a changing and exciting trajectory cycle. Starting
              with a flat projection, the streams gradually rise in an advancing
              sequence, with the crown of the jet stream increasing from 2 to 16
              feet in height. As the distance of the trajectory decreases, the
              action finally brings the central jet to a vertical position. The
              full effect remains set for a short period of time, then the
              process begins again but in reverse, until the streams return to
              their original flat projection. After a time lapse, the cycle is
              repeated. Two pumps, driven by 40-horsepower motors, deliver over
              4,600 gallons of water per minute to produce this most unusual
              effect.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
    />
  );
}

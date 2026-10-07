import type { Metadata } from "next";
import { FoucaultNavChrome } from "@/components/FoucaultNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Fountains of the Fairs — nywf64.com",
  description:
    "Fountains of the Fairs entry from the Operations Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountains of the Fairs Information Manual page — “manual” standard.
 * Body from legacy foufai02.html. Layout: InformationManualPage (/bell02).
 */
export default function Foufai02Page() {
  return (
    <InformationManualPage
      heroLabel="Fountains of the Fairs"
      titleId="foufai02-title"
      hero={{
        src: "/images/foufaioverview/hero-banner.jpg",
        alt: "Fountains of the Fairs at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FoucaultNavChrome />}
      previousHref="/foufai01"
      overviewHref="/foufaioverview"
      nextHref="/foufai03"
      factsLeft={[
        {
          label: "FOUNTAIN",
          lines: ["Fountains of the Fairs"],
        },
        {
          label: "CONSULTANTS",
          lines: [
            "Clarke and Rapuano, Inc.",
            "830 Third Avenue",
            "New York 22, New York",
            "PL4-1030",
            "and",
            "Hamel and Langer",
            "652 First Avenue",
            "New York 16, New York",
            "OR9-9140",
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
          lines: ["On Main Promenade along", "major axis"],
        },
        {
          label: "AREA",
          lines: [
            "East Pond: 366 feet by",
            "100 feet",
            "West Pond: 225 feet by",
            "65 feet",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/foufai02/fount13.gif",
        width: 397,
        height: 197,
        alt: "Line Drawing",
      }}
      features={[
        {
          body: (
            <>
              The Fountain of the Fairs encompasses both East and West ponds. It
              has a row of arching water jets on each side, directed inward
              toward the center of the pool. Except for modifications in the
              hydraulic system, they will remain as a permanent park feature
              after the Fair. There is a total of 52 jet streams, which
              discharge approximately 7,200 gallons of water per minute.
              Underwater lights in the splash shields illuminate the jets. The
              arrangement provides a beautiful and interesting feature of the
              promenade.
            </>
          ),
        },
      ]}
      featuresSource="Source: Operations Manual - New York World's Fair 1964-1965 Corporation"
    />
  );
}

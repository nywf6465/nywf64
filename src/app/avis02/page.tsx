import type { Metadata } from "next";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Avis Antique Car Ride — nywf64.com",
  description:
    "Avis Antique Car Ride entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Avis Antique Car Ride Information Manual page — “manual” standard.
 * Body from legacy avis02.html (no photograph; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 */
export default function Avis02Page() {
  return (
    <InformationManualPage
      heroLabel="Avis Antique Car Ride"
      titleId="avis02-title"
      hero={{
        src: "/images/avisoverview/hero-banner.jpg",
        alt: "Avis Antique Car Ride at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AvisNavChrome />}
      previousHref="/avis01"
      overviewHref="/avis01"
      nextHref="/avis03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Antique Auto Ride"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. R. C. Townsend, President",
            "Antique Rent-A-Car, Inc.",
            "Roosevelt Field",
            "Garden City, L. I., New York",
            "516 CH 8-9300",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 27, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Adults .50c", "Children .35c"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 47; Lot 1", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["50,000 sq. ft."],
        },
      ]}
      features={[
        {
          body: (
            <>
              The antique car ride will consist of reproduction three-quarter
              scale antique cars operating on roadways in an attractively designed
              old-fashioned atmosphere. Each custom built vehicle is gasoline
              powered and patron operated. The open touring car body design
              permits seating for a maximum of five persons. It is estimated that
              loading, unloading, and driving time will consume approximately
              three and one-half to four minutes.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
    />
  );
}

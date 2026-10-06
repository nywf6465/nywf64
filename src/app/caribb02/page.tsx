import type { Metadata } from "next";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Caribbean — nywf64.com",
  description:
    "Caribbean Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Caribbean Pavilion Information Manual page — “manual” standard.
 * Body from legacy caribb02.html (no primary photo; SOURCE under FEATURES).
 * Layout: InformationManualPage (/bell02).
 */
export default function Caribb02Page() {
  return (
    <InformationManualPage
      heroLabel="Caribbean"
      titleId="caribb02-title"
      hero={{
        src: "/images/caribboverview/hero-banner.jpg",
        alt: "Caribbean Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CaribbNavChrome />}
      previousHref="/caribb01"
      overviewHref="/caribboverview"
      nextHref="/caribb03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Pavilion of the Caribbean"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Robert C. Wetenhall",
            "310 Madison Avenue",
            "New York 17, N. Y.",
            "TN 7-7373",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 27, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 30; Lot 4", "International Area"],
        },
        {
          label: "AREA",
          lines: ["33,812 sq. ft."],
        },
      ]}
      features={[
        {
          body: (
            <>
              The Pavilion of the Caribbean will include the countries of Haiti,
              The Dominican Republic, Jamaica, Trinidad & Tobago, and the
              islands of Aruba, The Bahamas, Curacao, Puerto Rico, Bermuda,
              Windward Islands, Leeward Islands, French West Indies and British
              Guiana, British West Indies.
            </>
          ),
        },
        {
          body: (
            <>
              All arts, crafts and products displayed will be indigenous of the
              Caribbean Islands.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/caribb02/carrib02.jpg",
        width: 600,
        height: 375,
        alt: "Caribbean Pavilion",
        bordered: true,
        title: "Caribbean Pavilion",
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

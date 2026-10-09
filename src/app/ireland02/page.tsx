import type { Metadata } from "next";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Ireland — nywf64.com",
  description:
    "Ireland pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ireland Information Manual page — “manual” standard.
 * Body from legacy ireland02.html. Layout: InformationManualPage (/bell02).
 * Legacy typo “Goerge Nelson” preserved.
 */
export default function Ireland02Page() {
  return (
    <InformationManualPage
      heroLabel="Ireland"
      titleId="ireland02-title"
      hero={{
        src: "/images/irelandoverview/hero-banner.jpg",
        alt: "Ireland pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IrelandNavChrome />}
      previousHref="/ireland01"
      overviewHref="/irelandoverview"
      nextHref="/ireland03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Ireland"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "The Honorable John O'Brien",
            "Consul General",
            "Consulate General of Ireland",
            "33 East 50 Street",
            "New York 22, N. Y.",
            "EL 5-4000",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 5, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 28; Lot 5", "International Area"],
        },
        {
          label: "AREA",
          lines: ["10,000 sq. ft. + option"],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Andrew Devane",
            "Robinson, Keefe & Devane",
            "22, Lower Baggot Street",
            "Dublin, Ireland",
            "and",
            "Mr. Goerge Nelson",
            "25 East 22 Street",
            "New York 10, N. Y.",
            "SP 7-4300",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["James King & Son, Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/ireland02/ireland03.jpg",
        width: 600,
        height: 195,
        alt: "Ireland pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The pavilion will be enclosed by a 7 1/2 foot wall faced with slabs
              of native Irish stone. Immediately inside will be a small court
              with flowers, vines, and outdoor sculpture. Engravings showing the
              names of Irish-American families and their places of origin will
              cover the entrance walls. In this area visitors will be introduced
              to the historical, cultural, and economic heritage of Ireland. The
              focal point of the display will be a large Celtic cross, a symbol
              of faith and of antiquity.
            </>
          ),
        },
        {
          body: (
            <>
              The economic and cultural evolution of Ireland will be shown in the
              main exhibit area. The literary exhibit includes a presentation of
              the Irish language; Irish music will add to the gay atmosphere of
              the pavilion.
            </>
          ),
        },
        {
          body: (
            <>
              From the main exhibit visitors can go to a cool garden to enjoy
              refreshments at tables of Irish marble. At one end of the garden is
              a small stage where occasional performances will be given.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/ireland02/ireland04.jpg",
        width: 600,
        height: 352,
        alt: "Ireland",
        bordered: true,
        title: "Ireland",
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

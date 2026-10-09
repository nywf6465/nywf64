import type { Metadata } from "next";
import { SkfNavChrome } from "@/components/SkfNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — SKF — nywf64.com",
  description:
    "SKF pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * SKF Information Manual page — “manual” standard.
 * Body from legacy skf02.html. Layout: InformationManualPage (/bell02).
 */
export default function Skf02Page() {
  return (
    <InformationManualPage
      heroLabel="SKF"
      titleId="skf02-title"
      hero={{
        src: "/images/skfoverview/hero-banner.jpg",
        alt: "SKF pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SkfNavChrome />}
      previousHref="/skf01"
      overviewHref="/skfoverview"
      nextHref="/skf03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["SKF Industries, Inc."],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. F. White",
            "SKF Industries, Inc.",
            "Front Street and Erie Avenue",
            "P. O. Box 6731",
            "Philadelphia 32, Pennsylvania",
            "215 GA 6-6400",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["July 30, 1962"],
        },
        {
          label: "CONTRACTOR",
          lines: ["Brown & Matthews, Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 47; Lot 4", "Transportation Area"],
        },
        {
          label: "AREA",
          lines: ["7,770 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Francis A. Pisani",
            "Pisani & Carlos",
            "501 Fifth Avenue",
            "New York 17, New York",
            "MU 7-5499",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Displayers, Incorporated",
            "635 West 54th Street",
            "New York 19, New York",
            "PL 7-6500",
          ],
        },
      ]}
      primaryFigure={{
        src: "/images/skf02/skf32.jpg",
        width: 600,
        height: 579,
        alt: "SKF Industries, Inc.",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      secondaryFigure={{
        src: "/images/skf02/skf33.jpg",
        width: 600,
        height: 388,
        alt: "SKF Industries, Inc.",
        source:
          "Source: NY World's Fair Publication For Those Who Produced the New York World's Fair 1964-1965",
      }}
      features={[
        {
          body: (
            <>
              SKF Industries, Inc. a leading manufacturer of ball and roller
              bearings for home, transportation, industry and defense, with
              offices in Philadelphia and other cities, will construct a unique
              theatre and display besed on the company&apos;s theme -- &quot;Motion
              Engineering&quot;.
            </>
          ),
        },
        {
          body: (
            <>
              The presentation will emphasize man&apos;s achievements in the
              field of &quot;Motion Engineering&quot;, and will involve the use
              of advanced and exciting presentation techniques.
            </>
          ),
        },
      ]}
    />
  );
}

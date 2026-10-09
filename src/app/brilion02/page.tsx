import type { Metadata } from "next";
import { BrilionNavChrome } from "@/components/BrilionNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — British Lion Pub — nywf64.com",
  description:
    "British Lion Pub entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * British Lion Pub Information Manual page — “manual” standard.
 * Body from legacy brilion02.html. Layout: InformationManualPage (/bell02).
 */
export default function Brilion02Page() {
  return (
    <InformationManualPage
      heroLabel="British Lion Pub"
      titleId="brilion02-title"
      hero={{
        src: "/images/brilionoverview/hero-banner.jpg",
        alt: "British Lion Pub at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<BrilionNavChrome />}
      previousHref="/brilion01"
      overviewHref="/brilion01"
      nextHref="/brilion03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["British Lion Pub"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mrs. J.C. van Boythan, President",
            "British Products and Exhibits, Ltd.",
            "667 Madison Avenue, Suite 700",
            "New York 21, New York",
            "TE 8-5480",
            "and",
            "Mr. William Miles, Vice-President",
            "Exhibit Manager",
            "British Lion Pub",
            "New York World's Fair",
            "World's Fair, New York 11380",
            "AR 1-6050",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. Douglas Beaton"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["May 7, 1964"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 21; Lot 31", "Avenue of Europe", "International Area"],
        },
        {
          label: "AREA",
          lines: ["13,618 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Ira Kessler and Associates",
            "25 West 43rd Street",
            "New York 36, New York",
            "WI 7-0787",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Mary Buckley Associates",
            "Harding Court",
            "Huntington, L.I., New York",
            "516 HA 7-3622",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Hegeman-Harris Company, Inc."],
        },
      ]}
      primaryFigure={{
        src: "/images/brilion02/line-drawing.jpg",
        width: 600,
        height: 244,
        alt: "British Lion Pub line drawing",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The British Lion Pub is a careful reproduction of the popular
              British half-timbered gable roofed Tudor Inn. Inside, the dining
              room offers a substantial British and American menu at moderate
              prices. The walls of the dining room are lined with attractively
              displayed products of the British Isles and the bar in an adjoining
              room is stocked with the customary American beverages as well as
              British beers and ales. The atmosphere is traditional, comfortable
              and English down to the heavy oak bar and the dart board. Outside
              is a large terrace with gaily colored umbrellas, tables and chairs
              for eating from the reasonably priced outdoor food and counter bar.
              Also an English shop with quality imported souvenirs is on the
              grounds.
            </>
          ),
        },
      ]}
    />
  );
}

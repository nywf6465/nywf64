import type { Metadata } from "next";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Seven-Up — nywf64.com",
  description:
    "Seven-Up pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up Information Manual page — “manual” standard.
 * Body from legacy sevup02.html. Layout: InformationManualPage (/bell02).
 */
export default function Sevup02Page() {
  return (
    <InformationManualPage
      heroLabel="Seven-Up"
      titleId="sevup02-title"
      hero={{
        src: "/images/sevupoverview/hero-banner.jpg",
        alt: "Seven-Up at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SevupNavChrome />}
      previousHref="/sevup01"
      overviewHref="/sevupoverview"
      nextHref="/sevup03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Seven-Up Company, The"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. John C. Furnas",
            "Seven-Up New York World's Fair",
            "Associates",
            "33 East 48th Street",
            "New York 17, New York",
            "MU 6-7000",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 12, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 17; Lot 3", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["45,088 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Becker and Becker Assocs.",
            "375 Park Avenue",
            "New York 22, New York",
            "PL 9-1678",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Thatcher Construction Co."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/sevup02/sevup48.jpg",
        width: 600,
        height: 499,
        alt: "Seven-Up pavilion line drawing",
        source: "SOURCE: World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Seven-Up Pavilion will serve as an oasis of international
              sandwiches and entertainment. The exhibit will emphasize the global
              scope of 7-Up and will be a tribute to all who play a part in making
              the 7-Up trademark an international symbol.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The Pavilion area is sheltered by 24 brightly patterned canopies
              made of acrylic polyester resin reinforced by fiberglas. The shells
              are supported at the outer edge by curved steel angle frames. Each
              shell covers an area of 25 square feet. Four of these shells will
              contain elaborate 7-Up exhibits and 20 will be dining areas.
              Redwood decks form the flooring of all dining areas. The center
              building, with promenade deck, is constructed on a steel frame with
              cement insulated &quot;sandwich&quot; exterior paneling. The second
              level is walled with tinted glass from floor to ceiling. The decor
              features combinations of the Seven-Up Company red and green motif
              combined with the New York World&apos;s Fair white.
            </>
          ),
        },
        {
          body: (
            <>
              A distinctive tower topped by a four-faced clock reaches a height
              of 107 feet in the center of the exhibit. Beneath the clock, the
              sphere bearing the 7-Up emblem is 21 feet in diameter.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              A public dining area comprises a major portion of the Pavilion.
              International sandwiches from all over the world will be served,
              prepared according to authentic recipes by the Brass Rail. The
              tables accommodating three, four and five persons have a seating
              capacity of 640. As visitors sip 7-Up, continuous entertainment
              will be presented from four circular stages throughout the
              Pavilion. The stages, 15 feet in diameter, are embodied in fountain
              pools. When the fountains are turned off. the platform stages become
              ready for the performer. The continuous acts -- musical, dancing
              and comedy -- will be programmed under the supervision of John
              Krimsky. The entertainment will be international in nature,
              featuring the music, song and dance specialities of many lands.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/sevup02/sevup49.jpg",
        width: 600,
        height: 350,
        alt: "7-Up International Sandwich Gardens",
        title: "7-Up International Sandwich Gardens",
        bordered: true,
        source: (
          <>
            Source: NY World&apos;s Fair Publication{" "}
            <em>For Those Who Produced the New York World&apos;s Fair 1964-1965</em>
          </>
        ),
      }}
    />
  );
}

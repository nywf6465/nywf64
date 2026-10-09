import type { Metadata } from "next";
import { JulfarNavChrome } from "@/components/JulfarNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Julimar Farm — nywf64.com",
  description:
    "Julimar Farm entry from the 1965 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Julimar Farm Information Manual page — “manual” standard.
 * Body from legacy julfar02.html. Layout: InformationManualPage (/bell02).
 */
export default function Julfar02Page() {
  return (
    <InformationManualPage
      heroLabel="Julimar Farm"
      titleId="julfar02-title"
      hero={{
        src: "/images/julfaroverview/hero-banner.jpg",
        alt: "Julimar Farm at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JulfarNavChrome />}
      previousHref="/julfar01"
      overviewHref="/julfaroverview"
      nextHref="/julfar03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Julimar Farm"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Terry Lynch",
            "Julimar Farm",
            "New York World's Fair",
            "World's Fair, New York  11380",
            "AR 1-6230",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["November 6, 1963"],
        },
        {
          label: "ADMISSION",
          lines: ["Garden...60c Adults", "..............25c Children"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: [
            "Block 12; Lot 7",
            "Avenue of Progress",
            "Industrial Area",
          ],
        },
        {
          label: "AREA",
          lines: ["33.737 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Edward Durell Stone, Sr.",
            "7 East 67th Street",
            "New York 21, New York",
            "LE5-1144",
          ],
        },
        {
          label: "LANDSCAPE ARCHITECT",
          lines: ["Edward Durell Stone, Jr."],
        },
        {
          label: "CONTRACTOR",
          lines: ["Theodore L. Rubsamen"],
        },
      ]}
      primaryFigure={{
        src: "/images/julfar02/julfar03.jpg",
        width: 600,
        height: 318,
        alt: "Julimar Farm",
        source: "SOURCE: 1965 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Julimar Farm pavilion, (a white, airy structure of glass and
              ground-to-roof shutters), designed by Edward Durell Stone, Sr.,
              gives the effect of floating in a bed of glistening gravel. The
              contemporary Southern plantation-style building is surrounded by
              gardens designed by Edward Durell Stone, Jr.
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion is a showcase for the debut of the firm&apos;s line
              of gourmet foods, &quot;bread&apos;n butter gifts,&quot; and
              &quot;packaged gardens.&quot; These products include
              &quot;Tiki&quot; Hawaiian instant coffee; Hawaiian pineapple,
              Marshall strawberry and apricot jam; various spiced jellies; and
              such items as Swedish pancake mix, wild-rice pancake mix, and Rik
              Rak and Almond &apos;Oro (almond and popcorn candy and English
              toffee).
            </>
          ),
        },
        {
          body: (
            <>
              The pavilion proper is surrounded by a deck which permits visitors
              to view all the gardens and decide where to begin the trip through
              the gardens.
            </>
          ),
        },
        {
          body: (
            <>
              The exhibit has a series of six separate gardens in the general
              scheme.
            </>
          ),
        },
        {
          body: (
            <>
              The Herb Garden, featuring a Georgetown motif, is designed so that
              the blind may touch and scent such fine herbs and spices as thyme,
              sage, garlic, basil and parsley.
            </>
          ),
        },
        {
          body: (
            <>
              The oval English Garden has a broad expanse of lawn and is
              surrounded by perennials, shrubs and trees. it features a pool and
              an exotic bird house.
            </>
          ),
        },
        {
          body: (
            <>
              The Renaissance Garden highlights a clipped evergreen hedge and
              formally laid out garden paths, pools, fountains, trees and shrubs
              in ornamental shapes, with beds of marble chips edged with boxwood.
            </>
          ),
        },
        {
          body: (
            <>
              A flagstone path leads to the Penthouse and landscaped terrace.
              Beyond is a 3/4 scale farm with barn, yard and a pair of matched
              live 32 inch high miniature horses.
            </>
          ),
        },
        {
          body: (
            <>
              A crystal stream flows through the entire exhibit. At one point it
              leads to a Japanese teahouse with Japanese sculpture, bonsai and
              flowering shrubs set among boulders, as well as a Japanese formal
              garden of stone.
            </>
          ),
        },
        {
          body: (
            <>
              In the Polynesian area of the exhibit, the stream becomes a
              waterfall where flowering plants and large tropical trees are
              featured.
            </>
          ),
        },
        {
          body: (
            <>
              More than 100 trees and 80,000 plants grow in the exhibit.
            </>
          ),
        },
      ]}
    />
  );
}

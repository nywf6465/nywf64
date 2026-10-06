import type { Metadata } from "next";
import { FloridaNavChrome } from "@/components/FloridaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Florida — nywf64.com",
  description:
    "Florida Pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Florida Information Manual page.
 * Body from legacy florida02.html. Layout: InformationManualPage (/bell02).
 * Preserve typos: Exeuctive, pursuites, spectaular, wil.
 */
export default function Florida02Page() {
  return (
    <InformationManualPage
      heroLabel="Florida"
      titleId="florida02-title"
      hero={{
        src: "/images/floridaoverview/hero-banner.jpg",
        alt: "Florida Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FloridaNavChrome />}
      previousHref="/florida01"
      overviewHref="/floridaoverview"
      nextHref="/florida03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Florida, State of"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Comer Kimball, President",
            "and",
            "Mr. William Stensgaard, Exeuctive Dir.",
            "Florida World's Fair Authority",
            "307 Poincianna Plaza",
            "Palm Beach, Florida",
            "305 833-3886",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Jack Waugh",
            "Hank Meyer Associates, Inc.",
            "609 Fifth Avenue",
            "New York, New York",
            "EL 5-2740",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 15, 1962"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
        {
          label: "PORPOISE SHOW",
          lines: [
            "Adults . . . . $2.00",
            "Children. . . $1.00",
            "(under 12)",
          ],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 59; Lot 1", "Lake Amusement Area"],
        },
        {
          label: "AREA",
          lines: ["116,146 sq. ft."],
        },
        {
          label: "ARCHITECTS",
          lines: [
            "Mr. Edward Grafton",
            "Pancoast, Ferendino, Skeels,",
            "Grafton and Burnham",
            "25-75 South Bayshore Drive",
            "Miami 33, Florida",
            "305 HI 4-6518",
            "and",
            "Connell, Pierce, Garland,",
            "and Friedman",
            "315 NW 27th Avenue",
            "Miami, Florida",
            "305 NE 5-0606",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["George A. Fuller"],
        },
      ]}
      primaryFigure={{
        src: "/images/florida02/florid07.jpg",
        width: 600,
        height: 261,
        alt: "Florida Pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Florida Pavilion, situated on Meadow Lake, will be a complex
              of buildings to show Florida&apos;s history, current and future
              potential for living, vacationing, industrial development and
              cultural pursuites. A one hundred-ten foot citrus tower, a
              spectaular porpoise show, two model Florida homes and a large
              exhibit hall will be featured. The entire area will be landscaped
              with semi-tropical vegetation, pools and fountains simulating
              Florida living.
            </>
          ),
        },
        {
          body: (
            <>
              The 110 foot citrus Tower topped with a giant orange which lights
              up at night, will be the landmark of the Florida exhibit. Near the
              top of the tower, a sign, 24 feet long and 3 feet wide, will spell
              out Florida on each side. The circular building, 50 feet in
              diameter at the base of the tower will be occupied by the Minute
              Maid Company.
            </>
          ),
        },
        {
          body: (
            <>
              A beautiful 250 foot long bridge called &quot;Bridge to the
              Keys&quot; will lead to the two model retirement homes. These
              homes will be furnished and set in a Florida landscape of grass,
              shrubs, palm and citrus trees.
            </>
          ),
        },
        {
          body: (
            <>
              Florida will also present the first live porpoise show ever seen
              at any international exposition. Ten shows will be given daily in
              a 1,600 seat theatre.
            </>
          ),
        },
        {
          body: (
            <>
              Wellman-Lord Engineering will have several scale models of
              phosphate chemical plants to demonstrate the chemical process and
              show how raw materials are produced and the finished product
              obtained.
            </>
          ),
        },
        {
          body: <>Patricia Murphy wil have a gift shop in the exhibit.</>,
        },
      ]}
      secondaryFigure={{
        src: "/images/florida02/florid06.jpg",
        width: 600,
        height: 355,
        alt: "State of Florida - Amphitheatre",
        bordered: true,
        title: "State of Florida - Amphitheatre",
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

import type { Metadata } from "next";
import { RusortNavChrome } from "@/components/RusortNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title:
    "World's Fair Information Manual — Russian Orthodox Greek-Catholic Church of America — nywf64.com",
  description:
    "Russian Orthodox Greek-Catholic Church of America pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Russian Orthodox Information Manual page — “manual” standard.
 * Body from legacy rusort02.html. Layout: InformationManualPage (/bell02).
 */
export default function Rusort02Page() {
  return (
    <InformationManualPage
      heroLabel="Russian Orthodox Greek-Catholic Church of America"
      titleId="rusort02-title"
      hero={{
        src: "/images/rusortoverview/hero-banner.jpg",
        alt: "Russian Orthodox Greek-Catholic Church of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<RusortNavChrome />}
      previousHref="/rusort01"
      overviewHref="/rusortoverview"
      nextHref="/rusort03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Russian Orthodox Exhibit"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. John Hennessy",
            "Russian Orthodox Greek-Catholic Church of America, Inc.",
            "2040 Anza Street",
            "San Francisco 18, California",
            "415 YU 2-2689",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Mr. William Ottley"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["September 19, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 7; Lot 6", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["15,591 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Vogel and Strunk",
            "101 Park Avenue",
            "New York, New York",
            "MU 5-0285",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Robert Glenn, Inc."],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/rusort02/line-drawing.jpg",
        width: 600,
        height: 371,
        alt: "Russian Orthodox Church Exhibit line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Russian Orthodox Church Exhibit is a replica of the Fort Ross,
              California Chapel, which was the first Russian Orthodox Church in
              the United States and the original of which is now a California
              Historical monument.
            </>
          ),
        },
        {
          body: (
            <>
              Within this building is the &quot;Holy Ikon of the Virgin of
              Kazan&quot; described by church authorities as follows:
              &quot;A revered portrait, painted in Kazan, Russia about 1400
              A.D., 11 inches by 13 inches in size; decorated with 1,009 gems
              valued at $500,000, including six emeralds from King Solomon&apos;s
              Mines; enshrined in 1630 at Kazan Cathedral in Moscow, which was
              specially built to receive it. Except for occasional removals from
              the Cathedral--once it was taken to the battle lines to inspire
              the Czarist troops in the defeat of Napoleon at Moscow--the Ikon
              remained in the Royal Ikonostas until 1917 when, after the
              Bolshevik Revolution, it came into private hands.&quot;
            </>
          ),
        },
        {
          body: (
            <>
              In addition, there is displayed outdoors a cross-section of a giant
              California redwood log showing the history of the world and the
              history of the Holy Ikon worked on its rings.
            </>
          ),
        },
        {
          body: (
            <>
              Another small structure displays and offers for sale religious
              objects and publications of the Russian Orthodox Church.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/rusort02/produced-photo.jpg",
        width: 600,
        height: 358,
        alt: "Russian Orthodox Church Exhibit",
        bordered: true,
        title: "Russian Orthodox Church Exhibit",
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

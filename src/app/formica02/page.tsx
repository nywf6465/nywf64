import type { Metadata } from "next";
import { FormicaNavChrome } from "@/components/FormicaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Formica — nywf64.com",
  description:
    "Formica World's Fair House entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Formica Information Manual page — “manual” standard.
 * Body from legacy formica02.html. Layout: InformationManualPage (/bell02).
 * Preserve legacy typos (Hosue, divisons, 22.700).
 */
export default function Formica02Page() {
  return (
    <InformationManualPage
      heroLabel="Formica"
      titleId="formica02-title"
      hero={{
        src: "/images/formicaoverview/hero-banner.jpg",
        alt: "Formica at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FormicaNavChrome />}
      previousHref="/formica01"
      overviewHref="/formicaoverview"
      nextHref="/formica03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["World's Fair House"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Dr. John F. Nobis",
            "Director of World's Fair Activities",
            "Formica Corporation",
            "4614 Spring Grove Avenue",
            "Cincinnati 32, Ohio",
            "513 541-3670",
          ],
        },
        {
          label: "PROJECT REPRESENTATIVE",
          lines: [
            "Mr. Stuart Whitehead",
            "Formica House",
            "101 West 50th Street",
            "New York 20, New York",
            "956-3151",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Gerald Tierney",
            "Dudley-Anderson-Yutzy",
            "551 Fifth Avenue",
            "New York, N.Y.",
            "MU 2-0071",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 1, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 5; Lot 1", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["22.700 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Emil A. Schmidlin",
            "50 Evergreen Place",
            "East Orange, N.J.",
            "201 OR 2-2800",
          ],
        },
        {
          label: "DESIGNER",
          lines: [
            "Miss Ellis Leigh",
            "c/o Emil A. Schmidlin",
            "50 Evergreen Place",
            "East Orange, N.J.",
            "201 OR 2-2800",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["John W. Ryan"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/formica02/formica71.jpg",
        width: 600,
        height: 277,
        alt: "Formica World's Fair House",
      }}
      features={[
        {
          body: (
            <>
              The Formica Corporation will exhibit a 7-room contemporary house on
              a fully landscaped half-acre plot. &quot;The World&apos;s Fair
              House&quot; will be elevated 15 feet and will bear the address
              64-65 Hilltop Lane.
            </>
          ),
        },
        {
          body: (
            <>
              The Formica World&apos;s Fair House is modern, truly contemporary.
              However, it is not &quot;futuristic&quot;. In contrast to many
              themes and exhibits at the Fair, the Formica World&apos;s Fair
              House will be built to solve today&apos;s housing needs. This
              exhibit will provide the millions who will visit it with scores of
              practical ideas that they can utilize in the solution of their
              immediate housing and decorating problems. The Formica World&apos;s
              Fair Hosue will be the house of today.
            </>
          ),
        },
        {
          body: (
            <>
              A continuous audio-visual &quot;Talking House&quot; tour will
              present typical family life showing that a house is basically a love
              story. The presentation will be entertaining, amusing and
              informative for all ages.
            </>
          ),
        },
        {
          body: (
            <>
              The house itself consists of 2,900 square feet of living space but
              has been divided where the center hall would normally be so as to
              provide an additional 4,000 square feet of public viewing area.
            </>
          ),
        },
        {
          body: (
            <>
              Ramps will run to and from the house to the 6,000 square foot
              street level area below the house where visitors can see details in
              blow-ups of sections of the interior of &quot;The World&apos;s Fair
              House&quot;.
            </>
          ),
        },
        {
          body: (
            <>
              In addition to demonstrating the application of all Formica
              laminated plastic products, the House will serve as a showcase for
              the other Cyanamid consumer products divisions: Building Products,
              Fibers, Organic Chemicals, Plastics, and Resins.
            </>
          ),
        },
        {
          body: (
            <>
              In addition to Formica and the other divisons of the American
              Cyanamid Company participating in the World&apos;s Fair House is
              Good Housekeeping Magazine.
            </>
          ),
        },
      ]}
      featuresSource="SOURCE: 1964 World's Fair Information Manual"
      secondaryFigure={{
        src: "/images/formica02/formica74.jpg",
        width: 600,
        height: 360,
        alt: "Formica Corporation World's Fair House",
        bordered: true,
        title: "Formica Corporation World's Fair House",
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

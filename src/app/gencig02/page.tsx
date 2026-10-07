import type { Metadata } from "next";
import { GencigNavChrome } from "@/components/GencigNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — General Cigar — nywf64.com",
  description:
    "General Cigar pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Cigar Information Manual page — “manual” standard.
 * Body from legacy gencig02.html. Layout: InformationManualPage (/bell02).
 * Preserve legacy typos (entertainmnent, prduced, Farlie, Lillenfield).
 */
export default function Gencig02Page() {
  return (
    <InformationManualPage
      heroLabel="General Cigar"
      titleId="gencig02-title"
      hero={{
        src: "/images/gencigoverview/hero-banner.jpg",
        alt: "General Cigar at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GencigNavChrome />}
      previousHref="/gencig01"
      overviewHref="/gencigoverview"
      nextHref="/gencig03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["General Cigar Company, Inc."],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Edward Lillenfield",
            "Director, World's Fair Exhibit",
            "General Cigar Company, Inc.",
            "485 Lexington Avenue",
            "New York 36, New York",
            "MU 7-7575",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Dale Olmstead",
            "Publicity Consultants",
            "247 Park Avenue",
            "New York 17, New York",
            "YU 6-5400",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["October 23, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 18; Lot 5", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["15,023 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Cecil A. Alexander",
            "760 Farlie Avenue",
            "Atlanta, Georgia",
            "404 MU 8-3313",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Turner Construction Company"],
        },
      ]}
      primaryFigure={{
        src: "/images/gencig02/gencig37.jpg",
        width: 600,
        height: 280,
        alt: "General Cigar pavilion — World's Fair Information Manual",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The General Cigar exhibit will be surrounded by a generously
              landscaped area which includes a garden and patio with benches.
              These features, combined with the classic simplicity of the
              pavilion architecture will offer visitors a serene and peaceful
              spot to rest.
            </>
          ),
        },
        {
          label: "Exterior",
          body: (
            <>
              The completely air-conditioned building includes a theatre,
              International Bazaar, and extensive display area. The walls of the
              pavilion, except for the theatre section will be entirely of glass.
            </>
          ),
        },
        {
          label: "Interior",
          body: (
            <>
              The theatre entertainmnent, geared for adults and children will be
              prduced by Gordon Auchincloss and Magical Productions. This will be
              a magical show -- part live, part mechanical. Actors will talk to
              animated figures, on a motion picture screen, who will seemingly
              walk out of the screen and become alive.
            </>
          ),
        },
        {
          body: (
            <>
              The display area will tell the story of the growth and stature of
              the cigar industry.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/gencig02/gencig36.jpg",
        width: 600,
        height: 362,
        alt: "General Cigar Company pavilion drawing",
        bordered: true,
        title: "General Cigar Company",
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

import type { Metadata } from "next";
import { ChucanNavChrome } from "@/components/ChucanNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Chunky Candy — nywf64.com",
  description:
    "Chunky Candy pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Chunky Candy Information Manual page — “manual” standard.
 * Body from legacy chucan02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (New york, comnposed, puchased, Cunky) preserved.
 */
export default function Chucan02Page() {
  return (
    <InformationManualPage
      heroLabel="Chunky Candy"
      titleId="chucan02-title"
      hero={{
        src: "/images/chucanoverview/hero-banner.jpg",
        alt: "Chunky Candy at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<ChucanNavChrome />}
      previousHref="/chucan01"
      overviewHref="/chucanoverview"
      nextHref="/chucan03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["The Chunky Corporation"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. J. R. Kirk, Exhibit Manager",
            "The Chunky Corporation",
            "655 Dean Street",
            "Brooklyn 38, New York",
            "ST 9-6300",
          ],
        },
        {
          label: "PUBLIC RELATIONS AGENCY",
          lines: [
            "Mr. Gil Coburn",
            "J. Walter Thompson Company",
            "420 Lexington Avenue",
            "New York 17, New york",
            "MU 6-7000",
          ],
        },
        {
          label: "FAIR CONTACT",
          lines: ["Miss Phyllis Adams"],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["August 22, 1963"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 11; Lot 18", "Industrial Area"],
        },
        {
          label: "AREA",
          lines: ["14,745 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Mr. Robert Caigan",
            "400 East 59th Street",
            "New York 22, New york",
            "PL 9-2255",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Chunky Corporation"],
        },
        {
          label: "ADMISSION",
          lines: ["Free"],
        },
      ]}
      primaryFigure={{
        src: "/images/chucan02/line-drawing.jpg",
        width: 600,
        height: 321,
        alt: "Chunky Candy pavilion line drawing",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Chunky exhibit consists of a unique outdoor sculpture
              &quot;Continuum&quot; together with an ultra-modern candy bar
              factory.
            </>
          ),
        },
        {
          body: (
            <>
              Particularly appealing to children, the Continuum playground
              consists of thirteen seemingly unrelated pieces of various sizes and
              shapes. The unique thing about these pieces is that when the fair
              visitor looks through the eye-level apertures in the sculpture, two
              or more of the abstract forms line up to become whole units, such as
              a man standing on his head, a giraffe, an elephant. The pieces range
              in size from two to fourteen feet high, and were carved from large
              plastic blocks which were coated with polished fiberglass.
            </>
          ),
        },
        {
          body: (
            <>
              Candy Factory: Specially built for the Fair, the candy factory is
              comnposed of twin, glass-walled, air-conditioned units connected by
              the first outdoor cooling tunnel ever made. This ingenious tunnel is
              transparent so that the visitor may watch the daily production of
              thousands of Old Nick candy bars. At one end of the line, candy bar
              centers are fed onto the conveyor belt, pass through a cascade of
              milk chocolate and emerge at the other end, wrapped, packaged and
              ready for distribution to the New York area stores the next day.
            </>
          ),
        },
        {
          body: (
            <>
              There is a sales area where candy bars may be puchased for
              on-the-spot refreshment or as gifts to take or send to family and
              friends. There is an Official Candy Taster program wherein children
              may be appointed to this office to receive candy at certain times
              during the year.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/chucan02/produced-photo.jpg",
        width: 600,
        height: 345,
        alt: "The Cunky Corporation",
        bordered: true,
        title: "The Cunky Corporation",
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

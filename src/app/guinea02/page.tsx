import type { Metadata } from "next";
import { GuineaNavChrome } from "@/components/GuineaNavChrome";
import { InformationManualPage } from "@/components/InformationManualPage";

export const metadata: Metadata = {
  title: "World's Fair Information Manual — Guinea — nywf64.com",
  description:
    "Republic of Guinea pavilion entry from the 1964 World's Fair Information Manual — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Guinea Information Manual page — “manual” standard.
 * Body from legacy guinea02.html. Layout: InformationManualPage (/bell02).
 * Legacy wording (“buidling”) preserved.
 */
export default function Guinea02Page() {
  return (
    <InformationManualPage
      heroLabel="Guinea"
      titleId="guinea02-title"
      hero={{
        src: "/images/guineaoverview/hero-banner.jpg",
        alt: "Guinea at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GuineaNavChrome />}
      previousHref="/guinea01"
      overviewHref="/guineaoverview"
      nextHref="/guinea03"
      factsLeft={[
        {
          label: "EXHIBIT",
          lines: ["Guinea, Republic of"],
        },
        {
          label: "AUTHORIZED REPRESENTATIVE",
          lines: [
            "Mr. Roger Soumah",
            "Directeur Commerce Exterieur",
            "Ministere du Commerce",
            "Conakry, Guinea",
            "and",
            "Mr. Abel Camara",
            "Commercial Attache",
            "Embassy of the Republic of Guinea",
            "2112 Leroy Place, N. W.",
            "Washington 8, D. C.",
            "202 HU3-9420",
          ],
        },
        {
          label: "CONTRACT SIGNED",
          lines: ["March 5, 1962"],
        },
      ]}
      factsRight={[
        {
          label: "LOCATION",
          lines: ["Block 23; Lot 9", "International Area"],
        },
        {
          label: "AREA",
          lines: ["25,353 sq. ft."],
        },
        {
          label: "ARCHITECT",
          lines: [
            "Noel & Miller",
            "2 West 45 Street",
            "New York 36, N. Y.",
            "MU 7-4847",
          ],
        },
        {
          label: "CONTRACTOR",
          lines: ["Auserehl & Son Contracting Corp."],
        },
      ]}
      primaryFigure={{
        src: "/images/guinea02/guinea04.jpg",
        width: 600,
        height: 198,
        alt: "Republic of Guinea pavilion",
        source: "SOURCE: 1964 World's Fair Information Manual",
      }}
      features={[
        {
          body: (
            <>
              The Guinea exhibit consists of three separate structures
              surrounded by a moat. The simulated thatched roofing of the
              smaller circular huts represents the traditional type of buildings
              in Guinea. In these huts native craftsmen will work on items that
              may be purchased by the visitors.
            </>
          ),
        },
        {
          body: (
            <>
              There is a restaurant in the main building with a stage in the
              center for performances by members of the famous ballet troupe of
              Guinea. The multi-colored woven straw ceiling in this buidling
              will be similar to the ceiling in the President&apos;s new home in
              Conakry, the nation&apos;s capital.
            </>
          ),
        },
      ]}
      secondaryFigure={{
        src: "/images/guinea02/guinea03.jpg",
        width: 600,
        height: 364,
        alt: "Republic of Guinea",
        bordered: true,
        title: "Republic of Guinea",
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

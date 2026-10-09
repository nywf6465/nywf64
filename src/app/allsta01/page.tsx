import type { Metadata } from "next";
import { AllstaNavChrome } from "@/components/AllstaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — All-State Properties & Macy's — nywf64.com",
  description:
    "All-State Properties & Macy's entries from the 1964 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * All-State Properties & Macy's guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy allsta01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1965 column: exhibit did not reopen (no logo/name entry in legacy).
 */
export default function Allsta01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="All-State Properties & Macy's"
      titleId="allsta01-title"
      hero={{
        src: "/images/allstaoverview/hero-banner.jpg",
        alt: "All-State Properties & Macy's at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AllstaNavChrome />}
      nextHref="/allsta02"
      guide1964={{
        cover: {
          src: "/images/allsta01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/allsta01/allsta-logo-1964.gif",
          width: 144,
          height: 62,
          alt: "",
        },
        name: "ALL-STATE PROPERTIES AND MACY'S",
        copy: (
          <>
            Two ingenious houses, low-cost and compact, are displayed exactly as
            they will be constructed, ready for immediate occupancy, on sites at
            Montauk, Long Island, and near Fort Lauderdale, Florida. Intended as
            either vacation or year-round homes, they are designed for minimum
            housekeeping, and have such space-savers as beds that fold into walls.
            The purchase price includes a 75-by-100 foot lot and all furnishings,
            complete to toothbrushes.
            <br />
            <br />
            ¶ The &quot;Convertible&quot; is sold for $13,490. The house has a
            redwood plywood exterior and mahogany-finished interior paneling. It
            has only 775 square feet of space, yet it sleeps four - two in a
            bedroom above, two on a sofa bed in the living room.
            <br />
            <br />
            ¶ The &quot;Expanded Convertible&quot; house sleeps eight, with two
            bedrooms and a half-bathroom added to the basic Convertible floor
            plan. Built of masonry block and stucco, this house costs $16,990.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/allsta01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/allsta01/spacer.gif",
          width: 1,
          height: 1,
          alt: "",
        },
        name: "\u00a0",
        copy: (
          <span
            style={{
              color: "#990000",
              fontFamily: "Arial, Helvetica, sans-serif",
              fontSize: 13,
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            This exhibit did not reopen in 1965.
          </span>
        ),
      }}
      map={{
        cover: {
          src: "/images/allsta01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/allsta01/industry-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/allstamap",
      }}
    />
  );
}

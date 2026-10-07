import type { Metadata } from "next";
import { GuineaNavChrome } from "@/components/GuineaNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Guinea — nywf64.com",
  description:
    "Guinea pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Guinea guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy guinea01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Single Locate It → /guineamap (International Area).
 */
export default function Guinea01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Guinea"
      titleId="guinea01-title"
      hero={{
        src: "/images/guineaoverview/hero-banner.jpg",
        alt: "Guinea at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GuineaNavChrome />}
      previousHref="/guineaoverview"
      nextHref="/guinea02"
      guide1964={{
        cover: {
          src: "/images/guinea01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/guinea01/guinealogo64.gif",
          width: 144,
          height: 61,
          alt: "",
        },
        name: "GUINEA",
        copy: (
          <>
            A bridge leads across a stream to the pavilion&apos;s three round
            buildings. Two small thatch-roofed structures set in a tropical
            landscape contain industrial exhibits, a shop selling souvenirs and
            a tourism center. The round main building, with curving glass walls
            inside a steel grid, houses handicrafts, a travel display and a
            restaurant in which members of Guinea&apos;s famed ballet troupe
            perform.
          </>
        ),
        admission: "Admission: 25 cents.",
        highlights: [
          {
            label: "AFRICAN HANDICRAFTS.",
            body: (
              <>
                The exhibit area in the main building displays carvings of wood
                and ivory, silver and bead jewelry, ceramics and cloth with bold
                print designs. Similar items are also sold in a shop in the same
                area.
              </>
            ),
          },
          {
            label: "AFRICAN DANCERS.",
            body: (
              <>
                Members of Les Ballets Africains, which made its American debut
                in 1959, present graceful interpretations of Guinean dances.
                They appear regularly on the restaurant stage.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                This eating place seats about 130, and specializes in
                traditional rice and meat dishes.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/guinea01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/guinea01/guinealogo.gif",
          width: 144,
          height: 61,
          alt: "",
        },
        name: "GUINEA",
        summary: (
          <>
            Three African huts house industrial displays, souvenirs and a
            theater-restaurant.
          </>
        ),
        copy: (
          <>
            In two of the thatch-roof structures are exhibits and a tourist
            center. In the third, ivory and wood carvings, jewelry, ceramics and
            boldly printed textiles are displayed and sold. In the restaurant,
            entertainment is provided by singers, musicians and a troupe of
            dancing girls, and traditional dishes of meat and rice are served.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/guinea01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/guinea01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/guineamap",
      }}
    />
  );
}

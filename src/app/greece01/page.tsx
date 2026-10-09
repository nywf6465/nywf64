import type { Metadata } from "next";
import { GreeceNavChrome } from "@/components/GreeceNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Greece — nywf64.com",
  description:
    "Greece pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greece guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy greece01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Single Locate It → /greecemap (International Area).
 * Legacy wording (“modern nations accomplishments”) preserved.
 */
export default function Greece01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Greece"
      titleId="greece01-title"
      hero={{
        src: "/images/greeceoverview/hero-banner.jpg",
        alt: "Greece at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreeceNavChrome />}
      previousHref="/greeceoverview"
      nextHref="/greece02"
      guide1964={{
        cover: {
          src: "/images/greece01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/greece01/greecelogo64.gif",
          width: 144,
          height: 78,
          alt: "",
        },
        name: "GREECE",
        copy: (
          <>
            Greece is proud of its modernity and its antiquity alike, celebrates
            both in this pavilion. The long front of the building reflects the
            nation&apos;s classical heritage. Wide steps lead up to a vast
            pedimented doorway, above which men and chariots parade in a frieze
            120 feet long. Inside, the visitor finds evidence of the modern
            nations accomplishments. Large photo-murals give a view of the Athens
            of today as seen through the pillars of the Parthenon. Other displays
            reflect the nation&apos;s industrial development, agricultural
            progress and contemporary sculpture and ceramics. Several shops sell
            Greek products, and there is a restaurant.
          </>
        ),
        admission: [
          "Admission: free.",
          "Hours: 10 a.m. to 10 p.m.; restaurant, 10 a.m. to 2 a.m.",
        ],
        highlights: [
          {
            label: "GIFTS FROM GREECE.",
            body: (
              <>
                In the exhibit hall are depicted early Greece&apos;s innumerable
                contributions to civilization. Maps of the Mediterranean area and
                the Middle East detail the nation&apos;s commerce, explorations
                and ancient colonies, as well as the spread of the Greek
                language. The great Greeks who helped to formulate Western thought
                are shown in portraiture.
              </>
            ),
          },
          {
            label: "RESTAURANT.",
            body: (
              <>
                By day the Hermis offers Middle Eastern cookery which may be
                eaten on a terrace that is adjacent to the pavilion. By night,
                the terrace becomes an outdoor extension of the restaurant; while
                patrons dine on Greek food under the stars, wandering minstrels
                strum and sing.
              </>
            ),
          },
          {
            label: "SHOPS.",
            body: <>Replicas of museum pieces are for sale, as are honey, rugs, etc.</>,
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/greece01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/greece01/greecelogo.gif",
          width: 144,
          height: 78,
          alt: "",
        },
        name: "GREECE",
        summary: (
          <>
            A sound-and-light show dramatizes Greek contributions to Western
            thought; a terrace restaurant serves national specialties.
          </>
        ),
        copy: (
          <>
            The classical facade of the building is topped by a 120-foot frieze
            of classical motifs. Inside, replicas of Greek sculptures are on
            display. Shops sell Greek products.
          </>
        ),
        admission:
          "Admission: free; a small charge is made for the sound-and-light show.",
        highlights: [
          {
            label: '"SOUND AND LIGHT."',
            body: (
              <>
                A 15-minute show -- which uses music, sound, lights and a model
                of the Acropolis -- dramatizes the Greeks&apos; contribution to
                Western thought.
              </>
            ),
          },
          {
            label: "THE RESTAURANT.",
            body: (
              <>
                Patrons may dine on Greek food under the stars as strolling
                entertainers sing.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/greece01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/greece01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/greecemap",
      }}
    />
  );
}

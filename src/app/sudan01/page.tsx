import type { Metadata } from "next";
import { SudanNavChrome } from "@/components/SudanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title: "1964 & 1965 Official Guidebook Entries — Sudan — nywf64.com",
  description:
    "Sudan pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sudan guidebook page — Official Guidebook Entries (+ souvenir map column).
 * Body from legacy sudan01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Navy title follows legacy: “1964 & 1965 Official Guidebook Entries”.
 */
export default function Sudan01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Sudan"
      titleId="sudan01-title"
      title="1964 & 1965 Official Guidebook Entries"
      hero={{
        src: "/images/sudanoverview/hero-banner.jpg",
        alt: "Sudan pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SudanNavChrome />}
      previousHref="/sudanoverview"
      nextHref="/sudan02"
      guide1964={{
        cover: {
          src: "/images/sudan01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sudan01/logo1964.gif",
          width: 144,
          height: 127,
          alt: "",
        },
        name: "SUDAN",
        copy: (
          <>
            A pavilion of contemporary Islamic architecture, capped with a
            translucent dome, displays on the first floor a recently discovered
            fresco of the Madonna painted on limestone. Also displayed are relics
            of the great Nubian civilization which flourished 4,000 years ago, as
            well as Sudan&apos;s industrial products and a variety of handcrafted
            wares. On the second floor are artifacts of southern jungle tribes
            and western desert nomads, who are still among the country&apos;s
            varied peoples. At the rear of the pavilion, facing a tropical garden
            with exotic birds, is a restaurant that features national dishes.
          </>
        ),
        admission: "Admission: free to pavilion; 50 cents to view fresco.",
        highlights: [
          {
            label: "ANCIENT HANDICRAFTS.",
            body: (
              <>
                The Nubian sculpture, pottery, utensils and weapons on display
                are among the oldest things of their kind to be seen at the Fair.
                They were rescued by archeologists from the waters of Egypt&apos;s
                Aswan Dam, which flooded parts of Sudan.
              </>
            ),
          },
          {
            label: "MODERN HANDICRAFTS.",
            body: (
              <>
                Among the handmade wares shown and offered for sale are
                leopard-skin stoles, alligator shoes and purses, and jewelry in
                silver and ivory.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/sudan01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/sudan01/logo1965.gif",
          width: 144,
          height: 127,
          alt: "",
        },
        name: "SUDAN",
        summary: (
          <>
            Displays include 4,000-year-old relics of Nubian civilization and a
            newly discovered fresco of the Madonna.
          </>
        ),
        copy: (
          <>
            Products of modern Sudan&apos;s industries and handicrafts are also
            exhibited in the pavilion, an example of contemporary Islamic
            architecture capped by a translucent dome. A restaurant and snack
            bar, facing an exotic tropical garden, serve Sudanese and American
            dishes.
          </>
        ),
        admission: "Admission: free to the pavilion; 50 cents to view fresco.",
        highlights: [
          {
            label: "ARTIFACTS.",
            body: (
              <>
                The Nubian sculpture, pottery and weapons on display were rescued
                by archeologists from the waters of Egypt&apos;s Aswan High Dam.
                The thousand-year-old Madonna, unearthed in 1963, was preserved
                in all its vivid colors by the sands in which it was buried.
              </>
            ),
          },
          {
            label: "HANDICRAFTS.",
            body: (
              <>
                Among the products shown and sold are leopard-skin stoles,
                alligator shoes and bags, and jewelry of silver and ivory.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/sudan01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sudan01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/sudanmap",
      }}
    />
  );
}

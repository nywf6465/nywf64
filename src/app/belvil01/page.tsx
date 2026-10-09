import type { Metadata } from "next";
import { BelvilNavChrome } from "@/components/BelvilNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Belgian Village — nywf64.com",
  description:
    "Belgian Village entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Belgian Village guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy belvil01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Belvil01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Belgian Village"
      titleId="belvil01-title"
      hero={{
        src: "/images/belviloverview/hero-banner.jpg",
        alt: "Belgian Village at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<BelvilNavChrome />}
      previousHref="/belviloverview"
      nextHref="/belvil02"
      guide1964={{
        cover: {
          src: "/images/belvil01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/belvil01/belvil-logo.gif",
          width: 133,
          height: 144,
          alt: "",
        },
        name: "BELGIAN VILLAGE",
        copy: (
          <>
            In contrast to the modern architecture around it, &quot;Picturesque
            Belgium&quot; is a meticulous copy of a walled Flemish village as it
            might have appeared in 1800 - from the roof tiles to the costumes
            the villagers wear in the cobbled streets. More than 100 houses, a
            15th Century church, a City Hall with a rathskeller under it, a
            canal and an arched stone bridge occupy nearly four acres, making
            this the largest international exhibit at the Fair. Folk dancing, an
            1898 carousel, native cuisine, handicrafts and crooked streets lined
            with small shops are part of the privately sponsored pavilion. The
            Belgium of a later era is also on display in the form of modern
            inventions, industrial exhibits and relics of World War II.
          </>
        ),
        admission:
          "Admission: to the village, adults $1.25, children 60 cents. There are additional charges to the church, the City Hall, the merry-go-round and the museum.",
        highlights: [
          {
            label: "COLORED SANDS.",
            body: (
              <>
                Within the church, which is an exact replica of the beautiful
                Gothic Church of St. Nicholas in Antwerp, a number of major
                masterpieces have been copied in sand painting, an art form in
                which the Flemish specialize.
              </>
            ),
          },
          {
            label: "GILLE DANCERS.",
            body: (
              <>
                Four times each day gaudily dressed clowns wearing wooden shoes,
                ostrich-feather headdresses and bells dance through the streets,
                accompanied by drums and brass instruments. The{" "}
                <em>Gilles</em> hark back to 1540, when Belgium was ruled by
                Spain, and the conquistadors&apos; triumph over Peruvian Indians
                was celebrated at Mardi Gras.
              </>
            ),
          },
          {
            label: "BEER HALL.",
            body: (
              <>
                A 1,500-seat rathskeller, largest of the village&apos;s 30-odd
                eating places, is underneath the City Hall. A 20-piece band plays
                here, and American as well as European food is served. Beer,
                imported and American, is the specialty.
              </>
            ),
          },
          {
            label: "BASTOGNE \"NUTS\" MUSEUM.",
            body: (
              <>
                Relics of the Battle of the Bulge plus various weapons of World
                War II are on display in a museum named for the classic comment
                of U.S. Major General Anthony C. McAuliffe when he was asked to
                surrender Bastogne.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/belvil01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/belvil01/belvil-logo.gif",
          width: 133,
          height: 144,
          alt: "",
        },
        name: "BELGIAN VILLAGE",
        nameFace: "arial",
        summary: (
          <>
            More than 100 buildings -- among them a church, a carousel and a
            rathskeller -- comprise a charming Flemish town of the year 1700.
          </>
        ),
        copy: (
          <>
            The taste treat here is a deluxe Belgian-type waffle served with
            powdered sugar, whipped cream and fresh strawberries. Four gondolas,
            each seating 15 people, rise to the top of a 120-foot tower for
            views of the Fair.
          </>
        ),
        admission:
          "Admission to ride: adults, $1.00; children under 12, 50 cents. Hours: 10 a.m. to 2 a.m.",
      }}
      map={{
        cover: {
          src: "/images/belvil01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/belvil01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/belvilmap",
      }}
    />
  );
}

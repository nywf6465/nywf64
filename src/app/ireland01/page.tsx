import type { Metadata } from "next";
import { IrelandNavChrome } from "@/components/IrelandNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Ireland — nywf64.com",
  description:
    "Ireland pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ireland guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy ireland01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Legacy wording and typos preserved (Lisconner/Lisconnor, recoding, cafe').
 */
export default function Ireland01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Ireland"
      titleId="ireland01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/irelandoverview/hero-banner.jpg",
        alt: "Ireland pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<IrelandNavChrome />}
      previousHref="/irelandoverview"
      nextHref="/ireland02"
      guide1964={{
        cover: {
          src: "/images/ireland01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ireland01/irelogo64.gif",
          width: 144,
          height: 63,
          alt: "",
        },
        name: "IRELAND",
        copy: (
          <>
            Some contributions made by the Irish to the happiness of other parts
            of the world are beguilingly displayed in a series of courts and
            halls. The dominant architectural feature of the pavilion is a modern
            version of the medieval round towers that still stand in many places
            in Ireland. The whole is enclosed by a wall seven feet high, faced in
            Lisconner gray stone and reddish brown marble.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "CHARTING THE IRISH.",
            body: (
              <>
                Two giant maps are in the entry court. On the left is one of
                Ireland with familiar Irish names marked at the families&apos;
                places of origin. Recordings detail the family histories and give
                the Irish pronunciation of the names. On the right is a map of
                the world showing the spread of Irish influence.
              </>
            ),
          },
          {
            label: "FLIGHT OVER IRELAND.",
            body: (
              <>
                A movie of the country made during a low-altitude airplane flight
                is projected on a circular screen embedded in the floor of the
                hall to the left of the entry court. Nearby, Irish scenes are
                shown on a wide screen.
              </>
            ),
          },
          {
            label: "A GAELIC HERITAGE.",
            body: (
              <>
                Through the round tower visitors reach the main hall, where
                mobiles evoking the names and moods of Irish poets hang from the
                ceiling. Headsets transmit the voices of actors reading the words
                of such Irish-born writers as George Bernard Shaw, James Joyce,
                Jonathan Swift, Oscar Wilde and William Butler Yeats. Also in the
                main hall are displays of Irish arts and crafts (tweed-weaving
                looms, pottery and Waterford glass), country life (horses, the
                turf and the beauty of racing) and industrial development,
                centering on a wide range of products manufactured in Irish
                factories.
              </>
            ),
          },
          {
            label: "DANCES AND DRINKS.",
            body: (
              <>
                There is a small outdoor theater for performances by Irish
                dancers and singers. Available at a stand are Irish coffee
                (coffee, Irish whiskey and whipped cream) for adults and soft
                drinks for children.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/ireland01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/ireland01/irelogo.gif",
          width: 144,
          height: 63,
          alt: "",
        },
        name: "IRELAND",
        summary: (
          <>
            The nation&apos;s arts and way of life are shown in displays of fine
            products, poetry recordings and a scenic aerial film.
          </>
        ),
        copy: (
          <>
            A modern version of a medieval Irish round tower dominates the
            pavilion, which is enclosed by a seven-foot wall of Lisconnor gray
            stone and Connemara red marble.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "CHARTING THE IRISH.",
            body: (
              <>
                In the entry court, a giant map of Ireland locates the origins of
                familiar Irish names, and a recoding gives proper pronunciations
                and family histories. Another map shows the spread of Irish
                influence around the world.
              </>
            ),
          },
          {
            label: "FLIGHT OVER IRELAND.",
            body: (
              <>
                A movie of the Irish landscape, made during a low-altitude
                flight, is projected on a circular screen set in the floor.
              </>
            ),
          },
          {
            label: "GAELIC HERITAGE.",
            body: (
              <>
                In the main hall hang mobiles evoking the names and moods of the
                Irish poets. Headsets transmit the words of Joyce, Shaw, Swift,
                Yeats and Wilde. Irish arts and crafts are on display: linens,
                pottery, Waterford glass.
              </>
            ),
          },
          {
            label: "DANCES AND DRINKS.",
            body: (
              <>
                In a small outdoor theater and cafe&apos;, Irish dancers and
                singers perform, and Irish coffee (coffee, Irish whiskey, whipped
                cream) is served.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/ireland01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/ireland01/locate-it.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/irelandmap",
      }}
    />
  );
}

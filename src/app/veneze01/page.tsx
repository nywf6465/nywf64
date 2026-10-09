import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Venezuela — nywf64.com",
  description:
    "Venezuela pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy veneze01.html. Layout: GuidebookSouvenirPage (/bell01).
 * Legacy pavilion name spelling “VENEZEULA” preserved.
 */
export default function Veneze01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Venezuela"
      titleId="veneze01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/veneerview/hero-banner.jpg",
        alt: "Venezuela pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<VenezeNavChrome />}
      previousHref="/veneerview"
      nextHref="/veneze02"
      guide1964={{
        cover: {
          src: "/images/veneze01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/veneze01/venezlogo64.gif",
          width: 144,
          height: 106,
          alt: "",
        },
        name: "VENEZEULA",
        copy: (
          <>
            In this tropical redwood building, guitarists, dancers and a number
            of other performers entertain, and there is an exhibit of classical
            and contemporary Venezuelan art. The walls are decorated with
            photographic panels of Venezuelan scenes. Souvenirs are for sale and
            leading businessmen are on hand to discuss commercial opportunities
            in the country.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "DOCUMENTS OF THE LIBERATOR.",
            body: (
              <>
                Some of the most important manuscripts and belongings of Simon
                Bolivar, the South American liberator, are dramatically
                spotlighted in a dark room. In other side rooms are antique and
                modern jewelry.
              </>
            ),
          },
          {
            label: "PERFORMERS FROM CARACAS.",
            body: (
              <>
                Live entertainment is offered from time to time in the main hall.
                Guitarist Aliro Diaz, pianist Judith Jaimes and contemporary
                dance groups are scheduled.
              </>
            ),
          },
          {
            label: "ART NEW AND OLD.",
            body: (
              <>
                On the mezzanine is a collection of Venezuelan works, both old
                and new. Some of them are for sale.
              </>
            ),
          },
          {
            label: "BUSINESS MEETINGS.",
            body: (
              <>
                Officials from Venezuela&apos;s commercial world answer questions
                from American businessmen.
              </>
            ),
          },
          {
            label: "GIFTS AND SOUVENIRS.",
            body: (
              <>
                A small shop sells colored glass, cigars, costumed dolls, pottery
                and gold orchid pins.
              </>
            ),
          },
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/veneze01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/veneze01/venezlogo.gif",
          width: 144,
          height: 106,
          alt: "",
        },
        name: "VENEZEULA",
        summary: (
          <>
            Among the pavilion&apos;s features are guitar and dance recitals,
            memorabilia of Simon Bolivar and early and modern Venezuelan art.
          </>
        ),
        copy: (
          <>
            The interior walls of this tropical redwood building are lined with
            colorful photographs depicting native scenes. Representatives of
            Venezuelan business are available to discuss local opportunities.
          </>
        ),
        admission: "Admission: free.",
        highlights: [
          {
            label: "DOCUMENTS.",
            body: (
              <>
                Important manuscripts by Simon Bolivar, liberator of five South
                American states, are dramatically displayed.
              </>
            ),
          },
          {
            label: "WORKS OF ART.",
            body: (
              <>
                A collection of the nation&apos;s art works is on view. Some
                paintings are for sale.
              </>
            ),
          },
          {
            label: "GIFTS.",
            body: (
              <>
                A shop sells glassware, handwoven blankets, cigars, straw baskets
                and souvenirs.
              </>
            ),
          },
        ],
      }}
      map={{
        cover: {
          src: "/images/veneze01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/veneze01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/venezemap",
      }}
    />
  );
}

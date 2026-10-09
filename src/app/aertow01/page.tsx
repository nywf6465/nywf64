import type { Metadata } from "next";
import { AertowNavChrome } from "@/components/AertowNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Aerial Tower Ride — nywf64.com",
  description:
    "Aerial Tower Ride & Waffle Restaurant entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Aerial Tower Ride guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy aertow01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Aertow01Page() {
  const name1964 = (
    <>
      AERIAL TOWER RIDE AND
      <br />
      WAFFLE RESTAURANT
    </>
  );

  return (
    <GuidebookSouvenirPage
      heroLabel="Aerial Tower Ride"
      titleId="aertow01-title"
      hero={{
        src: "/images/aertowoverview/hero-banner.jpg",
        alt: "Aerial Tower Ride & Waffle Restaurant at the 1964/1965 New York World’s Fair",
        width: 1911,
        height: 823,
      }}
      nav={<AertowNavChrome />}
      nextHref="/aertow02"
      guide1964={{
        cover: {
          src: "/images/aertow01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/aertow01/aertow-logo-1964.gif",
          width: 107,
          height: 144,
          alt: "",
        },
        name: name1964,
        copy: (
          <>
            Food on land and gaily colored gondolas in the sky are the twin
            features of a typically European eat-and-ride attraction. The outdoor
            restaurant specializes in Bel-Gem Waffles - waffles served with
            combinations of powdered sugar, whipped cream and fresh strawberries.
            Beside the restaurant area four elegantly upholstered gondolas, each
            with a capacity of 15, majestically rise on cables to the top of a
            120-foot tower. The smooth, slow ride provides a magnificent view of
            the Fair and lasts three to five minutes.
          </>
        ),
        admission: [
          "Admission to ride: adults, $1.00; children under 12, 50 cents.",
          "Hours: 10 a.m. to 2 a.m.",
        ],
      }}
      guide1965={{
        cover: {
          src: "/images/aertow01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/aertow01/aertow-logo-1965.gif",
          width: 107,
          height: 144,
          alt: "",
        },
        name: "AERIAL TOWER RIDE AND BEL-GEM WAFFLE RESTAURANT",
        summary: (
          <>
            An outdoor snack bar sells special waffles, and gondolas give rides
            to the top of a tower.
          </>
        ),
        copy: (
          <>
            The taste treat here is a deluxe Belgian-type waffle served with
            powdered sugar, whipped cream and fresh strawberries. Four gondolas,
            each seating 15 people, rise to the top of a 120-foot tower for views
            of the Fair.
          </>
        ),
        admission:
          "Admission to ride: adults, $1.00; children under 12, 50 cents. Hours: 10 a.m. to 2 a.m.",
      }}
      map={{
        cover: {
          src: "/images/aertow01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/aertow01/amusement-map.gif",
          width: 60,
          height: 54,
        },
        locateHref: "/aertowmap",
      }}
    />
  );
}

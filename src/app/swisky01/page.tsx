import type { Metadata } from "next";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Swiss Sky Ride — nywf64.com",
  description:
    "Swiss Sky Ride entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Swiss Sky Ride guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy swisky01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 */
export default function Swisky01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Swiss Sky Ride"
      titleId="swisky01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/swiskyoverview/hero-banner.jpg",
        alt: "Swiss Sky Ride at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwiskyNavChrome />}
      previousHref="/swiskyoverview"
      nextHref="/swisky02"
      guide1964={{
        cover: {
          src: "/images/swisky01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/swisky01/logo1964.gif",
          width: 144,
          height: 53,
          alt: "",
        },
        name: "SWISS SKY RIDE",
        copy: (
          <>
            In one of the highest rides at the Fair, cabins holding four
            passengers each are suspended on cables 113 feet in the air. The
            cables run between the Korean and Swiss pavilion; a one-way trip
            covers 1,875 feet, takes four minutes and provides panoramic views
            not only of the fairgrounds but of Manhattan Island. Tickets may be
            purchased at booths near the two pavilions.
          </>
        ),
        admission:
          "Admission: adults 75 cents on way; children 35 cents on weekdays, 50 cents on Sundays and holidays. Cars leave every 12 seconds.",
      }}
      guide1965={{
        cover: {
          src: "/images/swisky01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/swisky01/logo1965.gif",
          width: 144,
          height: 53,
          alt: "",
        },
        name: "SWISS SKY RIDE",
        summary: (
          <>
            Passengers ride high across the fairgrounds in cable cars for a
            spectacular view of the Fair.
          </>
        ),
        copy: (
          <>
            Each car holds four people; the cables run across the center of the
            Fair between terminals near the Swiss and the Korean pavilions,
            reaching a maximum height of 113 feet. Cars leave every 12 seconds;
            one-way trip takes about four minutes. Admission is charged.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/swisky01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/swisky01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/swiskymap",
      }}
    />
  );
}

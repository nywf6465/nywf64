import type { Metadata } from "next";
import Link from "next/link";
import { BarbufNavChrome } from "@/components/BarbufNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Bargreen Buffet — nywf64.com",
  description:
    "Bargreen Buffet entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bargreen Buffet guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy barbuf01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: status note (building was Pavilion of Fine Art). 1965: full entry.
 */
export default function Barbuf01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Bar, Buffet and Cafeteria"
      titleId="barbuf01-title"
      hero={{
        src: "/images/barbufoverview/hero-banner.jpg",
        alt: "Bar, Buffet and Cafeteria at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<BarbufNavChrome />}
      previousHref="/barbufoverview"
      nextHref="/barbuf02"
      guide1964={{
        cover: {
          src: "/images/barbuf01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Bargreen Buffet was open for the 1965 Season. In 1964 this
            building was the <Link href="/finart01">Pavilion of Fine Art</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/barbuf01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/barbuf01/barbuf-logo.gif",
          width: 144,
          height: 70,
          alt: "",
        },
        name: "BARGREEN BUFFET",
        nameFace: "arial",
        summary: (
          <>
            An outside terrace with tables and umbrellas flanks this bar, buffet
            and cafeteria.
          </>
        ),
        copy: (
          <>
            Inside this large restaurant 600 persons can sit and enjoy typical
            American food served in an international atmosphere. Outside, a
            take-out bar offers seafood and draft beer for diners on the terrace.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/barbuf01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/barbuf01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/barbufmap",
      }}
    />
  );
}

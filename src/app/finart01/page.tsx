import type { Metadata } from "next";
import Link from "next/link";
import { FinartNavChrome } from "@/components/FinartNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fine Arts Pavilion — nywf64.com",
  description:
    "Fine Arts Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fine Arts Pavilion guidebook page.
 * Body from legacy finart01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1965: building housed Bargreen Buffet (link). Locate It → /finartmap.
 */
export default function Finart01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Fine Arts Pavilion"
      titleId="finart01-title"
      hero={{
        src: "/images/finartoverview/hero-banner.jpg",
        alt: "Fine Arts Pavilion at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<FinartNavChrome />}
      previousHref="/finartoverview"
      nextHref="/finart02"
      guide1964={{
        cover: {
          src: "/images/finart01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/finart01/finartlogo64.gif",
          width: 144,
          height: 70,
          alt: "",
        },
        name: <>FINE ARTS PAVILION</>,
        copy: (
          <>
            Sponsored by the Long Island Arts Center, this pavilion displays the
            work of 250 American artists. In all, 150 painters, 50 sculptors and
            50 graphic artists are represented in the exhibit.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/finart01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Fine Arts Pavilion was open for the 1964 Season. In 1965 this
            building was the <Link href="/barbuf01">Bargreen Buffet</Link>.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/finart01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/finart01/intsmlmap.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/finartmap",
      }}
    />
  );
}

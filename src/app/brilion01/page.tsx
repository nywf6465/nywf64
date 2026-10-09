import type { Metadata } from "next";
import { BrilionNavChrome } from "@/components/BrilionNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — British Lion Pub — nywf64.com",
  description:
    "British Lion Pub entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * British Lion Pub guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy brilion01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /brilionmap (International Area).
 * 1964 copy retains the guidebook typo “fish and ships”.
 */
export default function Brilion01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="British Lion Pub"
      titleId="brilion01-title"
      hero={{
        src: "/images/brilionoverview/hero-banner.jpg",
        alt: "British Lion Pub at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<BrilionNavChrome />}
      previousHref="/brilionoverview"
      nextHref="/brilion02"
      guide1964={{
        cover: {
          src: "/images/brilion01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/brilion01/logo-1964.gif",
          width: 144,
          height: 81,
          alt: "",
        },
        name: "BRITISH LION PUB",
        copy: (
          <>
            In a reproduction of a 17th Century half-timbered Tudor Inn,
            traditional British dishes - roast beef, beef and kidney pie, fish
            and ships - are available together with fine British beer, ale and
            stout in an atmosphere of pewter and well-polished brass. The inn
            seats 100 indoors and offers a less expensive menu on an outdoor
            terrace seating 250. British products are on display.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/brilion01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/brilion01/logo-1965.gif",
          width: 144,
          height: 81,
          alt: "",
        },
        name: "BRITISH LION PUB",
        summary: (
          <>
            In a replica of a 17th Century Tudor inn, traditional British food
            and drink are served.
          </>
        ),
        copy: (
          <>
            Beef and kidney pie, fish and chips, and plum pudding are available,
            together with fine English ale, beer and stout -- all in an
            atmosphere of pewter and well-polished brass. A less expensive menu
            is offered on the terrace.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/brilion01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/brilion01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/brilionmap",
      }}
    />
  );
}

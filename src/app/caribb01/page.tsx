import type { Metadata } from "next";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Caribbean — nywf64.com",
  description:
    "Caribbean Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Caribbean Pavilion guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy caribb01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Locate It → /caribbmap (International Area).
 */
export default function Caribb01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Caribbean"
      titleId="caribb01-title"
      hero={{
        src: "/images/caribboverview/hero-banner.jpg",
        alt: "Caribbean Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CaribbNavChrome />}
      previousHref="/caribboverview"
      nextHref="/caribb02"
      guide1964={{
        cover: {
          src: "/images/caribb01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/caribb01/logo-1964.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: "THE CARIBBEAN",
        copy: (
          <>
            An enormous terrace dotted with palm trees, cafe tables and the
            flags of eight Caribbean areas distinguishes this pavilion. Two
            low, glass-faced structures with Spanish tile roofs exhibit and
            offer for sale many island products - among them tortoise-shell
            jewelry, straw hats and bags, wood carvings and ceramics. The
            dominating building is a large restaurant and bar. Hung with
            colorful headgear, the restaurant presents steel bands, calypso
            singers and Caribbean dancers. Dishes include pumpkin soup,
            suckling pig, plantain (a variety of banana) and a dessert which is
            made of fresh coconut meat. Rum drinks and coconut milk are
            featured at the bar.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/caribb01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/caribb01/logo-1965.gif",
          width: 144,
          height: 78,
          alt: "",
        },
        name: "CARIBBEAN",
        summary: (
          <>A steel band plays in a terrace cafe; shops sell souvenirs.</>
        ),
        copy: (
          <>
            In two low-faced buildings, products of the islands -- jewelry,
            straw mats and bags, carvings and ceramics -- are displayed and
            sold. The main structure is a large restaurant which serves up
            calypso music and steaks. Rum drinks are featured at the bar.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/caribb01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/caribb01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        locateHref: "/caribbmap",
      }}
    />
  );
}

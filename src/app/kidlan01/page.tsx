import type { Metadata } from "next";
import { KidlanNavChrome } from "@/components/KidlanNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Kiddyland — nywf64.com",
  description:
    "Kiddyland entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Kiddyland guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy kidlan01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1965 column is a status note only (renamed Funland). Legacy wording preserved.
 */
export default function Kidlan01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Kiddyland"
      titleId="kidlan01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/kidlanoverview/hero-banner.jpg",
        alt: "Kiddyland at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<KidlanNavChrome />}
      previousHref="/kidlanoverview"
      nextHref="/kidlanoverview"
      guide1964={{
        cover: {
          src: "/images/kidlan01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/kidlan01/kidlanlogo64.gif",
          width: 144,
          height: 91,
          alt: "",
        },
        name: "KIDDYLAND",
        copy: (
          <>
            As the name makes clear, this pavilion offers all kinds of fun for
            the youngsters - rides, slides and games. Among the attractions are
            three 30-foot slides spiraling down inside hollow tubes, a
            paddle-boat ride on the pond, a German-manufactured carousel and a
            junior-grade roller coaster, less scary than the grownup variety. The
            rides are calculated to appeal to thrill seekers as young as two or
            three.
          </>
        ),
        admission: "Admission: free to the pavilion; rides 35 cents.",
      }}
      guide1965={{
        cover: {
          src: "/images/kidlan01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            In 1965 this attraction was called Funland.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/kidlan01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/kidlan01/amusmlmap.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/kidlanmap",
      }}
    />
  );
}

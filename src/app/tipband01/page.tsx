import type { Metadata } from "next";
import { TipbandNavChrome } from "@/components/TipbandNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Tiparillo Band Pavilion — nywf64.com",
  description:
    "Tiparillo Band Pavilion entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Tiparillo Band Pavilion guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy tipband01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Preserve legacy typo “proides”.
 */
export default function Tipband01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Tiparillo Band Pavilion"
      titleId="tipband01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/tipbandoverview/hero-banner.jpg",
        alt: "Tiparillo Band Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<TipbandNavChrome />}
      previousHref="/tipbandoverview"
      nextHref="/tipband02"
      guide1964={{
        cover: {
          src: "/images/tipband01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/tipband01/tipbanlogo64.gif",
          width: 144,
          height: 73,
          alt: "",
        },
        name: "TIPARILLO BAND PAVILION",
        copy: (
          <>
            This is an outdoor dance floor and band shell jointly sponsored by
            the Fair, which provided the facilities, and the General Cigar
            Company, which proides music by Guy Lombardo and his Royal Canadians
            every night except Mondays. The pavilion is used in the daytime for
            special performances by visiting national and local groups.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/tipband01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/tipband01/tipbanlogo.gif",
          width: 144,
          height: 73,
          alt: "",
        },
        name: "TIPARILLO BAND PAVILION",
        nameFace: "arial",
        summary: (
          <>
            Free concerts and dancing are offered at a bandshell and large outdoor
            dance floor.
          </>
        ),
        copy: (
          <>
            During the day music and dance groups from around the country
            perform. Nightly except Monday there is free public dancing to the
            music of Guy Lombardo and his Royal Canadians; on Monday nights there
            is square dancing.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/tipband01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/tipband01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/tipbandmap",
      }}
    />
  );
}

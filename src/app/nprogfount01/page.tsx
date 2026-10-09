import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { NprogfountNavChrome } from "@/components/NprogfountNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountain of Progress North — nywf64.com",
  description:
    "Fountain of Progress North entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress North guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy nprogfount01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; fountain entry
 * sits under the Souvenir Map column.
 */
export default function Nprogfount01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Fountain of Progress North"
      titleId="nprogfount01-title"
      hero={{
        src: "/images/nprogfountoverview/hero-banner.jpg",
        alt: "Fountain of Progress North at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<NprogfountNavChrome />}
      previousHref="/nprogfountoverview"
      nextHref="/nprogfount02"
      guide1964={{
        cover: {
          src: "/images/nprogfount01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/nprogfount01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/nprogfount01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/nprogfount01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/nprogfountmap",
        subjectNoun: "fountain",
        entry: {
          logo: {
            src: "/images/nprogfount01/nprogfount-logo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "FOUNTAIN OF PROGRESS NORTH",
          copy: (
            <>
              The Fountain of Progress North is a pool with a spiral layout of
              water jets featuring a changing water cycle pattern.
            </>
          ),
        },
      }}
    />
  );
}

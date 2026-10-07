import type { Metadata } from "next";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { SprogfountNavChrome } from "@/components/SprogfountNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountain of Progress South — nywf64.com",
  description:
    "Fountain of Progress South entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of Progress South guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy sprogfount01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; fountain entry
 * sits under the Souvenir Map column.
 */
export default function Sprogfount01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Fountain of Progress South"
      titleId="sprogfount01-title"
      hero={{
        src: "/images/sprogfountoverview/hero-banner.jpg",
        alt: "Fountain of Progress South at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SprogfountNavChrome />}
      previousHref="/sprogfountoverview"
      nextHref="/sprogfount02"
      guide1964={{
        cover: {
          src: "/images/sprogfount01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/sprogfount01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/sprogfount01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/sprogfount01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/sprogfountmap",
        subjectNoun: "fountain",
        entry: {
          logo: {
            src: "/images/sprogfount01/sprogfount-logo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "FOUNTAIN OF PROGRESS SOUTH",
          copy: (
            <>
              The Fountain of Progress South displays a five-point star layout of
              water jets with a sunken basin in the center and a series of water
              streams in the outer area.
            </>
          ),
        },
      }}
    />
  );
}

import type { Metadata } from "next";
import { FoucaultNavChrome } from "@/components/FoucaultNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountains of the Fairs — nywf64.com",
  description:
    "Fountains of the Fairs entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountains of the Fairs guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy foufai01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; feature entry
 * sits under the Souvenir Map column.
 */
export default function Foufai01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Fountains of the Fairs"
      titleId="foufai01-title"
      hero={{
        src: "/images/foufaioverview/hero-banner.jpg",
        alt: "Fountains of the Fairs at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FoucaultNavChrome />}
      previousHref="/foufaioverview"
      nextHref="/foufai02"
      guide1964={{
        cover: {
          src: "/images/foufai01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/foufai01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/foufai01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/foufai01/federal-state-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/foufaimap",
        subjectNoun: "feature",
        entry: {
          logo: {
            src: "/images/foufai01/foufai-logo.jpg",
            width: 151,
            height: 75,
            alt: "",
          },
          name: "FOUNTAIN OF THE FAIRS",
          copy: (
            <>
              The Fountain of the Fairs in the East and West Pools are arching
              jets of water directed inward toward the center of the pools.
            </>
          ),
        },
      }}
    />
  );
}

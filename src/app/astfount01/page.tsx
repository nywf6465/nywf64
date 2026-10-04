import type { Metadata } from "next";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Astral Fountain — nywf64.com",
  description:
    "Astral Fountain entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Astral Fountain guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy astfount01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; fountain entry
 * sits under the Souvenir Map column.
 */
export default function Astfount01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Astral Fountain"
      titleId="astfount01-title"
      hero={{
        src: "/images/astfountoverview/hero-banner.jpg",
        alt: "Astral Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<AstfountNavChrome />}
      previousHref="/astfountoverview"
      nextHref="/astfount02"
      guide1964={{
        cover: {
          src: "/images/astfount01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/astfount01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/astfount01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/astfount01/federal-state-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/astfountmap",
        subjectNoun: "fountain",
        entry: {
          logo: {
            src: "/images/astfount01/astral-fountain-logo.jpg",
            width: 144,
            height: 74,
            alt: "",
          },
          name: "ASTRAL FOUNTAIN",
          copy: (
            <>
              The Astral Fountain is a 60-foot in diameter fretwork of stars
              rotaing around a 70-foot high column of water.
            </>
          ),
        },
      }}
    />
  );
}

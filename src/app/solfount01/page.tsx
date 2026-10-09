import type { Metadata } from "next";
import { SolfountNavChrome } from "@/components/SolfountNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Solar Fountain — nywf64.com",
  description:
    "Solar Fountain entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Solar Fountain guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy solfount01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; fountain entry
 * sits under the Souvenir Map column.
 */
export default function Solfount01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Solar Fountain"
      titleId="solfount01-title"
      hero={{
        src: "/images/solfountoverview/hero-banner.jpg",
        alt: "Solar Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SolfountNavChrome />}
      previousHref="/solfountoverview"
      nextHref="/solfount02"
      guide1964={{
        cover: {
          src: "/images/solfount01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/solfount01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this fountain was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/solfount01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/solfount01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial Area map",
        },
        locateHref: "/solfountmap",
        subjectNoun: "fountain",
        entry: {
          logo: {
            src: "/images/solfount01/logo.gif",
            width: 144,
            height: 70,
            alt: "",
          },
          name: "SOLAR FOUNTAIN",
          copy: (
            <>
              A central dome supports a 30-foot high column of water while a
              starburst circles around the dome. Wobbling jets of water
              surrounding the dome simulate the sun&apos;s gases.
            </>
          ),
        },
      }}
    />
  );
}

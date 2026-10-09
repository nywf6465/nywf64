import type { Metadata } from "next";
import { FouconNavChrome } from "@/components/FouconNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Fountain of the Continents — nywf64.com",
  description:
    "Fountain of the Continents entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of the Continents guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy foucon01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; feature entry
 * sits under the Souvenir Map column.
 */
export default function Foucon01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Fountain of the Continents"
      titleId="foucon01-title"
      hero={{
        src: "/images/fouconoverview/hero-banner.jpg",
        alt: "Fountain of the Continents at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FouconNavChrome />}
      previousHref="/fouconoverview"
      nextHref="/foucon02"
      guide1964={{
        cover: {
          src: "/images/foucon01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/foucon01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/foucon01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/foucon01/federal-state-map.gif",
          width: 60,
          height: 54,
          alt: "Federal and State area map",
        },
        locateHref: "/fouconmap",
        subjectNoun: "feature",
        entry: {
          logo: {
            src: "/images/foucon01/foucon-logo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "FOUNTAIN OF THE CONTINENTS",
          copy: (
            <>
              The Fountain of the Continents rings Unisphere in its reflecting
              pool. The rising and falling of the water streams are meant to
              suggest the rotation of the globe.
            </>
          ),
        },
      }}
    />
  );
}

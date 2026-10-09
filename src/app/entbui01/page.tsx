import type { Metadata } from "next";
import { EntbuiNavChrome } from "@/components/EntbuiNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Entrance Building — nywf64.com",
  description:
    "Entrance Building entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Building guidebook page.
 * Body from legacy entbui01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964 & 1965 columns: not included in the Official Guide Books; feature
 * entry sits under the Souvenir Map column.
 */
export default function Entbui01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Entrance Building"
      titleId="entbui01-title"
      hero={{
        src: "/images/entbuioverview/hero-banner.jpg",
        alt: "Entrance Building at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<EntbuiNavChrome />}
      previousHref="/entbuioverview"
      nextHref="/entbui02"
      guide1964={{
        cover: {
          src: "/images/entbui01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/entbui01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/entbui01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/entbui01/indsmlmap.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/entbuimap",
        subjectNoun: "feature",
        entry: {
          logo: {
            src: "/images/entbui01/entbuilogo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "ENTRANCE BUILDING",
          copy: (
            <>
              The Entrance Building connects arriving and departing Subway
              trains with the Fairgrouds. It houses many of the various service
              facilities of the Fair and provides comfort stations for Fairgoers.
            </>
          ),
        },
      }}
    />
  );
}

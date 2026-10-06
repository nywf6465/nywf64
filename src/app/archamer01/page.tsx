import type { Metadata } from "next";
import { ArchamerNavChrome } from "@/components/ArchamerNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Arch of the Americas — nywf64.com",
  description:
    "Arch of the Americas entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Arch of the Americas guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy archamer01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not listed in the Official Guide Books; pavilion entry
 * sits under the Souvenir Map column (never constructed).
 */
export default function Archamer01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Arch of the Americas"
      titleId="archamer01-title"
      hero={{
        src: "/images/archameroverview/hero-banner.jpg",
        alt: "Arch of the Americas at the 1964/1965 New York World’s Fair",
        width: 1912,
        height: 823,
      }}
      nav={<ArchamerNavChrome />}
      nextHref="/archamer02"
      guide1964={{
        cover: {
          src: "/images/archamer01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote: "In 1964 this building was not listed in the Guidebook.",
      }}
      guide1965={{
        cover: {
          src: "/images/archamer01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote: "In 1965 this building was not listed in the Guidebook",
      }}
      map={{
        cover: {
          src: "/images/archamer01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/archamer01/international-map.gif",
          width: 60,
          height: 54,
          alt: "International area map",
        },
        entry: {
          logo: {
            src: "/images/archamer01/line-drawing-miniature.jpg",
            width: 105,
            height: 70,
            alt: "",
          },
          name: "ARCH OF THE AMERICAS",
          copy: (
            <>
              This exhibit appeared in many of the Fair&apos;s early planning
              documents. It was to have been sponsored by the Organization of
              American States (OAS). It never made it past the planning stages
              and was never constructed.
            </>
          ),
        },
      }}
    />
  );
}

import type { Metadata } from "next";
import { AmindNavChrome } from "@/components/AmindNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — American Indian Exposition — nywf64.com",
  description:
    "American Indian Exposition entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Indian Exposition guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy amind01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965 columns: not included in the Official Guide Books; pavilion entry
 * and “never built” note sit under the Souvenir Map column.
 */
export default function Amind01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="American Indian Exposition"
      titleId="amind01-title"
      hero={{
        src: "/images/amindoverview/hero-banner.jpg",
        alt: "American Indian Exposition at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmindNavChrome />}
      previousHref="/amindoverview"
      nextHref="/amind02"
      guide1964={{
        cover: {
          src: "/images/amind01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
      }}
      guide1965={{
        cover: {
          src: "/images/amind01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
      }}
      map={{
        cover: {
          src: "/images/amind01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/amind01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/amindmap",
        entry: {
          logo: {
            src: "/images/amind01/amind-logo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "AMERICAN INDIAN EXPOSITION",
          copy: (
            <>
              This authentic American Indian Exposition depicts the historical
              significance of Indian life and its contribution to the heritage of
              America.
            </>
          ),
          note: "This American Indian Exposition was never built.",
        },
      }}
    />
  );
}

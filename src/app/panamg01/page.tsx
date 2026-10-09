import type { Metadata } from "next";
import { PanamgNavChrome } from "@/components/PanamgNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Avis Pan American Highway Rides — nywf64.com",
  description:
    "Pan American Highway Gardens / Avis Pan American Highway Rides entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Pan American Highway Gardens guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy panamg01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 */
export default function Panamg01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Pan American Highway Gardens"
      titleId="panamg01-title"
      hero={{
        src: "/images/panamgoverview/hero-banner.jpg",
        alt: "Pan American Highway Gardens at the 1964/1965 New York World’s Fair",
        width: 2164,
        height: 727,
      }}
      nav={<PanamgNavChrome />}
      nextHref="/panamg02"
      guide1964={{
        cover: {
          src: "/images/panamg01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/panamg01/panamg-logo-1964.gif",
          width: 205,
          height: 129,
          alt: "",
        },
        name: (
          <>
            PAN AMERICAN
            <br />
            HIGHWAY GARDENS
          </>
        ),
        copy: (
          <>
            This large garden area, one of the few pavilions that are sponsored
            by the Fair itself, honors the completion of the Inter-American
            Highway, the common artery for seven countries from Mexico to Panama,
            which opened in April 1963. The tropical plantings in the gardens are
            of kinds found in the jungles and mountains through which the great
            highway runs. Eastman Kodak has donated 12 life-size pictures of
            highway scenes.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/panamg01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/panamg01/panamg-logo-1965.gif",
          width: 144,
          height: 129,
          alt: "",
        },
        name: (
          <>
            AVIS PAN AMERICAN
            <br />
            HIGHWAY RIDES
          </>
        ),
        nameFace: "arial",
        summary: (
          <>
            Visitors drive miniature cars along a &quot;transcontinental&quot;
            road.
          </>
        ),
        copy: (
          <>
            The trip leads past tropical gardens and replicas of Central American
            Indian statues. The surroundings simulate those of the Pan American
            Highway, running through 17 nations from Mexico to Argentina.
          </>
        ),
        admission: "Admission: 60 cents.",
      }}
      map={{
        cover: {
          src: "/images/panamg01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/panamg01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/panamgmap",
      }}
    />
  );
}

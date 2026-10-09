import type { Metadata } from "next";
import { BraraiNavChrome } from "@/components/BraraiNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Brass Rail — nywf64.com",
  description:
    "Brass Rail Food Services entries from the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Brass Rail guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy brarai01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965: not included in the Official Guide Books; entry under map column.
 * Five Locate It links: ind / int / sta / tra / amu.
 */
export default function Brarai01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Brass Rail"
      titleId="brarai01-title"
      hero={{
        src: "/images/braraioverview/hero-banner.jpg",
        alt: "Brass Rail at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<BraraiNavChrome />}
      nextHref="/brarai02"
      guide1964={{
        cover: {
          src: "/images/brarai01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/brarai01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/brarai01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        subjectDeterminer: "these",
        subjectNoun: "features",
        locates: [
          {
            areaMap: {
              src: "/images/brarai01/industrial-map.gif",
              width: 60,
              height: 54,
              alt: "Industrial area map",
            },
            locateHref: "/braraiindmap",
          },
          {
            areaMap: {
              src: "/images/brarai01/international-map.gif",
              width: 60,
              height: 54,
              alt: "International area map",
            },
            locateHref: "/braraiintmap",
          },
          {
            areaMap: {
              src: "/images/brarai01/federal-state-map.gif",
              width: 60,
              height: 54,
              alt: "Federal and State area map",
            },
            locateHref: "/braraistamap",
          },
          {
            areaMap: {
              src: "/images/brarai01/transportation-map.gif",
              width: 60,
              height: 54,
              alt: "Transportation area map",
            },
            locateHref: "/braraitramap",
          },
          {
            areaMap: {
              src: "/images/brarai01/amusement-map.gif",
              width: 60,
              height: 54,
              alt: "Amusement area map",
            },
            locateHref: "/braraiamumap",
          },
        ],
        entry: {
          logo: {
            src: "/images/brarai01/brarai-logo.jpg",
            width: 144,
            height: 94,
            alt: "",
          },
          name: "BRASS RAIL FOOD SERVICES",
          copy: (
            <>
              Twenty-five refreshment and souvenir stands operated by the Brass
              Rail Food Services organization were located throughout the
              Fairgrounds; many were topped by the distinctive
              &quot;marshmallow&quot; balloon roof.
            </>
          ),
        },
      }}
    />
  );
}

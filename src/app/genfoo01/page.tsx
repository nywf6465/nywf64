import type { Metadata } from "next";
import { GenfooNavChrome } from "@/components/GenfooNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — General Foods Arches — nywf64.com",
  description:
    "General Foods Arches entries from the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Foods Arches guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy genfoo01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 & 1965: not included in the Official Guide Books; entry under map column.
 * Five Locate It links: ind / int / sta / tra / amu (arranged like /brarai01).
 */
export default function Genfoo01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="General Foods Arches"
      titleId="genfoo01-title"
      hero={{
        src: "/images/genfoooverview/hero-banner.jpg",
        alt: "General Foods Arches at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GenfooNavChrome />}
      previousHref="/genfoooverview"
      nextHref="/genfoo02"
      guide1964={{
        cover: {
          src: "/images/genfoo01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1964 Official Guide Book",
      }}
      guide1965={{
        cover: {
          src: "/images/genfoo01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote:
          "A description of this feature was not included in the 1965 Official Guide Book",
      }}
      map={{
        cover: {
          src: "/images/genfoo01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        subjectDeterminer: "these",
        subjectNoun: "features",
        locates: [
          {
            areaMap: {
              src: "/images/genfoo01/industrial-map.gif",
              width: 60,
              height: 54,
              alt: "Industrial area map",
            },
            locateHref: "/genfooindmap",
          },
          {
            areaMap: {
              src: "/images/genfoo01/international-map.gif",
              width: 60,
              height: 54,
              alt: "International area map",
            },
            locateHref: "/genfoointmap",
          },
          {
            areaMap: {
              src: "/images/genfoo01/federal-state-map.gif",
              width: 60,
              height: 54,
              alt: "Federal and State area map",
            },
            locateHref: "/genfoostamap",
          },
          {
            areaMap: {
              src: "/images/genfoo01/transportation-map.gif",
              width: 60,
              height: 54,
              alt: "Transportation area map",
            },
            locateHref: "/genfootramap",
          },
          {
            areaMap: {
              src: "/images/genfoo01/amusement-map.gif",
              width: 60,
              height: 54,
              alt: "Amusement area map",
            },
            locateHref: "/genfooamumap",
          },
        ],
        entry: {
          logo: {
            src: "/images/genfoo01/genfoologo.gif",
            width: 33,
            height: 46,
            alt: "",
          },
          name: "GENERAL FOODS ARCHES",
          copy: (
            <>
              Eleven giant &quot;Archways To Understanding&quot; straddle the
              roadways at strategic locations throughout the Fairgrounds.
              Special bulletins on significant local, national and international
              news are flashed on the message panels. A constant flow of facts
              about happenings on and off the Fairgrounds is transmitted 15
              hours each day.
            </>
          ),
        },
      }}
    />
  );
}

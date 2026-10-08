import type { Metadata } from "next";
import { ThrridNavChrome } from "@/components/ThrridNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — Thrill Rides — nywf64.com",
  description:
    "Thrill Rides entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Thrill Rides guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy thrrid01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 column: not listed in the Official Guide Book (`omittedFromGuide`).
 */
export default function Thrrid01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Thrill Rides"
      titleId="thrrid01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/thrridoverview/hero-banner.jpg",
        alt: "Thrill Rides at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<ThrridNavChrome />}
      previousHref="/thrridoverview"
      nextHref="/thrridoverview"
      guide1964={{
        cover: {
          src: "/images/thrrid01/1964_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
        statusNote: "Thrill Rides are not listed in the 1964 Guide Book.",
      }}
      guide1965={{
        cover: {
          src: "/images/thrrid01/1965_Guide_Book.JPG",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/thrrid01/thrridlogo.gif",
          width: 144,
          height: 100,
          alt: "",
        },
        name: "THRILL RIDES",
        nameFace: "arial",
        summary: (
          <>Three different rides provide the traditional fun of a fair.</>
        ),
        copy: (
          <>
            The &quot;Flying Coaster&quot; has seats which buck at the ends of
            long arms. In the &quot;Paratrooper,&quot; buckets swing outward from
            a rotating wheel. The &quot;Looper Plane&quot; has enclosed cockpits
            which corkscrew.
          </>
        ),
        admission:
          "Admission: 35 cents each ride or three rides for $1.00. Hours: 10 a.m. to 10 p.m. or later.",
      }}
      map={{
        cover: {
          src: "/images/thrrid01/Souvenir_Map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/thrrid01/amusmlmap.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/thrridmap",
      }}
    />
  );
}

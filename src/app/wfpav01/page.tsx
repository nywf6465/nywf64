import type { Metadata } from "next";
import Link from "next/link";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";
import { WfpavNavChrome } from "@/components/WfpavNavChrome";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map Entries — World's Fair Pavilion — nywf64.com",
  description:
    "World's Fair Pavilion entries from the 1964 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * World's Fair Pavilion guidebook page — Official Guidebook & Souvenir Map Entries.
 * Body from legacy wfpav01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964: full entry. 1965: status note (became Churchill Center).
 */
export default function Wfpav01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="World's Fair Pavilion"
      titleId="wfpav01-title"
      title="1964 & 1965 Official Guidebook & Souvenir Map Entries"
      hero={{
        src: "/images/wfpavoverview/hero-banner.jpg",
        alt: "World's Fair Pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WfpavNavChrome />}
      previousHref="/wfpavoverview"
      nextHref="/wfpav02"
      guide1964={{
        cover: {
          src: "/images/wfpav01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/wfpav01/wfpavlogo64.gif",
          width: 144,
          height: 69,
          alt: "",
        },
        name: (
          <>
            THE WORLD&apos;S FAIR
            <br />
            PAVILION
          </>
        ),
        copy: (
          <>
            This is the Fair&apos;s major indoor assembly hall. The light
            latticework structure is a geodesic dome composed of 1,250
            interconnected pieces of aluminum tubing; weatherproof vinyl lines
            the inside; no internal supports obstruct the view. Some 2,100 seats
            radiate from a stage designed to accommodate some of the Olympic
            trials, television productions and conventions. Here, also, during
            the course of the Fair, will be held such divergent activities as
            jazz concerts and the junior A.A.U. weightlifting championships.
          </>
        ),
        admission: "Admission: free.",
      }}
      guide1965={{
        cover: {
          src: "/images/wfpav01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The World&apos;s Fair Pavilion was open for the 1964 Season. In 1965
            this building was the{" "}
            <Link href="/chucen01">Churchill Center</Link>.
          </>
        ),
      }}
      map={{
        cover: {
          src: "/images/wfpav01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/wfpav01/industrial-map.gif",
          width: 60,
          height: 54,
          alt: "Industrial area map",
        },
        locateHref: "/wfpavmap",
      }}
    />
  );
}

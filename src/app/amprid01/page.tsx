import type { Metadata } from "next";
import { AmpridNavChrome } from "@/components/AmpridNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Amphicar Ride — nywf64.com",
  description:
    "Amphicar Ride entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Amphicar Ride guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy amprid01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964 column: not included in the Official Guide Book (`omittedFromGuide`).
 */
export default function Amprid01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Amphicar Ride"
      titleId="amprid01-title"
      hero={{
        src: "/images/ampridoverview/hero-banner.jpg",
        alt: "Amphicar Ride at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmpridNavChrome />}
      previousHref="/ampridoverview"
      nextHref="/amprid02"
      guide1964={{
        cover: {
          src: "/images/amprid01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        omittedFromGuide: true,
      }}
      guide1965={{
        cover: {
          src: "/images/amprid01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/amprid01/ampcar-logo.gif",
          width: 144,
          height: 103,
          alt: "",
        },
        name: "AMPHICAR RIDE",
        nameFace: "arial",
        summary: (
          <>
            Amphibious autos take three passengers at a time over land and into
            the lake and back.
          </>
        ),
        copy: (
          <>
            The Amphicar, built in West Germany for sale to the public, looks
            like a regular sports convertible but has a waterproof bottom and
            sides, and twin propellers. Fairgoers ride down a ramp into Meadow
            Lake; after a short cruise they are back on land again, safe and
            dry.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/amprid01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/amprid01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/ampridmap",
      }}
    />
  );
}

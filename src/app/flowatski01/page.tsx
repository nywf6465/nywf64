import type { Metadata } from "next";
import Link from "next/link";
import { FlowatskiNavChrome } from "@/components/FlowatskiNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Florida Citrus Water Ski Show — nywf64.com",
  description:
    "Florida Citrus Water Ski Show entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

const SHOW_NAME = (
  <>
    FLORIDA CITRUS
    <br />
    WATER SKI SHOW
  </>
);

/**
 * Florida Citrus Water Ski Show guidebook page.
 * Body from legacy flowatski01.html. Layout: GuidebookSouvenirPage (/bell01).
 * 1964: status note only (show appeared in 1965). Locate It → /flowatskimap.
 */
export default function Flowatski01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Florida Citrus Water Ski Show"
      titleId="flowatski01-title"
      hero={{
        src: "/images/flowatskioverview/hero-banner.jpg",
        alt: "Florida Citrus Water Ski Show at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<FlowatskiNavChrome />}
      previousHref="/flowatskioverview"
      nextHref="/flowatski02"
      guide1964={{
        cover: {
          src: "/images/flowatski01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            The Florida Citrus Water Ski Show appeared in 1965. In 1964, the{" "}
            <Link href="/ampthe01">Amphitheatre</Link> housed &quot;
            <Link href="/ampthe01">Wonder World</Link>.&quot;
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/flowatski01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/flowatski01/forcitlogo.gif",
          width: 144,
          height: 80,
          alt: "",
        },
        name: SHOW_NAME,
        nameFace: "arial",
        summary: <>Experts put on an exciting display of aquatic skills.</>,
        copy: (
          <>
            In a show sponsored by the Florida Citrus Commission, teams of
            performers water ski behind fast boats, doing intricate acrobatics,
            formations and jumps, four times every day between noon and 6 p.m. A
            highlight of the Seattle Century 21 Exposition, the show is staged
            on a specially constructed, doughnut-shaped pool in the Amphitheater
            first used at the 1939/1940 Fair.
          </>
        ),
        admission: "Admission: free.",
      }}
      map={{
        cover: {
          src: "/images/flowatski01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/flowatski01/amusmlmap.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/flowatskimap",
      }}
    />
  );
}

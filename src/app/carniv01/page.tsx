import type { Metadata } from "next";
import Link from "next/link";
import { CarnivNavChrome } from "@/components/CarnivNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Carnival — nywf64.com",
  description:
    "Carnival entries from the 1965 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carnival guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy carniv01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: site was Texas Pavilions and Music Hall. Locate It → /carnivmap (Amusement Area).
 */
export default function Carniv01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Carnival"
      titleId="carniv01-title"
      hero={{
        src: "/images/carnivoverview/hero-banner.jpg",
        alt: "Carnival at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CarnivNavChrome />}
      previousHref="/carnivoverview"
      nextHref="/carniv02"
      guide1964={{
        cover: {
          src: "/images/carniv01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: (
          <>
            Carnival was open for the 1965 Season. In 1964 this attraction housed
            the <Link href="/texas01">Texas Pavilions and Music Hall</Link>.
          </>
        ),
      }}
      guide1965={{
        cover: {
          src: "/images/carniv01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/carniv01/texas-logo.gif",
          width: 144,
          height: 76,
          alt: "",
        },
        name: "CARNIVAL",
        nameFace: "arial",
        summary: (
          <>
            Fairground rides for all ages are combined with an aquarium and with
            restaurants that offer entertainment.
          </>
        ),
        copy: (
          <>
            Inside this colorful structure are half a dozen rides specially
            scaled down for youngsters. Outside are other, larger rides that
            include the &quot;Wild Mouse,&quot; a roller coaster and
            &quot;Scooter&quot; bumper cars.
          </>
        ),
        highlights: [
          {
            label: "THE SEA AQUARIUM.",
            labelFace: "arial",
            body: (
              <>
                In a replica of an ocean liner, tanks of fish may be viewed
                through portholes.
              </>
            ),
          },
          {
            label: "RESTAURANTS.",
            labelFace: "arial",
            body: (
              <>
                The Frontier Palace offers a varied menu and can-can dancers. The
                Carnival Club features discotheque dancing.
              </>
            ),
          },
        ],
        admission:
          "Admission: children's rides, 20 and 25 cents each (3 for 50 cents, 7 for $1.00); adult rides, 35 cents and up. Hours: 10 a.m. to 2 a.m.",
      }}
      map={{
        cover: {
          src: "/images/carniv01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/carniv01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/carnivmap",
      }}
    />
  );
}

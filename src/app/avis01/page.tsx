import type { Metadata } from "next";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Avis Antique Car Ride — nywf64.com",
  description:
    "Avis Antique Car Ride entries from the 1964 and 1965 Official Guide Books and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Avis Antique Car Ride guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy avis01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * Fonts follow legacy face tags: Times where unset, Arial where face="Arial".
 * Legacy typos in the 1965 column (“Each cars”, “childrne”) are preserved.
 */
export default function Avis01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Avis Antique Car Ride"
      titleId="avis01-title"
      hero={{
        src: "/images/avisoverview/hero-banner.jpg",
        alt: "Avis Antique Car Ride at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AvisNavChrome />}
      previousHref="/avisoverview"
      nextHref="/avis02"
      guide1964={{
        cover: {
          src: "/images/avis01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/avis01/avis-logo-1964.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: (
          <>
            AVIS ANTIQUE
            <br />
            CAR RIDE
          </>
        ),
        copy: (
          <>
            Open-topped antique cars, reproduced to five-eighths scale, provide
            a pleasant ride through an old-fashioned country setting. Each car
            seats up to five, and anyone 10 years or over can drive. A single
            pedal - accelerator and brake combined - controls the one-cylinder
            engine that pushes the cars along at a top speed of four miles an
            hour; the ride takes four minutes. Avis also operates a rental
            service for automobiles and power boats at the Marina landing.
          </>
        ),
        admission: "Admission to ride: adults, 53 cents, children, 37 cents.",
      }}
      guide1965={{
        cover: {
          src: "/images/avis01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/avis01/avis-logo-1965.gif",
          width: 144,
          height: 75,
          alt: "",
        },
        name: (
          <>
            AVIS ANTIQUE
            <br />
            CAR RIDE
          </>
        ),
        nameFace: "arial",
        summary: (
          <>
            Models of antique open-topped autos take visitors on a four-minute
            ride down an old-fashioned country lane.
          </>
        ),
        copy: (
          <>
            Each cars seats up to five and anyone 10 years or older can drive.
            Top speed is 6 mph. Avis also has a car and power-boat rental
            service at the Marina.
          </>
        ),
        admission: "Admission to ride: adults, 55 cents; childrne, 40 cents",
      }}
      map={{
        cover: {
          src: "/images/avis01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/avis01/transportation-map.gif",
          width: 60,
          height: 54,
          alt: "Transportation area map",
        },
        locateHref: "/avismap",
      }}
    />
  );
}

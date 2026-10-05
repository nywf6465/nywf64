import type { Metadata } from "next";
import { CarparNavChrome } from "@/components/CarparNavChrome";
import { GuidebookSouvenirPage } from "@/components/GuidebookSouvenirPage";

export const metadata: Metadata = {
  title:
    "1964 & 1965 Official Guidebook & Souvenir Map — Carousel Park — nywf64.com",
  description:
    "Carousel Park entries from the 1965 Official Guide Book and the 1964 Official Souvenir Map — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carousel Park guidebook page — Official Guidebook & Souvenir Map.
 * Body from legacy carpar01.html. Layout: GuidebookSouvenirPage (/bell01 standard).
 * 1964: not listed in the Guide Book. Locate It → /carparmap (Amusement Area).
 */
export default function Carpar01Page() {
  return (
    <GuidebookSouvenirPage
      heroLabel="Carousel Park"
      titleId="carpar01-title"
      hero={{
        src: "/images/carparoverview/hero-banner.jpg",
        alt: "Carousel Park at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<CarparNavChrome />}
      previousHref="/carparoverview"
      nextHref="/carpar02"
      guide1964={{
        cover: {
          src: "/images/carpar01/guide1964.jpg",
          width: 136,
          height: 216,
        },
        statusNote: "Carousel Park is not listed in the 1964 Guide Book.",
      }}
      guide1965={{
        cover: {
          src: "/images/carpar01/guide1965.jpg",
          width: 136,
          height: 216,
        },
        logo: {
          src: "/images/carpar01/carpar-logo.gif",
          width: 144,
          height: 84,
          alt: "",
        },
        name: "CAROUSEL PARK",
        nameFace: "arial",
        summary: (
          <>
            Visitors can ride an oldtime merry-go-round and relax at snack bars
            and picnic tables.
          </>
        ),
        copy: (
          <>
            The 62-year-old carousel, a top attraction at Coney Island in the
            early days of the century, has 72 hand-carved wooden animals; music
            is provided by two vintage German band organs, one of which is the
            largest in the world. Visitors who hook the brass ring ride for free.
          </>
        ),
        highlights: [
          {
            label: "BOARDWALK FUN.",
            labelFace: "arial",
            body: (
              <>
                On the boardwalk, stands sell light meals, beer and soft drinks,
                pizza, ice cream and souvenirs. A clown and a baby elephant are
                on hand.
              </>
            ),
          },
        ],
        admission: "Admission: free; rides, 25 cents. Hours: 10 a.m. to 12 p.m.",
      }}
      map={{
        cover: {
          src: "/images/carpar01/souvenir-map.jpg",
          width: 110,
          height: 216,
        },
        areaMap: {
          src: "/images/carpar01/amusement-map.gif",
          width: 60,
          height: 54,
          alt: "Amusement area map",
        },
        locateHref: "/carparmap",
      }}
    />
  );
}

import type { Metadata } from "next";
import { AvisNavChrome } from "@/components/AvisNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Avis Antique Car Ride — nywf64.com",
  description:
    "Avis Antique Car Ride photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Avis Antique Car Ride photograph album — “photographs” standard.
 * Body from legacy avis03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Avis03Page() {
  return (
    <PhotographsPage
      heroLabel="Avis Antique Car Ride"
      titleId="avis03-title"
      hero={{
        src: "/images/avisoverview/hero-banner.jpg",
        alt: "Avis Antique Car Ride at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AvisNavChrome />}
      previousHref="/avis02"
      overviewHref="/avisoverview"
      nextHref="/avis04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/avis03/commercial-blackhawk.jpg",
                width: 400,
                height: 267,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/avis03/commercial-wolfe.jpg",
                width: 400,
                height: 263,
                alt: "Antique Car Ride by Avis",
              },
              title: "Antique Car Ride by Avis",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/avis03/commercial-roloc.jpg",
                width: 400,
                height: 274,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/avis03/fairgoer-07.jpg",
                width: 400,
                height: 264,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-08.jpg",
                width: 400,
                height: 264,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-09.jpg",
                width: 400,
                height: 268,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-driving.jpg",
                width: 400,
                height: 269,
                alt: "Driving an Avis Antique Car",
              },
              title: "Driving an Avis Antique Car",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-10.jpg",
                width: 400,
                height: 270,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-15.jpg",
                width: 400,
                height: 286,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-12.jpg",
                width: 400,
                height: 287,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-14.jpg",
                width: 400,
                height: 293,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-17.jpg",
                width: 400,
                height: 288,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-16.jpg",
                width: 400,
                height: 293,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/avis03/fairgoer-13.jpg",
                width: 400,
                height: 301,
                alt: "Avis Antique Car Ride",
              },
              title: "Avis Antique Car Ride",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/avis03/publication-anachronisms.jpg",
                width: 300,
                height: 338,
                alt: "Anachronisms — Avis Antique Autos",
              },
              title:
                "Anachronisms in our jet-space age, but great for laughs, are Avis' Antique Autos. Youth in the driver's seat is a real drag as cars pile up upon emerging from covered bridge.",
              source: (
                <>
                  SOURCE: News Colorfoto by Richard Lewis,{" "}
                  <em>New York Sunday News</em>, July 11, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

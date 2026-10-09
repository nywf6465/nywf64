import type { Metadata } from "next";
import { FoucaultNavChrome } from "@/components/FoucaultNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Fountains of the Fairs — nywf64.com",
  description:
    "Fountains of the Fairs photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountains of the Fairs photograph album — “photographs” standard.
 * Body from legacy foufai04.html (Photograph Scrap Book banner omitted).
 * Preserve legacy typo (Onlinbe).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Foufai04Page() {
  return (
    <PhotographsPage
      heroLabel="Fountains of the Fairs"
      titleId="foufai04-title"
      hero={{
        src: "/images/foufaioverview/hero-banner.jpg",
        alt: "Fountains of the Fairs at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FoucaultNavChrome />}
      previousHref="/foufai03"
      overviewHref="/foufaioverview"
      nextHref="/foufaioverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/foufai04/fount50.jpg",
                width: 460,
                height: 107,
                alt: "Aerial View shows the East Pond with Fountains of the Fairs",
              },
              title:
                "Aerial View shows the East Pond with Fountains of the Fairs",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/foufai04/S313C.jpg",
                width: 400,
                height: 404,
                alt: "The Rocket Thrower and the Fountain of the Fairs",
              },
              title: "The Rocket Thrower and the Fountain of the Fairs",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/foufai04/555-06.jpg",
                width: 400,
                height: 264,
                alt: "Fountain of the Fairs",
              },
              title: "Fountain of the Fairs",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/foufai04/633-99.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere, The Rocket Thrower and the Fountain of the Fairs",
              },
              title:
                "Unisphere, The Rocket Thrower and the Fountain of the Fairs",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/foufai04/fount115.jpg",
                width: 400,
                height: 274,
                alt: "Unisphere, The Rocket Thrower and the Fountain of the Fairs",
              },
              title:
                "Unisphere, The Rocket Thrower and the Fountain of the Fairs",
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
                src: "/images/foufai04/fount43.jpg",
                width: 300,
                height: 433,
                alt: "Fountain of the Fairs in the East Pond looking toward Unisphere",
              },
              title:
                "Fountain of the Fairs in the East Pond looking toward Unisphere",
              source: "SOURCE: \u00a9 Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/foufai04/fount45.jpg",
                width: 300,
                height: 427,
                alt: "Fountain of the Fairs' graceful arches of water",
              },
              title: "Fountain of the Fairs' graceful arches of water",
              source: "SOURCE: \u00a9 Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/foufai04/fount44.jpg",
                width: 400,
                height: 264,
                alt: "The East Pond and the Fountain of the Fairs",
              },
              title: "The East Pond and the Fountain of the Fairs",
              source: "SOURCE: \u00a9 Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/foufai04/fount138.jpg",
                width: 400,
                height: 273,
                alt: "Fountain of the Fairs",
              },
              title: "Fountain of the Fairs",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/foufai04/fount21.jpg",
                width: 400,
                height: 268,
                alt: "Fountain of the Fairs",
              },
              title: "Fountain of the Fairs",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/foufai04/fount97.jpg",
                width: 320,
                height: 221,
                alt: "The East and West Ponds showing the Fountain of the Fairs as seen from the Swiss Sky Ride",
              },
              title:
                "The East and West Ponds showing the Fountain of the Fairs as seen from the Swiss Sky Ride",
              source: "SOURCE: Onlinbe auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/foufai04/fount37-collage.jpg",
                width: 699,
                height: 438,
                alt: "Fountain of the Fairs — Electrical Construction and Maintenance magazine photographs",
              },
              source: (
                <>
                  SOURCE: Magazine <em>Electrical Construction and Maintenance</em>
                  , July 1964 - presented courtesy Wayne Bretl Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

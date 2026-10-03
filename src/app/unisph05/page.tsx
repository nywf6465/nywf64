import type { Metadata } from "next";
import { UnisphNavChrome } from "@/components/UnisphNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Unisphere — nywf64.com",
  description:
    "Unisphere photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Unisphere photograph album I — “photographs” standard.
 * Body from legacy unisph05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Unisph05Page() {
  return (
    <PhotographsPage
      heroLabel="Unisphere"
      titleId="unisph05-title"
      title="Photograph Album I"
      hero={{
        src: "/images/unisphoverview/hero-banner.jpg",
        alt: "Unisphere at the 1964/1965 New York World’s Fair",
        width: 1914,
        height: 822,
      }}
      nav={<UnisphNavChrome />}
      previousHref="/unisph04"
      overviewHref="/unisphoverview"
      nextHref="/unisph06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/unisph05/arch-5401Large.jpg",
                width: 257,
                height: 400,
                alt: "Artist's rendering of Unisphere - Blue",
              },
              title: "Artist's rendering of Unisphere - Blue",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/arch-S-180ALarge.jpg",
                width: 400,
                height: 400,
                alt: "Artist's rendering of Unisphere - Red",
              },
              title: "Artist's rendering of Unisphere - Red",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/arch-5404Large.jpg",
                width: 400,
                height: 311,
                alt: "Artist Weinrich's rendering of Unisphere",
              },
              title: "Artist Weinrich's rendering of Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/arch-S-181ALarge.jpg",
                width: 400,
                height: 361,
                alt: "Artist's rendering of the Main Mall with Unisphere & The Rocket Thrower",
              },
              title: "Artist's rendering of the Main Mall with Unisphere & The Rocket Thrower",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/photolab-5643.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere - Dusk",
              },
              title: "Unisphere - Dusk",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/photolab-5650.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere - Evening",
              },
              title: "Unisphere - Evening",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/photolab-5501.jpg",
                width: 400,
                height: 268,
                alt: "Unisphere - Evening",
              },
              title: "Unisphere - Evening",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/photolab-5531.jpg",
                width: 400,
                height: 269,
                alt: "Unisphere and the Pool of Reflections",
              },
              title: "Unisphere and the Pool of Reflections",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/photolab-S313A.jpg",
                width: 400,
                height: 403,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/mainliner-633-99.jpg",
                width: 400,
                height: 267,
                alt: "Unisphere and Fountain of the Fairs",
              },
              title: "Unisphere and Fountain of the Fairs",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unisph05/wolfe-79022Large.jpg",
                width: 400,
                height: 261,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unisph05/wolfe-79023Large.jpg",
                width: 400,
                height: 264,
                alt: "Unisphere and the Pool of Reflections",
              },
              title: "Unisphere and the Pool of Reflections",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unisph05/mainliner-633-100.jpg",
                width: 400,
                height: 272,
                alt: "Unisphere - Night",
              },
              title: "Unisphere - Night",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unisph05/wolfe-79000Large.jpg",
                width: 400,
                height: 262,
                alt: "Unisphere and Fountains of the Continents - Dusk",
              },
              title: "Unisphere and Fountains of the Continents - Dusk",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unisph05/photolab-S305A.jpg",
                width: 400,
                height: 386,
                alt: "Unisphere and the Court of Nations",
              },
              title: "Unisphere and the Court of Nations",
              source: "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unisph05/mainliner-555-05.jpg",
                width: 271,
                height: 400,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unisph05/mainliner-633-07.jpg",
                width: 400,
                height: 271,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unisph05/wolfe-79037Large.jpg",
                width: 400,
                height: 264,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unisph05/wolfe-79038Large.jpg",
                width: 400,
                height: 262,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unisph05/wolfe-79067Large.jpg",
                width: 262,
                height: 400,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unisph05/unisph-unisph251.jpg",
                width: 400,
                height: 273,
                alt: "Unisphere from the Swiss Sky Ride",
              },
              title: "Unisphere from the Swiss Sky Ride",
              source: "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/unisph05/unisph-unisph11.jpg",
                width: 450,
                height: 371,
                alt: "Unisphere",
              },
              title: "Unisphere",
              source: "SOURCE: NY World's Fair Corporation publicity photo nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unisph05/unisph-unisph271.jpg",
                width: 300,
                height: 384,
                alt: "Rocketman Cirlces the Unisphere",
              },
              title: "Rocketman Cirlces the Unisphere",
              source: "SOURCE: Getty Images",
            },
            {
              image: {
                src: "/images/unisph05/unisph-unisph272.jpg",
                width: 400,
                height: 320,
                alt: "Unisphere Aerial View",
              },
              title: "Unisphere Aerial View",
              source: "SOURCE: NY World's Fair Corporation publicity photo",
            }
          ],
        },
      ]}
    />
  );
}

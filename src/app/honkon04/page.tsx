import type { Metadata } from "next";
import { HonkonNavChrome } from "@/components/HonkonNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Hong Kong — nywf64.com",
  description:
    "Hong Kong pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hong Kong photograph album — “photographs” standard.
 * Body from legacy honkon04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Honkon04Page() {
  return (
    <PhotographsPage
      heroLabel="Hong Kong"
      titleId="honkon04-title"
      hero={{
        src: "/images/honkonoverview/hero-banner.jpg",
        alt: "Hong Kong at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HonkonNavChrome />}
      previousHref="/honkon03"
      overviewHref="/honkonoverview"
      nextHref="/honkonoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/honkon04/architect-rendering.jpg",
                width: 400,
                height: 387,
                alt: "Architect's rendering of the Hong Kong Pavilion",
              },
              title: "Architect's rendering of the Hong Kong Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/honkon04/night.jpg",
                width: 400,
                height: 391,
                alt: "Hong Kong Pavilion - Night",
              },
              title: "Hong Kong Pavilion - Night",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/honkon04/pavilion.jpg",
                width: 400,
                height: 391,
                alt: "Hong Kong Pavilion",
              },
              title: "Hong Kong Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/honkon04/pavilion-mainliner.jpg",
                width: 400,
                height: 267,
                alt: "Hong Kong Pavilion",
              },
              title: "Hong Kong Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/honkon04/junks.jpg",
                width: 260,
                height: 400,
                alt: "Junks alongside the Hong Kong Pavilion",
              },
              title: "Junks alongside the Hong Kong Pavilion ",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/honkon04/dusk.jpg",
                width: 400,
                height: 262,
                alt: "Hong Kong Pavilion at dusk",
              },
              title: "Hong Kong Pavilion at dusk",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/honkon04/aerial.jpg",
                width: 400,
                height: 273,
                alt: "Hong Kong Pavilion aerial view",
              },
              title: "Hong Kong Pavilion aerial view",
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
                src: "/images/honkon04/fairgoer.jpg",
                width: 400,
                height: 402,
                alt: "Hong Kong Pavilion",
              },
              title: "Hong Kong Pavilion ",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/honkon04/fairgoer-night.jpg",
                width: 400,
                height: 400,
                alt: "Hong Kong Pavilion Illuminated at Night",
              },
              title: "Hong Kong Pavilion Illuminated at Night",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/honkon04/publication-gateway.jpg",
                width: 400,
                height: 260,
                alt: "Hong Kong pavilion and gateway with Crown Colony Club",
              },
              title:
                "Gay and ornate are Hong Kong's pavilion and gateway at left. At right, adjoining three Chinese junks front Crown Colony Club. Stern of middle one is entrance.",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, June 21, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/honkon04/publication-model.jpg",
                width: 400,
                height: 254,
                alt: "Exquisite detailed model of the Hong Kong Pavilion",
              },
              title: "Exquisite detailed model of the Hong Kong Pavilion",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair{" "}
                  <em>Progress Report No. 8,</em> April 22, 1963
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

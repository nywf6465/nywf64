import type { Metadata } from "next";
import { AstfountNavChrome } from "@/components/AstfountNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Astral Fountain — nywf64.com",
  description:
    "Astral Fountain photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Astral Fountain photograph album — “photographs” standard.
 * Body from legacy astfount04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Astfount04Page() {
  return (
    <PhotographsPage
      heroLabel="Astral Fountain"
      titleId="astfount04-title"
      hero={{
        src: "/images/astfountoverview/hero-banner.jpg",
        alt: "Astral Fountain at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<AstfountNavChrome />}
      previousHref="/astfount03"
      overviewHref="/astfount01"
      nextHref="/astfount05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/astfount04/construction.jpg",
                width: 400,
                height: 325,
                alt: "Construction of the Astral Fountain",
              },
              title: "Construction of the Astral Fountain",
              source:
                "SOURCE: NY World's Fair Corporation publicity photo courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/astfount04/artist-rendering-day.jpg",
                width: 400,
                height: 278,
                alt: "Artist's rendering - Astral Fountain by day",
              },
              title: "Artist's rendering - Astral Fountain by day",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/astfount04/spectacular-fountain.jpg",
                width: 267,
                height: 400,
                alt: "Spectacular Fountain",
              },
              title: "Spectacular Fountain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/astfount04/federal-state-area.jpg",
                width: 266,
                height: 400,
                alt: "Astral Fountain - Federal and State Area",
              },
              title: "Astral Fountain - Federal and State Area",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/astfount04/fretwork-rotation.jpg",
                width: 400,
                height: 272,
                alt: "Astral Fountain showing rotation of the fretwork",
              },
              title: "Astral Fountain showing rotation of the fretwork",
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
                src: "/images/astfount04/vatican-pavilion.jpg",
                width: 400,
                height: 282,
                alt: "Astral Fountain & Vatican Pavilion",
              },
              title: "Astral Fountain & Vatican Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/astfount04/astral-fountain.jpg",
                width: 400,
                height: 267,
                alt: "Astral Fountain",
              },
              title: "Astral Fountain",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/astfount04/late-afternoon.jpg",
                width: 300,
                height: 371,
                alt: "Astral Fountain in late afternoon sunlight",
              },
              title: "Astral Fountain in late afternoon sunlight",
              source: "SOURCE: \u00a9 Copyright Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/astfount04/astral-fountain-2.jpg",
                width: 400,
                height: 419,
                alt: "Astral Fountain",
              },
              title: "Astral Fountain",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/astfount04/fretwork-detail-lights.jpg",
                width: 297,
                height: 400,
                alt: "Detail of the fountain fretwork - note the miniature lights in the middle of the stars",
              },
              title:
                "Detail of the fountain fretwork - note the miniature lights in the middle of the stars",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/astfount04/fretwork-detail-night.jpg",
                width: 400,
                height: 377,
                alt: "Detail of the fountain fretwork at night",
              },
              title:
                "Detail of the fountain fretwork at night. The miniature lights in the center of the stars can be seen. Close examination shows that the stars had four nozzles located around the center and streams of water would cascade from the nozzles. This feature was discontinued shortly after the opening of the Fair because too much spray was falling on Fairgoers. Looking closely at this photo, the streams of water can be see cascading from the fretwork.",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/astfount04/single-star.jpg",
                width: 400,
                height: 300,
                alt: "Detail of a single star",
              },
              title:
                "Detail of a single star. Note the four holes that the water would have cascaded from. The center circle would have contained a light bulb.",
              source: "SOURCE: \u00a9 Copyright Gary Holmes Collection",
            },
            {
              image: {
                src: "/images/astfount04/star-scale.jpg",
                width: 400,
                height: 300,
                alt: "Star in front of a vehicle showing fountain scale",
              },
              title:
                "This view of a star in front of a vechicle gives some idea as to the size and scale of the fountain. It was immense!",
              source: "SOURCE: \u00a9 Copyright Gary Holmes Collection",
            },
            {
              image: {
                src: "/images/astfount04/2001-before-removal-a.jpg",
                width: 360,
                height: 240,
                alt: "The Astral Fountain c. 2001 before it was removed to make way for a skate park",
              },
              title:
                "The Astral Fountain c. 2001 before it was removed to make way for a skate park",
              source: "SOURCE: \u00a9 Copyright Bruce Mentone Collection",
            },
            {
              image: {
                src: "/images/astfount04/2001-before-removal-b.jpg",
                width: 360,
                height: 240,
                alt: "The Astral Fountain c. 2001 before it was removed to make way for a skate park",
              },
              title:
                "The Astral Fountain c. 2001 before it was removed to make way for a skate park",
              source: "SOURCE: \u00a9 Copyright Bruce Mentone Collection",
            },
          ],
        },
      ]}
    />
  );
}

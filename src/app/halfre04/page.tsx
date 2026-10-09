import type { Metadata } from "next";
import { HalfreNavChrome } from "@/components/HalfreNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Hall of Free Enterprise — nywf64.com",
  description:
    "Hall of Free Enterprise photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Free Enterprise photograph album — “photographs” standard.
 * Body from legacy halfre04.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 * Last Hall of Free Enterprise topic — NEXT returns to overview.
 */
export default function Halfre04Page() {
  return (
    <PhotographsPage
      heroLabel="Hall of Free Enterprise"
      titleId="halfre04-title"
      hero={{
        src: "/images/halfreoverview/hero-banner.jpg",
        alt: "Hall of Free Enterprise at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HalfreNavChrome />}
      previousHref="/halfre03"
      overviewHref="/halfreoverview"
      nextHref="/halfreoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/halfre04/5426Large.jpg",
                width: 400,
                height: 279,
                alt: "Artist's rendering of the Hall of Free Enterprise",
              },
              title: "Artist's rendering of the Hall of Free Enterprise",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/halfre04/555-58.jpg",
                width: 400,
                height: 267,
                alt: "Hall of Free Enterprise",
              },
              title: "Hall of Free Enterprise",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/halfre04/79100Large.jpg",
                width: 400,
                height: 269,
                alt: "Fruits of our Labor Tree in the Hall of Free Enterprise",
              },
              title: "Fruits of our Labor Tree in the Hall of Free Enterprise",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
          ],
        },
      ]}
    />
  );
}

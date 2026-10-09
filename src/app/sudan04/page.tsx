import type { Metadata } from "next";
import { SudanNavChrome } from "@/components/SudanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Sudan — nywf64.com",
  description:
    "Sudan pavilion gallery of photographs — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sudan photograph gallery — “photographs” standard with legacy title.
 * Body from legacy sudan04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Navy title follows legacy: “Gallery of Photographs”.
 */
export default function Sudan04Page() {
  return (
    <PhotographsPage
      heroLabel="Sudan"
      titleId="sudan04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/sudanoverview/hero-banner.jpg",
        alt: "Sudan pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SudanNavChrome />}
      previousHref="/sudan03"
      overviewHref="/sudanoverview"
      nextHref="/sudanoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sudan04/photolab-5498.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Sudan",
              },
              title: "Pavilion of Sudan",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sudan04/mainliner-633-46.jpg",
                width: 400,
                height: 267,
                alt: "Sudan Pavilion",
              },
              title: "Sudan Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sudan04/mainliner-555-63.jpg",
                width: 267,
                height: 400,
                alt: "Sudan Pavilion",
              },
              title: "Sudan Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sudan04/sudan01.jpg",
                width: 400,
                height: 270,
                alt: "Sudan Pavilion",
              },
              title: "Sudan Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/sudan04/sudan04.jpg",
                width: 400,
                height: 293,
                alt: "Sudan Pavilion",
              },
              title: "Sudan Pavilion",
              source: 'SOURCE: Screen Shot - Film "To the Fair"',
            },
          ],
        },
      ]}
    />
  );
}

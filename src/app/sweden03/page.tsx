import type { Metadata } from "next";
import { SwedenNavChrome } from "@/components/SwedenNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Sweden — nywf64.com",
  description:
    "Sweden pavilion gallery of photographs — commercial and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sweden photograph gallery — “photographs” standard with legacy title.
 * Body from legacy sweden03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Navy title follows legacy: “Gallery of Photographs”.
 */
export default function Sweden03Page() {
  return (
    <PhotographsPage
      heroLabel="Sweden"
      titleId="sweden03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/swedenoverview/hero-banner.jpg",
        alt: "Sweden pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwedenNavChrome />}
      previousHref="/sweden02"
      overviewHref="/swedenoverview"
      nextHref="/swedenoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sweden03/photolab-5517.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Sweden",
              },
              title: "Pavilion of Sweden",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sweden03/mainliner-555-59.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Sweden",
              },
              title: "Pavilion of Sweden",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sweden03/mainliner-633-58.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Sweden",
              },
              title: "Pavilion of Sweden",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sweden03/sweden04.jpg",
                width: 400,
                height: 274,
                alt: "Pavilon of Sweden",
              },
              title: "Pavilon of Sweden",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/sweden03/sweden05.jpg",
                width: 400,
                height: 274,
                alt: "Pavilon of Sweden and Pavilion of Paris in foreground",
              },
              title: "Pavilon of Sweden and Pavilion of Paris in foreground",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/sweden03/sweden06.jpg",
                width: 400,
                height: 322,
                alt: "Pavilon of Sweden",
              },
              title: "Pavilon of Sweden",
              source: "SOURCE: NY World's Fair Corporation Publicity Photo",
            },
            {
              image: {
                src: "/images/sweden03/sweden03.jpg",
                width: 600,
                height: 345,
                alt: "Swedish Pavilion",
              },
              title: "Swedish Pavilion",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Publication{" "}
                  <em>
                    For Those Who Produced the New York World&apos;s Fair
                    1964-1965
                  </em>
                </>
              ),
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/sweden03/sweden01.jpg",
                width: 475,
                height: 335,
                alt: "Within this royal blue pavilion are an outstanding restaurant, a Stockholm department store branch and industrial and commercial exhibits.",
              },
              title: (
                <>
                  <strong>Within this royal</strong> blue pavilion are an
                  outstanding restaurant, a Stockholm department store branch and
                  industrial and commercial exhibits.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, August 30, 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

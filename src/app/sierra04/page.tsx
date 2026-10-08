import type { Metadata } from "next";
import { SierraNavChrome } from "@/components/SierraNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Sierra Leone — nywf64.com",
  description:
    "Sierra Leone pavilion photograph gallery from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sierra Leone photograph gallery — “photographs” standard.
 * Body from legacy sierra04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sierra04Page() {
  return (
    <PhotographsPage
      heroLabel="Sierra Leone"
      titleId="sierra04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/sierraoverview/hero-banner.jpg",
        alt: "Sierra Leone pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SierraNavChrome />}
      previousHref="/sierra03"
      overviewHref="/sierraoverview"
      nextHref="/sierra05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sierra04/5447Large.jpg",
                width: 400,
                height: 282,
                alt: "Artist's rendering of the Sierra Leone Pavilion",
              },
              title: "Artist's rendering of the Sierra Leone Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sierra04/555-62.jpg",
                width: 400,
                height: 267,
                alt: "Sierra Leone Pavilion",
              },
              title: "Sierra Leon Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sierra04/633-50.jpg",
                width: 400,
                height: 267,
                alt: "Sierra Leone Pavilion",
              },
              title: "Sierra Leon Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/sierra04/sierra14.jpg",
                width: 400,
                height: 408,
                alt: "Pavilion of Sierra Leone",
              },
              title: "Pavilion of Sierra Leon",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/sierra04/sierra02.jpg",
                width: 400,
                height: 270,
                alt: "Pavilion of Sierra Leone",
              },
              title: "Pavilion of Sierra Leon",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
          ],
        },
      ]}
    />
  );
}

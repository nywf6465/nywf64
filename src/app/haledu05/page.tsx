import type { Metadata } from "next";
import { HaleduNavChrome } from "@/components/HaleduNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Hall of Education — nywf64.com",
  description:
    "Hall of Education photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Hall of Education photograph album — “photographs” standard.
 * Body from legacy haledu05.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 */
export default function Haledu05Page() {
  return (
    <PhotographsPage
      heroLabel="Hall of Education"
      titleId="haledu05-title"
      hero={{
        src: "/images/haleduoverview/hero-banner.jpg",
        alt: "Hall of Education at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<HaleduNavChrome />}
      previousHref="/haledu04"
      overviewHref="/haleduoverview"
      nextHref="/haledu06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/haledu05/S-186ALarge.jpg",
                width: 400,
                height: 388,
                alt: "Artist's rendering of the Hall of Education",
              },
              title: "Artist's rendering of the Hall of Education",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/haledu05/S309D.jpg",
                width: 400,
                height: 404,
                alt: "Hall of Education",
              },
              title: "Hall of Education",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/haledu05/democr06.jpg",
                width: 400,
                height: 418,
                alt: "Hall of Education",
              },
              title: "Hall of Education",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/haledu05/democr07.jpg",
                width: 400,
                height: 297,
                alt: "Hall of Education",
              },
              title: "Hall of Education",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/haledu05/democr05.jpg",
                width: 400,
                height: 267,
                alt: "Hall of Education and Travelers Insurance Pavilion",
              },
              title: "Hall of Education and Travelers Insurance Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}

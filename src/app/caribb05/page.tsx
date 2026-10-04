import type { Metadata } from "next";
import { CaribbNavChrome } from "@/components/CaribbNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Caribbean — nywf64.com",
  description:
    "Caribbean Pavilion photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Caribbean Pavilion photograph album — “photographs” standard.
 * Body from legacy caribb05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Caribb05Page() {
  return (
    <PhotographsPage
      heroLabel="Caribbean"
      titleId="caribb05-title"
      hero={{
        src: "/images/caribboverview/hero-banner.jpg",
        alt: "Caribbean Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<CaribbNavChrome />}
      previousHref="/caribb04"
      overviewHref="/caribboverview"
      nextHref="/caribboverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/caribb05/carrib06.jpg",
                width: 400,
                height: 269,
                alt: "Caribbean Pavilion as viewed from the Swiss Sky Ride",
              },
              title: "Caribbean Pavilion as viewed from the Swiss Sky Ride",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/caribb05/carrib07.jpg",
                width: 400,
                height: 272,
                alt: "Caribbean Pavilion",
              },
              title: "Caribbean Pavilion",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/caribb05/carrib09.jpg",
                width: 400,
                height: 268,
                alt: "Caribbean Pavilion",
              },
              title: "Caribbean Pavilion",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/caribb05/carrib04.jpg",
                width: 400,
                height: 266,
                alt: "Caribbean Pavilion",
              },
              title: "Caribbean Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/caribb05/carrib05.jpg",
                width: 400,
                height: 263,
                alt: "Caribbean Pavilion",
              },
              title: "Caribbean Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/caribb05/carrib08.jpg",
                width: 400,
                height: 268,
                alt: "Caribbean Pavilion - Dominican Republic Section",
              },
              title: "Caribbean Pavilion - Dominican Republic Section",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
          ],
        },
      ]}
    />
  );
}

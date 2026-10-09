import type { Metadata } from "next";
import { EasternNavChrome } from "@/components/EasternNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Eastern Air Lines — nywf64.com",
  description:
    "Eastern Air Lines photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastern Air Lines photograph album — “photographs” standard.
 * Body from legacy eastern04.html (Photograph Scrap Book banner omitted).
 * Navy title follows the Photograph Album standard (legacy bar said
 * “Gallery of Photographs”).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Eastern04Page() {
  return (
    <PhotographsPage
      heroLabel="Eastern Air Lines"
      titleId="eastern04-title"
      title="Photograph Album"
      hero={{
        src: "/images/easternoverview/hero-banner.jpg",
        alt: "Eastern Air Lines at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<EasternNavChrome />}
      previousHref="/eastern03"
      overviewHref="/easternoverview"
      nextHref="/eastern05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/eastern04/eastern54.jpg",
                width: 400,
                height: 342,
                alt: "Eastern Air Lines Pavilion",
              },
              title: "Eastern Air Lines Pavilion",
              source: "SOURCE: NY Worlds Fair Publicity Photo",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/eastern04/eastern01.jpg",
                width: 400,
                height: 264,
                alt: "Eastern Air Lines Pavilion in 1964",
              },
              title: "Eastern Air Lines Pavilion in 1964",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/eastern04/eastern10.jpg",
                width: 400,
                height: 245,
                alt: "Eastern Air Lines Pavilion in 1965",
              },
              title: "Eastern Air Lines Pavilion in 1965",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}

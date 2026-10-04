import type { Metadata } from "next";
import { ArgentNavChrome } from "@/components/ArgentNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Argentina — nywf64.com",
  description:
    "Argentina pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Argentina photograph album — “photographs” standard.
 * Body from legacy argent03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Argent03Page() {
  return (
    <PhotographsPage
      heroLabel="Argentina"
      titleId="argent03-title"
      hero={{
        src: "/images/argentoverview/hero-banner.jpg",
        alt: "Argentina at the 1964/1965 New York World’s Fair",
        width: 1907,
        height: 825,
      }}
      nav={<ArgentNavChrome />}
      previousHref="/argent02"
      overviewHref="/argentoverview"
      nextHref="/argent04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/argent03/commercial-exterior.jpg",
                width: 450,
                height: 361,
                alt: "Exterior view of the pavilion constructed by Argentina but never occupied by them",
              },
              title:
                "Exterior view of the pavilion constructed by Argentina but never occupied by them",
              source:
                "SOURCE: NY World's Fair Corporation publicity photo presented courtesy Craig Bavaro Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/argent03/fairgoer-pavilion.jpg",
                width: 400,
                height: 245,
                alt: "Argentina Pavilion",
              },
              title: "Argentina Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/argent03/fairgoer-red-draped.jpg",
                width: 400,
                height: 267,
                alt: "Red-draped Argentina Pavilion - behind and to the right of the Korea Pavilion",
              },
              title:
                "Red-draped Argentina Pavilion - behind and to the right of the Korea Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}

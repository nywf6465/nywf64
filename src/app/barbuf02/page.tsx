import type { Metadata } from "next";
import { BarbufNavChrome } from "@/components/BarbufNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Bargreen Buffet — nywf64.com",
  description:
    "Bargreen Buffet photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Bargreen Buffet photograph album — “photographs” standard.
 * Body from legacy barbuf02.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Barbuf02Page() {
  return (
    <PhotographsPage
      heroLabel="Bar, Buffet and Cafeteria"
      titleId="barbuf02-title"
      hero={{
        src: "/images/barbufoverview/hero-banner.jpg",
        alt: "Bar, Buffet and Cafeteria at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<BarbufNavChrome />}
      previousHref="/barbuf01"
      overviewHref="/barbufoverview"
      nextHref="/barbufoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/barbuf02/commercial-exterior.jpg",
                width: 450,
                height: 361,
                alt: "Exterior view of the Bargreen Buffet",
              },
              title: "Exterior view of the Bargreen Buffet",
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
                src: "/images/barbuf02/fairgoer-buffet.jpg",
                width: 400,
                height: 245,
                alt: "Bargreen Buffet",
              },
              title: "Bargreen Buffet",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/barbuf02/fairgoer-red-draped.jpg",
                width: 400,
                height: 267,
                alt: "Red-draped Bargreen Buffet behind and to the right of the Korea Pavilion",
              },
              title:
                "Red-draped Bargreen Buffet - behind and to the right of the Korea Pavilion",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}

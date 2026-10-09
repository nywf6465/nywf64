import type { Metadata } from "next";
import { CarparNavChrome } from "@/components/CarparNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Carousel Park — nywf64.com",
  description:
    "Carousel Park photograph album — fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Carousel Park photograph album — “photographs” standard.
 * Body from legacy carpar03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Carpar03Page() {
  return (
    <PhotographsPage
      heroLabel="Carousel Park"
      titleId="carpar03-title"
      hero={{
        src: "/images/carparoverview/hero-banner.jpg",
        alt: "Carousel Park at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<CarparNavChrome />}
      previousHref="/carpar02"
      overviewHref="/carparoverview"
      nextHref="/carparoverview"
      sections={[
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/carpar03/carousel-monorail.jpg",
                width: 400,
                height: 279,
                alt: "Carousel from AMF Monorail",
              },
              title: "Carousel from AMF Monorail",
              source: "SOURCE: Online Auction",
            },
          ],
        },
      ]}
    />
  );
}

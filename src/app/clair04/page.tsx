import type { Metadata } from "next";
import { ClairNavChrome } from "@/components/ClairNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Clairol — nywf64.com",
  description:
    "Clairol Color Carousel gallery of photographs — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Clairol photograph gallery — “photographs” standard.
 * Body from legacy clair04.html (Photograph Scrap Book banner omitted).
 * Title bar matches legacy “Gallery of Photographs”.
 * Layout: PhotographsPage (/aertow03 standard).
 * Legacy caption typos “Clariol” preserved.
 */
export default function Clair04Page() {
  return (
    <PhotographsPage
      heroLabel="Clairol"
      titleId="clair04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/clairoverview/hero-banner.jpg",
        alt: "Clairol Color Carousel at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ClairNavChrome />}
      previousHref="/clair03"
      overviewHref="/clairoverview"
      nextHref="/clair05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/clair04/79155Large.jpg",
                width: 400,
                height: 264,
                alt: "Clariol Color Carousel",
              },
              title: "Clariol Color Carousel",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/clair04/clair73.jpg",
                width: 400,
                height: 283,
                alt: "Clariol Color Carousel",
              },
              title: "Clariol Color Carousel",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/clair04/clair67.jpg",
                width: 400,
                height: 274,
                alt: "Lining up for the Clariol Color Carousel",
              },
              title: "Lining up for the Clariol Color Carousel",
              source: "SOURCE: © Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/clair04/clair72.jpg",
                width: 400,
                height: 391,
                alt: "Clariol Color Carousel",
              },
              title: "Clariol Color Carousel",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}

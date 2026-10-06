import type { Metadata } from "next";
import { BrilionNavChrome } from "@/components/BrilionNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — British Lion Pub — nywf64.com",
  description:
    "British Lion Pub photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * British Lion Pub photograph album — “photographs” standard.
 * Body from legacy brilion03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Navy title uses Photograph Album (menu / photographs standard); legacy HTML
 * title bar text was “Gallery of Photographs”.
 */
export default function Brilion03Page() {
  return (
    <PhotographsPage
      heroLabel="British Lion Pub"
      titleId="brilion03-title"
      hero={{
        src: "/images/brilionoverview/hero-banner.jpg",
        alt: "British Lion Pub at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<BrilionNavChrome />}
      previousHref="/brilion02"
      overviewHref="/brilionoverview"
      nextHref="/brilionoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/brilion03/mainliner-555-82.jpg",
                width: 267,
                height: 400,
                alt: "British Lion Pub",
              },
              title: "British Lion Pub",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/brilion03/brilion01.jpg",
                width: 400,
                height: 266,
                alt: "British Lion Pub",
              },
              title: "British Lion Pub",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/brilion03/brilion03.jpg",
                width: 400,
                height: 276,
                alt: "British Lion Pub",
              },
              title: "British Lion Pub",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/brilion03/brilion04.jpg",
                width: 400,
                height: 286,
                alt: "British Lion Pub",
              },
              title: "British Lion Pub",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
          ],
        },
      ]}
    />
  );
}

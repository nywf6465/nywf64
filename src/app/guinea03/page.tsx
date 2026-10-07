import type { Metadata } from "next";
import { GuineaNavChrome } from "@/components/GuineaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Guinea — nywf64.com",
  description:
    "Guinea pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Guinea photograph album — “photographs” standard.
 * Body from legacy guinea03.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 * Last Guinea topic — NEXT returns to overview.
 */
export default function Guinea03Page() {
  return (
    <PhotographsPage
      heroLabel="Guinea"
      titleId="guinea03-title"
      hero={{
        src: "/images/guineaoverview/hero-banner.jpg",
        alt: "Guinea at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GuineaNavChrome />}
      previousHref="/guinea02"
      overviewHref="/guineaoverview"
      nextHref="/guineaoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/guinea03/5450Large.jpg",
                width: 400,
                height: 277,
                alt: "Artist's rendering of the Pavilion of Guinea",
              },
              title: "Artist's rendering of the Pavilion of Guinea",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/guinea03/555-57.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Guinea",
              },
              title: "Pavilion of Guinea",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/guinea03/633-49.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Guinea",
              },
              title: "Pavilion of Guinea",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/guinea03/guinea01.jpg",
                width: 400,
                height: 276,
                alt: "Pavilion of Guinea",
              },
              title: "Pavilion of Guinea",
              source:
                "SOURCE: Commercial Transparency by © Copyright ROLOC Films presented courtesy Eric Paddon and Bill Cotter Collections",
            },
          ],
        },
      ]}
    />
  );
}

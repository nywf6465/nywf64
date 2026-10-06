import type { Metadata } from "next";
import { ChrsciNavChrome } from "@/components/ChrsciNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Christian Science — nywf64.com",
  description:
    "Christian Science pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Christian Science photograph album — “photographs” standard.
 * Body from legacy chrsci05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Chrsci05Page() {
  return (
    <PhotographsPage
      heroLabel="Christian Science"
      titleId="chrsci05-title"
      hero={{
        src: "/images/chrscioverview/hero-banner.jpg",
        alt: "Christian Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<ChrsciNavChrome />}
      previousHref="/chrsci04"
      overviewHref="/chrscioverview"
      nextHref="/chrsci06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/chrsci05/artists-rendering.jpg",
                width: 400,
                height: 386,
                alt: "Artist's rendering of the Christian Science Pavilion",
              },
              title: "Artist's rendering of the Christian Science Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/chrsci05/aerial.jpg",
                width: 400,
                height: 267,
                alt: "Aerial view of the Christian Science Pavilion",
              },
              title: "Aerial view of the Christian Science Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/chrsci05/pyramid-glass.jpg",
                width: 400,
                height: 267,
                alt: "Christian Science Pavilion topped by a hexagonal pyramid of glass",
              },
              title:
                "Christian Science Pavilion topped by a hexagonal pyramid of glass",
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
                src: "/images/chrsci05/fairgoer-pavilion.jpg",
                width: 400,
                height: 272,
                alt: "Christian Science Pavilion",
              },
              title: "Christian Science Pavilion",
              source: "SOURCE: \u00a9 Copyright George Campbell Collection",
            },
            {
              image: {
                src: "/images/chrsci05/skylight.jpg",
                width: 400,
                height: 274,
                alt: "Central skylight of the Christian Science Pavilion",
              },
              title: "Central skylight of the Christian Science Pavilion",
              source: "SOURCE: \u00a9 Copyright George Campbell Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/chrsci05/publication-star.jpg",
                width: 300,
                height: 227,
                alt: "Christian Science pavilion shaped as a seven-point star",
              },
              title: (
                <>
                  <strong>Designed</strong> by Edward Durell Stone, the
                  Christian Science pavilion is shaped as a seven-point star.
                  Modern techniques are used in graphic explanation of Christian
                  Science&apos;s concepts.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, October 4, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/chrsci05/publication-centerpiece.jpg",
                width: 300,
                height: 535,
                alt: "Christian Science pavilion stained glass centerpiece",
              },
              title: (
                <>
                  <strong>Christian Science</strong> pavilion sparkles with a
                  28-foot stained glass centerpiece. Exhibit has Fair&apos;s
                  largest adult volunteer staff.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, August 8, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

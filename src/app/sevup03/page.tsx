import type { Metadata } from "next";
import { SevupNavChrome } from "@/components/SevupNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Seven-Up — nywf64.com",
  description:
    "Seven-Up pavilion photograph album from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Seven-Up photograph album — “photographs” standard.
 * Body from legacy sevup03.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sevup03Page() {
  return (
    <PhotographsPage
      heroLabel="Seven-Up"
      titleId="sevup03-title"
      hero={{
        src: "/images/sevupoverview/hero-banner.jpg",
        alt: "Seven-Up at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SevupNavChrome />}
      previousHref="/sevup02"
      overviewHref="/sevupoverview"
      nextHref="/sevup04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sevup03/S-183DLarge.jpg",
                width: 400,
                height: 382,
                alt: "Artist's rendering of the 7Up Pavilion",
              },
              title: "Artist's rendering of the 7Up Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sevup03/5489.jpg",
                width: 267,
                height: 400,
                alt: "7Up Pavilion",
              },
              title: "7Up Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sevup03/633-70.jpg",
                width: 266,
                height: 400,
                alt: "7Up's Clock Tower",
              },
              title: "7Up's Clock Tower",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sevup03/79066Large.jpg",
                width: 400,
                height: 263,
                alt: "Food Service Line at the 7Up International Sandwich Gardens",
              },
              title:
                "Food Service Line at the 7Up International Sandwich Gardens",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Publicity & Press Photographs",
          photos: [
            {
              image: {
                src: "/images/sevup03/sevup07.jpg",
                width: 400,
                height: 311,
                alt: "Architectural Model of the 7Up Pavilion",
              },
              title: "Architectural Model of the 7Up Pavilion",
              source: "SOURCE: Seven-Up Publicity Photograph",
            },
            {
              image: {
                src: "/images/sevup03/sevup51.jpg",
                width: 259,
                height: 400,
                alt: "Seven-Up Pavilion",
              },
              title: "Seven-Up Pavilion",
              source: "SOURCE: Getty Images",
            },
            {
              image: {
                src: "/images/sevup03/sevup46.jpg",
                width: 400,
                height: 318,
                alt: "Aerial View of the 7Up International Sandwich Gardens",
              },
              title: "Aerial View of the 7Up International Sandwich Gardens",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/sevup03/sevup08.jpg",
                width: 400,
                height: 386,
                alt: "7Up International Sandwich Gardens",
              },
              title: "7Up International Sandwich Gardens",
              source: "SOURCE: Seven-Up Publicity Photograph",
            },
            {
              image: {
                src: "/images/sevup03/sevup52.jpg",
                width: 400,
                height: 400,
                alt: "7-Up Pavilion Illuminated at Night",
              },
              title: "7-Up Pavilion Illuminated at Night",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/sevup03/sevup02.jpg",
                width: 400,
                height: 519,
                alt: "Beneath the 7-Up",
              },
              title: "Beneath the 7-Up",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, Date Unknown
                </>
              ),
            },
            {
              image: {
                src: "/images/sevup03/sevup40.jpg",
                width: 400,
                height: 322,
                alt: "Artist's rendering of the Food Service Line at the 7Up International Sandwich Gardens",
              },
              title:
                "Artist's rendering of the Food Service Line at the 7Up International Sandwich Gardens",
              source: (
                <>
                  SOURCE: <em>The 7up Leader</em>, Vol. V No. 3, May/June 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { EaskodNavChrome } from "@/components/EaskodNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Eastman Kodak — nywf64.com",
  description:
    "Eastman Kodak Pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Eastman Kodak photograph album.
 * Body from legacy easkod06.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Easkod06Page() {
  return (
    <PhotographsPage
      heroLabel="Eastman Kodak Pavilion"
      titleId="easkod06-title"
      hero={{
        src: "/images/easkodoverview/hero-banner.jpg",
        alt: "Eastman Kodak Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<EaskodNavChrome />}
      previousHref="/easkod05"
      overviewHref="/easkodoverview"
      nextHref="/easkod07"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/easkod06/kodak84.jpg",
                width: 400,
                height: 494,
                alt: "Eastman Kodak Pavilion Under Construction",
              },
              title: "Eastman Kodak Pavilion Under Construction",
              source: "SOURCE: AP Wirephoto",
            },
            {
              image: {
                src: "/images/easkod06/5454Large.jpg",
                width: 400,
                height: 268,
                alt: "Architectural model of the Eastman Kodak Pavilion",
              },
              title: "Architectural model of the Eastman Kodak Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/easkod06/5477.jpg",
                width: 400,
                height: 267,
                alt: "Eastman Kodak Exhibit",
              },
              title: "Eastman Kodak Exhibit",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/easkod06/S313D.jpg",
                width: 400,
                height: 403,
                alt: "Eastman Kodak Exhibit",
              },
              title: "Eastman Kodak Exhibit",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/easkod06/5639.jpg",
                width: 267,
                height: 400,
                alt: "Emmett Kelly, Jr. - Mascot of the Kodak Pavilion",
              },
              title: "Emmett Kelly, Jr. - Mascot of the Kodak Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/easkod06/633-72.jpg",
                width: 400,
                height: 267,
                alt: "World's largest outdoor pints on Eastman Kodak's Tower",
              },
              title: "World's largest outdoor pints on Eastman Kodak's Tower",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/easkod06/kodak73.jpg",
                width: 400,
                height: 274,
                alt: "Eastman Kodak Pavilion",
              },
              title: "Eastman Kodak Pavilion",
              source:
                "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/easkod06/555-30.jpg",
                width: 400,
                height: 270,
                alt: "World's largest outdoor pints on Eastman Kodak's Tower",
              },
              title: "World's largest outdoor pints on Eastman Kodak's Tower",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/easkod06/633-73.jpg",
                width: 267,
                height: 400,
                alt: "Kodak's Picture Tower at Night",
              },
              title: "Kodak's Picture Tower at Night",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/easkod06/kodak79.jpg",
                width: 400,
                height: 382,
                alt: "Kodak Pavilion under construction",
              },
              title: "Kodak Pavilion under construction",
              source: "SOURCE: Onine auction",
            },
            {
              image: {
                src: "/images/easkod06/kodak80.jpg",
                width: 400,
                height: 281,
                alt: "Kodak Pavilion",
              },
              title: "Kodak Pavilion",
              source: "SOURCE: Onine auction",
            },
            {
              image: {
                src: "/images/easkod06/kodak81.jpg",
                width: 400,
                height: 401,
                alt: "Kodak Pavilion",
              },
              title: "Kodak Pavilion",
              source: "SOURCE: Onine auction",
            },
            {
              image: {
                src: "/images/easkod06/kod49.jpg",
                width: 450,
                height: 293,
                alt: "Workmen replace the giant photographs on Kodak's Picture Tower",
              },
              title:
                "Workmen replace the giant photographs on Kodak's Picture Tower",
              source: "SOURCE: © Copyright Gary Holmes Collection",
            },
            {
              image: {
                src: "/images/easkod06/kodak82.jpg",
                width: 400,
                height: 277,
                alt: "Kodak Pavilion",
              },
              title: "Kodak Pavilion",
              source: "SOURCE: Unknown",
            },
            {
              image: {
                src: "/images/easkod06/kodak74.jpg",
                width: 306,
                height: 400,
                alt: "The Moon Deck of the Kodak Pavilion",
              },
              title: "The Moon Deck of the Kodak Pavilion",
              source: "SOURCE: Onine auction",
            },
            {
              image: {
                src: "/images/easkod06/kodak72.jpg",
                width: 267,
                height: 400,
                alt: "Spraying fountains fall onto Kodak's Sunburst Flowers",
              },
              title: "Spraying fountains fall onto Kodak's Sunburst Flowers",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/easkod06/kodak75.jpg",
                width: 450,
                height: 372,
                alt: "Fountains spray down on giant flowers",
              },
              title: "Fountains spray down on giant flowers",
              source: "SOURCE: Onine auction",
            },
            {
              image: {
                src: "/images/easkod06/kodak77.jpg",
                width: 400,
                height: 412,
                alt: "Kodak Exhibits",
              },
              title: "Kodak Exhibits",
              source: "SOURCE: Onine auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/easkod06/kod31.jpg",
                width: 460,
                height: 315,
                alt: "SUN-DAY AT THE FAIR",
              },
              title: (
                <>
                  SUN-DAY AT THE FAIR &apos;TWAS A NICE BRIGHT DAY so our
                  sun-worshiping lensmen found a lofty perch and started
                  shooting film. Here&apos;s what they came up with in the
                  Industrial Area (from top left): Better Living Center,
                  Pepsi-Cola&apos;s Walt Disney fantasy, Eastman Kodak&apos;s
                  world&apos;s largest outdoor foto colorprints and, edging into
                  the International Area, American-Israel&apos;s wood-paneled
                  pavilion and a Swiss Sky Ride terminus. And don&apos;t forget
                  the Brass Rail &quot;marshmallows.&quot;
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters and Richard Lewis,{" "}
                  <em>New York Sunday News</em>, August 23, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/easkod06/kod32.jpg",
                width: 262,
                height: 400,
                alt: "Lunar landscape roofs the Eastman Kodak Pavilion",
              },
              title: (
                <>
                  Lunar landscape roofs the Eastman Kodak Pavilion. Spires,
                  mounds and craters of an imaginary moonland create odd angles
                  and shadows to challenge the visiting cameraman&apos;s
                  artistry. World&apos;s largest outdoor photographs - 30 by 36
                  feet - ring the tower.
                </>
              ),
              source: (
                <>
                  SOURCE: EKTACHROME by James P. Blair, © Copyright{" "}
                  <em>National Geographic Society</em>, Volume 127 No. 4, April
                  1965
                </>
              ),
            },
            {
              image: {
                src: "/images/easkod06/kod39.jpg",
                width: 500,
                height: 414,
                alt: "Industrial Area view features Eastman Kodak pavilion in the foreground",
              },
              title:
                "Industrial Area view features Eastman Kodak pavilion in the foreground",
              source: "SOURCE: Eastman Kodak Graphic Arts Brochure",
            },
            {
              image: {
                src: "/images/easkod06/kodak76.jpg",
                width: 399,
                height: 525,
                alt: "Eastman Kodak Pavilion publication photograph",
              },
              source: (
                <>
                  SOURCE: News Colorfoto by William Klein and Patrick Gartlan,{" "}
                  <em>New York Sunday News</em>, April 12, 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

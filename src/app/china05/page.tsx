import type { Metadata } from "next";
import { ChinaNavChrome } from "@/components/ChinaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — China — nywf64.com",
  description:
    "Republic of China pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * China photograph album — “photographs” standard.
 * Body from legacy china05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function China05Page() {
  return (
    <PhotographsPage
      heroLabel="China"
      titleId="china05-title"
      hero={{
        src: "/images/chinaoverview/hero-banner.jpg",
        alt: "China at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<ChinaNavChrome />}
      previousHref="/china04"
      overviewHref="/chinaoverview"
      nextHref="/china06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/china05/architects-rendering.jpg",
                width: 400,
                height: 377,
                alt: "Architects rendering of the Republic of China Pavilion",
              },
              title: "Architects rendering of the Republic of China Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/china05/pavilion-photolab.jpg",
                width: 400,
                height: 267,
                alt: "Republic of China Pavilion",
              },
              title: "Republic of China Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/china05/ceremonial-entryway.jpg",
                width: 267,
                height: 400,
                alt: "Republic of China Pavilion as seen through the Ceremonial Entryway",
              },
              title:
                "Republic of China Pavilion as seen through the Ceremonial Entryway",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/china05/red-and-gold.jpg",
                width: 267,
                height: 400,
                alt: "Red and Gold Pavilion of the Republic of China",
              },
              title: "Red and Gold Pavilion of the Republic of China",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/china05/ceremonial-gate-ual.jpg",
                width: 400,
                height: 267,
                alt: "Ceremonial Entrance Gate to Republic of China Pavilion",
              },
              title: "Ceremonial Entrance Gate to Republic of China Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/china05/pavilion-roloc.jpg",
                width: 400,
                height: 271,
                alt: "Republic of China Pavilion",
              },
              title: "Republic of China Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/china05/emperors-palace.jpg",
                width: 267,
                height: 400,
                alt: "Republic of China Pavilion is replica of an Emperor's Palace",
              },
              title:
                "Republic of China Pavilion is replica of an Emperor's Palace",
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
                src: "/images/china05/fairgoer-kraus.jpg",
                width: 400,
                height: 265,
                alt: "Republic of China Pavilion",
              },
              title: "Republic of China Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/china05/fairgoer-auction-2.jpg",
                width: 400,
                height: 396,
                alt: "Republic of China Pavilion",
              },
              title: "Republic of China Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/china05/fairgoer-auction-3.jpg",
                width: 400,
                height: 288,
                alt: "Republic of China Pavilion",
              },
              title: "Republic of China Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/china05/fairgoer-auction-4.jpg",
                width: 400,
                height: 401,
                alt: "Republic of China Pavilion",
              },
              title: "Republic of China Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/china05/fairgoer-entrance.jpg",
                width: 400,
                height: 270,
                alt: "Republic of China Pavilion Entrance",
              },
              title: "Republic of China Pavilion Entrance",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/china05/fairgoer-gate.jpg",
                width: 400,
                height: 270,
                alt: "Republic of China Pavilion Ceremonial Gate",
              },
              title: "Republic of China Pavilion Ceremonial Gate",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/china05/textiles.jpg",
                width: 400,
                height: 272,
                alt: "Display of Chinese Textiles",
              },
              title: "Display of Chinese Textiles",
              source: "SOURCE: \u00a9 Copyright Rich Post Collection",
            },
            {
              image: {
                src: "/images/china05/folk-dance.jpg",
                width: 400,
                height: 269,
                alt: "China Folk Dance display",
              },
              title: "China Folk Dance display",
              source: "SOURCE: \u00a9 Copyright Rich Post Collection",
            },
            {
              image: {
                src: "/images/china05/phoenix-screen.jpg",
                width: 400,
                height: 282,
                alt: "Gilded Phoenix Screen in the China Pavilion",
              },
              title: "Gilded Phoenix Screen in the China Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/china05/publication-skyride.jpg",
                width: 460,
                height: 319,
                alt: "Old bronze, jade, porcelain and silk treasures with the Swiss Sky Ride above",
              },
              title: (
                <>
                  <strong>Old bronze, jade,</strong> porcelain and silk treasures
                  vie with today&apos;s economic progress on Taiwan in telling
                  China&apos;s story. Above: the Swiss Sky Ride.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, August 30, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/china05/publication-phoenix.jpg",
                width: 460,
                height: 451,
                alt: "Two young ladies from Taiwan marvel at huge carved wood screen",
              },
              title: (
                <>
                  <strong>Two</strong> young ladies from Taiwan marvel at huge
                  carved wood screen that guests see upon entering the China
                  pavilion. Titled &quot;100 Birds Pay Tribute to Queen
                  Phoenix,&quot; it symbolizes visitors from all parts of the
                  world coming here to see the Fair.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto, <em>New York Sunday News</em>, May 30,
                  1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

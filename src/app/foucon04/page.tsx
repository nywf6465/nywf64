import type { Metadata } from "next";
import { FouconNavChrome } from "@/components/FouconNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Fountain of the Continents — nywf64.com",
  description:
    "Fountain of the Continents photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Fountain of the Continents photograph album — “photographs” standard.
 * Body from legacy foucon04.html (Photograph Scrap Book banner omitted).
 * Preserve legacy typos (vy, hights).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Foucon04Page() {
  return (
    <PhotographsPage
      heroLabel="Fountain of the Continents"
      titleId="foucon04-title"
      hero={{
        src: "/images/fouconoverview/hero-banner.jpg",
        alt: "Fountain of the Continents at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<FouconNavChrome />}
      previousHref="/foucon03"
      overviewHref="/fouconoverview"
      nextHref="/fouconoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/foucon04/fount76.jpg",
                width: 460,
                height: 367,
                alt: "Aerial view of Unisphere ringed by the Fountain of the Continents",
              },
              title:
                "This aerial view shows Unisphere ringed by the Fountain of the Continents.  The rising and falling motion can be noted in the shot vy the varying hights of the sprays.",
              source:
                "SOURCE: NY World's Fair Corporation publicity photo presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/foucon04/555-05.jpg",
                width: 271,
                height: 400,
                alt: "Unisphere and Fountain of the Continents",
              },
              title: "Unisphere and Fountain of the Continents",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/foucon04/79037Large.jpg",
                width: 400,
                height: 264,
                alt: "Unisphere surrounded by the Fountain of the Continents",
              },
              title: "Unisphere surrounded by the Fountain of the Continents",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/foucon04/fount62.jpg",
                width: 360,
                height: 391,
                alt: "Unisphere ringed by the Fountain of the Continents",
              },
              title: "Unisphere ringed by the Fountain of the Continents",
              source: "SOURCE: \u00a9 Copyright Ray Dashner Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/foucon04/fount122.jpg",
                width: 460,
                height: 290,
                alt: "Fountain Fantasy — Unisphere and Fountain of the Continents",
              },
              title: (
                <>
                  FOUNTAIN FANTASY
                  <br />
                  THREE WEEKS AGO our scrapbook cameraman shot the Fair&apos;s
                  Unisphere from the United States pavilion; today we view the
                  global birdcage from the opposite side and catch the massive
                  pavilion at the end of the Court of States. Setting off the
                  Unisphere and ringed by a reflecting pool are the plumed jets
                  of the Fountain of the Continents. They are colorfully lighted
                  at night. At left: New England exhibit. Across top of globe:
                  Singer Bowl. In distance: Shea Stadium.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, July 5, 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { TowersNavChrome } from "@/components/TowersNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Entrance Towers — nywf64.com",
  description:
    "Entrance Towers photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Entrance Towers photograph album.
 * Body from legacy towers03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03). Last topic — NEXT returns to overview.
 */
export default function Towers03Page() {
  return (
    <PhotographsPage
      heroLabel="Entrance Towers"
      titleId="towers03-title"
      hero={{
        src: "/images/towersoverview/hero-banner.jpg",
        alt: "Entrance Towers at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<TowersNavChrome />}
      previousHref="/towers02"
      overviewHref="/towersoverview"
      nextHref="/towersoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/towers03/5403Large.jpg",
                width: 400,
                height: 279,
                alt: "Artist's rendering of an Entrance Gate showing a Tower",
              },
              title: "Artist's rendering of an Entrance Gate showing a Tower",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/towers03/S305B.jpg",
                width: 400,
                height: 393,
                alt: "Main Entrance and Tower",
              },
              title: "Main Entrance and Tower",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/towers03/fount31.jpg",
                width: 400,
                height: 267,
                alt: "Main Entrance of the Fair showing the Entrance Tower",
              },
              title:
                "Main Entrance of the Fair showing the Entrance Tower",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/towers03/fount114.jpg",
                width: 400,
                height: 262,
                alt: "Main Entrance of the Fair showing the Entrance Tower",
              },
              title:
                "Main Entrance of the Fair showing the Entrance Tower",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
          ],
        },
        {
          heading: "Publication Photograph",
          photos: [
            {
              image: {
                src: "/images/towers03/fount74.jpg",
                width: 360,
                height: 570,
                alt: "Backbone of the Fair? No, one of the spiny columns marking the entrances and exits to the grounds.",
              },
              title: (
                <>
                  Backbone of the Fair? No, one of the spiny columns marking the
                  entrances and exits to the grounds.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, April, 1964
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

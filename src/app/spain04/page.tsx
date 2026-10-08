import type { Metadata } from "next";
import { SpainNavChrome } from "@/components/SpainNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Spain — nywf64.com",
  description:
    "Spain Pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Spain photograph album — “photographs” standard.
 * Body from legacy spain04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Spain04Page() {
  return (
    <PhotographsPage
      heroLabel="Spain Pavilion"
      titleId="spain04-title"
      hero={{
        src: "/images/spainoverview/hero-banner.jpg",
        alt: "Spain Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<SpainNavChrome />}
      previousHref="/spain03"
      overviewHref="/spainoverview"
      nextHref="/spain05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/spain04/photolab-5636.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Spain",
              },
              title: "Pavilion of Spain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/spain04/photolab-5511.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Spain",
              },
              title: "Pavilion of Spain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/spain04/mainliner-555-49.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Spain",
              },
              title: "Pavilion of Spain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/spain04/mainliner-633-47.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Spain",
              },
              title: "Pavilion of Spain",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/spain04/wolfe-79142Large.jpg",
                width: 400,
                height: 262,
                alt: "The Spanish Pavilion",
              },
              title: "The Spanish Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/spain04/wolfe-79144Large.jpg",
                width: 400,
                height: 268,
                alt: "Dancers at Spanish Pavilion",
              },
              title: "Dancers at Spanish Pavilion",
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
                src: "/images/spain04/spain09.jpg",
                width: 600,
                height: 242,
                alt: "View of the Spanish Pavilion from the Swiss Sky Ride",
              },
              title: "View of the Spanish Pavilion from the Swiss Sky Ride",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/spain04/spain134.jpg",
                width: 400,
                height: 269,
                alt: "ESPANA Sign",
              },
              title: "ESPANA Sign",
              source: "SOURCE: Online auctdion.",
            },
            {
              image: {
                src: "/images/spain04/spain133.jpg",
                width: 266,
                height: 400,
                alt: "Flying flags at the Pavilion of Spain",
              },
              title: "Flying flags at the Pavilion of Spain",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/spain04/spain132.jpg",
                width: 294,
                height: 400,
                alt: "Posters at the Pavilion of Spain",
              },
              title: "Posters at the Pavilion of Spain",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/spain04/spain01.jpg",
                width: 460,
                height: 246,
                alt: "Inside Spain's modern pavilion",
              },
              title: (
                <>
                  Inside Spain&apos;s modern pavilion, the atmosphere is that of
                  old Iberia, an appropriate setting for great art (Picasso,
                  Dali) fine dining (four restaurants), entertainment (flamenco
                  dancing, guitar reciatls).
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by William Klein,{" "}
                  <em>New York Sunday News</em>, September 19, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

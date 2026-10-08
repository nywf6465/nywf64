import type { Metadata } from "next";
import { SwiskyNavChrome } from "@/components/SwiskyNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Swiss Sky Ride — nywf64.com",
  description:
    "Swiss Sky Ride gallery of photographs — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Swiss Sky Ride photograph gallery — “photographs” standard with legacy title.
 * Body from legacy swisky04.html (Photograph Scrap Book banner omitted).
 */
export default function Swisky04Page() {
  return (
    <PhotographsPage
      heroLabel="Swiss Sky Ride"
      titleId="swisky04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/swiskyoverview/hero-banner.jpg",
        alt: "Swiss Sky Ride at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<SwiskyNavChrome />}
      previousHref="/swisky03"
      overviewHref="/swiskyoverview"
      nextHref="/swisky05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/swisky04/photolab-5520.jpg",
                width: 400,
                height: 267,
                alt: "Swiss Sky Ride",
              },
              title: "Swiss Sky Ride",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/swisky04/photolab-5612.jpg",
                width: 400,
                height: 267,
                alt: "Swiss Sky Ride cross the International Area of the Fair",
              },
              title: "Swiss Sky Ride cross the International Area of the Fair",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/swisky04/mainliner-555-02.jpg",
                width: 400,
                height: 267,
                alt: "Gondolas of the Swiss Sky Ride",
              },
              title: "Gondolas of the Swiss Sky Ride",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/swisky04/swisky20.jpg",
                width: 400,
                height: 275,
                alt: "Swiss Sky Ride traverses the International Area",
              },
              title: "Swiss Sky Ride traverses the International Area",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/swisky04/swisky19.jpg",
                width: 400,
                height: 265,
                alt: "Swiss Sky Ride over the International Area of the Fair",
              },
              title: "Swiss Sky Ride over the International Area of the Fair",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/swisky04/swisky22.jpg",
                width: 400,
                height: 320,
                alt: "Swiss Sky Ride over the International Area of the Fair",
              },
              title: "Swiss Sky Ride over the International Area of the Fair",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/swisky04/swisky24.jpg",
                width: 400,
                height: 388,
                alt: "Swiss Sky Ride Ticket Booths",
              },
              title: "Swiss Sky Ride Ticket Booths",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/swisky04/swisky23.jpg",
                width: 400,
                height: 400,
                alt: "Swiss Sky Ride over the International Area of the Fair",
              },
              title: "Swiss Sky Ride over the International Area of the Fair",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/swisky04/swisky03.jpg",
                width: 432,
                height: 288,
                alt: "Swiss Sky Ride over the International Area of the Fair",
              },
              title: "Swiss Sky Ride over the International Area of the Fair",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/swisky04/swisky21.jpg",
                width: 400,
                height: 403,
                alt: "Swiss Sky Ride Terminus",
              },
              title: "Swiss Sky Ride Terminus",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/swisky04/swisky13.jpg",
                width: 600,
                height: 499,
                alt: "Swiss Sky Ride cable cars traversing the International Area",
              },
              title: (
                <>
                  <strong>Traversing the fair&apos;s </strong>International Area
                  at 112 feet in the air, the colorful cable cars of the Swiss
                  Sky Ride command one of the fair&apos;s most sweeping views and
                  make an eye-filling sight themselves. The ride, 2,000 feet
                  long, lasts five minutes.
                </>
              ),
              source: (
                <>
                  SOURCE: <em>The Saturday Evening Post</em>, Issue No. 20, May
                  23, 1964 - Photo by John Zimmerman
                </>
              ),
            },
            {
              image: {
                src: "/images/swisky04/swisky14.jpg",
                width: 432,
                height: 314,
                alt: "Swiss Sky Ride",
              },
              source: "\u00a0",
            },
            {
              image: {
                src: "/images/swisky04/swisky15.jpg",
                width: 432,
                height: 316,
                alt: "A look at the loading/unloading platform",
              },
              title: "A look at the loading/unloading platform",
              source: (
                <>
                  SOURCE: NBC News, <em>World&apos;s Fair Diary with Edwin Newman</em>{" "}
                  broadcast July 30, 1964
                </>
              ),
            },
            {
              image: {
                src: "/images/swisky04/swisky04.jpg",
                width: 480,
                height: 412,
                alt: "Rendering of the Swiss Sky Ride",
              },
              title:
                "Shown here is a rendering of the Swiss Sky Ride which will extend across the International Area and provide visitors with a pnaoramic view of the Fair",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair <em>Progress Report No. 8,</em>{" "}
                  April 22, 1963
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

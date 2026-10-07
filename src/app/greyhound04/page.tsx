import type { Metadata } from "next";
import { GreyhoundNavChrome } from "@/components/GreyhoundNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Greyhound — nywf64.com",
  description:
    "Greyhound pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greyhound photograph album — “photographs” standard.
 * Body from legacy greyhound04.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 * Legacy caption typo (“SIghtseeing”) preserved.
 */
export default function Greyhound04Page() {
  return (
    <PhotographsPage
      heroLabel="Greyhound"
      titleId="greyhound04-title"
      hero={{
        src: "/images/greyhoundoverview/hero-banner.jpg",
        alt: "Greyhound at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreyhoundNavChrome />}
      previousHref="/greyhound03"
      overviewHref="/greyhoundoverview"
      nextHref="/greyhound05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/greyhound04/greyhound33.jpg",
                width: 500,
                height: 489,
                alt: "Greyhound Pavilion",
              },
              title: "Greyhound Pavilion",
              source: "SOURCE: NY World's Fair Publicity Photo",
            },
            {
              image: {
                src: "/images/greyhound04/5417Large.jpg",
                width: 400,
                height: 274,
                alt: "Artist's rendering of the Greyhound Pavilion",
              },
              title: "Artist's rendering of the Greyhound Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/greyhound04/5414Large.jpg",
                width: 325,
                height: 400,
                alt: "Artist's rendering of the Information Booths operated by Greyhound at the Fair",
              },
              title:
                "Artist's rendering of the Information Booths operated by Greyhound at the Fair",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/greyhound04/S301D.jpg",
                width: 400,
                height: 400,
                alt: "Greyhound at the Fair",
              },
              title: "Greyhound at the Fair",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/greyhound04/555-07.jpg",
                width: 400,
                height: 271,
                alt: "Glide-a-Ride Train operated by Greyhound at the Fair",
              },
              title: "Glide-a-Ride Train operated by Greyhound at the Fair",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/greyhound04/633-03.jpg",
                width: 400,
                height: 269,
                alt: "Glide-a-Ride Train operated by Greyhound at the Fair",
              },
              title: "Glide-a-Ride Train operated by Greyhound at the Fair",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/greyhound04/79027Large.jpg",
                width: 400,
                height: 262,
                alt: "An Escorter operated by Greyhound at the Fair",
              },
              title: "An Escorter operated by Greyhound at the Fair",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/greyhound04/greyhound67.jpg",
                width: 400,
                height: 250,
                alt: "Greyhound Escorter",
              },
              title: "Greyhound Escorter",
              source: "SOURCE: Getty Images",
            },
            {
              image: {
                src: "/images/greyhound04/greyhound65.jpg",
                width: 400,
                height: 306,
                alt: "Greyhound Information Booth & SIghtseeing Bus",
              },
              title: "Greyhound Information Booth & SIghtseeing Bus",
              source: "SOURCE: Getty Images",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/greyhound04/greyhound61.jpg",
                width: 400,
                height: 249,
                alt: "Greyhound Information Booth",
              },
              title: "Greyhound Information Booth",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/greyhound04/greyhound62.jpg",
                width: 400,
                height: 276,
                alt: "Greyhound Information Booth",
              },
              title: "Greyhound Information Booth",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/greyhound04/greyhound01.jpg",
                width: 400,
                height: 267,
                alt: "A Glide-a-Ride Train on Tour A",
              },
              title: "A Glide-a-Ride Train on Tour A",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/greyhound04/greyhound60.jpg",
                width: 400,
                height: 267,
                alt: "A Glide-a-Ride Train operated by Greyhound at the Fair",
              },
              title: "A Glide-a-Ride Train operated by Greyhound at the Fair",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/greyhound04/greyhound64.jpg",
                width: 400,
                height: 291,
                alt: "A Bus and Escorter operated by Greyhound at the Fair",
              },
              title: "A Bus and Escorter operated by Greyhound at the Fair",
              source: "SOURCE: Online auction",
            },
          ],
        },
      ]}
    />
  );
}

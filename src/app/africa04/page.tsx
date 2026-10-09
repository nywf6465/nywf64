import type { Metadata } from "next";
import { AfricaNavChrome } from "@/components/AfricaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Africa — nywf64.com",
  description:
    "Africa pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Africa photograph album — “photographs” standard.
 * Body from legacy africa04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Africa04Page() {
  return (
    <PhotographsPage
      heroLabel="Africa"
      titleId="africa04-title"
      hero={{
        src: "/images/africaoverview/hero-banner.jpg",
        alt: "Africa pavilion at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AfricaNavChrome />}
      previousHref="/africa03"
      overviewHref="/africaoverview"
      nextHref="/africa05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/africa04/photolab-5495.jpg",
                width: 400,
                height: 267,
                alt: "Africa",
              },
              title: "Africa",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/africa04/photolab-5514.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Africa",
              },
              title: "Pavilion of Africa",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/africa04/photolab-5633.jpg",
                width: 400,
                height: 267,
                alt: "African Pavilion - Native Dancers",
              },
              title: "African Pavilion - Native Dancers",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, inc.",
            },
            {
              image: {
                src: "/images/africa04/mainliner-555-74.jpg",
                width: 400,
                height: 267,
                alt: "Main Entrance African Pavilion",
              },
              title: "Main Entrance African Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/africa04/mainliner-633-45.jpg",
                width: 400,
                height: 267,
                alt: "Tribal Dancers - African Pavilion",
              },
              title: "Tribal Dancers - African Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/africa04/africa14.jpg",
                width: 400,
                height: 246,
                alt: "African Pavilion as seen from the New York State Pavilion observation towers",
              },
              title: "African Pavilion as seen from the New York State Pavilion observation towers",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa16.jpg",
                width: 400,
                height: 269,
                alt: "African Pavilion detail",
              },
              title: "African Pavilion detail",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/africa04/africa04.jpg",
                width: 400,
                height: 270,
                alt: "African Performers - African Pavilion",
              },
              title: "African Performers - African Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/africa04/africa01.jpg",
                width: 400,
                height: 353,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/africa04/africa08.jpg",
                width: 400,
                height: 267,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa19.jpg",
                width: 400,
                height: 402,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/africa04/africa20.jpg",
                width: 400,
                height: 271,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/africa04/africa11.jpg",
                width: 400,
                height: 271,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa12.jpg",
                width: 400,
                height: 266,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa10.jpg",
                width: 400,
                height: 272,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa13.jpg",
                width: 400,
                height: 268,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa02.jpg",
                width: 400,
                height: 353,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/africa04/africa09.jpg",
                width: 400,
                height: 259,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/africa04/africa03.jpg",
                width: 400,
                height: 353,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: \u00a9 Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/africa04/africa15.jpg",
                width: 400,
                height: 275,
                alt: "African Pavilion",
              },
              title: "African Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/africa04/africa17.jpg",
                width: 460,
                height: 341,
                alt: "Aerial view toward the African Pavilion and New York State Pavilion",
              },
              title: "You're flying high and what do you see? N.Y. State's pavilion and tower and GM off yonder, sure, but for real kicks, peek down into such swingin' spots as Africa's back yard.",
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, Date unknown (1964)
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

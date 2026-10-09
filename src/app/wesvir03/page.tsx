import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { WesvirNavChrome } from "@/components/WesvirNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — West Virginia — nywf64.com",
  description:
    "West Virginia pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * West Virginia photograph album.
 * Body from legacy wesvir03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03).
 */
export default function Wesvir03Page() {
  return (
    <PhotographsPage
      heroLabel="West Virginia"
      titleId="wesvir03-title"
      hero={{
        src: "/images/wesviroverview/hero-banner.jpg",
        alt: "West Virginia pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<WesvirNavChrome />}
      previousHref="/wesvir02"
      overviewHref="/wesviroverview"
      nextHref="/wesvir04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/wesvir03/5435Large.jpg",
                width: 400,
                height: 273,
                alt: "Artist's rendering of the West Virginia Pavilion",
              },
              title: "Artist's rendering of the West Virginia Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/wesvir03/5509.jpg",
                width: 400,
                height: 264,
                alt: "West Virginia Pavilion",
              },
              title: "West Virginia Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/wesvir03/5632.jpg",
                width: 267,
                height: 400,
                alt: "Glassblowing exhibit at the West Virginia Pavilion",
              },
              title: "Glassblowing exhibit at the West Virginia Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/wesvir03/633-27.jpg",
                width: 400,
                height: 272,
                alt: "West Virginia Pavilion",
              },
              title: "West Virginia Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/wesvir03/wesvir21.jpg",
                width: 445,
                height: 277,
                alt: "Aerial view of the West Virginia Pavilion",
              },
              title: "Aerial view of the West Virginia Pavilion",
              source: (
                <>
                  SOURCE: NY World&apos;s Fair Publicity Photo presented courtesy
                  Craig Bavaro Collection
                </>
              ),
            },
            {
              image: {
                src: "/images/wesvir03/wesvir45.jpg",
                width: 400,
                height: 336,
                alt: "Aerial view of the West Virginia Pavilion",
              },
              title: "Aerial view of the West Virginia Pavilion",
              source: <>SOURCE: NY World&apos;s Fair Publicity Photo</>,
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/wesvir03/wesvir28.jpg",
                width: 450,
                height: 307,
                alt: "West Virginia Pavilion",
              },
              title: "West Virginia Pavilion",
              source: <>SOURCE: © Copyright David Eppen Collection</>,
            },
            {
              image: {
                src: "/images/wesvir03/wesvir24.jpg",
                width: 400,
                height: 399,
                alt: "Kinetic Fountain at the West Virginia Pavilion",
              },
              title: "Kinetic Fountain at the West Virginia Pavilion",
              source: <>SOURCE: Online auction</>,
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/wesvir03/wesvir01.jpg",
                width: 225,
                height: 225,
                alt: "Mario Sandon blowing glass at the West Virginia Pavilion",
              },
              title: (
                <>
                  Mario Sandon blew glass in the miniature glass-making plant in
                  the West Virginia pavilion. His appreciative audience bought
                  the objects they&apos;d seen made. A glass-enclosed beehive with
                  6,000 honey bees at work, a simulated coal mine and a radio
                  astronomy sky exhibit were its other unique offerings. There
                  was also a cafeteria.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Arthur Sasse Richard Lewis,{" "}
                  <i>New York Sunday News</i>, October 24, 1965
                </>
              ),
            },
            {
              image: {
                src: "/images/wesvir03/wesvir27.jpg",
                width: 250,
                height: 184,
                alt: "Conceptual artwork for the Pilgram Glass Exhibit in the West Virginai Pavilion",
              },
              title:
                "Conceptual artwork for the Pilgram Glass Exhibit in the West Virginai Pavilion",
              source: <>SOURCE: Unknown</>,
            },
          ],
        },
      ]}
    />
  );
}

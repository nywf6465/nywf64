import type { Metadata } from "next";
import { JordanNavChrome } from "@/components/JordanNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Jordan — nywf64.com",
  description:
    "Jordan Pavilion photograph gallery — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Jordan03Page() {
  return (
    <PhotographsPage
      heroLabel="Jordan"
      titleId="jordan03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/jordanoverview/hero-banner.jpg",
        alt: "Jordan pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JordanNavChrome />}
      previousHref="/jordan02"
      overviewHref="/jordanoverview"
      nextHref="/jordan04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/jordan03/633-40.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Jordan - Night",
              },
              title: "Pavilion of Jordan - Night",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/jordan03/79046Large.jpg",
                width: 400,
                height: 263,
                alt: "The Pavilion of Jordan",
              },
              title: "The Pavilion of Jordan",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/jordan03/79047Large.jpg",
                width: 400,
                height: 262,
                alt: "Model of the Dome of the Rock inside Pavilion of Jordan",
              },
              title: "Model of the Dome of the Rock inside Pavilion of Jordan",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/jordan03/jordan01.jpg",
                width: 400,
                height: 273,
                alt: "Jordan Pavilion",
              },
              title: "Jordan Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/jordan03/jordan31.jpg",
                width: 400,
                height: 274,
                alt: "Aerial view of the Jordan Pavilion",
              },
              title: "Aerial view of the Jordan Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/jordan03/jordan41.jpg",
                width: 600,
                height: 355,
                alt: "Hashemite Kingdom of Jordan",
              },
              title: "Hashemite Kingdom of Jordan",
              source:
                "SOURCE: NY World's Fair Publication For Those Who Produced the New York World's Fair 1964-1965",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/jordan03/jordan44.jpg",
                width: 400,
                height: 273,
                alt: "The Pavilion of Jordan from the Swiss Skyride",
              },
              title: "The Pavilion of Jordan from the Swiss Skyride",
              source: "SOURCE: Unknown",
            },
            {
              image: {
                src: "/images/jordan03/jordan43.jpg",
                width: 400,
                height: 266,
                alt: "The Pavilion of Jordan and the Column of Jerash",
              },
              title: "The Pavilion of Jordan and the Column of Jerash",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/jordan03/jordan42.jpg",
                width: 300,
                height: 344,
                alt: "Tourists admire myriad colors of Jordan pavilion interior",
              },
              title: (
                <>
                  <strong>Tourists admire</strong> myriad colors of Jordan
                  pavilion&apos;s interior. Typical Jordanian meals are served
                  downstairs.
                </>
              ),
              source:
                "SOURCE: News Colorfoto by Edmund Peters, New York Sunday News, May 16, 1965",
            },
          ],
        },
      ]}
    />
  );
}

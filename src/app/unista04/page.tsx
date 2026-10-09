import type { Metadata } from "next";
import { UnistaNavChrome } from "@/components/UnistaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — United States Pavilion — nywf64.com",
  description:
    "United States Pavilion photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United States Pavilion photograph album — “photographs” standard.
 * Body from legacy unista04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Unista04Page() {
  return (
    <PhotographsPage
      heroLabel="United States Pavilion"
      titleId="unista04-title"
      hero={{
        src: "/images/unistaoverview/hero-banner.jpg",
        alt: "United States Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<UnistaNavChrome />}
      previousHref="/unista03"
      overviewHref="/unistaoverview"
      nextHref="/unista05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/unista04/S-180CLarge.jpg",
                width: 400,
                height: 386,
                alt: "Architectural model of the United States Pavilion",
              },
              title: "Architectural model of the United States Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unista04/us77.jpg",
                width: 400,
                height: 319,
                alt: "United States Pavilion under construction",
              },
              title: "United States Pavilion under construction",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/unista04/5601.jpg",
                width: 400,
                height: 267,
                alt: "U.S. Pavilion - Night",
              },
              title: "U.S. Pavilion - Night",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unista04/5507.jpg",
                width: 400,
                height: 268,
                alt: "United States Pavilion",
              },
              title: "United States Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/unista04/555-39.jpg",
                width: 400,
                height: 259,
                alt: "Pavilion of the United States",
              },
              title: "Pavilion of the United States",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unista04/555-40.jpg",
                width: 400,
                height: 267,
                alt: "Insignia on the U.S. Pavilion",
              },
              title: "Insignia on the U.S. Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unista04/633-87.jpg",
                width: 400,
                height: 267,
                alt: "U.S. Pavilion - Night",
              },
              title: "U.S. Pavilion - Night",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/unista04/79010Large.jpg",
                width: 400,
                height: 263,
                alt: "U.S. Pavilion as viewed from the top of the New York State Pavilion observation towers",
              },
              title:
                "U.S. Pavilion as viewed from the top of the New York State Pavilion observation towers",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/unista04/us81.jpg",
                width: 400,
                height: 289,
                alt: "The Federal Pavilion",
              },
              title: "The Federal Pavilion",
              source: "SOURCE: Screen Shot:  British Pathe Films",
            },
            {
              image: {
                src: "/images/unista04/us67.jpg",
                width: 400,
                height: 275,
                alt: "The Federal Pavilion",
              },
              title: "The Federal Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/unista04/us43.jpg",
                width: 400,
                height: 320,
                alt: "Aerial View of the U.S. Pavilion",
              },
              title: "Aerial View of the U.S. Pavilion",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Craig Bavaro Collection",
            },
            {
              image: {
                src: "/images/unista04/us35.jpg",
                width: 400,
                height: 265,
                alt: "U.S. Pavilion",
              },
              title: "U.S. Pavilion",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unista04/us36.jpg",
                width: 324,
                height: 400,
                alt: "U.S. Pavilion",
              },
              title: "U.S. Pavilion",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unista04/us38.jpg",
                width: 400,
                height: 300,
                alt: "U.S. Pavilion",
              },
              title: "U.S. Pavilion",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unista04/us39.jpg",
                width: 400,
                height: 255,
                alt: "U.S. Pavilion Courtyard",
              },
              title: "U.S. Pavilion Courtyard",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unista04/us40.jpg",
                width: 400,
                height: 308,
                alt: "U.S. Pavilion Courtyard",
              },
              title: "U.S. Pavilion Courtyard",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unista04/us34.jpg",
                width: 400,
                height: 255,
                alt: "U.S. Pavilion Grand Stairway leading to Courtyard",
              },
              title: "U.S. Pavilion Grand Stairway leading to Courtyard",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
            {
              image: {
                src: "/images/unista04/us37.jpg",
                width: 400,
                height: 254,
                alt: "U.S. Pavilion Grand Stairway leading to Courtyard",
              },
              title: "U.S. Pavilion Grand Stairway leading to Courtyard",
              source:
                "SOURCE: U.S. Pavilion Archival Photograph - nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}

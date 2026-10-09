import type { Metadata } from "next";
import { DenmarkNavChrome } from "@/components/DenmarkNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Denmark — nywf64.com",
  description:
    "Denmark pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Denmark photograph album — “photographs” standard.
 * Body from legacy denmark03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Denmark03Page() {
  return (
    <PhotographsPage
      heroLabel="Denmark"
      titleId="denmark03-title"
      hero={{
        src: "/images/denmarkoverview/hero-banner.jpg",
        alt: "Denmark at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<DenmarkNavChrome />}
      previousHref="/denmark02"
      overviewHref="/denmarkoverview"
      nextHref="/denmark04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/mainliner/555-50.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/mainliner/633-52.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/mainliner/633-53.jpg",
                width: 400,
                height: 267,
                alt: "Attractive Display of Food and Drink in the Danish Pavilion",
              },
              title:
                "Attractive Display of Food and Drink in the Danish Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/wolfe/79045Large.jpg",
                width: 262,
                height: 400,
                alt: "Interior of Danish Pavilion",
              },
              title: "Interior of Danish Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/denmark/denmar07.jpg",
                width: 400,
                height: 337,
                alt: "Pavilion of Denmark as viewed from the Swiss Sky Ride",
              },
              title: "Pavilion of Denmark as viewed from the Swiss Sky Ride",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/denmark/denmar14.jpg",
                width: 400,
                height: 396,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/denmark/denmar13.jpg",
                width: 262,
                height: 400,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/denmark/denmar15.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/denmark/denmar04.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/denmark/denmar05.jpg",
                width: 400,
                height: 269,
                alt: "Pavilion of Denmark",
              },
              title: "Pavilion of Denmark",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/denmark/denmar06.jpg",
                width: 400,
                height: 278,
                alt: "Pavilion of Denmark at night",
              },
              title: "Pavilion of Denmark at night",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/denmark/denmar09.jpg",
                width: 400,
                height: 262,
                alt: "Pavilion of Denmark interior view",
              },
              title: "Pavilion of Denmark interior view",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/denmark/denmar10.jpg",
                width: 400,
                height: 279,
                alt: "Pavilion of Denmark Restaurant",
              },
              title: "Pavilion of Denmark Restaurant",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/denmark/denmar08.jpg",
                width: 400,
                height: 296,
                alt: "Pavilion of Denmark Tivoli Gardens Playground",
              },
              title: "Pavilion of Denmark Tivoli Gardens Playground",
              source: "SOURCE: © Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/denmark/denmar01.jpg",
                width: 450,
                height: 344,
                alt: "Tivoli Gardens playground with giant playing cards",
              },
              title: (
                <>
                  Named for Copenhagen&apos;s famous park, Tivoli Gardens, the
                  playground at Denmark&apos;s pavilion includes such imaginative
                  juvenile delights as these giant playing cards. Hours: 10-6.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto,{" "}
                  <em>New York Sunday News</em>, Date unknown
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

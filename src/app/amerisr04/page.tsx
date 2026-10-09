import type { Metadata } from "next";
import { AmerisrNavChrome } from "@/components/AmerisrNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — American-Israel Pavilion — nywf64.com",
  description:
    "American-Israel Pavilion photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American-Israel Pavilion photograph album — “photographs” standard.
 * Body from legacy amerisr04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Amerisr04Page() {
  return (
    <PhotographsPage
      heroLabel="American-Israel Pavilion"
      titleId="amerisr04-title"
      hero={{
        src: "/images/amerisroverview/hero-banner.jpg",
        alt: "American-Israel Pavilion at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<AmerisrNavChrome />}
      previousHref="/amerisr03"
      overviewHref="/amerisr01"
      nextHref="/amerisr05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/amerisr04/5607.jpg",
                width: 400,
                height: 267,
                alt: "American-Israel Pavilion Folk Dance",
              },
              title: "American-Israel Pavilion Folk Dance",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/amerisr04/633-57.jpg",
                width: 400,
                height: 267,
                alt: "Spiral-shaped American-Israel Pavilion",
              },
              title: "Spiral-shaped American-Israel Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/amerisr04/79048Large.jpg",
                width: 400,
                height: 263,
                alt: "American-Israel Pavilion",
              },
              title: "American-Israel Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/amerisr04/amerisr01.jpg",
                width: 400,
                height: 274,
                alt: "American-Israel Pavilion",
              },
              title: "American-Israel Pavilion",
              source:
                "SOURCE: Commercial Transparency by © ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/amerisr04/79049Large.jpg",
                width: 400,
                height: 260,
                alt: "Model of Temple of Solomon in the American-Israel Pavilion",
              },
              title:
                "Model of Temple of Solomon in the American-Israel Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
          ],
        },
      ]}
    />
  );
}

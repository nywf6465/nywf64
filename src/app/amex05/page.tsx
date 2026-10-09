import type { Metadata } from "next";
import { AmexNavChrome } from "@/components/AmexNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — American Express — nywf64.com",
  description:
    "American Express pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * American Express photograph album — “photographs” standard.
 * Body from legacy amex05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 *
 * Note: legacy amex05 is a Photograph Album (not postcards); photographs
 * standards match the source page and American Express menu label.
 */
export default function Amex05Page() {
  return (
    <PhotographsPage
      heroLabel="American Express"
      titleId="amex05-title"
      hero={{
        src: "/images/amexoverview/hero-banner.jpg",
        alt: "American Express at the 1964/1965 New York World’s Fair",
        width: 1908,
        height: 824,
      }}
      nav={<AmexNavChrome />}
      previousHref="/amex04"
      overviewHref="/amex01"
      nextHref="/amex06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/amex05/555-36.jpg",
                width: 270,
                height: 400,
                alt: 'Million dollars of real curency "grows" on Americn Express "Money Tree"',
              },
              title:
                'Million dollars of real curency "grows" on Americn Express "Money Tree"',
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/amex05/79102Large.jpg",
                width: 400,
                height: 268,
                alt: 'American Express "Money Tree" at night',
              },
              title: 'American Express "Money Tree" at night',
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/amex05/633-76.jpg",
                width: 267,
                height: 400,
                alt: 'American Express "Money Tree"',
              },
              title: 'American Express "Money Tree"',
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/amex05/79024Large.jpg",
                width: 400,
                height: 263,
                alt: "Official scale model of the Fair inside American Express",
              },
              title: "Official scale model of the Fair inside American Express",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/amex05/amex18.jpg",
                width: 400,
                height: 298,
                alt: "American Express Pavilion",
              },
              title: "American Express Pavilion",
              source:
                "SOURCE: American Express Publicity Photograph - © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/amex05/amex19.jpg",
                width: 280,
                height: 400,
                alt: "American Express Pavilion",
              },
              title: "American Express Pavilion",
              source:
                "SOURCE: American Express Publicity Photograph - © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/amex05/amex20.jpg",
                width: 400,
                height: 315,
                alt: "American Express Pavilion",
              },
              title: "American Express Pavilion",
              source:
                "SOURCE: American Express Publicity Photograph - © Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/amex05/amex21.jpg",
                width: 310,
                height: 400,
                alt: "American Express Pavilion",
              },
              title: "American Express Pavilion",
              source:
                "SOURCE: American Express Publicity Photograph - © Copyright nywf64.com Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/amex05/amex09.jpg",
                width: 400,
                height: 268,
                alt: "American Express Pavilion",
              },
              title: "American Express Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/amex05/amex50.jpg",
                width: 400,
                height: 248,
                alt: "American Express Global Map at night",
              },
              title: "American Express Global Map at night",
              source: "SOURCE: © Copyright Berksboy Collection",
            },
            {
              image: {
                src: "/images/amex05/amex51.jpg",
                width: 400,
                height: 304,
                alt: 'Close-up of American Express "Money Tree" at night',
              },
              title: 'Close-up of American Express "Money Tree" at night',
              source: "SOURCE: © Copyright Berksboy Collection",
            },
          ],
        },
      ]}
    />
  );
}

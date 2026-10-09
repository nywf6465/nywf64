import type { Metadata } from "next";
import { FordNavChrome } from "@/components/FordNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Ford — nywf64.com",
  description:
    "Ford Pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Ford photograph album.
 * Body from legacy ford05.html (Photograph Scrap Book banner omitted).
 * Preserve legacy SOURC / &COP typos on the National Geographic caption.
 * Layout: PhotographsPage (/aertow03).
 */
export default function Ford05Page() {
  return (
    <PhotographsPage
      heroLabel="Ford Pavilion"
      titleId="ford05-title"
      hero={{
        src: "/images/fordoverview/hero-banner.jpg",
        alt: "Ford Pavilion at the 1964/1965 New York World’s Fair",
        width: 1904,
        height: 826,
      }}
      nav={<FordNavChrome />}
      previousHref="/ford04"
      overviewHref="/fordoverview"
      nextHref="/ford06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/ford05/5456Large.jpg",
                width: 400,
                height: 273,
                alt: "Architectural model of the Ford Pavilion",
              },
              title: "Architectural model of the Ford Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/ford05/ford147.jpg",
                width: 400,
                height: 323,
                alt: "Ford Motor Company Pavilion Model",
              },
              title: "Ford Motor Company Pavilion Model",
              source: "SOURCE: NY\u00a0World's Fair Publicity Photograph",
            },
            {
              image: {
                src: "/images/ford05/5634.jpg",
                width: 400,
                height: 267,
                alt: "Ford Motor Pavilion - Night",
              },
              title: "Ford Motor Pavilion - Night",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/ford05/S307C.jpg",
                width: 400,
                height: 376,
                alt: "Ford Pavilion Rotunda",
              },
              title: "Ford Pavilion Rotunda",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/ford05/555-09.jpg",
                width: 400,
                height: 271,
                alt: "Ford Motor Company Pavilion",
              },
              title: "Ford Motor Company Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/ford05/633-10.jpg",
                width: 400,
                height: 267,
                alt: "Ford Motor Company Pavilion",
              },
              title: "Ford Motor Company Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/ford05/ford15.jpg",
                width: 400,
                height: 274,
                alt: "The Ford Rotunda",
              },
              title: "The Ford Rotunda",
              source: "SOURCE: Commercial Transparency by \u00a9 ROLOC\u00a0Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/ford05/79106Large.jpg",
                width: 400,
                height: 263,
                alt: "Night view of the Ford Pavilion",
              },
              title: "Night view of the Ford Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/ford05/79110Large.jpg",
                width: 400,
                height: 264,
                alt: "Boarding the Magic Skyway Ride",
              },
              title: "Boarding the Magic Skyway Ride",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/ford05/5635.jpg",
                width: 400,
                height: 267,
                alt: "Magic Skyway Ride - Bouncing baby Triceratops",
              },
              title: "Magic Skyway Ride - Bouncing baby Triceratops",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/ford05/79108Large.jpg",
                width: 400,
                height: 264,
                alt: "Magic Skyway Ride - Caveman family warms their bottoms",
              },
              title: "Magic Skyway Ride - Caveman family warms their bottoms",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/ford05/79109Large.jpg",
                width: 400,
                height: 263,
                alt: "Magic Skyway Ride - Capturing the Woolly Mammoth",
              },
              title: "Magic Skyway Ride - Capturing the Woolly Mammoth",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/ford05/79111Large.jpg",
                width: 400,
                height: 263,
                alt: "Magic Skyway Ride - The inventor of the round wheel",
              },
              title: "Magic Skyway Ride - The inventor of the round wheel",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/ford05/ford119.jpg",
                width: 400,
                height: 228,
                alt: "Ford Motor Company Pavilion",
              },
              title: "Ford Motor Company Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford146.jpg",
                width: 400,
                height: 280,
                alt: "Ford Motor Company Pavilion",
              },
              title: "Ford Motor Company Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford142.jpg",
                width: 400,
                height: 293,
                alt: "Ford Motor Company Pavilion",
              },
              title: "Ford Motor Company Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford144.jpg",
                width: 400,
                height: 267,
                alt: "Ford Motor Company Pavilion",
              },
              title: "Ford Motor Company Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford122.jpg",
                width: 400,
                height: 267,
                alt: "Ford \"Auto Parts Harmonic\"",
              },
              title: "Ford \"Auto Parts Harmonic\"",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford120.jpg",
                width: 400,
                height: 267,
                alt: "Ford \"Auto Parts Harmonic\"",
              },
              title: "Ford \"Auto Parts Harmonic\"",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford121.jpg",
                width: 400,
                height: 267,
                alt: "Ford \"Auto Parts Harmonic\"",
              },
              title: "Ford \"Auto Parts Harmonic\"",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford148.jpg",
                width: 400,
                height: 279,
                alt: "Ford \"Auto Parts Harmonic\"",
              },
              title: "Ford \"Auto Parts Harmonic\"",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford123.jpg",
                width: 400,
                height: 266,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford124.jpg",
                width: 400,
                height: 266,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford125.jpg",
                width: 400,
                height: 270,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford126.jpg",
                width: 400,
                height: 273,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford127.jpg",
                width: 400,
                height: 270,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford128.jpg",
                width: 400,
                height: 267,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford129.jpg",
                width: 400,
                height: 268,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford130.jpg",
                width: 400,
                height: 271,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford141.jpg",
                width: 400,
                height: 403,
                alt: "International Gardens in the Ford Pavilion",
              },
              title: "International Gardens in the Ford Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford140.jpg",
                width: 400,
                height: 400,
                alt: "Ford products on display in the Ford Rotunda",
              },
              title: "Ford products on display in the Ford Rotunda",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford131.jpg",
                width: 400,
                height: 269,
                alt: "Ford products on display in the Ford Rotunda",
              },
              title: "Ford products on display in the Ford Rotunda",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford143.jpg",
                width: 400,
                height: 399,
                alt: "Ford's Quadricycle",
              },
              title: "Ford's Quadricycle",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford132.jpg",
                width: 400,
                height: 267,
                alt: "Ford display at night",
              },
              title: "Ford display at night",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford138.jpg",
                width: 400,
                height: 385,
                alt: "Ford displays",
              },
              title: "Ford displays",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford139.jpg",
                width: 400,
                height: 400,
                alt: "Ford displays",
              },
              title: "Ford displays",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford145.jpg",
                width: 273,
                height: 400,
                alt: "Ford Tractor display",
              },
              title: "Ford Tractor display",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/ford05/ford133.jpg",
                width: 400,
                height: 269,
                alt: "Ramp to boarding area of The Magic Skyway",
              },
              title: "Ramp to boarding area of The Magic Skyway",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford134.jpg",
                width: 400,
                height: 266,
                alt: "Entering the \"Time Tunnel\" to The Magic Skyway Ride",
              },
              title: "Entering the \"Time Tunnel\" to The Magic Skyway Ride",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford135.jpg",
                width: 400,
                height: 267,
                alt: "Boarding cars to begin The Magic Skyway Ride",
              },
              title: "Boarding cars to begin The Magic Skyway Ride",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford61.jpg",
                width: 360,
                height: 241,
                alt: "Riding a new Ford Mustang on The Magic Skyway",
              },
              title: "Riding a new Ford Mustang on The Magic Skyway",
              source: "SOURCE: \u00a9 Copyright Vesnat Guilllaume Collection",
            },
            {
              image: {
                src: "/images/ford05/ford62.jpg",
                width: 360,
                height: 245,
                alt: "Riding a new Ford Mustang on The Magic Skyway",
              },
              title: "Riding a new Ford Mustang on The Magic Skyway",
              source: "SOURCE: \u00a9 Copyright Vesnat Guillaume Collection",
            },
            {
              image: {
                src: "/images/ford05/ford136.jpg",
                width: 267,
                height: 400,
                alt: "Close-up of the Skyway Tube to the Ford Pavilion",
              },
              title: "Close-up of the Skyway Tube to the Ford Pavilion",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/ford05/ford50.jpg",
                width: 300,
                height: 296,
                alt: "Ford Pavilion",
              },
              source: "SOURCE:",
            },
            {
              image: {
                src: "/images/ford05/ford51.jpg",
                width: 300,
                height: 239,
                alt: "Ford Pavilion",
              },
              source: "SOURCE:",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/ford05/ford47.jpg",
                width: 360,
                height: 236,
                alt: "Ford Pavilion",
              },
              source: "SOURCE:",
            },
            {
              image: {
                src: "/images/ford05/ford43.jpg",
                width: 360,
                height: 225,
                alt: "Ford Pavilion",
              },
              source: "SOURCE:",
            },
            {
              image: {
                src: "/images/ford05/ford48.jpg",
                width: 360,
                height: 511,
                alt: "Fairgoers ride past dinosaurs in their Ford Convertible Cars on the Magic Skyway",
              },
              title: "Fairgoers ride past dinosaurs in their Ford Convertible Cars on the Magic Skyway",
              source: "&COP National Geographic, Vol. 12 No. 4, April 1965",
            },
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { GeneleNavChrome } from "@/components/GeneleNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album \u2014 General Electric \u2014 nywf64.com",
  description:
    "General Electric Progressland photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * General Electric Photograph Album — photographs standard.
 * Body from legacy genele05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Genele05Page() {
  return (
    <PhotographsPage
      heroLabel="General Electric Pavilion"
      titleId="genele05-title"
      hero={{
        src: "/images/geneleoverview/hero-banner.jpg",
        alt: "General Electric Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GeneleNavChrome />}
      previousHref="/genele04"
      overviewHref="/geneleoverview"
      nextHref="/genele06"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/genele05/ge36.jpg",
                width: 400,
                height: 271,
                alt: "Conceptual artwork depicts General Eelectric Pavilion",
              },
              title: "Conceptual artwork depicts General Eelectric Pavilion",
              source: "SOURCE: \u00a9 Copyright The Walt Disney Company presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/genele05/ge39.jpg",
                width: 300,
                height: 203,
                alt: "Conceptual artwork showing details of entry ramps to the Carousel of Progress level",
              },
              title: "Conceptual artwork showing details of entry ramps to the Carousel of Progress level",
              source: "SOURCE: \u00a9 Copyright The Walt Disney Company presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/genele05/ge38.jpg",
                width: 300,
                height: 203,
                alt: "Conceptual artwork showing details of pavilion exit",
              },
              title: "Conceptual artwork showing details of pavilion exit",
              source: "SOURCE: \u00a9 Copyright The Walt Disney Company presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/genele05/ge37.jpg",
                width: 300,
                height: 203,
                alt: "Conceptual artwork showing details of \"The Gateway to Future Progress\"",
              },
              title: (<>
                Conceptual artwork showing details of &quot;The Gateway to Future Progress&quot;
              </>),
              source: "SOURCE: \u00a9 Copyright The Walt Disney Company presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/genele05/5458Large.jpg",
                width: 400,
                height: 280,
                alt: "Architectural model of the General Electric Pavilion",
              },
              title: "Architectural model of the General Electric Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/genele05/S302D.jpg",
                width: 400,
                height: 400,
                alt: "General Electric Pavilion",
              },
              title: "General Electric Pavilion",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/genele05/555-26.jpg",
                width: 400,
                height: 272,
                alt: "General Electric's gleaming dome",
              },
              title: (<>
                General Electric&apos;s gleaming dome
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/genele05/633-79.jpg",
                width: 400,
                height: 267,
                alt: "General Electric's \"Progressland\"",
              },
              title: (<>
                General Electric&apos;s &quot;Progressland&quot;
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/genele05/79130Large.jpg",
                width: 400,
                height: 261,
                alt: "General Electric's Pavilion",
              },
              title: (<>
                General Electric&apos;s Pavilion
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/genele05/555-27.jpg",
                width: 272,
                height: 400,
                alt: "General Electric at night",
              },
              title: "General Electric at night",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/genele05/5613.jpg",
                width: 400,
                height: 267,
                alt: "G.E., Tower of Light and Johnson's Wax reflections",
              },
              title: (<>
                G.E., Tower of Light and Johnson&apos;s Wax reflections
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/genele05/5473.jpg",
                width: 400,
                height: 267,
                alt: "General Electric - Night",
              },
              title: "General Electric - Night",
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/genele05/633-80.jpg",
                width: 400,
                height: 267,
                alt: "General Electric's Pavilion at night",
              },
              title: (<>
                General Electric&apos;s Pavilion at night
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/genele05/ge144.jpg",
                width: 400,
                height: 274,
                alt: "General Electric - Night",
              },
              title: "General Electric - Night",
              source: "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/genele05/79132Large.jpg",
                width: 400,
                height: 263,
                alt: "G.E.'s Carousel of Progress - Late 19th Century Kitchen",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - Late 19th Century Kitchen
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/genele05/ge163.jpg",
                width: 400,
                height: 224,
                alt: "G.E.'s Carousel of Progress - 1920's Scene",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1920&apos;s Scene
              </>),
              source: "SOURCE: Screen Shot - Film Unknown",
            },
            {
              image: {
                src: "/images/genele05/ge162.jpg",
                width: 400,
                height: 221,
                alt: "G.E.'s Carousel of Progress - 1920's Scene",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1920&apos;s Scene
              </>),
              source: "SOURCE: Screen Shot - Film Unknown",
            },
            {
              image: {
                src: "/images/genele05/ge164.jpg",
                width: 400,
                height: 219,
                alt: "G.E.'s Carousel of Progress - 1920's Father",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1920&apos;s Father
              </>),
              source: "SOURCE: Screen Shot - Film Unknown",
            },
            {
              image: {
                src: "/images/genele05/ge161.jpg",
                width: 400,
                height: 221,
                alt: "G.E.'s Carousel of Progress - 1920's Dog",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1920&apos;s Dog
              </>),
              source: "SOURCE: Screen Shot - Film Unknown",
            },
            {
              image: {
                src: "/images/genele05/79133Large.jpg",
                width: 400,
                height: 262,
                alt: "G.E.'s Carousel of Progress - 1920's Kitchen",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1920&apos;s Kitchen
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/genele05/79134Large.jpg",
                width: 400,
                height: 262,
                alt: "G.E.'s Carousel of Progress - 1940's Kitchen",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1940&apos;s Kitchen
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/genele05/79135Large.jpg",
                width: 400,
                height: 263,
                alt: "G.E.'s Carousel of Progress - 1960's Living Room",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress - 1960&apos;s Living Room
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/genele05/79137Large.jpg",
                width: 400,
                height: 263,
                alt: "G.E.'s Carousel of Progress Exit Ramp",
              },
              title: (<>
                G.E.&apos;s Carousel of Progress Exit Ramp
              </>),
              source: "SOURCE: Commercial Transparency by \u00a9 Copyright Wolfe Worldwide Films",
            },
          ],
        },
      ]}
    />
  );
}

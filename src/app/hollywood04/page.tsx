import type { Metadata } from "next";
import { HollywoodNavChrome } from "@/components/HollywoodNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";
import { HOLLYWOOD_HERO } from "@/components/HollywoodLegacyTopicPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs I — Hollywood — nywf64.com",
  description:
    "Hollywood U.S.A. pavilion photographs — Gallery of Photographs I — 1964/1965 New York World’s Fair on nywf64.com.",
};

export default function Hollywood04Page() {
  return (
    <PhotographsPage
      heroLabel="Hollywood"
      titleId="hollywood04-title"
      title="Gallery of Photographs I"
      hero={HOLLYWOOD_HERO}
      nav={<HollywoodNavChrome />}
      previousHref="/hollywood03"
      overviewHref="/hollywoodoverview"
      nextHref="/hollywood05"
      sections={[
        {
          heading: "Photographs",
          photos: [
            {
              image: {
                src: "/images/hollywood04/5502.jpg",
                width: 263,
                height: 400,
                alt: "Hollywood - Night",
              },
              title: "Hollywood - Night",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/hollywood04/555-37.jpg",
                width: 267,
                height: 400,
                alt: "Hollywood Pavilion facade",
              },
              title: "Hollywood Pavilion facade",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/hollywood04/633-24.jpg",
                width: 267,
                height: 400,
                alt: "Hollywood Pavilion facade",
              },
              title: "Hollywood Pavilion facade",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/hollywood04/79085Large.jpg",
                width: 400,
                height: 262,
                alt: "Hollywood U.S.A. Pavilion",
              },
              title: "Hollywood U.S.A. Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/hollywood04/79088Large.jpg",
                width: 400,
                height: 264,
                alt: "Inside the Hollywood U.S.A. Pavilion",
              },
              title: "Inside the Hollywood U.S.A. Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/hollywood04/holwod43.jpg",
                width: 464,
                height: 464,
                alt: "Inside the Hollywood U.S.A. Pavilion",
              },
              title: "Inside the Hollywood U.S.A. Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Pana-Vue Inc. presented courtesy Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/hollywood04/holwod01.jpg",
                width: 464,
                height: 350,
                alt: "Hollywood U.S.A. Pavilion",
              },
              title: "Hollywood U.S.A. Pavilion",
              source:
                "SOURCE: NY World's Fair Publicity Photograph presented courtesy Gary Holmes Collection",
            },
          ],
        },
      ]}
    />
  );
}

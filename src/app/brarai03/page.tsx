import type { Metadata } from "next";
import { BraraiNavChrome } from "@/components/BraraiNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Brass Rail — nywf64.com",
  description:
    "Brass Rail photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Brass Rail photograph album — “photographs” standard.
 * Body from legacy brarai03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Brarai03Page() {
  return (
    <PhotographsPage
      heroLabel="Brass Rail"
      titleId="brarai03-title"
      hero={{
        src: "/images/braraioverview/hero-banner.jpg",
        alt: "Brass Rail at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 825,
      }}
      nav={<BraraiNavChrome />}
      previousHref="/brarai02"
      overviewHref="/braraioverview"
      nextHref="/braraioverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/brarai03/5410-large.jpg",
                width: 400,
                height: 276,
                alt: "Artis's rendering of a Brass Rail Refreshment Complex",
              },
              title: "Artis's rendering of a Brass Rail Refreshment Complex",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/brarai03/brassrail14.jpg",
                width: 400,
                height: 288,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: Screen Shot - British Pathe Films",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/brarai03/brassrail06.jpg",
                width: 400,
                height: 269,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail02.jpg",
                width: 266,
                height: 400,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail09.jpg",
                width: 253,
                height: 400,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail07.jpg",
                width: 400,
                height: 353,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail04.jpg",
                width: 400,
                height: 384,
                alt: "Brass Rail Refreshment Interior",
              },
              title: "Brass Rail Refreshment Interior",
              source: "SOURCE: \u00a9 Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail01.jpg",
                width: 400,
                height: 267,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail15.jpg",
                width: 400,
                height: 266,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/brarai03/brassrail05.jpg",
                width: 400,
                height: 269,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail08.jpg",
                width: 400,
                height: 276,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail10.jpg",
                width: 400,
                height: 321,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
            {
              image: {
                src: "/images/brarai03/brassrail13.jpg",
                width: 400,
                height: 281,
                alt: "Brass Rail Refreshment Complex",
              },
              title: "Brass Rail Refreshment Complex",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/brarai03/brassrail03.jpg",
                width: 400,
                height: 271,
                alt: "Brass Rail Refreshment Complex - Night",
              },
              title: "Brass Rail Refreshment Complex - Night",
              source: "SOURCE: \u00a9 nywf64.com Collection",
            },
          ],
        },
      ]}
    />
  );
}

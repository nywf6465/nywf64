import type { Metadata } from "next";
import { GreeceNavChrome } from "@/components/GreeceNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Greece — nywf64.com",
  description:
    "Greece pavilion photograph album — 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Greece photograph album — “photographs” standard.
 * Body from legacy greece03.html. Layout: PhotographsPage (/aertow03).
 * Legacy Photograph Scrap Book banner omitted.
 * Last Greece topic — NEXT returns to overview.
 */
export default function Greece03Page() {
  return (
    <PhotographsPage
      heroLabel="Greece"
      titleId="greece03-title"
      hero={{
        src: "/images/greeceoverview/hero-banner.jpg",
        alt: "Greece at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<GreeceNavChrome />}
      previousHref="/greece02"
      overviewHref="/greeceoverview"
      nextHref="/greeceoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/greece03/5446Large.jpg",
                width: 400,
                height: 279,
                alt: "An early Artist's rendering of the Pavilion of Greece",
              },
              title: "An early Artist's rendering of the Pavilion of Greece",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/greece03/5499.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Greece",
              },
              title: "Pavilion of Greece",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/greece03/greece02.jpg",
                width: 400,
                height: 274,
                alt: "Pavilion of Greece",
              },
              title: "Pavilion of Greece",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright ROLOC Color
                  Films presented courtesy Bradd Schiffman Collection
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

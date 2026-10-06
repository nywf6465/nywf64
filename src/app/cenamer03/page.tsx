import type { Metadata } from "next";
import { CenamerNavChrome } from "@/components/CenamerNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Central America — nywf64.com",
  description:
    "Central America photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Central America photograph album — “photographs” standard.
 * Body from legacy cenamer03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Cenamer03Page() {
  return (
    <PhotographsPage
      heroLabel="Central America"
      titleId="cenamer03-title"
      hero={{
        src: "/images/cenameriverview/hero-banner.jpg",
        alt: "Central America at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<CenamerNavChrome />}
      previousHref="/cenamer02"
      overviewHref="/cenameriverview"
      nextHref="/cenamer04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/cenamer03/artists-conception.jpg",
                width: 400,
                height: 280,
                alt: "Early artist's conception of the Central America Pavilion",
              },
              title: "Early Artist's Conception of the Central America Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/cenamer03/pavilion-photolab.jpg",
                width: 400,
                height: 267,
                alt: "Central America - Panama Pavilion",
              },
              title: "Central America - Panama Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.
                </>
              ),
            },
            {
              image: {
                src: "/images/cenamer03/attractive-building.jpg",
                width: 400,
                height: 267,
                alt: "Attractive building of Central America - Panama",
              },
              title: "Attractive building of Central America - Panama",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
            {
              image: {
                src: "/images/cenamer03/pavilion-mainliner.jpg",
                width: 400,
                height: 267,
                alt: "Central America - Panama Pavilion",
              },
              title: "Central America - Panama Pavilion",
              source: (
                <>
                  SOURCE: Commercial Transparency by © Copyright Blackhawk
                  Films/United Air Lines
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

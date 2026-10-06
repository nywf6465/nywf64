import type { Metadata } from "next";
import { DynmatNavChrome } from "@/components/DynmatNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Dynamic Maturity — nywf64.com",
  description:
    "Dynamic Maturity pavilion photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dynamic Maturity photograph album — “photographs” standard.
 * Body from legacy dynmat04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Dynmat04Page() {
  return (
    <PhotographsPage
      heroLabel="Dynamic Maturity"
      titleId="dynmat04-title"
      hero={{
        src: "/images/dynmatoverview/hero-banner.jpg",
        alt: "Dynamic Maturity at the 1964/1965 New York World’s Fair",
        width: 1906,
        height: 825,
      }}
      nav={<DynmatNavChrome />}
      previousHref="/dynmat03"
      overviewHref="/dynmatoverview"
      nextHref="/dynmat05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/dynmat04/S309B.jpg",
                width: 400,
                height: 400,
                alt: "The Dynamic Maturity Pavilion",
              },
              title: "The Dynamic Maturity Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/dynmat04/555-44.jpg",
                width: 400,
                height: 265,
                alt: "View of exterior Sculpture on the Dynamic Maturity Pavilion",
              },
              title:
                "View of exterior Sculpture on the Dynamic Maturity Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
      ]}
    />
  );
}

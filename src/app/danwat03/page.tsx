import type { Metadata } from "next";
import { DanwatNavChrome } from "@/components/DanwatNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Dancing Waters — nywf64.com",
  description:
    "Dancing Waters photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Dancing Waters photograph album — “photographs” standard.
 * Body from legacy danwat03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Danwat03Page() {
  return (
    <PhotographsPage
      heroLabel="Dancing Waters"
      titleId="danwat03-title"
      hero={{
        src: "/images/danwatoverview/hero-banner.jpg",
        alt: "Dancing Waters at the 1964/1965 New York World’s Fair",
        width: 1909,
        height: 824,
      }}
      nav={<DanwatNavChrome />}
      previousHref="/danwat02"
      overviewHref="/danwatoverview"
      nextHref="/danwat04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/arch/5425Large.jpg",
                width: 400,
                height: 280,
                alt: "Artist's rendering of Dancing Waters",
              },
              title: "Artist's rendering of Dancing Waters",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
          ],
        },
      ]}
    />
  );
}

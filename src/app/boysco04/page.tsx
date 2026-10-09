import type { Metadata } from "next";
import { BoyscoNavChrome } from "@/components/BoyscoNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Boy Scouts of America — nywf64.com",
  description:
    "Boy Scouts of America photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Boy Scouts of America photograph album — “photographs” standard.
 * Body from legacy boysco04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Boysco04Page() {
  return (
    <PhotographsPage
      heroLabel="Boy Scouts of America"
      titleId="boysco04-title"
      hero={{
        src: "/images/boyscooverview/hero-banner.jpg",
        alt: "Boy Scouts of America at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BoyscoNavChrome />}
      previousHref="/boysco03"
      overviewHref="/boyscooverview"
      nextHref="/boysco05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/boysco04/mainliner-633-88.jpg",
                width: 400,
                height: 267,
                alt: "Boy Scouts of America",
              },
              title: "Boy Scouts of America",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
      ]}
    />
  );
}

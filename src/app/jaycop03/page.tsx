import type { Metadata } from "next";
import { JaycopNavChrome } from "@/components/JaycopNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Jaycopter Ride — nywf64.com",
  description:
    "Jaycopter Ride photograph gallery from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Jaycopter Ride gallery — “photographs” standard.
 * Body from legacy jaycop03.html (Adobe chrome omitted).
 * Layout: PhotographsPage.
 */
export default function Jaycop03Page() {
  return (
    <PhotographsPage
      heroLabel="Jaycopter Ride"
      titleId="jaycop03-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/jaycopoverview/hero-banner.jpg",
        alt: "Jaycopter Ride at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<JaycopNavChrome />}
      previousHref="/jaycop02"
      overviewHref="/jaycopoverview"
      nextHref="/jaycop04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/jaycop03/633-93.jpg",
                width: 268,
                height: 400,
                alt: "Jaycopter Ride",
              },
              title: "Jaycopter Ride",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/jaycop03/jaycop09.jpg",
                width: 400,
                height: 267,
                alt: "Jaycopter Ride",
              },
              title: "Jaycopter Ride",
              source: "SOURCE: \u00a9 Copyright nywf64.com Collection",
            },
            {
              image: {
                src: "/images/jaycop03/jaycop10.jpg",
                width: 400,
                height: 227,
                alt: "Jaycopter Ride",
              },
              title: "Jaycopter Ride",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}

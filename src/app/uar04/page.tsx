import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { UarNavChrome } from "@/components/UarNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — United Arab Republic — nywf64.com",
  description:
    "United Arab Republic pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * United Arab Republic photograph album — “photographs” standard.
 * Body from legacy uar04.html (no Scrap Book banner). Layout: PhotographsPage.
 */
export default function Uar04Page() {
  return (
    <PhotographsPage
      heroLabel="United Arab Republic"
      titleId="uar04-title"
      hero={{
        src: "/images/uaroverview/hero-banner.jpg",
        alt: "United Arab Republic pavilion at the 1964/1965 New York World’s Fair",
        width: 1902,
        height: 827,
      }}
      nav={<UarNavChrome />}
      previousHref="/uar03"
      overviewHref="/uaroverview"
      nextHref="/unoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/uar04/mainliner-555-64.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of the United Arab Republic",
              },
              title: "Pavilion of the United Arab Republic",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/uar04/mainliner-633-43.jpg",
                width: 400,
                height: 267,
                alt: "United Arab Republic Pavilion",
              },
              title: "United Arab Republic Pavilion",
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
                src: "/images/uar04/uar03.jpg",
                width: 400,
                height: 246,
                alt: "UAR Pavilion",
              },
              title: "UAR Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/uar04/uar04.jpg",
                width: 400,
                height: 270,
                alt: "Behind the UAR Pavilion",
              },
              title: "Behind the UAR Pavilion",
              source: "SOURCE: \u00a9 Copyright Mike Kraus Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/uar04/uar05.jpg",
                width: 460,
                height: 331,
                alt: "UAR's arched gateway",
              },
              title: (
                <>
                  UAR&apos;s arched gateway invites one to see what Egypt&apos;s
                  doing today as well as to view its ancient glories. A tourist
                  area and patio restaurant are new this year.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, May 16, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

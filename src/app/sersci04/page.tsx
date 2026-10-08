import type { Metadata } from "next";
import { SersciNavChrome } from "@/components/SersciNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Gallery of Photographs — Sermons from Science — nywf64.com",
  description:
    "Sermons from Science pavilion photograph gallery — commercial transparencies from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Sermons from Science photograph gallery — “photographs” standard.
 * Body from legacy sersci04.html. Layout: PhotographsPage (/aertow03 standard).
 */
export default function Sersci04Page() {
  return (
    <PhotographsPage
      heroLabel="Sermons from Science"
      titleId="sersci04-title"
      title="Gallery of Photographs"
      hero={{
        src: "/images/serscioverview/hero-banner.jpg",
        alt: "Sermons from Science at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<SersciNavChrome />}
      previousHref="/sersci03"
      overviewHref="/serscioverview"
      nextHref="/sersci05"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/sersci04/S-186CLarge.jpg",
                width: 400,
                height: 360,
                alt: "Artist's rendering of the Sermons From Science Pavilion",
              },
              title: "Artist's rendering of the Sermons From Science Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sersci04/5519.jpg",
                width: 400,
                height: 267,
                alt: "Sermons From Science Pavilion",
              },
              title: "Sermons From Science Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/sersci04/555-48.jpg",
                width: 400,
                height: 267,
                alt: "Sermons from Science Pavilion",
              },
              title: "Sermons from Science Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/sersci04/633-59.jpg",
                width: 400,
                height: 267,
                alt: "Sermons from Science Pavilion",
              },
              title: "Sermons from Science Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
          ],
        },
      ]}
    />
  );
}

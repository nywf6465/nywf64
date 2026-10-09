import type { Metadata } from "next";
import { AustriaNavChrome } from "@/components/AustriaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Austria — nywf64.com",
  description:
    "Austria pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Austria photograph album — “photographs” standard.
 * Body from legacy austria03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 */
export default function Austria03Page() {
  return (
    <PhotographsPage
      heroLabel="Austria"
      titleId="austria03-title"
      hero={{
        src: "/images/austriaoverview/hero-banner.jpg",
        alt: "Austria at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<AustriaNavChrome />}
      previousHref="/austria02"
      overviewHref="/austriaoverview"
      nextHref="/austria04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/austria03/artist-rendering.jpg",
                width: 400,
                height: 274,
                alt: "Architectural model of the Austria Pavilion",
              },
              title: "Architectural model of the Austria Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/austria03/pavilion-day.jpg",
                width: 400,
                height: 267,
                alt: "Austria's Pavilion of laminated Alpine spruce",
              },
              title: "Austria's Pavilion of laminated Alpine spruce",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/austria03/pavilion-color.jpg",
                width: 400,
                height: 274,
                alt: "Austria's Pavilion",
              },
              title: "Austria's Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/austria03/fairgoer-exterior.jpg",
                width: 400,
                height: 267,
                alt: "Austria Pavilion",
              },
              title: "Austria Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/austria03/fairgoer-entrance.jpg",
                width: 400,
                height: 269,
                alt: "Austria Pavilion",
              },
              title: "Austria Pavilion",
              source: "SOURCE: Online auction",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/austria03/publication-photo.jpg",
                width: 360,
                height: 264,
                alt: "Austria's modernistic mountain lodge pavilion",
              },
              title:
                "AUSTRIA'S MODERNISTIC mountain lodge suspended above ground from three A-Shaped supports, is complemented by a lofty abstract sculpture made of stainless steel. In foreground is a light pole.",
              source: (
                <>
                  SOURCE: News Colorfoto by Daniel Jacino,{" "}
                  <em>New York Sunday News</em>, Date unknown
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

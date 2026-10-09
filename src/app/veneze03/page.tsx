import type { Metadata } from "next";
import { PhotographsPage } from "@/components/PhotographsPage";
import { VenezeNavChrome } from "@/components/VenezeNavChrome";

export const metadata: Metadata = {
  title: "Photograph Album — Venezuela — nywf64.com",
  description:
    "Venezuela pavilion photograph album — commercial, fairgoer, and publication photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Venezuela photograph album — “photographs” standard.
 * Body from legacy veneze03.html (Gallery of Photographs → Photograph Album).
 */
export default function Veneze03Page() {
  return (
    <PhotographsPage
      heroLabel="Venezuela"
      titleId="veneze03-title"
      hero={{
        src: "/images/veneerview/hero-banner.jpg",
        alt: "Venezuela pavilion at the 1964/1965 New York World’s Fair",
        width: 1903,
        height: 826,
      }}
      nav={<VenezeNavChrome />}
      previousHref="/veneze02"
      overviewHref="/veneerview"
      nextHref="/veneze04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/veneze03/555-54.jpg",
                width: 400,
                height: 267,
                alt: "Venezuela Pavilion",
              },
              title: "Venezuela Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/veneze03/633-48.jpg",
                width: 400,
                height: 267,
                alt: "Venezuela Pavilion",
              },
              title: "Venezuela Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/veneze03/veneze14.jpg",
                width: 400,
                height: 272,
                alt: "Venezuela Pavilion",
              },
              title: "Venezuela Pavilion",
              source:
                "SOURCE: Commercial Transparency by \u00a9 ROLOC Color Films presented courtesy Bradd Schiffman Collection",
            },
            {
              image: {
                src: "/images/veneze03/veneze11.jpg",
                width: 450,
                height: 309,
                alt: "Tower of Light",
              },
              title: "Tower of Light",
              source:
                "SOURCE: Commercial Transparency by \u00a9 Pana-Vue presented courtesy Bill Cotter Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/veneze03/veneze10.jpg",
                width: 400,
                height: 268,
                alt: "Entrance to the Venezuela Pavilion",
              },
              title: "Entrance to the Venezuela Pavilion",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
            {
              image: {
                src: "/images/veneze03/veneze09.jpg",
                width: 269,
                height: 400,
                alt: "View of the Venezuela Pavilion from the Swiss Sky Ride",
              },
              title:
                "View of the Venezuela Pavilion from the Swiss Sky Ride shows the inverted parasol roof structure of the pavilion",
              source: "SOURCE: \u00a9 Copyright Bill Cotter Collection",
            },
          ],
        },
        {
          heading: "Publication Photographs",
          photos: [
            {
              image: {
                src: "/images/veneze03/veneze01.jpg",
                width: 400,
                height: 381,
                alt: "Venezuelan pavilion of redwood",
              },
              title: (
                <>
                  Designed by two prize-winning native architects, the Venezuelan
                  pavilion is built of redwood. In front, giant bust of Simon
                  Bolivar; inside, a 21-ft. working model of Angel Falls,
                  world&apos;s highest.
                </>
              ),
              source: (
                <>
                  SOURCE: News Colorfoto by Edmund Peters,{" "}
                  <em>New York Sunday News</em>, August 15, 1965
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}

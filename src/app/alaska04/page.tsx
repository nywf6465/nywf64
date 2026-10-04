import type { Metadata } from "next";
import { AlaskaNavChrome } from "@/components/AlaskaNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Alaska — nywf64.com",
  description:
    "Alaska pavilion photograph album — commercial and fairgoer photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

/**
 * Alaska photograph album — “photographs” standard.
 * Body from legacy alaska04.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 *
 * Note: legacy alaska04 is a Photograph Album (not postcards); photographs
 * standards match the source page and Alaska menu label.
 */
export default function Alaska04Page() {
  return (
    <PhotographsPage
      heroLabel="Alaska"
      titleId="alaska04-title"
      hero={{
        src: "/images/alaskaoverview/hero-banner.jpg",
        alt: "Alaska at the 1964/1965 New York World’s Fair",
        width: 1910,
        height: 823,
      }}
      nav={<AlaskaNavChrome />}
      previousHref="/alaska03"
      overviewHref="/alaskaoverview"
      nextHref="/alaskaoverview"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/alaska04/5431Large.jpg",
                width: 400,
                height: 277,
                alt: "Artist's rendering of Alaska Pavilion",
              },
              title: "Artist's rendering of Alaska Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/alaska04/5646.jpg",
                width: 400,
                height: 267,
                alt: "Pavilion of Alaska",
              },
              title: "Pavilion of Alaska",
              source:
                "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.",
            },
            {
              image: {
                src: "/images/alaska04/555-80.jpg",
                width: 400,
                height: 267,
                alt: "White, igloo-shaped pavilion of Alaska",
              },
              title: "White, igloo-shaped pavilion of Alaska",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/alaska04/633-31.jpg",
                width: 400,
                height: 267,
                alt: "Alaska Pavilion Totem Poles",
              },
              title: "Alaska Pavilion Totem Poles",
              source:
                "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines",
            },
            {
              image: {
                src: "/images/alaska04/79095Large.jpg",
                width: 260,
                height: 400,
                alt: "Kodiak Bear - Alaska Pavilion",
              },
              title: "Kodiak Bear - Alaska Pavilion",
              source:
                "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films",
            },
            {
              image: {
                src: "/images/alaska04/ala01.jpg",
                width: 473,
                height: 302,
                alt: "Artist's rendering of Alaska Pavilion",
              },
              title: "Artist's rendering of Alaska Pavilion",
              source:
                "SOURCE: NY World's Fair Corporation arttwork presented courtesy Gary Holmes Collection",
            },
          ],
        },
        {
          heading: "Fairgoer Photographs",
          photos: [
            {
              image: {
                src: "/images/alaska04/ala02.jpg",
                width: 400,
                height: 271,
                alt: "Alaska as viewed from the New York State Pavilion observation towers",
              },
              title:
                "Alaska as viewed from the New York State Pavilion observation towers",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/alaska04/ala08.jpg",
                width: 400,
                height: 302,
                alt: "Entrance to the Alaskan Village",
              },
              title: "Entrance to the Alaskan Village",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/alaska04/ala05.jpg",
                width: 400,
                height: 270,
                alt: "Carving a totem pole at the Alaska Pavilion",
              },
              title: "Carving a totem pole at the Alaska Pavilion",
              source: "SOURCE: Online auction",
            },
            {
              image: {
                src: "/images/alaska04/ala06.jpg",
                width: 400,
                height: 382,
                alt: "Have your picture taken in a giant Eskimo Pie",
              },
              title: "Have your picture taken in a giant Eskimo Pie",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
            {
              image: {
                src: "/images/alaska04/ala07.jpg",
                width: 258,
                height: 400,
                alt: "Kodiak Bear - Alaska Pavilion",
              },
              title: "Kodiak Bear - Alaska Pavilion",
              source: "SOURCE: © Copyright Mike Kraus Collection",
            },
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { BerlinNavChrome } from "@/components/BerlinNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Gallery — Berlin — nywf64.com",
  description:
    "Berlin pavilion photograph gallery — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab =
  "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.";
const blackhawk =
  "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines";

/**
 * Berlin photograph gallery — “photographs” standard.
 * Body from legacy berlin03.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage. Navy title matches the Berlin menu: Photograph Gallery.
 */
export default function Berlin03Page() {
  return (
    <PhotographsPage
      heroLabel="Berlin"
      titleId="berlin03-title"
      title="Photograph Gallery"
      hero={{
        src: "/images/berlinoverview/hero-banner.jpg",
        alt: "Berlin at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BerlinNavChrome />}
      previousHref="/berlin02"
      overviewHref="/berlinoverview"
      nextHref="/berlin04"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/berlin03/photolab-5513.jpg",
                width: 400,
                height: 267,
                alt: "Berlin Pavilion",
              },
              title: "Berlin Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/berlin03/mainliner-555-41.jpg",
                width: 400,
                height: 267,
                alt: "Berlin Pavilion",
              },
              title: "Berlin Pavilion",
              source: blackhawk,
            },
            {
              image: {
                src: "/images/berlin03/mainliner-633-42.jpg",
                width: 400,
                height: 267,
                alt: "Berlin Pavilion",
              },
              title: "Berlin Pavilion",
              source: blackhawk,
            },
          ],
        },
      ]}
    />
  );
}

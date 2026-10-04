import type { Metadata } from "next";
import { BellNavChrome } from "@/components/BellNavChrome";
import { PhotographsPage } from "@/components/PhotographsPage";

export const metadata: Metadata = {
  title: "Photograph Album — Bell System — nywf64.com",
  description:
    "Bell System Pavilion photograph album — commercial photographs from the 1964/1965 New York World’s Fair on nywf64.com.",
};

const photoLab =
  "SOURCE: Commercial Transparency by © Copyright Photo Lab, Inc.";
const youtube = "SOURCE: YouTube Video Screen Shot";
const blackhawk =
  "SOURCE: Commercial Transparency by © Copyright Blackhawk Films/United Air Lines";
const wolfe =
  "SOURCE: Commercial Transparency by © Copyright Wolfe Worldwide Films";
const ualPresents = (
  <>
    SOURCE: Commercial Transparency from{" "}
    <em>United Air Lines Presents</em> Promotional Slide Show presented
    courtesy Bradd Schiffman Collection
  </>
);
const att = "SOURCE: © Copyright AT&T Photo Archives";

/**
 * Bell System photograph album I — “photographs” standard.
 * Body from legacy bell05.html (Photograph Scrap Book banner omitted).
 * Layout: PhotographsPage (/aertow03 standard).
 * Legacy wording (lnstalling, expolode) is preserved.
 */
export default function Bell05Page() {
  return (
    <PhotographsPage
      heroLabel="Bell System Pavilion"
      titleId="bell05-title"
      title="Photograph Album"
      hero={{
        src: "/images/belloverview/hero-banner.jpg",
        alt: "Bell System Pavilion at the 1964/1965 New York World’s Fair",
        width: 1905,
        height: 826,
      }}
      nav={<BellNavChrome />}
      previousHref="/bell04"
      overviewHref="/belloverview"
      nextHref="/bellphotographalbumii"
      sections={[
        {
          heading: "Commercial Photographs",
          photos: [
            {
              image: {
                src: "/images/bell05/5411Large.jpg",
                width: 400,
                height: 277,
                alt: "Architectural Model of the Bell System Exhibit",
              },
              title: "Architectural Model of the Bell System Exhibit",
              source: photoLab,
            },
            {
              image: {
                src: "/images/bell05/5412Large.jpg",
                width: 400,
                height: 285,
                alt: "Artist's rendering of serpentine-style telephone booths",
              },
              title:
                "Artist's rendering of the serpentine-style telephone booths sponsored by the Bell System at the Fair.",
              source: photoLab,
            },
            {
              image: {
                src: "/images/bell05/bell106.jpg",
                width: 400,
                height: 225,
                alt: "lnstalling Bell System Exhibits",
              },
              title: "lnstalling Bell System Exhibits",
              source: youtube,
            },
            {
              image: {
                src: "/images/bell05/bell107.jpg",
                width: 400,
                height: 224,
                alt: "lnstalling Bell System Exhibits",
              },
              title: "lnstalling Bell System Exhibits",
              source: youtube,
            },
            {
              image: {
                src: "/images/bell05/bell108.jpg",
                width: 400,
                height: 219,
                alt: "lnstalling Bell System Exhibits",
              },
              title: "lnstalling Bell System Exhibits",
              source: youtube,
            },
            {
              image: {
                src: "/images/bell05/5482.jpg",
                width: 400,
                height: 267,
                alt: "Bell System Pavilion",
              },
              title: "Bell System Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/bell05/5616.jpg",
                width: 400,
                height: 267,
                alt: "Bell System Pavilion",
              },
              title: "Bell System Pavilion",
              source: photoLab,
            },
            {
              image: {
                src: "/images/bell05/633-66.jpg",
                width: 400,
                height: 267,
                alt: '"Floating Wing" Pavilion of the Bell System',
              },
              title: '"Floating Wing" Pavilion of the Bell System',
              source: blackhawk,
            },
            {
              image: {
                src: "/images/bell05/79148Large.jpg",
                width: 400,
                height: 263,
                alt: "Fountains of the Planets and the Bell System Pavilion",
              },
              title: "Fountains of the Planets and the Bell System Pavilion",
              source: wolfe,
            },
            {
              image: {
                src: "/images/bell05/bell28.jpg",
                width: 400,
                height: 261,
                alt: "Night view of Travelers and Bell System Pavilions",
              },
              title:
                "Night view of Travelers and Bell System Pavilions across the Pool of Industry",
              source: ualPresents,
            },
            {
              image: {
                src: "/images/bell05/bell47.jpg",
                width: 400,
                height: 268,
                alt: "Fireworks over the Bell System Pavilion",
              },
              title:
                "Fireworks expolode in the night sky over the Bell System Pavilion",
              source: ualPresents,
            },
            {
              image: {
                src: "/images/bell05/bell19.jpg",
                width: 400,
                height: 313,
                alt: "The Bell System floating wing",
              },
              title:
                "The Bell System floating wing -- 400 feet long, 200 feet wide, 87 feet high -- is composed of two major elements; a chair ride and a series of live demonstrations, displays, and audience participation games. The ride tells the story of communications from bongo drums to satellites.",
              source: att,
            },
            {
              image: {
                src: "/images/bell05/bell20.jpg",
                width: 400,
                height: 318,
                alt: "Night View of the Bell System Pavilion",
              },
              title: "Night View of the Bell System Pavilion",
              source: att,
            },
            {
              image: {
                src: "/images/bell05/bell109.jpg",
                width: 295,
                height: 400,
                alt: "Bell's Microwave Relay Tower",
              },
              title: "Bell's Microwave Relay Tower",
              source: "SOURCE: NY World's Fair Publicity Photo",
            },
            {
              image: {
                src: "/images/bell05/bell104.jpg",
                width: 400,
                height: 302,
                alt: "Beneath the Bell System's Floating Wing",
              },
              title: "Beneath the Bell System's Floating Wing",
              source: "SOURCE: Getty Images",
            },
            {
              image: {
                src: "/images/bell05/bell110.jpg",
                width: 400,
                height: 223,
                alt: "Ride Train Loading Platform",
              },
              title: "Ride Train Loading Platform",
              source: "SOURCE: Screen Shot - Film: To the Fair",
            },
            {
              image: {
                src: "/images/bell05/bell105.jpg",
                width: 400,
                height: 282,
                alt: "Bell System Hostess Demonstrates the Picturephone",
              },
              title: "Bell System Hostess Demonstrates the Picturephone",
              source: (
                <>
                  SOURCE:{" "}
                  <a
                    href="https://rarehistoricalphotos.com/new-york-fair-1964-pictures/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.rarehistoricalphotos.com
                  </a>{" "}
                  website
                </>
              ),
            },
          ],
        },
      ]}
    />
  );
}
